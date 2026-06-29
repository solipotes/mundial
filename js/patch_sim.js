const fs = require('fs');

const path = '/home/bernat/src/mundial/js/simulation.js';
let content = fs.readFileSync(path, 'utf8');

// We will replace everything from "// ─── Simulate Goals for a Team ─────────" 
// to the start of "  // Compute player stats from events"
// Actually, let's just use regex.

const newLogic = `
// ─── Pick Goal Scorer ─────────────────────────────────────
function pickGoalScorer(players) {
  const starters = players.filter(p => p.isStarter);
  const pool = starters.length > 0 ? starters : players;

  const attackers  = pool.filter(p => p.position === 'FWD');
  const midfielders = pool.filter(p => p.position === 'MID');
  const defenders  = pool.filter(p => p.position === 'DEF');

  const weights = [
    ...attackers.map(p  => 55 / Math.max(attackers.length, 1)),
    ...midfielders.map(p => 30 / Math.max(midfielders.length, 1)),
    ...defenders.map(p   => 15 / Math.max(defenders.length, 1)),
  ];

  const poolSorted = [...attackers, ...midfielders, ...defenders];
  const ratingWeights = poolSorted.map((p, i) => weights[i] * (p.rating / 75));

  return poolSorted.length > 0 ? weightedRandom(poolSorted, ratingWeights) : null;
}

// ─── Pick Assist Provider ─────────────────────────────────
function pickAssistProvider(players, scorerId) {
  const starters = players.filter(p => p.isStarter);
  const pool = starters.length > 0 ? starters : players;

  const eligible = pool.filter(p => p.id !== scorerId && p.position !== 'GK');
  if (eligible.length === 0) return null;

  const weights = eligible.map(p => {
    if (p.position === 'MID') return 3;
    if (p.position === 'FWD') return 2;
    return 1;
  });

  return weightedRandom(eligible, weights);
}

// ─── Pick Card Recipient ──────────────────────────────────
function pickCardPlayer(players, redCardedIds) {
  const starters = players.filter(p => p.isStarter);
  const pool = starters.length > 0 ? starters : players;

  const eligible = pool.filter(p => p.position !== 'GK' && (!redCardedIds || !redCardedIds.has(p.id)));
  if (eligible.length === 0) return null;

  const weights = eligible.map(p => {
    if (p.position === 'DEF') return 3;
    if (p.position === 'MID') return 2.5;
    return 1.5;
  });

  return weightedRandom(eligible, weights);
}

// ─── Simulate Penalties ───────────────────────────────────
`;

// Replace the old pickers and generators
content = content.replace(/\/\/ ─── Simulate Goals for a Team ────────[\s\S]*?\/\/ ─── Simulate Penalties ───────────────────────────────────/m, newLogic.trim() + '\n');


// Now replace simulateMatch
const newSimMatch = `
export function simulateMatch(match, teamRatings, allowDraws = false) {
  const team1 = teamRatings[match.team1Id];
  const team2 = teamRatings[match.team2Id];
  
  const { prob1, prob2 } = matchOdds(team1.rating, team2.rating);

  const events = [];
  let goals1 = 0, goals2 = 0;
  
  const redCarded1 = new Set();
  const redCarded2 = new Set();
  const yellowCards1 = {};
  const yellowCards2 = {};

  const baseRating1 = team1.rating;
  const baseRating2 = team2.rating;

  for (let m = 1; m <= 90; m++) {
    const active1 = Math.max(1, 11 - redCarded1.size);
    const active2 = Math.max(1, 11 - redCarded2.size);

    const eff1 = baseRating1 * (active1 / 11);
    const eff2 = baseRating2 * (active2 / 11);

    const ratingFactor1 = eff1 / Math.max(eff2, 0.2);
    const ratingFactor2 = eff2 / Math.max(eff1, 0.2);
    
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
        if (chance(prob1)) finalGoals1++;
        else finalGoals2++;
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
`;

content = content.replace(/export function simulateMatch[\s\S]*?if \(goals1 === goals2\) \{[\s\S]*?  \} else \{[\s\S]*?  \}/m, newSimMatch.trim());

fs.writeFileSync(path, content, 'utf8');
console.log("Patched simulation.js successfully!");
