const fs = require('fs');

const path = '/home/bernat/src/mundial/js/app.js';
let content = fs.readFileSync(path, 'utf8');

const newRender = `
// ─── Hall Of Fame ─────────────────────────────────────────
function renderHallOfFame() {
  const grid = document.getElementById('halloffame-grid');
  if (!grid) return;
  grid.innerHTML = '';
  
  const history = loadLocalTournamentHistory();
  if (history.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-muted);text-align:center;grid-column:1/-1">Aún no has terminado ningún mundial.</p>';
    return;
  }
  
  history.sort((a, b) => new Date(b.completedAt || 0) - new Date(a.completedAt || 0)).forEach(tourn => {
    const card = document.createElement('div');
    card.className = 'my-team-status-card';
    card.style.cursor = 'pointer';
    card.style.position = 'relative';
    
    const champ = tourn.teamRatings[tourn.champion];
    const third = tourn.teamRatings[tourn.thirdPlaceWinner || tourn.third];
    
    let secondId = null;
    if (tourn.knockoutRounds && tourn.knockoutRounds.final && tourn.knockoutRounds.final.length > 0) {
       const finalMatch = tourn.knockoutRounds.final[0];
       secondId = finalMatch.winnerId === tourn.champion ? finalMatch.loserId : (finalMatch.team1Id === tourn.champion ? finalMatch.team2Id : finalMatch.team1Id);
    }
    const second = tourn.teamRatings[secondId];
    const myTeam = tourn.teamRatings[tourn.myTeamId];

    // Compute Tournament MVP
    let mvpId = null;
    let bestScore = -1;
    let mvpStats = { goals: 0, assists: 0, yellow: 0, red: 0 };

    // We can iterate over all players in topScorers / topAssists
    const allPlayers = new Set([
      ...Object.keys(tourn.topScorers || {}),
      ...Object.keys(tourn.topAssists || {})
    ]);

    allPlayers.forEach(pid => {
      const g = (tourn.topScorers && tourn.topScorers[pid]) || 0;
      const a = (tourn.topAssists && tourn.topAssists[pid]) || 0;
      const y = (tourn.yellowCards && tourn.yellowCards[pid]) || 0;
      const r = (tourn.redCards && tourn.redCards[pid]) || 0;
      
      const score = g * 3 + a * 2 - y - r * 3;
      if (score > bestScore) {
        bestScore = score;
        mvpId = pid;
        mvpStats = { goals: g, assists: a, yellow: y, red: r };
      }
    });

    let mvpName = 'Desconocido';
    let mvpFlag = '';
    if (mvpId) {
      const countryId = mvpId.split('_')[0];
      const team = tourn.teamRatings[countryId];
      if (team) {
        mvpFlag = team.flag;
        const p = team.players.find(x => x.id === mvpId);
        if (p) mvpName = p.name;
      }
    }
    
    card.innerHTML = \`
      <div style="text-align:center; margin-bottom:15px;">
        <div style="font-size:2rem; margin-bottom:5px;">🥇 \${champ?.flag}</div>
        <div style="font-weight:bold; color:var(--gold)">\${champ?.name || '??'}</div>
      </div>
      <div style="display:flex; justify-content:space-around; font-size:0.9rem; margin-bottom:15px; border-bottom:1px solid var(--border); padding-bottom:15px;">
        <div style="text-align:center">🥈<br>\${second?.flag || ''} \${second?.name || '??'}</div>
        <div style="text-align:center">🥉<br>\${third?.flag || ''} \${third?.name || '??'}</div>
      </div>
      <div style="margin-bottom:15px; padding:10px; background:rgba(255,215,0,0.1); border-radius:8px; border:1px solid rgba(255,215,0,0.3); display:flex; align-items:center; gap:10px;">
        <div style="font-size:1.5rem">🌟</div>
        <div style="flex: 1;">
          <div style="font-size:0.75rem; color:var(--gold); text-transform:uppercase; font-weight:bold; letter-spacing:1px;">MVP del Torneo</div>
          <div style="font-weight:bold;">\${mvpFlag} \${mvpName}</div>
          <div style="font-size:0.75rem; color:var(--text-muted)">⚽ \${mvpStats.goals} | 🅰️ \${mvpStats.assists}</div>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:10px;">
        <div style="font-size:1.5rem">\${myTeam?.flag || ''}</div>
        <div>
          <div style="font-weight:bold">\${myTeam?.name || ''}</div>
          <div style="font-size:0.8rem; color:var(--text-muted)">Tu Equipo</div>
        </div>
      </div>
    \`;
    
    card.addEventListener('click', () => {
      appState.tournament = tourn;
      refreshDashboard();
      refreshBracket();
      refreshStats();
      showView('dashboard');
      showToast('Visualizando torneo pasado', 'info');
      
      document.querySelectorAll('.nav-btn, .mobile-nav-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('[data-view="dashboard"]').forEach(b => b.classList.add('active'));
    });
    
    grid.appendChild(card);
  });
}
`;

content = content.replace(/\/\/ ─── Hall Of Fame ─────────────────────────────────────────[\s\S]*$/, newRender.trim() + '\n');
fs.writeFileSync(path, content, 'utf8');
