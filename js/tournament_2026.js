// ══════════════════════════════════════════════════════════
//  TOURNAMENT 2026 — 48 teams, 12 groups of 4
//  12 groups → R32 (best 3rds) → R16 → QF → SF → Final
// ══════════════════════════════════════════════════════════

import { shuffle, assignDefaultStarters, buildKnockoutRound, buildThirdPlaceMatch } from './tournament.js';

export const GROUP_NAMES_2026 = ['A','B','C','D','E','F','G','H','I','J','K','L'];

export const PHASE_NAMES_2026 = {
  groups:  'Fase de Grupos',
  r32:     'Dieciseisavos de Final',
  r16:     'Octavos de Final',
  qf:      'Cuartos de Final',
  sf:      'Semifinales',
  final:   'Final',
};

// ─── Create 2026 Tournament State ─────────────────────────
export function createTournamentState2026(countries, myTeamId) {
  const myTeam = countries.find(c => c.id === myTeamId);
  if (!myTeam) throw new Error(`Team ${myTeamId} not found`);

  // Shuffle all 48 teams
  const others = countries.filter(c => c.id !== myTeamId);
  const all48  = shuffle([myTeam, ...shuffle(others)]);

  // Build team ratings map
  const teamRatings = {};
  all48.forEach(c => {
    const players = assignDefaultStarters(c.players);
    teamRatings[c.id] = {
      ...c,
      players,
      stats: {
        wins: 0, draws: 0, losses: 0,
        goalsFor: 0, goalsAgainst: 0,
        points: 0, cleanSheets: 0,
        roundsPlayed: 0,
      },
      groupStats: { wins:0, draws:0, losses:0, goalsFor:0, goalsAgainst:0, points:0 },
    };
  });

  // Assign 12 groups of 4
  const groups = {};
  GROUP_NAMES_2026.forEach((name, i) => {
    groups[name] = all48.slice(i * 4, i * 4 + 4).map(c => c.id);
  });

  const groupMatches = buildGroupMatches2026(groups);

  return {
    id:           `tourn2026_${Date.now()}`,
    tournamentType: 'wc2026',
    myTeamId,
    phase:         'groups',
    groupMatchday: 1,
    status:        'active',
    champion:      null,
    third:         null,
    thirdPlaceWinner: null,
    teamRatings,
    groups,
    groupMatches,
    knockoutRounds: {},
    thirdPlaceMatch: null,
    eliminatedTeams: [],
    topScorers:  {},
    topAssists:  {},
    yellowCards: {},
    redCards:    {},
    saves:       {},
  };
}

// ─── Build Group Stage Matches (12 groups) ─────────────────
function buildGroupMatches2026(groups) {
  const SCHEDULE = [
    [[0,1],[2,3]],
    [[0,2],[1,3]],
    [[0,3],[1,2]],
  ];

  const result = {};
  GROUP_NAMES_2026.forEach(g => {
    const teams = groups[g];
    result[g] = [[], [], []];
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

// ─── Compute 2026 Group Standings ─────────────────────────
export function computeGroupStandings2026(state) {
  const standings = {};
  GROUP_NAMES_2026.forEach(g => {
    const teamIds = state.groups[g];
    const table   = teamIds.map(id => ({
      id,
      name:      state.teamRatings[id]?.name,
      flag:      state.teamRatings[id]?.flag,
      group:     g,
      played: 0, wins: 0, draws: 0, losses: 0,
      goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0,
    }));

    const tableMap = {};
    table.forEach(t => { tableMap[t.id] = t; });

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
          t1.wins++;   t1.points += 3; t2.losses++;
        } else if (m.score2 > m.score1) {
          t2.wins++;   t2.points += 3; t1.losses++;
        } else {
          t1.draws++; t1.points++; t2.draws++; t2.points++;
        }
      });
    });

    table.forEach(t => { t.goalDiff = t.goalsFor - t.goalsAgainst; });
    table.sort((a, b) =>
      b.points - a.points || b.goalDiff - a.goalDiff || b.goalsFor - a.goalsFor
    );

    standings[g] = table;
  });

  return standings;
}

// ─── Pick best 8 third-placed teams ───────────────────────
function pickBestThirds(standings) {
  const thirds = GROUP_NAMES_2026.map(g => ({ ...standings[g][2], group: g }));
  thirds.sort((a, b) =>
    b.points - a.points || b.goalDiff - a.goalDiff || b.goalsFor - a.goalsFor
  );
  return thirds.slice(0, 8); // best 8
}

// ─── Build Round of 32 (R32) ──────────────────────────────
// 12 group winners + 12 runners-up + 8 best thirds = 32 teams
// Pairing: winner vs third, runner-up vs winner, etc. (simplified random-like bracket)
function buildRound32(standings) {
  // Winners (1st) and Runners-up (2nd) from each group
  const winners = GROUP_NAMES_2026.map(g => standings[g][0].id);
  const runners = GROUP_NAMES_2026.map(g => standings[g][1].id);
  const thirds  = pickBestThirds(standings).map(t => t.id);

  // Build 32-team bracket: winners face thirds, runners face each other
  // Pairs: W[0] vs T[0], W[1] vs T[1], ... W[7] vs T[7]  (8 matches)
  //        R[0] vs R[1], R[2] vs R[3], ... R[10] vs R[11] (6 matches + 2 extra)
  // For simplicity, interleave: W0 vs T0, R0 vs R1, W1 vs T1, R2 vs R3 ...
  const matches = [];
  for (let i = 0; i < 8; i++) {
    matches.push({
      id:        `r32_m${matches.length + 1}`,
      phase:     'r32',
      team1Id:   winners[i],
      team2Id:   thirds[i],
      score1:    null, score2:    null,
      winnerId:  null, loserId:   null,
      events:    [], penalties: null, simulated: false,
    });
    if (i < 6) {
      matches.push({
        id:        `r32_m${matches.length + 1}`,
        phase:     'r32',
        team1Id:   runners[i * 2],
        team2Id:   runners[i * 2 + 1],
        score1:    null, score2:    null,
        winnerId:  null, loserId:   null,
        events:    [], penalties: null, simulated: false,
      });
    } else {
      // Last two runner-up slots
      matches.push({
        id:        `r32_m${matches.length + 1}`,
        phase:     'r32',
        team1Id:   winners[8 + (i - 6)],
        team2Id:   runners[10 + (i - 6)],
        score1:    null, score2:    null,
        winnerId:  null, loserId:   null,
        events:    [], penalties: null, simulated: false,
      });
    }
  }
  return matches;
}

// ─── Advance 2026 Tournament Phase ────────────────────────
export function advancePhase2026(state) {
  const newState = JSON.parse(JSON.stringify(state));

  switch (newState.phase) {
    case 'groups': {
      // Build R32
      const standings = computeGroupStandings2026(newState);
      // Eliminated: all 4th placed + 4 worst thirds
      const allThirds = GROUP_NAMES_2026.map(g => standings[g][2]);
      allThirds.sort((a,b) =>
        b.points - a.points || b.goalDiff - a.goalDiff || b.goalsFor - a.goalsFor
      );
      const eliminatedThirds = allThirds.slice(8).map(t => t.id);
      const eliminated4ths   = GROUP_NAMES_2026.map(g => standings[g][3].id);
      newState.eliminatedTeams.push(...eliminated4ths, ...eliminatedThirds);

      newState.knockoutRounds.r32 = buildRound32(standings);
      newState.phase  = 'r32';
      newState.status = 'active';
      break;
    }
    case 'r32': {
      newState.knockoutRounds.r16 = buildKnockoutRound('r16', newState.knockoutRounds.r32);
      newState.eliminatedTeams.push(...newState.knockoutRounds.r32.map(m => m.loserId).filter(Boolean));
      newState.phase  = 'r16';
      newState.status = 'active';
      break;
    }
    case 'r16': {
      newState.knockoutRounds.qf = buildKnockoutRound('qf', newState.knockoutRounds.r16);
      newState.eliminatedTeams.push(...newState.knockoutRounds.r16.map(m => m.loserId).filter(Boolean));
      newState.phase  = 'qf';
      newState.status = 'active';
      break;
    }
    case 'qf': {
      newState.knockoutRounds.sf = buildKnockoutRound('sf', newState.knockoutRounds.qf);
      newState.eliminatedTeams.push(...newState.knockoutRounds.qf.map(m => m.loserId).filter(Boolean));
      newState.phase  = 'sf';
      newState.status = 'active';
      break;
    }
    case 'sf': {
      const finalM = buildKnockoutRound('final', newState.knockoutRounds.sf);
      const thirdM = buildThirdPlaceMatch(newState.knockoutRounds.sf);
      newState.knockoutRounds.final = finalM;
      newState.thirdPlaceMatch      = thirdM;
      newState.phase  = 'final';
      newState.status = 'active';
      break;
    }
  }

  return newState;
}

// ─── Advance Tournament (matchday or phase) ────────────────
export function advanceTournament2026(state) {
  const newState = JSON.parse(JSON.stringify(state));

  if (newState.phase === 'groups') {
    if (newState.groupMatchday < 3) {
      newState.groupMatchday++;
      newState.status = 'active';
      return newState;
    } else {
      return advancePhase2026(newState);
    }
  }
  return advancePhase2026(newState);
}

// ─── Get current matchday matches (12 groups) ─────────────
export function getCurrentMatchdayMatches2026(state) {
  const day = state.groupMatchday;
  const matches = [];
  GROUP_NAMES_2026.forEach(g => {
    if (state.groupMatches[g]?.[day - 1]) {
      matches.push(...state.groupMatches[g][day - 1]);
    }
  });
  return matches;
}

// ─── Is matchday done (all 12 groups) ─────────────────────
export function isMatchdayDone2026(state) {
  const day = state.groupMatchday;
  return GROUP_NAMES_2026.every(g =>
    state.groupMatches[g]?.[day - 1]?.every(m => m.simulated)
  );
}

// ─── Is group stage done ───────────────────────────────────
export function isGroupStageDone2026(state) {
  return state.groupMatchday === 3 &&
    GROUP_NAMES_2026.every(g =>
      state.groupMatches[g]?.[2]?.every(m => m.simulated)
    );
}

// ─── Is knockout phase done ────────────────────────────────
export function isKnockoutPhaseDone2026(state) {
  const phase = state.phase;
  if (phase === 'groups') return false;

  if (phase === 'final') {
    const finalDone = state.knockoutRounds.final?.every(m => m.simulated);
    const thirdDone = state.thirdPlaceMatch?.simulated ?? true;
    return finalDone && thirdDone;
  }

  return state.knockoutRounds[phase]?.every(m => m.simulated) ?? false;
}

// ─── Is my team alive ─────────────────────────────────────
export function isMyTeamAlive2026(state) {
  return !state.eliminatedTeams.includes(state.myTeamId) &&
    state.status !== 'completed';
}

// ─── Get my team's next match ──────────────────────────────
export function getMyNextMatch2026(state) {
  const id = state.myTeamId;

  if (state.phase === 'groups') {
    const day = state.groupMatchday;
    for (const g of GROUP_NAMES_2026) {
      const m = state.groupMatches[g]?.[day - 1]?.find(
        m => !m.simulated && (m.team1Id === id || m.team2Id === id)
      );
      if (m) return m;
    }
    return null;
  }

  const phase = state.phase === 'final'
    ? [...(state.knockoutRounds.final || []), state.thirdPlaceMatch].filter(Boolean)
    : state.knockoutRounds[state.phase] || [];

  return phase.find(m => !m.simulated && (m.team1Id === id || m.team2Id === id)) || null;
}

// ─── Compute group standings (re-export adapted) ──────────
export { computeGroupStandings2026 as computeGroupStandings };
export const ROUND_NAMES = PHASE_NAMES_2026;
