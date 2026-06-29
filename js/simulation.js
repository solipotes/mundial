// ══════════════════════════════════════════════════════════
//  SIMULATION ENGINE — Match simulation with dynamic odds
// ══════════════════════════════════════════════════════════

// ─── Random utilities ─────────────────────────────────────
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chance(probability) {
  return Math.random() < probability;
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function weightedRandom(items, weights) {
  const total = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;
  for (let i = 0; i < items.length; i++) {
    r -= weights[i];
    if (r <= 0) return items[i];
  }
  return items[items.length - 1];
}

// ─── Constants ────────────────────────────────────────────
const BASE_GOALS_PER_MATCH = 2.5;  // average total goals
const MAX_GOALS_PER_TEAM   = 7;

// Event types
const EVENT_TYPES = {
  GOAL:          'goal',
  ASSIST:        'assist',
  YELLOW:        'yellow',
  RED:           'red',
  SAVE:          'save',
  MISS:          'miss',
  PENALTY_GOAL:  'penalty_goal',
  PENALTY_MISS:  'penalty_miss',
  OWN_GOAL:      'own_goal',
};

// ─── Calculate Match Odds ─────────────────────────────────
/**
 * Returns probability of team1 winning vs team2.
 * Teams start equal at rating=1.0, then diverge based on performance.
 */
function matchOdds(team1Rating, team2Rating) {
  const total = team1Rating + team2Rating;
  const prob1 = team1Rating / total;
  const prob2 = 1 - prob1;
  return { prob1, prob2 };
}

// ─── Pick Goal Scorer ─────────────────────────────────────
function pickGoalScorer(players) {
  const starters = players.filter(p => p.isStarter);
  if (starters.length === 0) return null;

  const attackers  = starters.filter(p => p.position === 'FWD');
  const midfielders = starters.filter(p => p.position === 'MID');
  const defenders  = starters.filter(p => p.position === 'DEF');

  const weights = [
    ...attackers.map(p  => 55 / Math.max(attackers.length, 1)),
    ...midfielders.map(p => 30 / Math.max(midfielders.length, 1)),
    ...defenders.map(p   => 15 / Math.max(defenders.length, 1)),
  ];

  const poolSorted = [...attackers, ...midfielders, ...defenders];
  const ratingWeights = poolSorted.map((p, i) => weights[i] * Math.pow(p.rating / 75, 4));

  return poolSorted.length > 0 ? weightedRandom(poolSorted, ratingWeights) : null;
}

// ─── Pick Assist Provider ─────────────────────────────────
function pickAssistProvider(players, scorerId) {
  const starters = players.filter(p => p.isStarter);
  const eligible = starters.filter(p => p.id !== scorerId && p.position !== 'GK');
  if (eligible.length === 0) return null;

  const weights = eligible.map(p => {
    let base = 1;
    if (p.position === 'MID') base = 3;
    if (p.position === 'FWD') base = 2;
    return base * Math.pow(p.rating / 75, 3);
  });

  return weightedRandom(eligible, weights);
}

// ─── Pick Card Recipient ──────────────────────────────────
function pickCardPlayer(players, redCardedIds) {
  const starters = players.filter(p => p.isStarter);
  const eligible = starters.filter(p => p.position !== 'GK' && (!redCardedIds || !redCardedIds.has(p.id)));
  if (eligible.length === 0) return null;

  const weights = eligible.map(p => {
    let base = 1.5;
    if (p.position === 'DEF') base = 3;
    if (p.position === 'MID') base = 2.5;
    return base * (1 - (Math.min(p.rating, 99) - 60) * 0.015);
  });

  return weightedRandom(eligible, weights);
}

// ─── Simulate Penalties ───────────────────────────────────

function simulatePenalties(team1, team2) {
  const kicks1 = [];
  const kicks2 = [];
  let score1 = 0, score2 = 0;
  let round = 0;

  // Best of 5
  while (round < 5 || (score1 === score2 && round < 10)) {
    // Team 1 kick
    const scored1 = chance(0.75); // 75% base conversion rate
    kicks1.push(scored1 ? 'scored' : 'missed');
    if (scored1) score1++;

    // Team 2 kick
    const scored2 = chance(0.75);
    kicks2.push(scored2 ? 'scored' : 'missed');
    if (scored2) score2++;

    round++;

    // Check if one team can't catch up after 5
    if (round >= 5) {
      const remaining = Math.max(5, round + 1) - round;
      if (score1 - score2 > remaining || score2 - score1 > remaining) break;
      if (round >= 5 && score1 !== score2) break;
    }
  }

  // Final sudden death if still tied
  if (score1 === score2) {
    while (score1 === score2) {
      const s1 = chance(0.75);
      const s2 = chance(0.75);
      kicks1.push(s1 ? 'scored' : 'missed');
      kicks2.push(s2 ? 'scored' : 'missed');
      if (s1) score1++;
      if (s2) score2++;
    }
  }

  return {
    kicks1, kicks2, score1, score2,
    winner: score1 > score2 ? 'home' : 'away'
  };
}

// ─── Update Team Rating After Match ───────────────────────
function updateRating(teamRating, goalsFor, goalsAgainst, won) {
  let rating = teamRating;
  rating += goalsFor * 0.06;          // offensive bonus
  rating -= goalsAgainst * 0.04;      // defensive penalty
  if (won) rating += 0.1;             // win bonus
  if (goalsAgainst === 0) rating += 0.05; // clean sheet bonus
  return Math.max(0.2, rating);        // floor
}

// ─── MAIN: Simulate a Single Match ────────────────────────
/**
 * @param {Object} match - match object from tournament state
 * @param {Object} teamRatings - full teamRatings map
 * @param {boolean} allowDraws - true for group stage, false for knockouts
 * @returns {Object} Updated match with results + stat updates
 */
export function simulateMatch(match, teamRatings, allowDraws = false) {
  const team1 = teamRatings[match.team1Id];
  const team2 = teamRatings[match.team2Id];
  
  const getOffenseRating = (players) => {
    const starters = players.filter(p => p.isStarter);
    const attackers = starters.filter(p => p.position === 'FWD' || p.position === 'MID');
    if (attackers.length === 0) return 70;
    return attackers.reduce((sum, p) => sum + p.rating, 0) / attackers.length;
  };
  const getDefenseRating = (players) => {
    const starters = players.filter(p => p.isStarter);
    const defenders = starters.filter(p => p.position === 'DEF' || p.position === 'MID');
    if (defenders.length === 0) return 70;
    return defenders.reduce((sum, p) => sum + p.rating, 0) / defenders.length;
  };
  const getGKRating = (players) => {
    const gk = players.find(p => p.isStarter && p.position === 'GK');
    return gk ? gk.rating : 70;
  };

  const off1 = getOffenseRating(team1.players);
  const def1 = getDefenseRating(team1.players);
  const gk1 = getGKRating(team1.players);

  const off2 = getOffenseRating(team2.players);
  const def2 = getDefenseRating(team2.players);
  const gk2 = getGKRating(team2.players);

  const events = [];
  let goals1 = 0, goals2 = 0;
  
  const redCarded1 = new Set();
  const redCarded2 = new Set();
  const yellowCards1 = {};
  const yellowCards2 = {};

  for (let m = 1; m <= 90; m++) {
    const active1 = Math.max(1, 11 - redCarded1.size);
    const active2 = Math.max(1, 11 - redCarded2.size);

    const eff1 = off1 * (active1 / 11);
    const eff2 = off2 * (active2 / 11);

    const ratingFactor1 = eff1 / Math.max(def2 * 0.7 + gk2 * 0.3, 20);
    const ratingFactor2 = eff2 / Math.max(def1 * 0.7 + gk1 * 0.3, 20);
    
    const expGoal1Min = (BASE_GOALS_PER_MATCH * 0.5 * ratingFactor1) / 90;
    const expGoal2Min = (BASE_GOALS_PER_MATCH * 0.5 * ratingFactor2) / 90;

    if (chance(expGoal1Min)) {
      goals1++;
      const scorer = pickGoalScorer(team1.players);
      const assister = chance(0.65) ? pickAssistProvider(team1.players, scorer?.id) : null;
      events.push({
        type: chance(0.12) ? EVENT_TYPES.PENALTY_GOAL : (chance(0.03) ? EVENT_TYPES.OWN_GOAL : EVENT_TYPES.GOAL),
        minute: m, team: 'home', player: scorer, assist: assister
      });
    }
    
    if (chance(expGoal2Min)) {
      goals2++;
      const scorer = pickGoalScorer(team2.players);
      const assister = chance(0.65) ? pickAssistProvider(team2.players, scorer?.id) : null;
      events.push({
        type: chance(0.12) ? EVENT_TYPES.PENALTY_GOAL : (chance(0.03) ? EVENT_TYPES.OWN_GOAL : EVENT_TYPES.GOAL),
        minute: m, team: 'away', player: scorer, assist: assister
      });
    }

    if (chance(0.044)) {
      const isHome = chance(0.5);
      const player = pickCardPlayer(isHome ? team1.players : team2.players, isHome ? redCarded1 : redCarded2);
      if (player) {
        const yellows = isHome ? yellowCards1 : yellowCards2;
        yellows[player.id] = (yellows[player.id] || 0) + 1;
        events.push({ type: EVENT_TYPES.YELLOW, minute: m, team: isHome ? 'home' : 'away', player });
        if (yellows[player.id] === 2) {
           events.push({ type: EVENT_TYPES.RED, minute: m, team: isHome ? 'home' : 'away', player });
           if (isHome) redCarded1.add(player.id);
           else redCarded2.add(player.id);
        }
      }
    }

    if (chance(0.0009)) {
      const isHome = chance(0.5);
      const player = pickCardPlayer(isHome ? team1.players : team2.players, isHome ? redCarded1 : redCarded2);
      if (player) {
         events.push({ type: EVENT_TYPES.RED, minute: m, team: isHome ? 'home' : 'away', player });
         if (isHome) redCarded1.add(player.id);
         else redCarded2.add(player.id);
      }
    }
    
    if (chance(0.08)) {
       const isHome = chance(0.5);
       const t = isHome ? team1 : team2;
       const starters = t.players.filter(p => p.isStarter);
       const gk = (starters.length ? starters : t.players).find(p => p.position === 'GK');
       if (gk && ! (isHome ? redCarded1 : redCarded2).has(gk.id)) {
         events.push({ type: EVENT_TYPES.SAVE, minute: m, team: isHome ? 'home' : 'away', player: gk, count: 1 });
       }
    }
  }

  let penalties = null;
  let winnerId = null;
  let loserId = null;
  let finalGoals1 = goals1, finalGoals2 = goals2;

  if (goals1 === goals2) {
    if (!allowDraws) {
      if (chance(0.35)) {
        const prob1 = off1 / (off1 + off2);
        if (chance(prob1)) {
          finalGoals1++;
          const scorer = pickGoalScorer(team1.players);
          if (scorer) events.push({ type: EVENT_TYPES.GOAL, minute: 110, team: 'home', player: scorer });
        } else {
          finalGoals2++;
          const scorer = pickGoalScorer(team2.players);
          if (scorer) events.push({ type: EVENT_TYPES.GOAL, minute: 110, team: 'away', player: scorer });
        }
      }
      if (finalGoals1 === finalGoals2) {
        penalties = simulatePenalties(team1, team2);
        winnerId = penalties.winner === 'home' ? team1.id : team2.id;
        loserId  = penalties.winner === 'home' ? team2.id : team1.id;
      } else {
        winnerId = finalGoals1 > finalGoals2 ? team1.id : team2.id;
        loserId  = finalGoals1 > finalGoals2 ? team2.id : team1.id;
      }
    }
  } else {
    winnerId = goals1 > goals2 ? team1.id : team2.id;
    loserId  = goals1 > goals2 ? team2.id : team1.id;
  }


  // Compute player stats from events
  const playerStatUpdates = {};

  events.forEach(ev => {
    if (ev.player) {
      const pid = ev.player.id;
      if (!playerStatUpdates[pid]) playerStatUpdates[pid] = { goals: 0, assists: 0, saves: 0, yellow: 0, red: 0 };

      switch (ev.type) {
        case EVENT_TYPES.GOAL:
        case EVENT_TYPES.PENALTY_GOAL:
          playerStatUpdates[pid].goals++;
          break;
        case EVENT_TYPES.SAVE:
          playerStatUpdates[pid].saves += (ev.count || 1);
          break;
        case EVENT_TYPES.YELLOW:
          playerStatUpdates[pid].yellow++;
          break;
        case EVENT_TYPES.RED:
          playerStatUpdates[pid].red++;
          break;
      }
    }
    if (ev.assist) {
      const aid = ev.assist.id;
      if (!playerStatUpdates[aid]) playerStatUpdates[aid] = { goals: 0, assists: 0, saves: 0, yellow: 0, red: 0 };
      playerStatUpdates[aid].assists++;
    }
  });

  // Best player of the match
  const motm = findMotm(events, [team1, team2], playerStatUpdates);

  return {
    matchId:   match.id,
    team1Id:   team1.id,
    team2Id:   team2.id,
    goals1:    finalGoals1,
    goals2:    finalGoals2,
    winnerId,
    loserId,
    events,
    penalties,
    playerStatUpdates,
    motm,
    newRating1: updateRating(team1.rating, finalGoals1, finalGoals2, winnerId === team1.id),
    newRating2: updateRating(team2.rating, finalGoals2, finalGoals1, winnerId === team2.id),
  };
}

// ─── Find Man of the Match ────────────────────────────────
function findMotm(events, teams, statUpdates) {
  let bestScore = -1;
  let bestPlayerId = null;

  Object.entries(statUpdates).forEach(([pid, stats]) => {
    const score = stats.goals * 3 + stats.assists * 2 + stats.saves * 0.5 - stats.yellow - stats.red * 3;
    if (score > bestScore) {
      bestScore = score;
      bestPlayerId = pid;
    }
  });

  const allPlayers = [...teams[0].players, ...teams[1].players];

  if (!bestPlayerId) {
    // Fallback: pick the highest rated starter
    const starters = allPlayers.filter(p => p.isStarter);
    if (starters.length === 0) return null; // Fallback if no starters (shouldn't happen)
    
    let bestFallback = starters[0];
    for (let i = 1; i < starters.length; i++) {
       if (starters[i].rating > bestFallback.rating) {
          bestFallback = starters[i];
       }
    }
    bestPlayerId = bestFallback.id;
    statUpdates[bestPlayerId] = { goals: 0, assists: 0, saves: 0, yellow: 0, red: 0 };
    bestScore = 0;
  }

  // Find player object
  const player = allPlayers.find(p => p.id === bestPlayerId);

  return player ? {
    player,
    stats: statUpdates[bestPlayerId] || { goals: 0, assists: 0, saves: 0, yellow: 0, red: 0 },
    score: bestScore,
    countryId: bestPlayerId.split('_')[0],
  } : null;
}

// ─── Apply Match Results to Tournament State ──────────────
/**
 * Applies simulation result to the tournament state.
 * Returns updated teamRatings and global stat trackers.
 */
export function applyMatchResult(tournamentState, matchResult) {
  const state = JSON.parse(JSON.stringify(tournamentState)); // deep clone

  // Find the match in the state
  let match = null;
  let matchCollection = null;
  
  if (state.phase === 'groups') {
    const day = state.groupMatchday;
    for (const g of Object.keys(state.groupMatches || {})) {
      const m = state.groupMatches[g]?.[day - 1]?.find(x => x.id === matchResult.matchId);
      if (m) {
        match = m;
        matchCollection = state.groupMatches[g][day - 1];
        break;
      }
    }
  } else if ((state.phase === 'final' || state.phase === 'third') && matchResult.matchId.startsWith('third')) {
    match = state.thirdPlaceMatch;
    matchCollection = [state.thirdPlaceMatch];
  } else {
    const rounds = state.knockoutRounds[state.phase];
    match = rounds?.find(x => x.id === matchResult.matchId);
    matchCollection = rounds;
  }

  if (!match) return state;

  // Update match
  match.score1    = matchResult.goals1;
  match.score2    = matchResult.goals2;
  match.winnerId  = matchResult.winnerId;
  match.loserId   = matchResult.loserId;
  match.events    = matchResult.events;
  match.penalties = matchResult.penalties;
  match.motm      = matchResult.motm;
  match.simulated = true;


  // Update team ratings
  state.teamRatings[matchResult.team1Id].rating = matchResult.newRating1;
  state.teamRatings[matchResult.team2Id].rating = matchResult.newRating2;

  // Update team stats
  const t1 = state.teamRatings[matchResult.team1Id];
  const t2 = state.teamRatings[matchResult.team2Id];

  t1.stats.goalsFor     += matchResult.goals1;
  t1.stats.goalsAgainst += matchResult.goals2;
  t2.stats.goalsFor     += matchResult.goals2;
  t2.stats.goalsAgainst += matchResult.goals1;

  if (matchResult.goals2 === 0) t1.stats.cleanSheets++;
  if (matchResult.goals1 === 0) t2.stats.cleanSheets++;

  if (matchResult.winnerId === matchResult.team1Id) {
    t1.stats.wins++;
    t2.stats.losses++;
    t1.stats.points += 3;
    if (state.phase === 'groups') {
      t1.groupStats.wins++; t1.groupStats.points += 3;
      t2.groupStats.losses++;
    }
  } else if (matchResult.winnerId === matchResult.team2Id) {
    t2.stats.wins++;
    t1.stats.losses++;
    t2.stats.points += 3;
    if (state.phase === 'groups') {
      t2.groupStats.wins++; t2.groupStats.points += 3;
      t1.groupStats.losses++;
    }
  } else {
    // Draw
    t1.stats.draws++;
    t2.stats.draws++;
    t1.stats.points += 1;
    t2.stats.points += 1;
    if (state.phase === 'groups') {
      t1.groupStats.draws++; t1.groupStats.points += 1;
      t2.groupStats.draws++; t2.groupStats.points += 1;
    }
  }

  if (state.phase === 'groups') {
    t1.groupStats.goalsFor += matchResult.goals1;
    t1.groupStats.goalsAgainst += matchResult.goals2;
    t2.groupStats.goalsFor += matchResult.goals2;
    t2.groupStats.goalsAgainst += matchResult.goals1;
  }

  t1.stats.roundsPlayed++;
  t2.stats.roundsPlayed++;

  // Update player stats in teamRatings
  Object.entries(matchResult.playerStatUpdates).forEach(([pid, stats]) => {
    const countryId = pid.split('_')[0];
    const team = state.teamRatings[countryId];
    if (!team) return;

    const player = team.players.find(p => p.id === pid);
    if (!player) return;

    player.goals       = (player.goals || 0) + stats.goals;
    player.assists     = (player.assists || 0) + stats.assists;
    player.saves       = (player.saves || 0) + stats.saves;
    player.yellowCards = (player.yellowCards || 0) + stats.yellow;
    player.redCards    = (player.redCards || 0) + stats.red;
  });

  // Update global top scorers / assists / cards
  Object.entries(matchResult.playerStatUpdates).forEach(([pid, stats]) => {
    if (stats.goals > 0) {
      state.topScorers[pid] = (state.topScorers[pid] || 0) + stats.goals;
    }
    if (stats.assists > 0) {
      state.topAssists[pid] = (state.topAssists[pid] || 0) + stats.assists;
    }
    if (stats.yellow > 0) {
      state.yellowCards[pid] = (state.yellowCards[pid] || 0) + stats.yellow;
    }
    if (stats.red > 0) {
      state.redCards[pid] = (state.redCards[pid] || 0) + stats.red;
    }
    if (stats.saves > 0) {
      state.saves[pid] = (state.saves[pid] || 0) + stats.saves;
    }
  });

  // We check if we need to advance the overall status to round_done in app.js or here
  // Actually, we'll let app.js decide or we can just check if all matches for the current "matchday" or "phase" are done.
  // We'll trust the caller to check isMatchdayDone / isKnockoutPhaseDone.

  return state;
}

// ─── Simulate All Matches in a Round/Phase ──────────────────
export function simulateRound(tournamentState) {
  let state = JSON.parse(JSON.stringify(tournamentState));
  
  let matchesToSimulate = [];
  if (state.phase === 'groups') {
    const day = state.groupMatchday;
    for (const g of Object.keys(state.groupMatches || {})) {
      if (state.groupMatches[g]?.[day - 1]) {
        matchesToSimulate.push(...state.groupMatches[g][day - 1]);
      }
    }
  } else if (state.phase === 'final') {
    matchesToSimulate = [
      ...(state.knockoutRounds.final || []),
      state.thirdPlaceMatch
    ].filter(Boolean);
  } else {
    matchesToSimulate = state.knockoutRounds[state.phase] || [];
  }

  matchesToSimulate.forEach(match => {
    if (!match.simulated) {
      const allowDraws = state.phase === 'groups';
      const result = simulateMatch(match, state.teamRatings, allowDraws);
      state = applyMatchResult(state, result);
    }
  });

  state.status = 'round_done';
  return state;
}

// ─── Generate Match Narrative ─────────────────────────────
export function generateNarrative(events, team1Name, team2Name, score1, score2) {
  const lines = [];
  const goalEvents = events.filter(e =>
    e.type === EVENT_TYPES.GOAL ||
    e.type === EVENT_TYPES.PENALTY_GOAL ||
    e.type === EVENT_TYPES.OWN_GOAL
  );

  if (goalEvents.length === 0) {
    lines.push(`Partido muy igualado. Ambas defensas estuvieron sólidas en toda la contienda.`);
  }

  goalEvents.forEach(ev => {
    const teamName = ev.team === 'home' ? team1Name : team2Name;
    const scorerName = ev.player?.name || 'Jugador desconocido';
    if (ev.type === EVENT_TYPES.PENALTY_GOAL) {
      lines.push(`⚽ [${ev.minute}'] PENALTI. ${scorerName} (${teamName}) no falla desde los once metros.`);
    } else if (ev.type === EVENT_TYPES.OWN_GOAL) {
      lines.push(`😬 [${ev.minute}'] Gol en propia puerta de ${scorerName} (${teamName}).`);
    } else {
      const assist = ev.assist ? ` Asistencia de ${ev.assist.name}.` : '';
      lines.push(`⚽ [${ev.minute}'] GOOOL de ${scorerName} (${teamName}).${assist}`);
    }
  });

  // Final result narrative
  if (score1 > score2) {
    lines.push(`\n🏆 Victoria de ${team1Name} por ${score1}-${score2}.`);
  } else if (score2 > score1) {
    lines.push(`\n🏆 Victoria de ${team2Name} por ${score2}-${score1}.`);
  } else {
    lines.push(`\n🤝 Empate a ${score1} goles.`);
  }

  return lines;
}
