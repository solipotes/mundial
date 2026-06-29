// ══════════════════════════════════════════════════════════
//  MULTIPLAYER UI — Lobby, countdown, player chips, dashboard
// ══════════════════════════════════════════════════════════

import { showView, showToast, showLoading, hideLoading, renderCountryGrid } from './ui.js';
import {
  createMultiplayerTournament,
  joinMultiplayerTournament,
  selectCountryForMultiplayer,
  startMultiplayerTournament,
  checkAndSimulateRound,
  advanceMultiplayerPhase,
  subscribeToMultiplayerTournament,
  loadMyMultiplayerTournaments,
  addMemberUid,
  generateWhatsAppLink,
  generateShareUrl,
  LOBBY_DURATION_MS,
  ROUND_INTERVAL_MS,
} from './multiplayer.js';
import { COUNTRIES as COUNTRIES_2026 } from './countries_2026.js';
import { assignDefaultStarters } from './tournament.js';

// ─── State ─────────────────────────────────────────────────
let mpState = {
  currentPin:      null,
  lobbyData:       null,
  unsubscribe:     null,
  countdownTimer:  null,
  myUid:           null,
  myDisplayName:   null,
  myPhotoURL:      null,
};

export function getMpState() { return mpState; }
export function getMpCurrentPin() { return mpState.currentPin; }

// ─── Entry Point ───────────────────────────────────────────
export function initMultiplayerUI(user) {
  mpState.myUid         = user.uid;
  mpState.myDisplayName = user.displayName || 'Jugador';
  mpState.myPhotoURL    = user.photoURL || '';

  bindMultiplayerMenuEvents();
  bindLobbyEvents(user);
}

// Check URL for auto-join (?join=ABCDE1)
export function checkUrlForJoinPin() {
  const params = new URLSearchParams(window.location.search);
  return params.get('join') || null;
}

// ─── Multiplayer Menu Events ───────────────────────────────
function bindMultiplayerMenuEvents() {
  document.getElementById('btn-home-multiplayer')?.addEventListener('click', () => {
    showView('multiplayer');
    loadMyRoomsPanel();
  });

  document.getElementById('btn-mp-create')?.addEventListener('click', async () => {
    const name = prompt('Nombre de tu sala (opcional):') || `Sala de ${mpState.myDisplayName}`;
    showLoading('Creando sala...');
    try {
      const pin = await createMultiplayerTournament({
        name,
        uid:         mpState.myUid,
        displayName: mpState.myDisplayName,
        photoURL:    mpState.myPhotoURL,
      });
      await addMemberUid(pin, mpState.myUid);
      hideLoading();
      openLobby(pin);
    } catch (e) {
      hideLoading();
      console.error(e);
      showToast('Error al crear la sala', 'error');
    }
  });

  document.getElementById('btn-mp-show-join')?.addEventListener('click', () => {
    const form = document.getElementById('mp-join-form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
    if (form.style.display === 'block') document.getElementById('mp-pin-input')?.focus();
  });

  document.getElementById('btn-mp-join-go')?.addEventListener('click', handleJoinByPin);
  document.getElementById('mp-pin-input')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleJoinByPin();
  });
}

async function handleJoinByPin() {
  const pin = document.getElementById('mp-pin-input')?.value?.trim().toUpperCase();
  if (!pin || pin.length < 6) { showToast('Introduce un código válido', 'error'); return; }
  await joinAndOpenLobby(pin);
}

export async function joinAndOpenLobby(pin) {
  showLoading('Uniéndose a la sala...');
  try {
    await joinMultiplayerTournament({
      pin,
      uid:         mpState.myUid,
      displayName: mpState.myDisplayName,
      photoURL:    mpState.myPhotoURL,
    });
    await addMemberUid(pin, mpState.myUid);
    hideLoading();
    openLobby(pin);
  } catch (e) {
    hideLoading();
    const msg = {
      'NO_TOURNAMENT': 'Sala no encontrada',
      'ALREADY_STARTED': 'El torneo ya ha comenzado',
      'LOBBY_EXPIRED': 'El tiempo de unirse ha expirado',
    }[e.message] || 'Error al unirse';
    showToast(msg, 'error');
  }
}

// ─── My Rooms Panel ────────────────────────────────────────
async function loadMyRoomsPanel() {
  const list = document.getElementById('mp-my-rooms-list');
  if (!list) return;
  list.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;">Cargando...</p>';

  try {
    const rooms = await loadMyMultiplayerTournaments(mpState.myUid);
    if (!rooms || rooms.length === 0) {
      list.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;">No tienes salas activas.</p>';
      return;
    }
    list.innerHTML = '';
    rooms.forEach(room => {
      const statusLabel = { lobby: 'Lobby', active: 'En curso', completed: 'Terminado' }[room.status] || room.status;
      const card = document.createElement('div');
      card.className = 'mp-room-card';
      const playerCount = Object.keys(room.players || {}).length;
      card.innerHTML = `
        <div class="mp-room-icon">${room.status === 'completed' ? '🏆' : room.status === 'active' ? '⚽' : '🏟️'}</div>
        <div class="mp-room-info">
          <div class="mp-room-name">${room.name || room.pin}</div>
          <div class="mp-room-meta">${playerCount} jugadores · Código: <strong>${room.pin}</strong></div>
        </div>
        <span class="mp-room-status ${room.status}">${statusLabel}</span>
      `;
      card.addEventListener('click', () => openLobby(room.pin));
      list.appendChild(card);
    });
  } catch (e) {
    list.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;">Error al cargar salas.</p>';
  }
}

// ─── Open Lobby ────────────────────────────────────────────
export function openLobby(pin) {
  // Clean up previous listener
  if (mpState.unsubscribe) { mpState.unsubscribe(); mpState.unsubscribe = null; }
  clearInterval(mpState.countdownTimer);

  mpState.currentPin = pin;
  showView('multiplayer-lobby');

  document.getElementById('lobby-pin').textContent = pin;

  // Real-time sync
  mpState.unsubscribe = subscribeToMultiplayerTournament(pin, (data) => {
    if (!data) { showToast('La sala fue eliminada', 'error'); showView('multiplayer'); return; }
    mpState.lobbyData = data;
    window._mpCurrentData = data; // keep globally updated for dashboard banner

    // If tournament has started, redirect to MP dashboard
    if (data.status === 'active' && data.tournamentState) {
      // Only redirect if we're in the lobby view
      const lobbyView = document.getElementById('view-multiplayer-lobby');
      if (lobbyView && !lobbyView.classList.contains('hidden')) {
        enterMultiplayerDashboard(data);
      } else {
        // We are already in the dashboard; refresh the state
        try {
          const state = JSON.parse(data.tournamentState);
          const myCountryId = data.players?.[mpState.myUid]?.countryId;
          if (myCountryId) state.myTeamId = myCountryId;
          window._mpCurrentState = state;
          // Dispatch a lighter update event to re-render
          window.dispatchEvent(new CustomEvent('mp-state-updated', { detail: { state, data } }));
        } catch {}
      }
      return;
    }

    renderLobby(data);
  });
}

// ─── Render Lobby ──────────────────────────────────────────
function renderLobby(data) {
  document.getElementById('lobby-room-name').textContent = data.name || data.pin;

  // Countdown to lobby end
  startLobbyCountdown(data.lobbyEndsAt?.toMillis?.() || 0);

  // WhatsApp & Copy
  const waLink = generateWhatsAppLink(data.pin, data.name || data.pin);
  document.getElementById('btn-lobby-whatsapp').onclick = () => window.open(waLink, '_blank');
  document.getElementById('btn-lobby-copy').onclick = async () => {
    const url = generateShareUrl(data.pin);
    await navigator.clipboard.writeText(url);
    showToast('¡Enlace copiado!', 'success');
  };

  // Players
  renderLobbyPlayers(data);

  // Show/hide start button and waiting message
  const isCreator = data.createdBy === mpState.myUid;
  const startBtn   = document.getElementById('btn-lobby-start');
  const waitMsg    = document.getElementById('lobby-waiting-msg');

  startBtn?.classList.toggle('hidden', !isCreator);
  waitMsg?.classList.toggle('hidden', isCreator);

  if (isCreator && startBtn) {
    const players = Object.values(data.players || {});
    const allReady = players.length >= 2 && players.every(p => p.ready);
    startBtn.disabled = !allReady;
    startBtn.textContent = allReady
      ? '🚀 Iniciar Mundial'
      : `⏳ Esperando jugadores (${players.filter(p => p.ready).length}/${players.length} listos)`;
  }
}

function renderLobbyPlayers(data) {
  const grid  = document.getElementById('lobby-players-grid');
  const count = document.getElementById('lobby-players-count');
  if (!grid) return;

  const players = Object.values(data.players || {});
  count.textContent = `${players.length} jugador${players.length !== 1 ? 'es' : ''}`;

  grid.innerHTML = '';
  players.forEach(p => {
    const isMe    = p.uid === mpState.myUid;
    const country = p.countryId ? COUNTRIES_2026.find(c => c.id === p.countryId) : null;

    const card = document.createElement('div');
    card.className = `lobby-player-card${p.ready ? ' is-ready' : ''}${isMe ? ' is-me' : ''}`;

    const avatarHtml = p.photoURL
      ? `<img class="lobby-player-avatar" src="${p.photoURL}" alt="${p.displayName || 'Seleccionador'}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
      : `<div class="lobby-player-avatar-fallback">${(p.displayName || 'S')[0].toUpperCase()}</div>`;

    card.innerHTML = `
      ${avatarHtml}
      <div class="lobby-player-name">${p.displayName || 'Seleccionador'}${isMe ? ' (Tú)' : ''}</div>
      ${country ? `<div class="lobby-player-flag">${country.flag}</div>
      <div class="lobby-player-country">${country.name}</div>` : '<div class="lobby-player-country" style="color:var(--text-muted)">Sin selección</div>'}
      <div class="lobby-player-status">${p.ready ? '✅' : '⏳'}</div>
    `;
    grid.appendChild(card);
  });
}

// ─── Lobby Countdown ───────────────────────────────────────
function startLobbyCountdown(endMs) {
  clearInterval(mpState.countdownTimer);
  const el = document.getElementById('lobby-timer');
  if (!el) return;

  function update() {
    const remaining = endMs - Date.now();
    if (remaining <= 0) {
      el.textContent = '¡Tiempo agotado!';
      clearInterval(mpState.countdownTimer);
      return;
    }
    const h = Math.floor(remaining / 3600000);
    const m = Math.floor((remaining % 3600000) / 60000);
    const s = Math.floor((remaining % 60000) / 1000);
    el.textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }
  update();
  mpState.countdownTimer = setInterval(update, 1000);
}

// ─── Lobby Events ──────────────────────────────────────────
function bindLobbyEvents(user) {
  document.getElementById('btn-lobby-back')?.addEventListener('click', () => {
    if (mpState.unsubscribe) { mpState.unsubscribe(); mpState.unsubscribe = null; }
    clearInterval(mpState.countdownTimer);
    showView('multiplayer');
    loadMyRoomsPanel();
  });

  // Country selection
  document.getElementById('btn-lobby-choose-country')?.addEventListener('click', () => {
    showLobbyCountryPicker();
  });

  // Start tournament
  document.getElementById('btn-lobby-start')?.addEventListener('click', async () => {
    showLoading('Realizando el sorteo...');
    try {
      await startMultiplayerTournament(mpState.currentPin);
      hideLoading();
      showToast('¡El Mundial ha comenzado!', 'success');
    } catch (e) {
      hideLoading();
      const msg = {
        'NOT_ENOUGH_PLAYERS': 'Se necesitan al menos 2 jugadores',
        'NOT_ALL_READY':      'No todos los jugadores han elegido selección',
        'ALREADY_STARTED':    'El torneo ya ha comenzado',
      }[e.message] || 'Error al iniciar';
      showToast(msg, 'error');
    }
  });
}

// ─── Country Picker for Lobby ──────────────────────────────
function showLobbyCountryPicker() {
  const data = mpState.lobbyData;
  if (!data) return;

  // Already taken countries
  const takenIds = new Set(
    Object.values(data.players || {})
      .filter(p => p.uid !== mpState.myUid && p.countryId)
      .map(p => p.countryId)
  );

  // Build available list
  const available = COUNTRIES_2026.filter(c => !takenIds.has(c.id));

  // Create a modal-like overlay
  let overlay = document.getElementById('mp-country-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'mp-country-overlay';
    overlay.style.cssText = `
      position:fixed; inset:0; background:rgba(0,0,0,0.85); z-index:1000;
      display:flex; flex-direction:column; align-items:center; padding:20px; overflow-y:auto;
    `;
    document.body.appendChild(overlay);
  }

  overlay.innerHTML = `
    <div style="width:100%;max-width:680px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
        <h2 style="font-size:1.3rem;font-weight:800;">⚽ Elige tu Selección</h2>
        <button id="btn-close-mp-picker" style="background:rgba(255,255,255,0.1);border:none;color:#fff;padding:8px 14px;border-radius:8px;cursor:pointer;font-size:0.9rem;">✕ Cerrar</button>
      </div>
      <input type="text" id="mp-country-search" placeholder="Buscar país..." style="width:100%;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:10px;padding:12px 16px;color:#fff;font-size:0.95rem;margin-bottom:16px;box-sizing:border-box;">
      <div id="mp-country-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:10px;"></div>
    </div>
  `;

  overlay.style.display = 'flex';

  const grid = overlay.querySelector('#mp-country-grid');
  const search = overlay.querySelector('#mp-country-search');

  function renderPicker(countries) {
    grid.innerHTML = '';
    countries.forEach(c => {
      const btn = document.createElement('button');
      btn.style.cssText = `background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:14px 10px;color:#fff;cursor:pointer;text-align:center;transition:all 0.15s;`;
      btn.innerHTML = `<div style="font-size:2rem;margin-bottom:6px;">${c.flag}</div><div style="font-size:0.8rem;font-weight:600;">${c.name}</div>`;
      btn.onmouseenter = () => { btn.style.borderColor = '#A855F7'; btn.style.background = 'rgba(124,58,237,0.2)'; };
      btn.onmouseleave = () => { btn.style.borderColor = 'rgba(255,255,255,0.12)'; btn.style.background = 'rgba(255,255,255,0.06)'; };
      btn.addEventListener('click', () => confirmCountrySelection(c, overlay));
      grid.appendChild(btn);
    });
    if (countries.length === 0) {
      grid.innerHTML = '<p style="color:var(--text-muted)">No se encontraron países disponibles.</p>';
    }
  }

  renderPicker(available);

  search.addEventListener('input', () => {
    const q = search.value.toLowerCase();
    renderPicker(available.filter(c => c.name.toLowerCase().includes(q) || c.nameEn?.toLowerCase().includes(q)));
  });

  overlay.querySelector('#btn-close-mp-picker').addEventListener('click', () => {
    overlay.style.display = 'none';
  });
}

async function confirmCountrySelection(country, overlay) {
  showLoading('Reservando selección...');
  overlay.style.display = 'none';

  const myPlayerData = mpState.lobbyData?.players?.[mpState.myUid];
  const basePlayers = assignDefaultStarters(JSON.parse(JSON.stringify(country.players)));

  const teamData = {
    players: basePlayers,
    kitHome: { ...country.kitHome },
    kitAway: { ...country.kitAway },
  };

  try {
    await selectCountryForMultiplayer({
      pin:       mpState.currentPin,
      uid:       mpState.myUid,
      countryId: country.id,
      teamData,
    });
    hideLoading();
    showToast(`${country.flag} ${country.name} reservada!`, 'success');
  } catch (e) {
    console.error("Error in selectCountryForMultiplayer:", e);
    hideLoading();
    if (e.message === 'COUNTRY_TAKEN') {
      showToast('Ese país ya está elegido, escoge otro', 'error');
      showLobbyCountryPicker();
    } else {
      showToast('Error al seleccionar', 'error');
    }
  }
}

// ─── Enter Multiplayer Dashboard ───────────────────────────
function enterMultiplayerDashboard(data) {
  // We'll delegate rendering to the main app via a custom event
  // The main app will intercept this and load the multiplayer dashboard
  const myCountryId = data.players?.[mpState.myUid]?.countryId;
  const state = JSON.parse(data.tournamentState);

  const event = new CustomEvent('mp-tournament-ready', {
    detail: { data, state, myCountryId, pin: mpState.currentPin }
  });
  window.dispatchEvent(event);
}

// ─── Next Round Countdown Banner ───────────────────────────
export function renderMpNextRoundBanner(nextRoundAtMs) {
  const container = document.getElementById('simulate-section');
  if (!container) return;

  let banner = document.getElementById('mp-next-round-banner');
  if (!banner) {
    banner = document.createElement('div');
    banner.id = 'mp-next-round-banner';
    banner.className = 'mp-next-round-banner';
    banner.innerHTML = `
      <div class="mp-next-round-label">🌐 Próxima Jornada</div>
      <div class="mp-next-round-timer" id="mp-round-timer">--:--:--</div>
    `;
    container.prepend(banner);
  }

  const timerEl = document.getElementById('mp-round-timer');
  let interval = banner._interval;
  if (interval) clearInterval(interval);

  function update() {
    const remaining = nextRoundAtMs - Date.now();
    if (remaining <= 0) {
      timerEl.textContent = '¡Ahora!';
      timerEl.classList.add('due');
      clearInterval(banner._interval);
      return;
    }
    timerEl.classList.remove('due');
    const h = Math.floor(remaining / 3600000);
    const m = Math.floor((remaining % 3600000) / 60000);
    const s = Math.floor((remaining % 60000) / 1000);
    timerEl.textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }
  update();
  banner._interval = setInterval(update, 1000);
}

// ─── Human Players Strip ───────────────────────────────────
export function renderMpPlayersStrip(humanPlayers, teamRatings, myCountryId) {
  let strip = document.getElementById('mp-players-strip');
  if (!strip) {
    strip = document.createElement('div');
    strip.id = 'mp-players-strip';
    strip.className = 'mp-players-strip';
    const header = document.querySelector('.round-header');
    header?.after(strip);
  }

  strip.innerHTML = '';
  (humanPlayers || []).forEach(p => {
    const team = teamRatings?.[p.countryId];
    const isMe = p.countryId === myCountryId;
    const chip = document.createElement('div');
    chip.className = `mp-player-chip${team && !team.isActive ? ' eliminated' : ''}`;
    const photoHtml = p.photoURL
      ? `<img src="${p.photoURL}" alt="${p.displayName}" onerror="this.style.display='none'">`
      : `<div style="width:26px;height:26px;border-radius:50%;background:linear-gradient(135deg,#7C3AED,#A855F7);display:flex;align-items:center;justify-content:center;font-size:0.75rem;">${p.displayName?.[0] || '?'}</div>`;
    chip.innerHTML = `
      ${photoHtml}
      <span class="mp-player-chip-flag">${team?.flag || '🏳'}</span>
      <span>${isMe ? 'Tú' : p.displayName}</span>
    `;
    strip.appendChild(chip);
  });
}

// ─── Check & simulate round from the app ──────────────────
export async function trySimulateMpRound(pin) {
  const newState = await checkAndSimulateRound(pin);
  return newState;
}

export async function advanceMpPhase(pin) {
  return advanceMultiplayerPhase(pin);
}
