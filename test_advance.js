import { createTournamentState, advanceTournament, computeGroupStandings } from './js/tournament.js';
import { applyMatchResult } from './js/simulation.js';
import { COUNTRIES } from './js/countries.js';

let state = createTournamentState(COUNTRIES, 'ESP');
['A','B','C','D','E','F','G','H'].forEach(g => {
  for (let d = 0; d < 3; d++) {
    state.groupMatches[g][d].forEach(m => {
       state = applyMatchResult(state, {
         matchId: m.id, team1Id: m.team1Id, team2Id: m.team2Id,
         goals1: 1, goals2: 0, winnerId: m.team1Id, loserId: m.team2Id,
         events: [], penalties: null, motm: null,
         newRating1: 80, newRating2: 80, playerStatUpdates: {}
       });
    });
  }
});
state.groupMatchday = 3;

const nextState = advanceTournament(state);
console.log("Next phase:", nextState.phase);
