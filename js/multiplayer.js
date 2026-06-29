// ══════════════════════════════════════════════════════════
//  MULTIPLAYER — Firestore logic for shared tournaments
// ══════════════════════════════════════════════════════════

import { db } from './firebase.js';
import {
  doc, getDoc, setDoc, updateDoc, onSnapshot,
  collection, query, where, getDocs, serverTimestamp, Timestamp
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';
import { simulateRound } from './simulation.js';
import { createTournamentState2026, advanceTournament2026, isKnockoutPhaseDone2026 } from './tournament_2026.js';
import { assignDefaultStarters } from './tournament.js';
import { COUNTRIES as COUNTRIES_2026 } from './countries_2026.js';

// ─── Constants ─────────────────────────────────────────────
export const MP_COLLECTION = 'multiplayerTournaments';
export const LOBBY_DURATION_MS   = 12 * 60 * 60 * 1000; // 12h to join
export const ROUND_INTERVAL_MS   = 12 * 60 * 60 * 1000; // 12h per round

// ─── PIN Generation ────────────────────────────────────────
function generatePin() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no ambiguous chars
  let pin = '';
  for (let i = 0; i < 6; i++) pin += chars[Math.floor(Math.random() * chars.length)];
  return pin;
}

// ─── Create Multiplayer Tournament ────────────────────────
export async function createMultiplayerTournament({ name, uid, displayName, photoURL }) {
  let pin, docSnap;

  // Ensure unique PIN
  do {
    pin = generatePin();
    docSnap = await getDoc(doc(db, MP_COLLECTION, pin));
  } while (docSnap.exists());

  const lobbyEndsAt = Timestamp.fromMillis(Date.now() + LOBBY_DURATION_MS);

  await setDoc(doc(db, MP_COLLECTION, pin), {
    pin,
    name: name || `Sala de ${displayName}`,
    createdBy: uid,
    status: 'lobby',        // lobby → active → completed
    lobbyEndsAt,
    nextRoundAt: null,
    roundInterval: ROUND_INTERVAL_MS,
    players: {
      [uid]: {
        uid,
        displayName,
        photoURL: photoURL || '',
        countryId: null,
        teamData: null,
        ready: false,
        joinedAt: serverTimestamp(),
      }
    },
    tournamentState: null,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return pin;
}

// ─── Join Multiplayer Tournament ──────────────────────────
export async function joinMultiplayerTournament({ pin, uid, displayName, photoURL }) {
  const ref = doc(db, MP_COLLECTION, pin);
  const snap = await getDoc(ref);

  if (!snap.exists()) throw new Error('NO_TOURNAMENT');

  const data = snap.data();
  if (data.status !== 'lobby') throw new Error('ALREADY_STARTED');

  // Check lobby hasn't expired
  const now = Date.now();
  const lobbyEnd = data.lobbyEndsAt?.toMillis?.() || 0;
  if (now > lobbyEnd) throw new Error('LOBBY_EXPIRED');

  // Already a member?
  if (data.players[uid]) return data; // Already joined, just return

  // Add player
  const updatedPlayers = {
    ...data.players,
    [uid]: {
      uid,
      displayName,
      photoURL: photoURL || '',
      countryId: null,
      teamData: null,
      ready: false,
      joinedAt: serverTimestamp(),
    }
  };

  await updateDoc(ref, {
    players: updatedPlayers,
    updatedAt: serverTimestamp(),
  });

  return { ...data, players: updatedPlayers };
}

// ─── Select Country (mark ready) ──────────────────────────
export async function selectCountryForMultiplayer({ pin, uid, countryId, teamData }) {
  const ref = doc(db, MP_COLLECTION, pin);
  const snap = await getDoc(ref);
  if (!snap.exists()) throw new Error('NO_TOURNAMENT');

  const data = snap.data();

  // Check the country is not already taken by someone else
  const taken = Object.values(data.players).some(
    p => p.countryId === countryId && p.uid !== uid
  );
  if (taken) throw new Error('COUNTRY_TAKEN');

  await updateDoc(ref, {
    [`players.${uid}.countryId`]: countryId,
    [`players.${uid}.teamData`]: teamData,
    [`players.${uid}.ready`]: true,
    updatedAt: serverTimestamp(),
  });
}

// ─── Start Tournament (creator only) ──────────────────────
export async function startMultiplayerTournament(pin) {
  const ref = doc(db, MP_COLLECTION, pin);
  const snap = await getDoc(ref);
  if (!snap.exists()) throw new Error('NO_TOURNAMENT');

  const data = snap.data();
  if (data.status !== 'lobby') throw new Error('ALREADY_STARTED');

  const playerList = Object.values(data.players);
  if (playerList.length < 2) throw new Error('NOT_ENOUGH_PLAYERS');
  if (!playerList.every(p => p.ready)) throw new Error('NOT_ALL_READY');

  // Build the full 48-team pool:
  // Human players' teams + bots to fill up to 48
  const humanCountryIds = new Set(playerList.map(p => p.countryId));
  const botCountries = COUNTRIES_2026.filter(c => !humanCountryIds.has(c.id));

  // Shuffle bots and pick enough to fill 48
  const shuffled = [...botCountries].sort(() => Math.random() - 0.5);
  const botsNeeded = 48 - playerList.length;
  const selectedBots = shuffled.slice(0, botsNeeded);

  // Build full countries array: start with human teams (use their custom teamData)
  const allCountries = [
    ...playerList.map(p => {
      const base = COUNTRIES_2026.find(c => c.id === p.countryId);
      if (!base) return null;
      return {
        ...base,
        players: p.teamData?.players || base.players,
        kitHome: p.teamData?.kitHome || base.kitHome,
        kitAway: p.teamData?.kitAway || base.kitAway,
      };
    }).filter(Boolean),
    ...selectedBots,
  ];

  // We'll just pick the first human player's country as "myTeamId" for the state object;
  // each player will read their own myTeamId from the players map
  const tournamentState = createTournamentState2026(allCountries, playerList[0].countryId);
  tournamentState.isMultiplayer = true;
  tournamentState.humanPlayers = playerList.map(p => ({
    uid: p.uid,
    displayName: p.displayName,
    photoURL: p.photoURL,
    countryId: p.countryId,
  }));

  const nextRoundAt = Timestamp.fromMillis(Date.now() + ROUND_INTERVAL_MS);

  await updateDoc(ref, {
    status: 'active',
    tournamentState: JSON.stringify(tournamentState),
    nextRoundAt,
    updatedAt: serverTimestamp(),
  });

  return tournamentState;
}

// ─── Check & Simulate Round if Due ─────────────────────────
export async function checkAndSimulateRound(pin) {
  const ref = doc(db, MP_COLLECTION, pin);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;

  const data = snap.data();
  if (data.status !== 'active') return null;

  const now = Date.now();
  const nextRoundAt = data.nextRoundAt?.toMillis?.() || Infinity;
  if (now < nextRoundAt) return null; // Not yet time

  // Deserialize
  let state = JSON.parse(data.tournamentState);

  // Simulate this round
  const newState = simulateRound(state);

  // Determine new status
  if (newState.phase === 'groups') {
    const allSimulated = Object.keys(newState.groupMatches || {}).every(g =>
      (newState.groupMatches[g][newState.groupMatchday - 1] || []).every(m => m.simulated)
    );
    if (allSimulated) {
      newState.status = newState.groupMatchday >= 3 ? 'phase_done' : 'matchday_done';
    }
  } else {
    if (isKnockoutPhaseDone2026(newState)) {
      if (newState.phase === 'final') {
        const finalMatch = newState.knockoutRounds.final?.[0];
        newState.champion = finalMatch?.winnerId || null;
        const thirdMatch = newState.thirdPlaceMatch;
        if (thirdMatch) {
          newState.thirdPlaceWinner = thirdMatch.winnerId;
          newState.third = thirdMatch.winnerId;
        }
        newState.status = 'completed';
      } else {
        newState.status = 'phase_done';
      }
    }
  }

  const isTournamentDone = newState.status === 'completed';
  const nextRoundTime = isTournamentDone
    ? null
    : Timestamp.fromMillis(now + ROUND_INTERVAL_MS);

  await updateDoc(ref, {
    tournamentState: JSON.stringify(newState),
    nextRoundAt: nextRoundTime,
    status: isTournamentDone ? 'completed' : 'active',
    updatedAt: serverTimestamp(),
  });

  return newState;
}

// ─── Advance to Next Phase ──────────────────────────────────
export async function advanceMultiplayerPhase(pin) {
  const ref = doc(db, MP_COLLECTION, pin);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;

  const data = snap.data();
  let state = JSON.parse(data.tournamentState);

  const newState = advanceTournament2026(state);
  const nextRoundAt = Timestamp.fromMillis(Date.now() + ROUND_INTERVAL_MS);

  await updateDoc(ref, {
    tournamentState: JSON.stringify(newState),
    nextRoundAt,
    updatedAt: serverTimestamp(),
  });

  return newState;
}

// ─── Realtime Listener ─────────────────────────────────────
export function subscribeToMultiplayerTournament(pin, callback) {
  const ref = doc(db, MP_COLLECTION, pin);
  return onSnapshot(ref, (snap) => {
    if (!snap.exists()) { callback(null); return; }
    const data = snap.data();
    callback(data);
  });
}

// ─── Load tournament by PIN ───────────────────────────────
export async function loadMultiplayerTournament(pin) {
  const snap = await getDoc(doc(db, MP_COLLECTION, pin));
  if (!snap.exists()) return null;
  return snap.data();
}

// ─── List tournaments this user is part of ────────────────
export async function loadMyMultiplayerTournaments(uid) {
  // Firestore doesn't support querying nested map fields,
  // so we store denormalized memberUids array for querying
  const q = query(
    collection(db, MP_COLLECTION),
    where('memberUids', 'array-contains', uid)
  );
  try {
    const snap = await getDocs(q);
    return snap.docs.map(d => d.data());
  } catch {
    return [];
  }
}

// ─── Add uid to memberUids array (for querying) ───────────
export async function addMemberUid(pin, uid) {
  const ref = doc(db, MP_COLLECTION, pin);
  const snap = await getDoc(ref);
  if (!snap.exists()) return;
  const data = snap.data();
  const memberUids = data.memberUids || [];
  if (!memberUids.includes(uid)) {
    await updateDoc(ref, {
      memberUids: [...memberUids, uid],
    });
  }
}

// ─── Generate WhatsApp share link ─────────────────────────
export function generateShareUrl(pin) {
  const base = window.location.origin + window.location.pathname;
  return `${base}?join=${pin}`;
}

export function generateWhatsAppLink(pin, tournamentName) {
  const url = generateShareUrl(pin);
  const text = `¡Te invito a unirte a mi Mundial Simulator! 🏆⚽\nSala: *${tournamentName}*\nCódigo: *${pin}*\nÚnete aquí: ${url}`;
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}
