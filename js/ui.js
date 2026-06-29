// ══════════════════════════════════════════════════════════
//  UI COMPONENTS — Rendering helpers
// ══════════════════════════════════════════════════════════

import { ROUND_NAMES } from './tournament_2026.js';
import { FORMATIONS } from './formations.js';

// ─── Toast Notifications ─────────────────────────────────
export function showToast(message, type = 'info', duration = 3000) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
  toast.innerHTML = `<span>${icons[type] || 'ℹ️'}</span><span>${message}</span>`;

  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('out');
    toast.addEventListener('animationend', () => toast.remove());
  }, duration);
}

// ─── Loading Overlay ──────────────────────────────────────
export function showLoading(text = 'Cargando...') {
  const overlay = document.getElementById('loading-overlay');
  const txt = overlay.querySelector('.loader-text');
  if (txt) txt.textContent = text;
  overlay.classList.add('active');
  overlay.style.display = 'flex';
}

export function hideLoading() {
  const overlay = document.getElementById('loading-overlay');
  overlay.classList.add('fade-out');
  setTimeout(() => {
    overlay.style.display = 'none';
    overlay.classList.remove('active', 'fade-out');
  }, 500);
}

// ─── View Router ─────────────────────────────────────────
export function showView(viewId) {
  // Auth and setup views
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  document.getElementById('app-shell')?.classList.add('hidden');

  if (['dashboard', 'bracket', 'myteam', 'stats', 'halloffame', 'home'].includes(viewId)) {
    document.getElementById('app-shell')?.classList.remove('hidden');

    document.querySelectorAll('.app-view').forEach(v => {
      v.classList.remove('active');
      v.classList.add('hidden');
    });

    const target = document.getElementById(`view-${viewId}`);
    if (target) {
      target.classList.add('active');
      target.classList.remove('hidden');
    }

    // Update nav active states
    document.querySelectorAll('.nav-btn, .mobile-nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === viewId);
    });
  } else {
    const target = document.getElementById(`view-${viewId}`);
    if (target) target.classList.remove('hidden');
  }
}

// ─── Kit Builder SVG ──────────────────────────────────────
export function renderJersey(container, kitColors, size = 'normal') {
  const { shirt, shorts, socks } = kitColors;
  const scale = size === 'large' ? 1.5 : 1;

  container.innerHTML = `
    <div class="jersey ${size === 'large' ? 'jersey-large' : ''}" style="transform: scale(${scale}); transform-origin: top center;">
      <svg viewBox="0 0 80 100" width="80" height="100" xmlns="http://www.w3.org/2000/svg">
        <!-- Left sleeve -->
        <polygon points="4,20 20,14 20,50 4,55" fill="${shirt}" stroke="rgba(255,255,255,0.2)" stroke-width="0.5"/>
        <!-- Right sleeve -->
        <polygon points="76,20 60,14 60,50 76,55" fill="${shirt}" stroke="rgba(255,255,255,0.2)" stroke-width="0.5"/>
        <!-- Body -->
        <rect x="20" y="14" width="40" height="60" rx="3" fill="${shirt}" stroke="rgba(255,255,255,0.2)" stroke-width="0.5"/>
        <!-- Collar -->
        <ellipse cx="40" cy="16" rx="8" ry="5" fill="${darken(shirt, 0.15)}" stroke="rgba(255,255,255,0.3)" stroke-width="0.5"/>
        <!-- Highlight sheen -->
        <rect x="22" y="16" width="8" height="40" rx="2" fill="rgba(255,255,255,0.08)"/>
        <!-- Shorts -->
        <rect x="22" y="74" width="36" height="18" rx="2" fill="${shorts}" stroke="rgba(255,255,255,0.2)" stroke-width="0.5"/>
        <!-- Socks hint -->
        <rect x="28" y="92" width="10" height="6" rx="1" fill="${socks}"/>
        <rect x="42" y="92" width="10" height="6" rx="1" fill="${socks}"/>
      </svg>
    </div>
  `;
}

function darken(hex, amount) {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.max(0, (num >> 16) - Math.round(255 * amount));
  const g = Math.max(0, ((num >> 8) & 0xFF) - Math.round(255 * amount));
  const b = Math.max(0, (num & 0xFF) - Math.round(255 * amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

// ─── Country Grid ─────────────────────────────────────────
export function renderCountryGrid(container, countries, onSelect) {
  container.innerHTML = '';
  countries.forEach((country, idx) => {
    const card = document.createElement('div');
    card.className = 'country-card';
    card.dataset.id = country.id;
    card.style.animationDelay = `${idx * 0.02}s`;
    card.innerHTML = `
      <div class="country-flag">${country.flag}</div>
      <div class="country-name">${country.name}</div>
      <div class="country-continent">${country.continent}</div>
    `;
    card.addEventListener('click', () => {
      document.querySelectorAll('.country-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      onSelect(country);
    });
    container.appendChild(card);
  });
}

// ─── Squad List ───────────────────────────────────────────
export function renderSquadList(container, players, filterPos, onPlayerClick, onToggleStarter) {
  container.innerHTML = '';
  const filtered = filterPos === 'ALL' ? players : players.filter(p => p.position === filterPos);

  filtered.forEach(player => {
    const row = document.createElement('div');
    row.className = `player-row ${player.isStarter ? 'starter-row' : ''}`;
    const ratingClass = player.rating >= 90 ? 'very-high' : player.rating >= 82 ? 'high' : '';
    row.innerHTML = `
      <span class="player-number" style="width: 30px">
        <input type="checkbox" class="toggle-starter-cb" data-id="${player.id}" ${player.isStarter ? 'checked' : ''} style="margin-right: 8px" />
      </span>
      <span class="player-number">${player.number}</span>
      <span class="player-name">${player.name}</span>
      <span class="pos-badge ${player.position}">${player.position}</span>
      <span class="player-rating ${ratingClass}">${player.rating}</span>
    `;
    
    // Checkbox toggle logic
    const cb = row.querySelector('.toggle-starter-cb');
    cb.addEventListener('change', (e) => {
      if (onToggleStarter) onToggleStarter(player.id, e.target.checked);
    });
    cb.addEventListener('click', (e) => e.stopPropagation()); // prevent opening modal

    row.addEventListener('click', () => onPlayerClick(player));
    container.appendChild(row);
  });
}

// ─── Match Card ───────────────────────────────────────────
export function renderMatchCard(match, teamRatings, myTeamId, onClick) {
  const team1 = teamRatings[match.team1Id];
  const team2 = teamRatings[match.team2Id];
  if (!team1 || !team2) return null;

  const card = document.createElement('div');
  const isMyMatch = match.team1Id === myTeamId || match.team2Id === myTeamId;
  const isPlayed  = match.simulated;

  card.className = `match-card${isMyMatch ? ' my-match' : ''}${isPlayed ? ' played' : ''}`;

  const t1Winner = isPlayed && match.winnerId === match.team1Id;
  const t2Winner = isPlayed && match.winnerId === match.team2Id;

  let scoreHTML;
  if (isPlayed) {
    const penStr = match.penalties
      ? ` <br/><small style="color:var(--orange);font-size:0.65rem">(${match.penalties.score1}-${match.penalties.score2} pen)</small>`
      : '';
    scoreHTML = `<div class="match-score">${match.score1} - ${match.score2}${penStr}</div>`;
  } else {
    scoreHTML = `<div class="match-score-pending">vs</div>`;
  }

  card.innerHTML = `
    <div class="match-teams">
      <div class="match-team${t1Winner ? ' winner' : ''}">
        <div class="match-flag">${team1.flag}</div>
        <div class="match-team-name">${team1.name}</div>
      </div>
      <div class="match-center">
        ${scoreHTML}
        <div class="match-round-label">${match.phase === 'groups' ? `Jornada ${match.matchday} (${match.group})` : (ROUND_NAMES[match.phase] || '')}</div>
      </div>
      <div class="match-team${t2Winner ? ' winner' : ''}">
        <div class="match-flag">${team2.flag}</div>
        <div class="match-team-name">${team2.name}</div>
      </div>
    </div>
    ${isPlayed ? renderEventPills(match.events) : ''}
  `;

  if (onClick) card.addEventListener('click', () => onClick(match));
  return card;
}

function renderEventPills(events) {
  const goals  = events.filter(e => ['goal','penalty_goal','own_goal'].includes(e.type));
  const yellow = events.filter(e => e.type === 'yellow');
  const red    = events.filter(e => e.type === 'red');

  if (goals.length === 0 && yellow.length === 0) return '';

  let html = '<div class="match-events-preview">';
  goals.slice(0, 4).forEach(e => {
    const name = e.player?.name?.split(' ').pop() || '';
    html += `<span class="event-pill">⚽ ${e.minute}' ${name}</span>`;
  });
  if (yellow.length > 0) html += `<span class="event-pill">🟨 ×${yellow.length}</span>`;
  if (red.length > 0)    html += `<span class="event-pill">🟥 ×${red.length}</span>`;
  html += '</div>';
  return html;
}

// ─── Bracket Renderer ─────────────────────────────────────
export function renderBracket(container, state) {
  container.innerHTML = '';
  const wrapper = document.createElement('div');

  if (state.phase === 'groups') {
    // Show Groups
    wrapper.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:20px;padding:20px;';
    
    // Compute standings to show
    // Note: computeGroupStandings logic might be in tournament.js, but we'll assume it's imported or we just show teams.
    // Instead of full standings, we just show the groups simply
    Object.entries(state.groups).forEach(([groupName, teamIds]) => {
      const col = document.createElement('div');
      col.className = 'bracket-round'; // Reuse class for style
      col.innerHTML = `<div class="bracket-round-title" style="position:relative; top:0; padding-bottom:15px; margin-bottom:10px;">Grupo ${groupName}</div>`;
      
      const sortedIds = [...teamIds].sort((a, b) => {
        const tA = state.teamRatings[a];
        const tB = state.teamRatings[b];
        const sA = tA.groupStats || tA.stats;
        const sB = tB.groupStats || tB.stats;
        if (sB.points !== sA.points) return sB.points - sA.points;
        const gdA = sA.goalsFor - sA.goalsAgainst;
        const gdB = sB.goalsFor - sB.goalsAgainst;
        if (gdB !== gdA) return gdB - gdA;
        return sB.goalsFor - sA.goalsFor;
      });

      sortedIds.forEach(id => {
        const team = state.teamRatings[id];
        const stat = team.groupStats || team.stats; // Fallback
        const isMyTeam = id === state.myTeamId;
        col.innerHTML += `
          <div class="bracket-team ${isMyTeam ? 'my-team' : ''}" style="margin-bottom:8px">
            <span class="bracket-team-flag">${team.flag}</span>
            <span class="bracket-team-name">${team.name}</span>
            <span class="bracket-team-score" style="background:transparent;color:var(--gold);font-weight:bold">${stat.points} pts</span>
          </div>
        `;
      });
      wrapper.appendChild(col);
    });

  } else {
    // Show Knockouts
    wrapper.style.cssText = 'display:flex;align-items:center;gap:0;padding-top:50px;position:relative;';

    const phases = ['r32', 'r16', 'qf', 'sf', 'final'];
    phases.forEach(p => {
      if (!state.knockoutRounds[p]) return;
      const col = document.createElement('div');
      col.className = 'bracket-round';

      const title = document.createElement('div');
      title.className = 'bracket-round-title';
      title.textContent = ROUND_NAMES[p] || p;
      col.appendChild(title);

      state.knockoutRounds[p].forEach(match => {
        const matchEl = createBracketMatch(match, state);
        col.appendChild(matchEl);
      });

      wrapper.appendChild(col);
    });

    // Champion display
    if (state.champion) {
      const t = state.teamRatings[state.champion];
      const champEl = document.createElement('div');
      champEl.className = 'bracket-champion';
      champEl.innerHTML = `
        <div class="bracket-trophy">🏆</div>
        <div style="font-size:2rem">${t?.flag || '🏆'}</div>
        <div class="bracket-champion-name">${t?.name || 'Campeón'}</div>
      `;
      wrapper.appendChild(champEl);
    }
  }

  container.appendChild(wrapper);
}

function createBracketMatch(match, state) {
  const team1 = state.teamRatings[match.team1Id];
  const team2 = state.teamRatings[match.team2Id];

  const el = document.createElement('div');
  el.className = 'bracket-match';

  const makeTeam = (team, isWinner, score) => {
    const div = document.createElement('div');
    div.className = `bracket-team${isWinner ? ' winner' : ''}${team?.id === state.myTeamId ? ' my-team' : ''}`;
    div.innerHTML = `
      <span class="bracket-team-flag">${team?.flag || '🏳'}</span>
      <span class="bracket-team-name">${team?.name || '—'}</span>
      ${score !== null ? `<span class="bracket-team-score">${score}</span>` : ''}
    `;
    return div;
  };

  const t1Winner = match.simulated && match.winnerId === match.team1Id;
  const t2Winner = match.simulated && match.winnerId === match.team2Id;

  el.appendChild(makeTeam(team1, t1Winner, match.simulated ? match.score1 : null));
  el.appendChild(makeTeam(team2, t2Winner, match.simulated ? match.score2 : null));

  return el;
}

// ─── Football Pitch Formation ─────────────────────────────
export function renderFormation(container, players, kitColors, formationId = '4-3-3') {
  container.innerHTML = `
    <div class="pitch">
      <div class="pitch-center-line"></div>
      <div class="pitch-penalty-top"></div>
      <div class="pitch-penalty-bottom"></div>
    </div>
    <div class="pitch-players" id="pitch-players-inner"></div>
  `;

  const pitchPlayers = container.querySelector('#pitch-players-inner');
  const formationDef = FORMATIONS[formationId] || FORMATIONS['4-3-3'];
  const posLayout = formationDef.positions;

  const startingXI = getStartingXI(players);
  const posCounters = { GK: 0, DEF: 0, MID: 0, FWD: 0 };

  startingXI.forEach(player => {
    const pos = player.position;
    const posIdx = posCounters[pos] || 0;
    posCounters[pos]++;

    const positions = posLayout[pos];
    if (!positions) return;
    const posData = positions[posIdx % positions.length];

    const dot = document.createElement('div');
    dot.className = 'pitch-player';
    dot.style.left = `${posData.x}%`;
    dot.style.top  = `${posData.y}%`;

    const ratingClass = player.rating >= 90 ? 'very-high' : (player.rating >= 82 ? 'high' : '');
    const shortName = player.name.split(' ').pop();
    
    dot.innerHTML = `
      <div class="player-dot" style="background:${kitColors?.shirt || '#fff'}">
        <span class="player-dot-number" style="color:${kitColors?.number || '#000'}">${player.number}</span>
      </div>
      <div class="player-pitch-rating ${ratingClass}">${player.rating}</div>
      <div class="player-pitch-name">${shortName}</div>
    `;

    pitchPlayers.appendChild(dot);
  });
}

function getStartingXI(players) {
  // Return the players that have been explicitly selected as starters
  // If none are selected (legacy/fallback), it will just return empty array
  // but we auto-assign them now in app.js and tournament.js
  return players.filter(p => p.isStarter);
}

// ─── Match Event Timeline Renderer ────────────────────────
export function renderMatchEvent(eventsContainer, event, team1Name, team2Name) {
  const el = document.createElement('div');
  el.className = `match-event ${event.team}`;

  const icons = {
    goal:         '⚽',
    penalty_goal: '⚽',
    own_goal:     '🥅',
    yellow:       '🟨',
    red:          '🟥',
    save:         '🧤',
    miss:         '💨',
  };

  const labels = {
    goal:         'Gol',
    penalty_goal: 'Penalti',
    own_goal:     'Gol en propia',
    yellow:       'Tarjeta amarilla',
    red:          'Tarjeta roja',
    save:         `${event.count || 1} parada${(event.count || 1) > 1 ? 's' : ''}`,
    miss:         'Ocasión fallada',
  };

  const teamName = event.team === 'home' ? team1Name : team2Name;
  const playerName = event.player?.name || '—';

  el.innerHTML = `
    <span class="event-time">${event.minute}'</span>
    <span class="event-icon">${icons[event.type] || '•'}</span>
    <div class="event-text">
      <div class="event-player">${playerName}</div>
      <div class="event-detail">${labels[event.type] || event.type} · ${teamName}</div>
      ${event.assist ? `<div class="event-detail">Assist: ${event.assist.name}</div>` : ''}
    </div>
  `;

  eventsContainer.appendChild(el);
}

// ─── Match Stats Panel ────────────────────────────────────
export function renderMatchStats(container, matchResult, team1, team2) {
  // Try goals1/goals2 first (if it's a raw result from simulateMatch), otherwise score1/score2 (if it's a tournament match)
  const goals1   = matchResult.goals1 !== undefined ? matchResult.goals1 : matchResult.score1;
  const goals2   = matchResult.goals2 !== undefined ? matchResult.goals2 : matchResult.score2;
  const events   = matchResult.events;

  const shots1   = goals1 + Math.floor(Math.random() * 8) + 3;
  const shots2   = goals2 + Math.floor(Math.random() * 8) + 3;
  const poss1    = Math.round(40 + Math.random() * 20);
  const poss2    = 100 - poss1;

  const yellow1  = events.filter(e => e.type === 'yellow' && e.team === 'home').length;
  const yellow2  = events.filter(e => e.type === 'yellow' && e.team === 'away').length;
  const red1     = events.filter(e => e.type === 'red' && e.team === 'home').length;
  const red2     = events.filter(e => e.type === 'red' && e.team === 'away').length;

  const saves1 = events.find(e => e.type === 'save' && e.team === 'home')?.count || 0;
  const saves2 = events.find(e => e.type === 'save' && e.team === 'away')?.count || 0;

  const stats = [
    { label: 'Goles',      v1: goals1,  v2: goals2  },
    { label: 'Posesión',   v1: `${poss1}%`, v2: `${poss2}%`, raw1: poss1, raw2: poss2 },
    { label: 'Tiros',      v1: shots1,  v2: shots2  },
    { label: 'Paradas',    v1: saves1,  v2: saves2  },
    { label: 'Amarillas',  v1: yellow1, v2: yellow2 },
    { label: 'Rojas',      v1: red1,    v2: red2    },
  ];

  container.innerHTML = stats.map(s => {
    const r1 = s.raw1 !== undefined ? s.raw1 : (typeof s.v1 === 'number' ? s.v1 : 0);
    const r2 = s.raw2 !== undefined ? s.raw2 : (typeof s.v2 === 'number' ? s.v2 : 0);
    const total = r1 + r2 || 1;
    const w1 = Math.round((r1 / total) * 100);
    const w2 = 100 - w1;

    return `
      <div class="stat-bar-row">
        <div class="stat-value-home">${s.v1}</div>
        <div style="flex:1;display:flex;flex-direction:column;gap:4px;align-items:center;">
          <div class="stat-label">${s.label}</div>
          <div style="width:100%;display:flex;gap:4px;height:4px;">
            <div style="flex:${w1};background:var(--blue);border-radius:2px;transition:flex 1s;"></div>
            <div style="flex:${w2};background:var(--red);border-radius:2px;transition:flex 1s;"></div>
          </div>
        </div>
        <div class="stat-value-away">${s.v2}</div>
      </div>
    `;
  }).join('');
}

// ─── Scorers Table ────────────────────────────────────────
export function renderScorersTable(container, scorers, teamRatings) {
  const medals = ['🥇', '🥈', '🥉'];
  container.innerHTML = scorers.map((s, i) => {
    const team = teamRatings[s.countryId];
    const player = team?.players.find(p => p.id === s.playerId);
    const name = player?.name || s.playerId;

    return `
      <div class="stats-row">
        <div class="stats-rank ${i < 3 ? 'top-3' : ''}">${medals[i] || (i + 1)}</div>
        <div class="stats-player-name">${name}</div>
        <div class="stats-country-badge">${team?.flag || ''} ${team?.name || ''}</div>
        <div class="stats-value">${s.goals} ⚽</div>
      </div>
    `;
  }).join('') || '<p style="color:var(--text-muted);text-align:center;padding:20px">No hay goles aún</p>';
}

// ─── Teams Table ──────────────────────────────────────────
export function renderTeamsTable(container, standings) {
  container.innerHTML = standings.slice(0, 20).map((t, i) => {
    return `
      <div class="stats-row">
        <div class="stats-rank ${i < 3 ? 'top-3' : ''}">${i + 1}</div>
        <div class="stats-player-name">${t.flag} ${t.name}</div>
        <div class="stats-country-badge">${t.wins}V · ${t.losses}D · ${t.goalsFor} goles</div>
        <div class="stats-value">${t.rating.toFixed(2)}</div>
      </div>
    `;
  }).join('') || '<p style="color:var(--text-muted);text-align:center;padding:20px">Sin datos</p>';
}

// ─── My Players Table ─────────────────────────────────────
export function renderMyPlayersTable(container, players, onToggleStarter) {
  const header = `
    <div class="my-player-header">
      <span class="stat-col" style="width:40px">TITULAR</span>
      <span>#</span>
      <span>Jugador</span>
      <span class="stat-col">POS</span>
      <span class="stat-col">⚽</span>
      <span class="stat-col">🅰️</span>
      <span class="stat-col">🧤</span>
      <span class="stat-col">🟨</span>
    </div>
  `;

  const rows = players.map(p => {
    const ratingClass = p.rating >= 90 ? 'very-high' : p.rating >= 82 ? 'high' : '';
    return `
      <div class="my-player-row ${p.isStarter ? 'starter-row' : ''}">
        <span class="stat-col" style="width:40px">
          <input type="checkbox" class="toggle-starter-cb" data-id="${p.id}" ${p.isStarter ? 'checked' : ''} />
        </span>
        <span class="player-number">${p.number}</span>
        <span class="player-name">${p.name}</span>
        <span class="stat-col"><span class="pos-badge ${p.position}">${p.position}</span></span>
        <span class="stat-val goals">${p.goals || 0}</span>
        <span class="stat-val assists">${p.assists || 0}</span>
        <span class="stat-val">${p.saves || 0}</span>
        <span class="stat-val cards">${p.yellowCards || 0}</span>
      </div>
    `;
  }).join('');

  container.innerHTML = header + rows;
  
  if (onToggleStarter) {
    container.querySelectorAll('.toggle-starter-cb').forEach(cb => {
      cb.addEventListener('change', (e) => {
        onToggleStarter(e.target.dataset.id, e.target.checked);
      });
    });
  }
}

// ─── Confetti ─────────────────────────────────────────────
export function launchConfetti(container) {
  const colors = ['#FFD700', '#FF8C00', '#00D4FF', '#00C853', '#FF3B3B', '#FFFFFF'];
  for (let i = 0; i < 80; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.cssText = `
      left: ${Math.random() * 100}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      width: ${4 + Math.random() * 8}px;
      height: ${4 + Math.random() * 8}px;
      border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
      animation-duration: ${2 + Math.random() * 3}s;
      animation-delay: ${Math.random() * 2}s;
    `;
    container.appendChild(piece);
  }
}

// ─── Progress Steps Update ────────────────────────────────
export function updateProgressSteps(currentViewPhase, actualPhaseId, onPhaseClick) {
  const container = document.getElementById('progress-steps');
  if (!container) return;

  const ALL_PHASES = [
    { id: 'groups_1', label: 'Grupos J1', short: 'J1' },
    { id: 'groups_2', label: 'Grupos J2', short: 'J2' },
    { id: 'groups_3', label: 'Grupos J3', short: 'J3' },
    { id: 'r32',      label: 'Dieciseisavos', short: 'R32' },
    { id: 'r16',      label: 'Octavos',   short: 'R16' },
    { id: 'qf',       label: 'Cuartos',   short: 'QF' },
    { id: 'sf',       label: 'Semis',     short: 'SF' },
    { id: 'final',    label: 'Final',     short: '🏆' },
  ];

  const viewIndex   = ALL_PHASES.findIndex(p => p.id === currentViewPhase);
  const actualIndex = ALL_PHASES.findIndex(p => p.id === actualPhaseId);

  container.innerHTML = '';

  ALL_PHASES.forEach((phase, idx) => {
    const step = document.createElement('div');
    step.className = 'progress-step';

    const isFuture  = idx > actualIndex;
    const isActive  = idx === viewIndex;
    const isDone    = idx < actualIndex || (idx === actualIndex && idx < viewIndex);
    const isPast    = idx < viewIndex;

    if (isActive) step.classList.add('active');
    if (isDone || isPast) step.classList.add('done');
    if (isFuture) step.classList.add('future');

    const canClick = !isFuture && onPhaseClick;

    step.innerHTML = `<span>${phase.short}</span>`;
    step.title = phase.label;

    if (canClick) {
      step.style.cursor = 'pointer';
      step.addEventListener('click', () => onPhaseClick(phase.id));
    } else {
      step.style.cursor = 'default';
    }

    container.appendChild(step);
  });
}

// ─── Coach Display ────────────────────────────────────────
export function renderCoach(container, user, countryName) {
  const photoURL = user?.photoURL;
  const name = user?.displayName || 'Seleccionador';

  container.innerHTML = `
    ${photoURL
      ? `<img class="coach-avatar" src="${photoURL}" alt="${name}" />`
      : `<div class="coach-avatar-placeholder">🧑‍💼</div>`
    }
    <div class="coach-info">
      <div class="coach-name">${name}</div>
      <div class="coach-title">Seleccionador de ${countryName || 'Tu Equipo'}</div>
    </div>
  `;
}
