import { simulateMatch } from './js/simulation.js';
import { COUNTRIES } from './js/countries.js';

const t1 = COUNTRIES[0];
const t2 = COUNTRIES[1];
t1.rating = 85; t2.rating = 80;
t1.isStarter = true;
t1.players.forEach(p => p.isStarter = true);
t2.players.forEach(p => p.isStarter = true);

const match = { id: 'm1', team1Id: t1.id, team2Id: t2.id };
const res = simulateMatch(match, { [t1.id]: t1, [t2.id]: t2 }, true);
console.log(res.motm);
