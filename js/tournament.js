// ══════════════════════════════════════════════════════════
//  TOURNAMENT LOGIC — Groups + Knockout format (32 teams)
//  8 groups of 4 teams → Round of 16 → QF → SF → Final
// ══════════════════════════════════════════════════════════

// ─── Constants ────────────────────────────────────────────
export const GROUP_NAMES = ['A','B','C','D','E','F','G','H'];

export const PHASE_NAMES = {
  groups:   'Fase de Grupos',
  r16:      'Octavos de Final',
  qf:       'Cuartos de Final',
  sf:       'Semifinales',
  third:    'Tercer y Cuarto Puesto',
  final:    'Final',
};

// ─── Fisher-Yates Shuffle ─────────────────────────────────
export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

import { autoSelectStarters } from './formations.js';

// ─── Auto-pick 11 starters function ───
export function assignDefaultStarters(players) {
  const clone = JSON.parse(JSON.stringify(players));
  autoSelectStarters(clone, '4-3-3');
  return clone;
}

// ─── Create Full Tournament State ─────────────────────────
export function createTournamentState(countries, myTeamId) {
  // Select 32 teams: user's team + 31 random teams
  const myTeam = countries.find(c => c.id === myTeamId);
  const otherTeams = countries.filter(c => c.id !== myTeamId);
  const shuffledOthers = shuffle(otherTeams);
  const selectedTeams = [myTeam, ...shuffledOthers.slice(0, 31)];
  
  const shuffled = shuffle(selectedTeams);

  // Build team ratings map
  const teamRatings = {};
  shuffled.forEach(c => {
    teamRatings[c.id] = {
      ...c,
      rating:  1.0,
      players: assignDefaultStarters(c.players),
      stats: {
        wins: 0, draws: 0, losses: 0,
        goalsFor: 0, goalsAgainst: 0,
        points: 0, cleanSheets: 0,
        roundsPlayed: 0,
      },
      groupStats: {
        wins: 0, draws: 0, losses: 0,
        goalsFor: 0, goalsAgainst: 0,
        points: 0,
      }
    };
  });

  // Assign 8 groups of 4
  const groups = {};
  GROUP_NAMES.forEach((name, i) => {
    groups[name] = shuffled.slice(i * 4, i * 4 + 4).map(c => c.id);
  });

  // Generate group stage matches (6 per group, 48 total)
  const groupMatches = buildGroupMatches(groups);

  return {
    id: `tourn_${Date.now()}`,
    myTeamId,
    phase:       'groups',   // 'groups' | 'r16' | 'qf' | 'sf' | 'third' | 'final'
    groupMatchday: 1,        // 1, 2, 3
    status:      'active',   // 'active' | 'matchday_done' | 'phase_done' | 'completed'
    champion:    null,
    third:       null,
    teamRatings,
    groups,                  // { A: ['ESP','BRA',...], ... }
    groupMatches,            // { A: [match, match, ...], ... }
    knockoutRounds: {},      // { r16: [], qf: [], sf: [], final: [] }
    thirdPlaceMatch: null,
    eliminatedTeams: [],
    topScorers:  {},
    topAssists:  {},
    yellowCards: {},
    redCards:    {},
    saves:       {},
  };
}

// ─── Build Group Stage Matches ─────────────────────────────
// Each group plays a round-robin: 3 matchdays, 2 matches each
// Matchday 1: 0v1, 2v3  |  Matchday 2: 0v2, 1v3  |  Matchday 3: 0v3, 1v2
function buildGroupMatches(groups) {
  const result = {};
  const SCHEDULE = [
    [[0,1],[2,3]],
    [[0,2],[1,3]],
    [[0,3],[1,2]],
  ];

  GROUP_NAMES.forEach(g => {
    const teams = groups[g];
    result[g] = [[], [], []]; // 3 matchdays

    SCHEDULE.forEach(([pair1, pair2], dayIdx) => {
      [pair1, pair2].forEach(([a, b], mIdx) => {
        result[g][dayIdx].push({
          id:        `g${g}_d${dayIdx+1}_m${mIdx+1}`,
          phase:     'groups',
          group:     g,
          matchday:  dayIdx + 1,
          team1Id:   teams[a],
          team2Id:   teams[b],
          score1:    null,
          score2:    null,
          events:    [],
          penalties: null,
          simulated: false,
        });
      });
    });
  });

  return result;
}

// ─── Get Current Matchday Matches ─────────────────────────
export function getCurrentMatchdayMatches(state) {
  const day = state.groupMatchday;
  const matches = [];
  GROUP_NAMES.forEach(g => {
    if (state.groupMatches[g]?.[day - 1]) {
      matches.push(...state.groupMatches[g][day - 1]);
    }
  });
  return matches;
}

// ─── Get All Group Matches Flat ───────────────────────────
export function getAllGroupMatches(state) {
  const matches = [];
  GROUP_NAMES.forEach(g => {
    state.groupMatches[g]?.forEach(dayMatches => {
      matches.push(...dayMatches);
    });
  });
  return matches;
}

// ─── Compute Group Standings ──────────────────────────────
export function computeGroupStandings(state) {
  const standings = {};

  GROUP_NAMES.forEach(g => {
    const teamIds = state.groups[g];
    const table = teamIds.map(id => ({
      id,
      name:         state.teamRatings[id]?.name,
      flag:         state.teamRatings[id]?.flag,
      played: 0, wins: 0, draws: 0, losses: 0,
      goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0,
    }));

    const tableMap = {};
    table.forEach(t => { tableMap[t.id] = t; });

    // Process all played matches in this group
    state.groupMatches[g]?.forEach(dayMatches => {
      dayMatches.forEach(m => {
        if (!m.simulated) return;
        const t1 = tableMap[m.team1Id];
        const t2 = tableMap[m.team2Id];
        if (!t1 || !t2) return;

        t1.played++; t2.played++;
        t1.goalsFor     += m.score1; t1.goalsAgainst += m.score2;
        t2.goalsFor     += m.score2; t2.goalsAgainst += m.score1;

        if (m.score1 > m.score2) {
          t1.wins++;   t1.points += 3;
          t2.losses++;
        } else if (m.score2 > m.score1) {
          t2.wins++;   t2.points += 3;
          t1.losses++;
        } else {
          t1.draws++;  t1.points++;
          t2.draws++;  t2.points++;
        }
      });
    });

    table.forEach(t => { t.goalDiff = t.goalsFor - t.goalsAgainst; });

    // Sort: points → goal diff → goals for
    table.sort((a, b) =>
      b.points - a.points ||
      b.goalDiff - a.goalDiff ||
      b.goalsFor - a.goalsFor
    );

    standings[g] = table;
  });

  return standings;
}

// ─── Build Round of 16 ────────────────────────────────────
// Classic pairing: 1A vs 2B, 1C vs 2D, 1E vs 2F, 1G vs 2H
//                  1B vs 2A, 1D vs 2C, 1F vs 2E, 1H vs 2G
export function buildRound16(standings) {
  const pairings = [
    ['A','B'], ['C','D'], ['E','F'], ['G','H'],
    ['B','A'], ['D','C'], ['F','E'], ['H','G'],
  ];

  return pairings.map(([g1, g2], i) => ({
    id:        `r16_m${i+1}`,
    phase:     'r16',
    team1Id:   standings[g1][0].id,  // 1st of group g1
    team2Id:   standings[g2][1].id,  // 2nd of group g2
    score1:    null,
    score2:    null,
    winnerId:  null,
    loserId:   null,
    events:    [],
    penalties: null,
    simulated: false,
  }));
}

// ─── Build Knockout Round From Previous Winners ───────────
export function buildKnockoutRound(phase, prevMatches) {
  const winners = prevMatches.map(m => m.winnerId);
  const matches = [];

  for (let i = 0; i < winners.length; i += 2) {
    matches.push({
      id:        `${phase}_m${i/2 + 1}`,
      phase,
      team1Id:   winners[i],
      team2Id:   winners[i+1],
      score1:    null,
      score2:    null,
      winnerId:  null,
      loserId:   null,
      events:    [],
      penalties: null,
      simulated: false,
    });
  }
  return matches;
}

// ─── Build Third Place Match ──────────────────────────────
export function buildThirdPlaceMatch(sfMatches) {
  return {
    id:        'third_m1',
    phase:     'third',
    team1Id:   sfMatches[0].loserId,
    team2Id:   sfMatches[1].loserId,
    score1:    null,
    score2:    null,
    winnerId:  null,
    loserId:   null,
    events:    [],
    penalties: null,
    simulated: false,
  };
}

// ─── Get All Knockout Matches Flat ────────────────────────
export function getAllKnockoutMatches(state) {
  const matches = [];
  ['r16','qf','sf','final'].forEach(phase => {
    if (state.knockoutRounds[phase]) matches.push(...state.knockoutRounds[phase]);
  });
  if (state.thirdPlaceMatch) matches.push(state.thirdPlaceMatch);
  return matches;
}

// ─── Advance to Next Phase ────────────────────────────────
export function advancePhase(state) {
  const newState = JSON.parse(JSON.stringify(state));

  switch (newState.phase) {
    case 'groups': {
      // Group stage done → build R16
      const standings = computeGroupStandings(newState);
      const r16 = buildRound16(standings);
      newState.knockoutRounds.r16 = r16;
      newState.phase = 'r16';
      newState.status = 'active';
      break;
    }
    case 'r16': {
      const qf = buildKnockoutRound('qf', newState.knockoutRounds.r16);
      newState.knockoutRounds.qf = qf;
      newState.phase = 'qf';
      newState.status = 'active';
      // Eliminated = losers of R16
      newState.eliminatedTeams.push(
        ...newState.knockoutRounds.r16.map(m => m.loserId).filter(Boolean)
      );
      break;
    }
    case 'qf': {
      const sf = buildKnockoutRound('sf', newState.knockoutRounds.qf);
      newState.knockoutRounds.sf = sf;
      newState.phase = 'sf';
      newState.status = 'active';
      newState.eliminatedTeams.push(
        ...newState.knockoutRounds.qf.map(m => m.loserId).filter(Boolean)
      );
      break;
    }
    case 'sf': {
      const finalM = buildKnockoutRound('final', newState.knockoutRounds.sf);
      const thirdM = buildThirdPlaceMatch(newState.knockoutRounds.sf);
      newState.knockoutRounds.final = finalM;
      newState.thirdPlaceMatch = thirdM;
      newState.phase = 'final';
      newState.status = 'active';
      break;
    }
    case 'final': {
      // Final done → go to third place match
      newState.phase = 'third';
      newState.status = 'active';
      break;
    }
    case 'third': {
      // Tournament over
      const finalMatch = newState.knockoutRounds.final?.[0];
      const thirdMatch = newState.thirdPlaceMatch;
      newState.champion = finalMatch?.winnerId || null;
      newState.third    = thirdMatch?.winnerId || null;
      newState.status   = 'completed';
      if (finalMatch?.loserId) newState.eliminatedTeams.push(finalMatch.loserId);
      break;
    }
  }

  return newState;
}

// ─── Advance Tournament (Matchday or Phase) ───────────────
export function advanceTournament(state) {
  const newState = JSON.parse(JSON.stringify(state));
  
  if (newState.phase === 'groups') {
    if (newState.groupMatchday < 3) {
      newState.groupMatchday++;
      newState.status = 'active';
      return newState;
    } else {
      return advancePhase(newState);
    }
  } else {
    return advancePhase(newState);
  }
}

// ─── Check if Matchday is Done ────────────────────────────
export function isMatchdayDone(state) {
  const day = state.groupMatchday;
  return GROUP_NAMES.every(g =>
    state.groupMatches[g]?.[day - 1]?.every(m => m.simulated)
  );
}

// ─── Check if All Group Stage Done ────────────────────────
export function isGroupStageDone(state) {
  return state.groupMatchday > 3;
}

// ─── Check if Knockout Phase Done ─────────────────────────
export function isKnockoutPhaseDone(state) {
  const phase = state.phase;
  if (phase === 'groups') return false;

  if (phase === 'final') {
    const finalDone = state.knockoutRounds.final?.every(m => m.simulated);
    const thirdDone = state.thirdPlaceMatch?.simulated ?? true;
    return finalDone && thirdDone;
  }

  return state.knockoutRounds[phase]?.every(m => m.simulated) ?? false;
}

// ─── Is My Team Still In Tournament ──────────────────────
export function isMyTeamAlive(state) {
  return !state.eliminatedTeams.includes(state.myTeamId) &&
    state.status !== 'completed';
}

// ─── Get My Team's Next Match ─────────────────────────────
export function getMyNextMatch(state) {
  const id = state.myTeamId;

  if (state.phase === 'groups') {
    const day = state.groupMatchday;
    for (const g of GROUP_NAMES) {
      const m = state.groupMatches[g]?.[day - 1]?.find(
        m => !m.simulated && (m.team1Id === id || m.team2Id === id)
      );
      if (m) return m;
    }
  } else {
    const matches = getAllKnockoutMatches(state);
    return matches.find(
      m => !m.simulated && (m.team1Id === id || m.team2Id === id)
    ) || null;
  }
  return null;
}

// ─── Get My Team's Group ──────────────────────────────────
export function getMyGroup(state) {
  for (const g of GROUP_NAMES) {
    if (state.groups[g]?.includes(state.myTeamId)) return g;
  }
  return null;
}

// ─── Stats ────────────────────────────────────────────────
export function getTopScorers(state, topN = 10) {
  return Object.entries(state.topScorers)
    .map(([playerId, goals]) => ({ playerId, goals, countryId: playerId.split('_')[0] }))
    .sort((a, b) => b.goals - a.goals)
    .slice(0, topN);
}

export function getTopAssists(state, topN = 10) {
  return Object.entries(state.topAssists)
    .map(([playerId, assists]) => ({ playerId, assists, countryId: playerId.split('_')[0] }))
    .sort((a, b) => b.assists - a.assists)
    .slice(0, topN);
}

export function getMostCards(state, topN = 10) {
  const combined = {};
  Object.entries(state.yellowCards).forEach(([id, c]) => {
    combined[id] = combined[id] || { yellow: 0, red: 0 };
    combined[id].yellow = c;
  });
  Object.entries(state.redCards).forEach(([id, c]) => {
    combined[id] = combined[id] || { yellow: 0, red: 0 };
    combined[id].red = c;
  });
  return Object.entries(combined)
    .map(([playerId, cards]) => ({
      playerId, ...cards,
      total: cards.yellow + cards.red * 2,
      countryId: playerId.split('_')[0],
    }))
    .sort((a, b) => b.total - a.total)
    .slice(0, topN);
}

export function getTeamStandings(state) {
  return Object.values(state.teamRatings)
    .map(t => ({ id: t.id, name: t.name, flag: t.flag, rating: t.rating, ...t.stats }))
    .sort((a, b) => b.points - a.points || b.goalsFor - a.goalsFor);
}

// Keep backward compat alias
export const ROUND_NAMES = PHASE_NAMES;
