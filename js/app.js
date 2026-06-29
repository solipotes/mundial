// ══════════════════════════════════════════════════════════
//  APP.JS — Main entry point and application orchestrator
// ══════════════════════════════════════════════════════════

import { initAuth, signInWithGoogle, logOut, getCurrentUser, getUserProfile } from './auth.js';
import { COUNTRIES as COUNTRIES_HISTORIC }                                   from './countries.js';
import { COUNTRIES as COUNTRIES_2026 }                                       from './countries_2026.js';
import {
  createTournamentState2026 as createTournamentState, 
  advanceTournament2026 as advanceTournament, 
  getMyNextMatch2026 as getMyNextMatch,
  isMyTeamAlive2026 as isMyTeamAlive, 
  isMatchdayDone2026 as isMatchdayDone, 
  isKnockoutPhaseDone2026 as isKnockoutPhaseDone, 
  isGroupStageDone2026 as isGroupStageDone,
  PHASE_NAMES_2026 as PHASE_NAMES,
  getCurrentMatchdayMatches2026 as getCurrentMatchdayMatches,
  computeGroupStandings
} from './tournament_2026.js';
import { getTopScorers, getTopAssists, getMostCards, assignDefaultStarters } from './tournament.js';
import { FORMATIONS, autoSelectStarters, enforceFormationLimits } from './formations.js';
import { simulateRound, applyMatchResult, simulateMatch, generateNarrative } from './simulation.js';
import {
  initMultiplayerUI,
  openLobby,
  joinAndOpenLobby,
  checkUrlForJoinPin,
  getMpCurrentPin,
  renderMpNextRoundBanner,
  renderMpPlayersStrip,
  trySimulateMpRound,
  advanceMpPhase,
} from './multiplayer-ui.js';
import {
  showView, showToast, showLoading, hideLoading,
  renderCountryGrid, renderSquadList, renderMatchCard,
  renderBracket, renderFormation, renderJersey,
  renderMatchEvent, renderMatchStats, renderScorersTable,
  renderTeamsTable, renderMyPlayersTable, renderCoach,
  launchConfetti, updateProgressSteps
} from './ui.js';
import {
  saveLocalTournament, loadLocalTournament, clearLocalTournament,
  saveLocalMyTeam, loadLocalMyTeam, saveLocalUserProfile, loadLocalUserProfile,
  loadCustomTeamLocally, saveCustomTeamLocally,
  saveLocalTournamentHistory, loadLocalTournamentHistory
} from './db.js';
import { checkIsAdmin, initAdminDashboard } from './admin.js';

// ─── App State ────────────────────────────────────────────
let appState = {
  user:           null,
  myTeam:         null,    // selected country + custom kit + players
  tournament:     null,    // full tournament state
  currentKit:     'home',  // 'home' | 'away'
  editingPlayer:  null,    // player being edited in modal
  tournamentType: '2026',  // '2026' | 'historic'
  isMultiplayer:  false,   // true when playing a shared tournament
  mpPin:          null,    // current multiplayer room PIN
  mpUnsubscribe:  null,    // Firestore onSnapshot cleanup fn
  mpMyCountryId:  null,    // this player's country in the MP tournament
  isAdmin:        false,   // true if user is admin
};

// Helper to get active countries
function getActiveCountries() {
  return appState.tournamentType === '2026' ? COUNTRIES_2026 : COUNTRIES_HISTORIC;
}

function getCountryById(id) {
  return getActiveCountries().find(c => c.id === id);
}

// ─── Boot ─────────────────────────────────────────────────
async function boot() {
  showLoading('Iniciando Mundial...');

  // Bind global events
  bindAuthEvents();
  bindNavEvents();
  bindSetupEvents();
  bindMatchEvents();
  bindTeamEvents();
  bindStatsEvents();

  // Listen for mp-tournament-ready (dispatched when lobby goes active)
  window.addEventListener('mp-tournament-ready', (e) => {
    const { data, state, myCountryId, pin } = e.detail;
    appState.isMultiplayer  = true;
    appState.mpPin          = pin;
    appState.mpMyCountryId  = myCountryId;
    appState.tournament     = state;
    appState.myTeam         = state.teamRatings?.[myCountryId] || null;
    enterAppShell();
  });

  // Listen for mp-state-updated (real-time Firestore push while in dashboard)
  window.addEventListener('mp-state-updated', (e) => {
    if (!appState.isMultiplayer) return;
    const { state } = e.detail;
    state.myTeamId = appState.mpMyCountryId;
    appState.tournament = state;
    // Only re-render if dashboard is visible
    const dashView = document.getElementById('view-dashboard');
    if (dashView && !dashView.classList.contains('hidden')) {
      refreshDashboard();
      showToast('🔄 Resultados actualizados', 'info');
    }
  });

  // Check URL for auto-join (?join=XXXX)
  const joinPin = checkUrlForJoinPin();
  if (joinPin) {
    // Clean URL without reloading
    window.history.replaceState({}, '', window.location.pathname);
    // Store pin for after auth
    window._pendingJoinPin = joinPin;
  }

  // Check if Firebase is configured
  const isFirebaseConfigured = checkFirebaseConfig();

  try {
    if (isFirebaseConfigured) {
      // Real Firebase auth
      const user = await initAuth();
      handleAuthChange(user);
    } else {
      // Demo mode: use localStorage
      showToast('Modo demo — Firebase no configurado. Los datos se guardan localmente.', 'info', 5000);
      const localProfile = loadLocalUserProfile();
      if (localProfile) {
        appState.user = localProfile;
        handleAuthChange({ ...localProfile, uid: localProfile.uid || 'demo_user' });
      } else {
        hideLoading();
        showView('auth');
      }
    }
  } catch (err) {
    console.error('Boot error:', err);
    showToast('Error al conectar con Firebase. Usando modo local.', 'error');
    hideLoading();
    showView('auth');
  }
}

function checkFirebaseConfig() {
  try {
    // Dynamically check if the API key has been replaced
    return !document.querySelector('script[src*="firebase"]')?.textContent?.includes('YOUR_API_KEY');
  } catch {
    return false;
  }
}

// ─── Auth Events ──────────────────────────────────────────
function bindAuthEvents() {
  document.getElementById('btn-google-login')?.addEventListener('click', async () => {
    try {
      showLoading('Iniciando sesión...');
      const user = await signInWithGoogle();
      if (user) {
        handleAuthChange(user);
      } else {
        hideLoading();
      }
    } catch (err) {
      console.error('Login error:', err);
      // Demo mode fallback
      const demoUser = {
        uid:         'demo_' + Date.now(),
        displayName: 'Jugador Demo',
        email:       'demo@mundial.sim',
        photoURL:    null,
      };
      saveLocalUserProfile(demoUser);
      appState.user = demoUser;
      handleAuthChange(demoUser);
      showToast('Entrando en modo demo (Firebase no configurado)', 'info');
    }
  });

  document.getElementById('btn-logout')?.addEventListener('click', async () => {
    await logOut();
    appState = { user: null, myTeam: null, tournament: null, currentKit: 'home', editingPlayer: null };
    clearLocalTournament();
    updateNavVisibility();
    showView('auth');
    showToast('Sesión cerrada', 'info');
  });

  // Home View Buttons
  document.getElementById('btn-home-new-2026')?.addEventListener('click', () => {
    appState.tournamentType = '2026';
    showSetupView();
  });
  
  document.getElementById('btn-home-new-historic')?.addEventListener('click', () => {
    appState.tournamentType = 'historic';
    showSetupView();
  });
  
  document.getElementById('btn-home-continue')?.addEventListener('click', () => {
    if (appState.tournament) {
      enterAppShell();
    }
  });
  
  document.getElementById('btn-home-halloffame')?.addEventListener('click', () => {
    showView('halloffame');
    renderHallOfFame();
  });
}

// ─── Auth Change Handler ───────────────────────────────────
async function handleAuthChange(user) {
  if (!user) {
    hideLoading();
    showView('auth');
    return;
  }

  appState.user = getUserProfile(user) || user;
  saveLocalUserProfile(appState.user);

  // Update avatar
  const avatarImg = document.getElementById('user-avatar');
  if (avatarImg && appState.user.photoURL) {
    avatarImg.src = appState.user.photoURL;
    avatarImg.alt = appState.user.displayName;
  }

  // Initialize multiplayer UI module
  initMultiplayerUI(appState.user);

  // Check Admin Status
  appState.isAdmin = await checkIsAdmin(appState.user.uid);
  if (appState.isAdmin) {
    document.getElementById('nav-admin')?.classList.remove('hidden');
    document.getElementById('mobile-nav-admin')?.classList.remove('hidden');
  } else {
    document.getElementById('nav-admin')?.classList.add('hidden');
    document.getElementById('mobile-nav-admin')?.classList.add('hidden');
  }

  // Load saved state
  const savedTeam        = await loadLocalMyTeam();
  const activeTournament = await loadLocalTournament();
  if (activeTournament) {
    appState.tournament = activeTournament;
    let loadedType = activeTournament.tournamentType || '2026';
    if (loadedType === 'wc2026') loadedType = '2026';
    appState.tournamentType = loadedType;
  }

  // Check for pending join pin from URL
  if (window._pendingJoinPin) {
    const pin = window._pendingJoinPin;
    window._pendingJoinPin = null;
    hideLoading();
    joinAndOpenLobby(pin);
    return;
  }

  if (appState.tournament && appState.tournament.myTeamId) {
    // Resume tournament
    appState.myTeam = savedTeam;
    hideLoading();
    showHomeView(true);
  } else if (savedTeam && savedTeam.id) {
    // Has team but no tournament
    appState.myTeam = savedTeam;
    hideLoading();
    showHomeView(false);
  } else {
    // Fresh start
    hideLoading();
    showHomeView(false);
  }
}

// ─── Update Navigation Visibility ─────────────────────────
function updateNavVisibility() {
  const hasTournament = !!appState.tournament;
  
  // Navigation buttons
  const navButtons = {
    'nav-home':      true,                // SIEMPRE mostrar
    'nav-dashboard': !hasTournament,       // Mostrar solo sin torneo
    'nav-bracket':   hasTournament,        // Mostrar solo CON torneo
    'nav-myteam':    hasTournament,        // Mostrar solo CON torneo
    'nav-stats':     hasTournament,        // Mostrar solo CON torneo
    'nav-halloffame': !hasTournament,      // Mostrar solo sin torneo
  };
  
  // Actualizar desktop nav
  Object.entries(navButtons).forEach(([id, shouldShow]) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.classList.toggle('hidden', !shouldShow);
    }
  });
  
  // Actualizar mobile nav
  document.querySelectorAll('.mobile-nav-btn').forEach((btn) => {
    const view = btn.dataset.view;
    let shouldShow;
    
    if (view === 'home') {
      shouldShow = true;  // SIEMPRE mostrar home
    } else if (view === 'dashboard' || view === 'halloffame') {
      shouldShow = !hasTournament;
    } else {
      shouldShow = hasTournament;
    }
    
    btn.classList.toggle('hidden', !shouldShow);
  });
}

// ─── Home View ────────────────────────────────────────────
function showHomeView(hasActiveTournament) {
  showView('home');
  updateNavVisibility();
  
  const btnContinue = document.getElementById('btn-home-continue');
  if (hasActiveTournament) {
    btnContinue.classList.remove('hidden');
  } else {
    btnContinue.classList.add('hidden');
  }
}

// ─── Setup View ───────────────────────────────────────────
function showSetupView() {
  showView('setup');
  renderCountryGrid(
    document.getElementById('country-grid'),
    getActiveCountries(),
    (country) => handleCountrySelected(country)
  );

  // Country search
  document.getElementById('country-search')?.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    document.querySelectorAll('.country-card').forEach(card => {
      const name = card.querySelector('.country-name')?.textContent.toLowerCase() || '';
      card.classList.toggle('hidden-filter', !name.includes(q));
    });
  });

  // If resuming with existing team, pre-select
  if (appState.myTeam) {
    setTimeout(() => {
      const card = document.querySelector(`.country-card[data-id="${appState.myTeam.id}"]`);
      if (card) {
        card.click();
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  }
}

// ─── Country Selected ─────────────────────────────────────
function handleCountrySelected(country) {
  // First try to load globally saved custom team using tournament-specific key
  const customKey = `${appState.tournamentType}_${country.id}`;
  const customTeam = loadCustomTeamLocally(customKey);
  
  const existingTeam = appState.myTeam?.id === country.id
    ? appState.myTeam
    : (customTeam || null);

  // Build team object (merge with existing custom data)
  let initialPlayers = existingTeam?.players || JSON.parse(JSON.stringify(country.players));
  if (!initialPlayers.some(p => p.isStarter)) {
    initialPlayers = assignDefaultStarters(initialPlayers);
  }
  
  appState.myTeam = {
    ...country,
    tournamentType: appState.tournamentType,
    players: initialPlayers,
    kitHome: existingTeam?.kitHome || { ...country.kitHome },
    kitAway: existingTeam?.kitAway || { ...country.kitAway },
  };

  // Show editor
  const editor = document.getElementById('setup-team-editor');
  editor.classList.remove('hidden');

  // Render country info
  document.getElementById('selected-country-info').innerHTML = `
    <div class="country-info-flag">${country.flag}</div>
    <div class="country-info-text">
      <h2>${country.name}</h2>
      <p>${country.coach} · ${country.continent}</p>
    </div>
  `;

  // Render kit
  renderKitEditor('home');
  renderSquadEditor();

  editor.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ─── Kit Editor ───────────────────────────────────────────
function renderKitEditor(kitType) {
  appState.currentKit = kitType;
  const kit = appState.myTeam?.[`kit${kitType.charAt(0).toUpperCase() + kitType.slice(1)}`] || {};

  document.getElementById('kit-shirt-color').value  = kit.shirt  || '#FF0000';
  document.getElementById('kit-shorts-color').value = kit.shorts || '#000000';
  document.getElementById('kit-socks-color').value  = kit.socks  || '#FF0000';

  const container = document.getElementById('kit-preview');
  if (container) renderJersey(container, kit);
}

function bindSetupEvents() {
  // Kit tabs
  document.querySelectorAll('.kit-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.kit-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderKitEditor(tab.dataset.kit);
    });
  });

  // Color pickers
  ['shirt', 'shorts', 'socks'].forEach(prop => {
    document.getElementById(`kit-${prop}-color`)?.addEventListener('input', (e) => {
      const kitKey = `kit${appState.currentKit.charAt(0).toUpperCase() + appState.currentKit.slice(1)}`;
      if (appState.myTeam?.[kitKey]) {
        appState.myTeam[kitKey][prop] = e.target.value;
        const container = document.getElementById('kit-preview');
        if (container) renderJersey(container, appState.myTeam[kitKey]);
      }
    });
  });

  // Squad position tabs
  document.querySelectorAll('.squad-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.squad-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderSquadEditor(tab.dataset.pos);
    });
  });

  // Add player
  document.getElementById('btn-add-player')?.addEventListener('click', () => {
    openPlayerModal(null);
  });

  // Confirm selection
  document.getElementById('btn-confirm-selection')?.addEventListener('click', () => {
    if (!appState.myTeam) {
      showToast('Selecciona un país primero', 'error');
      return;
    }
    saveLocalMyTeam(appState.myTeam);
    startTournament();
  });

  // Player modal events
  bindPlayerModalEvents();
}

// ─── Squad Editor ─────────────────────────────────────────
function renderSquadEditor(filterPos = 'ALL') {
  const list = document.getElementById('squad-list');
  if (!list || !appState.myTeam) return;

  renderSquadList(list, appState.myTeam.players, filterPos, (player) => {
    openPlayerModal(player);
  }, (playerId, isStarter) => {
    const currentStarters = appState.myTeam.players.filter(p => p.isStarter).length;
    if (isStarter && currentStarters >= 11) {
      showToast('Ya tienes 11 titulares elegidos. Quita uno primero.', 'warning');
      renderSquadEditor(filterPos);
      return;
    }
    const player = appState.myTeam.players.find(p => p.id === playerId);
    if (player) {
      player.isStarter = isStarter;
      saveLocalMyTeam(appState.myTeam);
      renderSquadEditor(filterPos);
    }
  });
}

// ─── Player Modal ─────────────────────────────────────────
function openPlayerModal(player) {
  appState.editingPlayer = player;
  const modal = document.getElementById('modal-player');
  const title = document.getElementById('modal-player-title');

  title.textContent = player ? `Editar: ${player.name}` : 'Nuevo Jugador';

  document.getElementById('player-name-input').value     = player?.name     || '';
  document.getElementById('player-position-input').value = player?.position || 'MID';
  document.getElementById('player-number-input').value   = player?.number   || '';
  document.getElementById('player-rating-input').value   = player?.rating   || 75;
  document.getElementById('rating-display').textContent  = player?.rating   || 75;

  document.getElementById('btn-delete-player').style.display = player ? 'block' : 'none';

  modal.classList.remove('hidden');
}

function bindPlayerModalEvents() {
  document.getElementById('btn-close-player-modal')?.addEventListener('click', () => {
    document.getElementById('modal-player')?.classList.add('hidden');
  });

  document.getElementById('player-rating-input')?.addEventListener('input', (e) => {
    document.getElementById('rating-display').textContent = e.target.value;
  });

  document.getElementById('btn-save-player')?.addEventListener('click', () => {
    const name     = document.getElementById('player-name-input').value.trim();
    const position = document.getElementById('player-position-input').value;
    const number   = parseInt(document.getElementById('player-number-input').value) || 99;
    const rating   = parseInt(document.getElementById('player-rating-input').value) || 75;

    if (!name) { showToast('El nombre es obligatorio', 'error'); return; }

    const players = appState.myTeam.players;

    if (appState.editingPlayer) {
      // Edit existing
      const idx = players.findIndex(p => p.id === appState.editingPlayer.id);
      if (idx !== -1) {
        players[idx] = { ...players[idx], name, position, number, rating };
      }
    } else {
      // Add new
      const newId = `${appState.myTeam.id}_${Date.now()}`;
      players.push({
        id: newId, name, position, number, rating,
        goals: 0, assists: 0, saves: 0, yellowCards: 0, redCards: 0
      });
    }

    saveLocalMyTeam(appState.myTeam);
    document.getElementById('modal-player')?.classList.add('hidden');
    renderSquadEditor();
    showToast('Jugador guardado ✓', 'success');
  });

  document.getElementById('btn-delete-player')?.addEventListener('click', () => {
    if (!appState.editingPlayer) return;
    appState.myTeam.players = appState.myTeam.players.filter(
      p => p.id !== appState.editingPlayer.id
    );
    saveLocalMyTeam(appState.myTeam);
    document.getElementById('modal-player')?.classList.add('hidden');
    renderSquadEditor();
    showToast('Jugador eliminado', 'info');
  });
}

// ─── Start Tournament ─────────────────────────────────────
function startTournament() {
  showLoading('Realizando el sorteo...');

  // Brief delay for dramatic effect
  setTimeout(() => {
    const state = createTournamentState(getActiveCountries(), appState.myTeam.id);

    // Apply custom players to my team
    state.teamRatings[appState.myTeam.id].players  = appState.myTeam.players;
    state.teamRatings[appState.myTeam.id].kitHome  = appState.myTeam.kitHome;
    state.teamRatings[appState.myTeam.id].kitAway  = appState.myTeam.kitAway;

    state.tournamentType = appState.tournamentType;

    appState.tournament = state;
    saveLocalTournament(state);

    hideLoading();
    showToast(`¡El sorteo ha concluido! ${appState.myTeam.flag} ${appState.myTeam.name} está en el torneo`, 'success', 4000);
    enterAppShell();
  }, 1500);
}

// ─── Enter App Shell ──────────────────────────────────────
function enterAppShell() {
  updateNavVisibility();
  showView('dashboard');
  refreshDashboard();

}

// ─── Navigation ───────────────────────────────────────────
function bindNavEvents() {
  document.querySelectorAll('[data-view]').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      showView(view);
      switch (view) {
        case 'dashboard': refreshDashboard(); break;
        case 'bracket':   refreshBracket();   break;
        case 'myteam':    refreshMyTeam();    break;
        case 'stats':     refreshStats();     break;
        case 'halloffame': renderHallOfFame(); break;
        case 'admin':     if(appState.isAdmin) initAdminDashboard(appState.user.uid); break;
      }
    });
  });
}

// ─── Phase Pagination Helpers ─────────────────────────────
const TOURNAMENT_PHASES = ['groups_1', 'groups_2', 'groups_3', 'r32', 'r16', 'qf', 'sf', 'final'];

function getCurrentPhaseId(state) {
  if (state.phase === 'groups') return `groups_${state.groupMatchday}`;
  return state.phase;
}

// ─── Dashboard ────────────────────────────────────────────
function refreshDashboard() {
  if (!appState.tournament) return;
  const state = appState.tournament;
  
  // Reset visibility of sections that might have been hidden by Champion Screen
  document.getElementById('champions-screen')?.classList.add('hidden');
  document.getElementById('round-results')?.classList.add('hidden');
  document.getElementById('simulate-section')?.classList.remove('hidden');

  document.querySelector('.matches-grid')?.parentElement.classList.remove('hidden');

  const actualPhaseId = getCurrentPhaseId(state);
  const actualIndex = TOURNAMENT_PHASES.indexOf(actualPhaseId);

  // If no explicit viewingPhaseId, compute the best default
  let defaultPhaseId = actualPhaseId;
  if (!appState.viewingPhaseId) {
    // Always default to the current active phase, even if it hasn't been played yet.
    defaultPhaseId = actualPhaseId;
  }

  let viewPhaseId = appState.viewingPhaseId || defaultPhaseId;
  let viewIndex = TOURNAMENT_PHASES.indexOf(viewPhaseId);

  // Cap at actual
  if (viewIndex > actualIndex) {
    viewIndex = actualIndex;
    viewPhaseId = TOURNAMENT_PHASES[viewIndex];
    appState.viewingPhaseId = viewPhaseId;
  }

  // Always render progress bar so it's clickable
  updateProgressSteps(viewPhaseId, actualPhaseId, (phaseId) => {
    appState.viewingPhaseId = phaseId;
    refreshDashboard();
  });

  // If completed and not browsing, show champion screen (header already rendered)
  if (state.status === 'completed' && !appState.viewingPhaseId) {
    document.getElementById('current-round-badge').textContent = '🏆 Torneo Finalizado';
    document.getElementById('round-number').textContent = '—';
    showChampionScreen(state);
    return;
  }

  const isViewingPast = viewIndex < actualIndex || (viewIndex === actualIndex && (state.status === 'phase_done' || state.status === 'completed' || state.status === 'matchday_done'));

  let currentLabel = '';
  let roundNumber = '';
  
  if (viewPhaseId.startsWith('groups_')) {
    const day = viewPhaseId.split('_')[1];
    currentLabel = `Fase de Grupos - Jornada ${day}`;
    if (isViewingPast) currentLabel += ' (Completada)';
    roundNumber = `G${day}`;
  } else {
    currentLabel = PHASE_NAMES[viewPhaseId] || viewPhaseId;
    if (isViewingPast) currentLabel += ' (Completada)';
    roundNumber = viewPhaseId.toUpperCase();
  }

  // Round header
  document.getElementById('current-round-badge').textContent = currentLabel;
  document.getElementById('round-number').textContent = roundNumber;

  // My team status
  const myTeamRating = state.teamRatings[state.myTeamId];
  document.getElementById('status-flag').textContent  = myTeamRating?.flag || '🏳';
  document.getElementById('status-team-name').textContent = myTeamRating?.name || 'Mi Equipo';

  const myStats = myTeamRating?.stats;
  document.getElementById('status-record').textContent = myStats
    ? `${myStats.wins}V · ${myStats.draws}E · ${myStats.losses}D`
    : '—';

  const myMatch = getMyNextMatch(state);
  if (myMatch && !myMatch.simulated) {
    const opp = myMatch.team1Id === state.myTeamId
      ? state.teamRatings[myMatch.team2Id]
      : state.teamRatings[myMatch.team1Id];
    document.getElementById('status-opponent').textContent = `${opp?.flag || ''} ${opp?.name || '—'}`;
  } else {
    document.getElementById('status-opponent').textContent = isMyTeamAlive(state) ? 'Esperando rival' : '❌ Eliminado';
  }

  // Matches grid
  const matchesGrid = document.getElementById('matches-grid');
  matchesGrid.innerHTML = '';
  
  let matchesToRender = [];
  if (viewPhaseId.startsWith('groups_')) {
    const day = parseInt(viewPhaseId.split('_')[1]);
    Object.values(state.groupMatches || {}).forEach(groupArr => {
      if (groupArr[day - 1]) matchesToRender.push(...groupArr[day - 1]);
    });
  } else if (viewPhaseId === 'final') {
    matchesToRender = [...(state.knockoutRounds.final || []), state.thirdPlaceMatch].filter(Boolean);
  } else {
    matchesToRender = state.knockoutRounds[viewPhaseId] || [];
  }

  matchesToRender.forEach(match => {
    const card = renderMatchCard(match, state.teamRatings, state.myTeamId, (m) => {
      if (m.simulated) showMatchDetail(m);
    });
    if (card) matchesGrid.appendChild(card);
  });

  // Render history section


  // ── Multiplayer: show timer + player strip ────────────────
  if (appState.isMultiplayer) {
    const pin = appState.mpPin;
    const mpData = window._mpCurrentData; // kept updated by onSnapshot
    const nextRoundMs = mpData?.nextRoundAt?.toMillis?.() || 0;
    renderMpNextRoundBanner(nextRoundMs);
    renderMpPlayersStrip(
      state.humanPlayers || [],
      state.teamRatings,
      appState.mpMyCountryId
    );
  }

  // Manage visibility
  const simulateSection = document.getElementById('simulate-section');
  const resultsSection  = document.getElementById('round-results');

  if (viewIndex < actualIndex) {
    // Viewing a past phase: everything is read-only, hide actions
    simulateSection.classList.add('hidden');
    resultsSection.classList.add('hidden');
  } else {
    // Viewing current actual phase
    if (state.status === 'matchday_done' || state.status === 'phase_done' || state.status === 'completed') {
      simulateSection.classList.add('hidden');
      resultsSection.classList.remove('hidden');
      showRoundResults(state);
    } else {
      simulateSection.classList.remove('hidden');
      resultsSection.classList.add('hidden');
    }
  }
}

// ─── Match History ────────────────────────────────────────


// ─── Simulate Round ───────────────────────────────────────
function bindMatchEvents() {
  document.getElementById('btn-simulate-round')?.addEventListener('click', async () => {
    if (!appState.tournament) return;

    showLoading('Simulando partidos...');
    await new Promise(r => setTimeout(r, 800));

    let newState;

    // ── Multiplayer: simulate via Firestore ──────────────────
    if (appState.isMultiplayer && appState.mpPin) {
      newState = await trySimulateMpRound(appState.mpPin);
      if (!newState) {
        hideLoading();
        showToast('Aún no es hora de simular (faltan horas)', 'info');
        return;
      }
      appState.tournament = newState;
      // myTeamId in multiplayer is the humanPlayer's country
      appState.tournament.myTeamId = appState.mpMyCountryId;
    } else {
      // ── Solo: simulate locally ────────────────────────────
      newState = simulateRound(appState.tournament);

      if (newState.phase === 'groups') {
        if (isMatchdayDone(newState)) {
          newState.status = isGroupStageDone(newState) ? 'phase_done' : 'matchday_done';
          if (newState.groupMatchday === 3) newState.status = 'phase_done';
        }
      } else {
        if (isKnockoutPhaseDone(newState)) {
          if (newState.phase === 'final') {
            const finalMatch = newState.knockoutRounds.final?.[0];
            const thirdMatch = newState.thirdPlaceMatch;
            newState.champion = finalMatch?.winnerId || null;
            newState.thirdPlaceWinner = thirdMatch?.winnerId || null;
            newState.third = thirdMatch?.winnerId || null;
            if (finalMatch?.loserId) newState.eliminatedTeams.push(finalMatch.loserId);
            newState.status = 'completed';
          } else {
            newState.status = 'phase_done';
          }
        }
      }

      appState.tournament = newState;
      appState.viewingPhaseId = null;
      saveLocalTournament(newState);
    }

    appState.viewingPhaseId = null;
    hideLoading();
    refreshDashboard();
    showToast('¡Ronda completada!', 'success');
  });

  document.getElementById('btn-next-round')?.addEventListener('click', async () => {
    if (!appState.tournament) return;

    // If tournament already completed (browsing past), jump straight to podium
    if (appState.tournament.status === 'completed') {
      appState.viewingPhaseId = null;
      refreshDashboard();
      return;
    }

    let newState;
    if (appState.isMultiplayer && appState.mpPin) {
      showLoading('Avanzando fase...');
      newState = await advanceMpPhase(appState.mpPin);
      hideLoading();
      if (!newState) { showToast('Error al avanzar fase', 'error'); return; }
      appState.tournament = newState;
      appState.tournament.myTeamId = appState.mpMyCountryId;
    } else {
      newState = advanceTournament(appState.tournament);
      appState.tournament = newState;
      saveLocalTournament(newState);
    }

    appState.viewingPhaseId = null;

    if (newState.status === 'completed') {
      if (!appState.isMultiplayer) saveLocalTournamentHistory(newState);
      showView('dashboard');
      showChampionScreen(newState);
      return;
    }

    refreshDashboard();
  });

  document.getElementById('btn-new-tournament')?.addEventListener('click', () => {
    clearLocalTournament();
    appState.tournament = null;
    updateNavVisibility();
    showSetupView();
  });

  // Close match modal
  document.getElementById('btn-close-match')?.addEventListener('click', () => {
    document.getElementById('modal-match')?.classList.add('hidden');
  });

  document.getElementById('btn-match-done')?.addEventListener('click', () => {
    document.getElementById('modal-match')?.classList.add('hidden');
  });
}

// ─── Show Match Detail Modal ──────────────────────────────
async function showMatchDetail(match) {
  const state = appState.tournament;
  const team1 = state.teamRatings[match.team1Id];
  const team2 = state.teamRatings[match.team2Id];

  const modal = document.getElementById('modal-match');
  modal.classList.remove('hidden');

  // Set up scoreboard
  let label = PHASE_NAMES[state.phase] || '';
  if (state.phase === 'groups') label += ` - J${state.groupMatchday} (${match.group})`;
  document.getElementById('match-round-label').textContent = label;
  document.getElementById('sb-flag-home').textContent = team1.flag;
  document.getElementById('sb-flag-away').textContent = team2.flag;
  document.getElementById('sb-name-home').textContent = team1.name;
  document.getElementById('sb-name-away').textContent = team2.name;
  document.getElementById('sb-score-home').textContent = '0';
  document.getElementById('sb-score-away').textContent = '0';
  document.getElementById('sb-time').textContent = '0\'';
  document.getElementById('sb-status').textContent = 'En juego';
  document.getElementById('sb-status').className = 'sb-status live';

  // Clear events
  const eventsContainer = document.getElementById('match-events');
  eventsContainer.innerHTML = '';
  document.getElementById('match-stats-panel').classList.add('hidden');

  // Animate events
  const events = match.events || [];
  let scoreHome = 0, scoreAway = 0;

  for (let i = 0; i < events.length; i++) {
    await new Promise(r => setTimeout(r, 350));

    const ev = events[i];
    document.getElementById('sb-time').textContent = `${ev.minute}'`;

    if (['goal','penalty_goal','own_goal'].includes(ev.type)) {
      if (ev.type === 'own_goal') {
        // Own goal goes to opponent
        if (ev.team === 'home') scoreAway++;
        else scoreHome++;
      } else {
        if (ev.team === 'home') scoreHome++;
        else scoreAway++;
      }

      const scoreEl = ev.team === 'home'
        ? document.getElementById('sb-score-home')
        : document.getElementById('sb-score-away');
      const targetScore = ev.team === 'home'
        ? (ev.type === 'own_goal' ? scoreAway : scoreHome)
        : (ev.type === 'own_goal' ? scoreHome : scoreAway);

      scoreEl.textContent = targetScore;
      scoreEl.classList.add('score-bump');
      setTimeout(() => scoreEl.classList.remove('score-bump'), 400);

      document.getElementById('sb-score-home').textContent = scoreHome;
      document.getElementById('sb-score-away').textContent = scoreAway;
    }

    renderMatchEvent(eventsContainer, ev, team1.name, team2.name);
    eventsContainer.scrollTop = eventsContainer.scrollHeight;
  }

  // Final score
  document.getElementById('sb-time').textContent = '90\'';
  document.getElementById('sb-status').textContent = match.penalties ? 'Penaltis' : 'Final';
  document.getElementById('sb-status').className = 'sb-status end';
  document.getElementById('sb-time').className = 'sb-time stopped';

  // Final scores
  document.getElementById('sb-score-home').textContent = match.score1;
  document.getElementById('sb-score-away').textContent = match.score2;

  // Show stats panel after a short delay
  await new Promise(r => setTimeout(r, 500));
  const statsPanel = document.getElementById('match-stats-panel');
  statsPanel.classList.remove('hidden');

  // Render stats
  const statsContent = document.getElementById('match-stats-content');
  renderMatchStats(statsContent, match, team1, team2);

  // MOTM
  const motmEl = document.getElementById('motm-player');
  if (match.motm) {
    const s = match.motm.stats;
    motmEl.innerHTML = `
      <div class="motm-star">⭐</div>
      <div>
        <div class="motm-name">${match.motm.player?.name || 'Desconocido'}</div>
        <div class="motm-stats">
          ${s.goals > 0 ? `⚽ ${s.goals} gol(es)` : ''}
          ${s.assists > 0 ? `🅰️ ${s.assists} asist.` : ''}
          ${s.saves > 0 ? `🧤 ${s.saves} paradas` : ''}
        </div>
      </div>
      <div style="font-size:2rem">${state.teamRatings[match.motm.countryId]?.flag || ''}</div>
    `;
  } else {
    motmEl.innerHTML = `
      <div style="color:var(--text-muted); font-style:italic;">Ningún jugador destacó.</div>
    `;
  }
}

// ─── Round Results ────────────────────────────────────────
function showRoundResults(state) {
  const resultsSection = document.getElementById('round-results');
  const resultsGrid    = document.getElementById('results-grid');
  const eliminatedGrid = document.getElementById('eliminated-grid');
  resultsSection.classList.remove('hidden');

  let recentMatches = [];
  if (state.phase === 'groups') {
    recentMatches = getCurrentMatchdayMatches(state);
  } else if (state.phase === 'final') {
    recentMatches = [
      ...(state.knockoutRounds.final || []),
      state.thirdPlaceMatch
    ].filter(Boolean);
  } else {
    recentMatches = state.knockoutRounds[state.phase] || [];
  }
  
  resultsGrid.innerHTML = '';

  recentMatches.forEach((match, i) => {
    const isDraw = match.score1 === match.score2 && !match.penalties;
    const winner = !isDraw ? state.teamRatings[match.winnerId] : null;
    const loser  = !isDraw ? state.teamRatings[match.loserId] : null;
    const isMyWin = match.winnerId === state.myTeamId;
    const isMyLoss = match.loserId === state.myTeamId;
    const isMyDraw = isDraw && (match.team1Id === state.myTeamId || match.team2Id === state.myTeamId);

    const card = document.createElement('div');
    card.className = `result-card${isMyWin || isMyLoss || isMyDraw ? ' my-result' : ''}`;
    card.style.animationDelay = `${i * 0.05}s`;

    const penStr = match.penalties
      ? ` (${match.penalties.score1}-${match.penalties.score2} pen.)`
      : '';
      
    if (isDraw) {
      const t1 = state.teamRatings[match.team1Id];
      const t2 = state.teamRatings[match.team2Id];
      card.innerHTML = `
        <div class="result-winner">
          <div class="result-winner-flag">🤝</div>
          <div>
            <div class="result-winner-label">Empate</div>
            <div class="result-winner-name">${t1.name} y ${t2.name}</div>
          </div>
        </div>
        <div class="result-score-line">
          ${t1.name} ${match.score1} – ${match.score2} ${t2.name}
        </div>
      `;
    } else {
      card.innerHTML = `
        <div class="result-winner">
          <div class="result-winner-flag">${winner?.flag || '🏳'}</div>
          <div>
            <div class="result-winner-label">${isMyWin ? '🏆 ¡Tu equipo gana!' : 'Ganador'}</div>
            <div class="result-winner-name">${winner?.name || '—'}</div>
          </div>
        </div>
        <div class="result-score-line">
          ${winner?.name} ${match.score1 > match.score2 || match.winnerId === match.team1Id ? match.score1 : match.score2} –
          ${match.score1 > match.score2 || match.winnerId === match.team1Id ? match.score2 : match.score1}
          ${loser?.name}${penStr}
        </div>
        ${isMyLoss && state.phase !== 'groups' ? '<div style="color:var(--red);font-size:0.8rem;margin-top:4px">❌ Tu equipo fue eliminado</div>' : ''}
      `;
    }

    card.addEventListener('click', () => showMatchDetail(match));
    resultsGrid.appendChild(card);
  });

  // Eliminated teams (only relevant in knockouts or at end of group stage, which we'll handle by showing nothing here for groups)
  const eliminated = []; // Could fetch from state.eliminatedTeams delta, for now hide during groups
  eliminatedGrid.innerHTML = '';

  const btnNext = document.getElementById('btn-next-round');
  if (state.status === 'completed') {
    // Tournament is over — show podium button instead of next-round
    btnNext.textContent = '🏆 Ver Podio';
    btnNext.style.background = 'linear-gradient(135deg, #FFD700, #FF8C00)';
    btnNext.style.color = '#000';
  } else if (state.phase === 'final') {
    btnNext.textContent = '🥉 Tercera Plaza →';
    btnNext.style.background = '';
    btnNext.style.color = '';
  } else {
    btnNext.textContent = 'Siguiente →';
    btnNext.style.background = '';
    btnNext.style.color = '';
  }
}

// ─── Champion Screen ──────────────────────────────────────
function showChampionScreen(state) {
  const screen   = document.getElementById('champions-screen');
  const confetti = document.getElementById('confetti-container');

  try {
    // Hide other dashboard sections
    document.getElementById('round-results')?.classList.add('hidden');
    document.getElementById('simulate-section')?.classList.add('hidden');

    document.querySelector('.matches-grid')?.parentElement.classList.add('hidden');

    screen.classList.remove('hidden');
    launchConfetti(confetti);

    // Get champion ID
    let championId = state.champion;
    
    // If champion is not set, try to get it from the final match
    if (!championId && state.knockoutRounds?.final) {
      const finalMatch = state.knockoutRounds.final[0];
      championId = finalMatch?.winnerId;
    }
    
    // Debug logging
    console.log('Champion ID:', championId);
    console.log('TeamRatings keys:', Object.keys(state.teamRatings || {}));
    console.log('Final Match:', state.knockoutRounds?.final?.[0]);

    const champion = state.teamRatings[championId];
    
    if (!champion) {
      console.error('Champion not found. ID:', championId);
      document.getElementById('champion-country').innerHTML =
        `<h2 style="font-family:var(--font-display);font-size:2.5rem;letter-spacing:0.1em;color:var(--gold)">🏆 Campeón Desconocido</h2>
         <p style="color:var(--text-secondary)">No pudimos determinar el ganador. ID: ${championId}</p>`;
      return;
    }

    document.getElementById('champion-country').innerHTML =
      `<h2 style="font-family:var(--font-display);font-size:2.5rem;letter-spacing:0.1em;color:var(--gold)">${champion.flag || '🏆'} ${champion.name || 'Campeón'}</h2>`;

    const s = champion.stats || {};
    document.getElementById('champion-stats').innerHTML = `
      <div style="text-align:center">
        <div style="font-family:var(--font-mono);font-size:1.5rem;color:var(--gold)">${s.wins || 0}</div>
        <div style="font-size:0.75rem;color:var(--text-muted)">Victorias</div>
      </div>
      <div style="text-align:center">
        <div style="font-family:var(--font-mono);font-size:1.5rem;color:var(--green)">${s.goalsFor || 0}</div>
        <div style="font-size:0.75rem;color:var(--text-muted)">Goles</div>
      </div>
      <div style="text-align:center">
        <div style="font-family:var(--font-mono);font-size:1.5rem;color:var(--blue)">${s.cleanSheets || 0}</div>
        <div style="font-size:0.75rem;color:var(--text-muted)">Porterías a 0</div>
      </div>
    `;
  } catch (err) {
    console.error("Champion screen rendering error:", err);
    screen.innerHTML = `<div style="padding: 20px; color: var(--danger);">Error cargando la pantalla de campeón: ${err.message}</div>`;
  }
}

// ─── Bracket View ─────────────────────────────────────────
function refreshBracket() {
  if (!appState.tournament) return;
  renderBracket(
    document.getElementById('bracket-container'),
    appState.tournament
  );
}

// ─── My Team View ─────────────────────────────────────────
function refreshMyTeam() {
  if (!appState.myTeam || !appState.tournament) return;

  const state = appState.tournament;
  const teamData = state.teamRatings[appState.myTeam.id] || appState.myTeam;

  // Formation
  const formationId = teamData.formation || '4-3-3';
  const formationSelect = document.getElementById('formation-select');
  if (formationSelect) formationSelect.value = formationId;

  renderFormation(
    document.getElementById('formation-display'),
    teamData.players,
    teamData.kitHome,
    formationId
  );

  // Kit
  const kitContainer = document.getElementById('myteam-kit-preview');
  if (kitContainer) renderJersey(kitContainer, teamData.kitHome, 'large');

  // Kit color pickers
  const kitHome = teamData.kitHome;
  document.getElementById('myteam-kit-shirt').value  = kitHome.shirt  || '#FF0000';
  document.getElementById('myteam-kit-shorts').value = kitHome.shorts || '#000000';
  document.getElementById('myteam-kit-socks').value  = kitHome.socks  || '#FF0000';

  // Coach
  renderCoach(
    document.getElementById('coach-display'),
    appState.user,
    teamData.name
  );

  // Players table
  renderMyPlayersTable(
    document.getElementById('my-players-list'),
    teamData.players,
    (playerId, isStarter) => {
      const player = teamData.players.find(p => p.id === playerId);
      if (player && isStarter) {
        const formationDef = FORMATIONS[formationId] || FORMATIONS['4-3-3'];
        const posCount = teamData.players.filter(p => p.isStarter && p.position === player.position).length;
        if (posCount >= formationDef.limits[player.position]) {
          showToast(`Límite de ${player.position} alcanzado para el ${formationDef.label}`, 'warning');
          refreshMyTeam();
          return;
        }
      }
      if (player) {
        player.isStarter = isStarter;
        saveLocalMyTeam(appState.myTeam);
        if (appState.tournament) saveLocalTournament(appState.tournament);
        refreshMyTeam();
      }
    }
  );
}

function bindTeamEvents() {
  // My team kit tabs
  document.querySelectorAll('.kit-tab-mini').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.kit-tab-mini').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const kitType = tab.dataset.kit;
      const state = appState.tournament;
      const teamData = state?.teamRatings[appState.myTeam?.id] || appState.myTeam;
      const kit = kitType === 'home' ? teamData?.kitHome : teamData?.kitAway;
      const kitContainer = document.getElementById('myteam-kit-preview');
      if (kitContainer && kit) renderJersey(kitContainer, kit, 'large');
    });
  });

  // My team kit color pickers
  ['shirt', 'shorts', 'socks'].forEach(prop => {
    document.getElementById(`myteam-kit-${prop}`)?.addEventListener('input', (e) => {
      if (!appState.myTeam || !appState.tournament) return;
      const state = appState.tournament;
      const team = state.teamRatings[appState.myTeam.id];
      if (team?.kitHome) {
        team.kitHome[prop] = e.target.value;
        appState.myTeam.kitHome[prop] = e.target.value;
        const kitContainer = document.getElementById('myteam-kit-preview');
        if (kitContainer) renderJersey(kitContainer, team.kitHome, 'large');
      }
    });
  });

  document.getElementById('btn-save-kit')?.addEventListener('click', () => {
    saveLocalMyTeam(appState.myTeam);
    saveLocalTournament(appState.tournament);
    showToast('Equipación guardada ✓', 'success');
  });

  document.getElementById('formation-select')?.addEventListener('change', (e) => {
    if (!appState.myTeam || !appState.tournament) return;
    const teamData = appState.tournament.teamRatings[appState.myTeam.id];
    if (teamData) {
      teamData.formation = e.target.value;
      enforceFormationLimits(teamData.players, teamData.formation);
      saveLocalMyTeam(appState.myTeam);
      saveLocalTournament(appState.tournament);
      refreshMyTeam();
      showToast('Formación actualizada', 'info');
    }
  });

  document.getElementById('btn-auto-select')?.addEventListener('click', () => {
    if (!appState.myTeam || !appState.tournament) return;
    const teamData = appState.tournament.teamRatings[appState.myTeam.id];
    if (teamData) {
      const formation = teamData.formation || '4-3-3';
      autoSelectStarters(teamData.players, formation);
      saveLocalMyTeam(appState.myTeam);
      saveLocalTournament(appState.tournament);
      refreshMyTeam();
      showToast('Convocatoria automática aplicada', 'success');
    }
  });
}

// ─── Stats View ───────────────────────────────────────────
function refreshStats() {
  if (!appState.tournament) return;
  const state = appState.tournament;

  // Stats tabs
  const activeTab = document.querySelector('.stats-tab.active')?.dataset.tab || 'scorers';
  updateStatsView(activeTab, state);
}

function bindStatsEvents() {
  document.querySelectorAll('.stats-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.stats-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      document.querySelectorAll('.stats-panel').forEach(p => {
        p.classList.add('hidden');
        p.classList.remove('active');
      });

      const target = document.getElementById(`stats-${tab.dataset.tab}`);
      target?.classList.remove('hidden');
      target?.classList.add('active');

      if (appState.tournament) {
        updateStatsView(tab.dataset.tab, appState.tournament);
      }
    });
  });
}

function updateStatsView(tab, state) {
  switch (tab) {
    case 'scorers': {
      const scorers = getTopScorers(state, 20);
      renderScorersTable(
        document.getElementById('scorers-table'),
        scorers,
        state.teamRatings
      );
      break;
    }
    case 'teams': {
      const standings = getTeamStandings(state);
      renderTeamsTable(document.getElementById('teams-table'), standings);
      break;
    }
    case 'cards': {
      const cards = getMostCards(state, 20);
      const container = document.getElementById('cards-table');
      container.innerHTML = cards.map((c, i) => {
        const team = state.teamRatings[c.countryId];
        const player = team?.players.find(p => p.id === c.playerId);
        return `
          <div class="stats-row">
            <div class="stats-rank">${i + 1}</div>
            <div class="stats-player-name">${player?.name || c.playerId}</div>
            <div class="stats-country-badge">${team?.flag || ''} ${team?.name || ''}</div>
            <div class="stats-value" style="display:flex;gap:6px;align-items:center">
              ${c.yellow > 0 ? `<span>🟨${c.yellow}</span>` : ''}
              ${c.red > 0 ? `<span>🟥${c.red}</span>` : ''}
            </div>
          </div>
        `;
      }).join('') || '<p style="color:var(--text-muted);text-align:center;padding:20px">Sin tarjetas aún</p>';
      break;
    }
  }
}

// ─── Bootstrap ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', boot);

async function renderHallOfFame() {
  const grid = document.getElementById('halloffame-grid');
  if (!grid) return;
  
  try {
    grid.innerHTML = '<p style="color:var(--text-muted);text-align:center;grid-column:1/-1">Cargando salón de la fama...</p>';
    
    const history = await loadLocalTournamentHistory();
    grid.innerHTML = '';

    if (!history || !Array.isArray(history) || history.length === 0) {
      grid.innerHTML = '<p style="color:var(--text-muted);text-align:center;grid-column:1/-1">Aún no has terminado ningún mundial.</p>';
      return;
    }
    
    const HOF_PAGE_SIZE = 12;
    appState.hofPage = appState.hofPage || 0;

    history.sort((a, b) => {
      const getTime = (t) => {
        if (t.completedAt) return new Date(t.completedAt).getTime();
        if (t.id) {
          const parts = t.id.split('_');
          if (parts.length > 1) {
            const ts = parseInt(parts[1]);
            if (!isNaN(ts)) return ts;
          }
        }
        return 0;
      };
      return getTime(b) - getTime(a);
    });

    const totalPages = Math.ceil(history.length / HOF_PAGE_SIZE);
    if (appState.hofPage >= totalPages) appState.hofPage = Math.max(0, totalPages - 1);

    const pageData = history.slice(appState.hofPage * HOF_PAGE_SIZE, (appState.hofPage + 1) * HOF_PAGE_SIZE);

    pageData.forEach(tourn => {
      if (!tourn || !tourn.teamRatings) return; // Ignore malformed data

      const card = document.createElement('div');
      card.className = 'history-card';
      card.style.cursor = 'pointer';
      card.style.position = 'relative';
      
      // Get champion ID (fallback to final winner if not set)
      let champId = tourn.champion;
      if (!champId && tourn.knockoutRounds?.final?.[0]) {
        champId = tourn.knockoutRounds.final[0].winnerId;
      }
      
      const champ = tourn.teamRatings[champId];
      
      // Get runner-up (second place) from final match
      let secondId = null;
      if (tourn.knockoutRounds?.final?.[0]) {
         const finalMatch = tourn.knockoutRounds.final[0];
         secondId = finalMatch.winnerId === champId ? finalMatch.loserId : finalMatch.winnerId;
      }
      const second = tourn.teamRatings[secondId];
      
      // Get third and fourth place from third-place match
      let thirdId = tourn.third;
      let fourthId = null;
      if (tourn.thirdPlaceMatch && (!thirdId || tourn.thirdPlaceMatch.winnerId)) {
        // If thirdPlaceMatch exists and has been played, use its result
        thirdId = tourn.thirdPlaceMatch.winnerId || tourn.third;
        fourthId = tourn.thirdPlaceMatch.loserId;
      }
      const third = tourn.teamRatings[thirdId];
      const fourth = tourn.teamRatings[fourthId];
      
      const myTeam = tourn.teamRatings[tourn.myTeamId];

      // Compute Tournament MVP
      let mvpId = null;
      let bestScore = -1;
      let mvpStats = { goals: 0, assists: 0, yellow: 0, red: 0 };

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
          const p = team.players?.find(x => x.id === mvpId);
          if (p) mvpName = p.name;
        }
      }

      // Format Date
      let dateStr = 'Fecha desconocida';
      if (tourn.completedAt) {
        const d = new Date(tourn.completedAt);
        dateStr = d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      } else if (tourn.id) {
        const parts = tourn.id.split('_');
        if (parts.length > 1) {
          const ts = parseInt(parts[1]);
          if (!isNaN(ts)) {
            const d = new Date(ts);
            dateStr = d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          }
        }
      }

      // Compute myTeam Phase
      let myPhase = 'Fase de Grupos';
      if (tourn.champion === tourn.myTeamId) {
        myPhase = '🏆 ¡Campeón del Mundo!';
      } else {
        const ko = tourn.knockoutRounds || {};
        const phases = ['r16', 'qf', 'semi', 'final'];
        const phaseNames = {
          'r16': 'Octavos de Final',
          'qf': 'Cuartos de Final',
          'semi': 'Semifinales',
          'final': 'Final (Subcampeón)'
        };
        
        // Search backwards from final to r16 to find the furthest phase reached
        for (let i = phases.length - 1; i >= 0; i--) {
          const phase = phases[i];
          if (ko[phase]) {
            const match = ko[phase].find(m => m.team1Id === tourn.myTeamId || m.team2Id === tourn.myTeamId);
            if (match) {
              if (match.loserId === tourn.myTeamId) {
                myPhase = `Eliminado en ${phaseNames[phase]}`;
              } else if (match.winnerId === tourn.myTeamId) {
                // If they won the match but aren't champion, they must have played the next round...
                // But wait, if they won the semi, they played the final. If they won final, they are champion.
                // We'll catch them losing in the next round anyway because we iterate backwards!
              }
              break;
            }
          }
        }
        
        // Check Third Place match
        if (ko['third'] && ko['third'].length > 0) {
           const thirdMatch = ko['third'][0];
           if (thirdMatch.loserId === tourn.myTeamId) myPhase = '4º Puesto';
           if (thirdMatch.winnerId === tourn.myTeamId) myPhase = '🥉 3º Puesto';
        }
      }
      
      card.innerHTML = `
        <div style="font-size:0.75rem; color:var(--text-muted); text-align:right; margin-bottom:10px;">
          📅 ${dateStr}
        </div>
        <div style="text-align:center; margin-bottom:15px;">
          <div style="font-size:2rem; margin-bottom:5px;">🥇 ${champ?.flag || ''}</div>
          <div style="font-weight:bold; color:var(--gold); font-size:1.2rem;">${champ?.name || '??'}</div>
        </div>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size:0.85rem; margin-bottom:15px; border-bottom:1px solid var(--border); padding-bottom:15px;">
          <div style="text-align:center; background:rgba(255,255,255,0.05); padding:8px; border-radius:6px;">
            <div style="color:var(--text-muted); margin-bottom:4px;">🥈 Subcampeón</div>
            <div style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${second?.flag || ''} ${second?.name || '??'}</div>
          </div>
          <div style="text-align:center; background:rgba(255,255,255,0.05); padding:8px; border-radius:6px;">
            <div style="color:var(--text-muted); margin-bottom:4px;">🥉 Tercero</div>
            <div style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${third?.flag || ''} ${third?.name || '??'}</div>
          </div>
        </div>
        <div style="margin-bottom:15px; padding:10px; background:rgba(255,215,0,0.1); border-radius:8px; border:1px solid rgba(255,215,0,0.3); display:flex; align-items:center; gap:10px;">
          <div style="font-size:1.5rem">🌟</div>
          <div style="flex: 1; min-width: 0;">
            <div style="font-size:0.7rem; color:var(--gold); text-transform:uppercase; font-weight:bold; letter-spacing:1px;">MVP del Torneo</div>
            <div style="font-weight:bold; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${mvpFlag} ${mvpName}</div>
            <div style="font-size:0.75rem; color:var(--text-muted)">⚽ ${mvpStats.goals} | 🅰️ ${mvpStats.assists}</div>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:10px; background:rgba(255,255,255,0.05); padding:10px; border-radius:8px; border-left:4px solid var(--primary);">
          <div style="font-size:1.5rem">${myTeam?.flag || ''}</div>
          <div style="flex:1; min-width:0;">
            <div style="font-weight:bold; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${myTeam?.name || ''}</div>
            <div style="font-size:0.75rem; color:var(--primary); font-weight:bold; margin-top:2px;">${myPhase}</div>
          </div>
        </div>
      `;
      
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

    if (totalPages > 1) {
      const pag = document.createElement('div');
      pag.style.cssText = 'grid-column:1/-1; display:flex; justify-content:center; gap:10px; margin-top:20px;';
      
      const btnPrev = document.createElement('button');
      btnPrev.textContent = '◀ Anterior';
      btnPrev.className = 'btn-secondary';
      btnPrev.style.cssText = 'padding:8px 16px; border-radius:8px; cursor:pointer; background:rgba(255,255,255,0.1); color:white; border:none;';
      if (appState.hofPage === 0) { btnPrev.disabled = true; btnPrev.style.opacity = '0.5'; btnPrev.style.cursor = 'not-allowed'; }
      btnPrev.onclick = () => { appState.hofPage--; renderHallOfFame(); };
      
      const span = document.createElement('span');
      span.textContent = `Página ${appState.hofPage + 1} de ${totalPages}`;
      span.style.cssText = 'display:flex; align-items:center; font-weight:bold; color:var(--text-muted);';

      const btnNext = document.createElement('button');
      btnNext.textContent = 'Siguiente ▶';
      btnNext.className = 'btn-secondary';
      btnNext.style.cssText = 'padding:8px 16px; border-radius:8px; cursor:pointer; background:rgba(255,255,255,0.1); color:white; border:none;';
      if (appState.hofPage === totalPages - 1) { btnNext.disabled = true; btnNext.style.opacity = '0.5'; btnNext.style.cursor = 'not-allowed'; }
      btnNext.onclick = () => { appState.hofPage++; renderHallOfFame(); };

      pag.appendChild(btnPrev);
      pag.appendChild(span);
      pag.appendChild(btnNext);
      grid.appendChild(pag);
    }

  } catch (err) {
    console.error("Hall of Fame rendering error:", err);
    grid.innerHTML = `<p style="color:var(--danger);text-align:center;grid-column:1/-1">Error cargando el salón de la fama: ${err.message}</p>`;
  }
}
