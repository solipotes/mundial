// ══════════════════════════════════════════════════════════
//  FIRESTORE DATABASE — CRUD operations
// ══════════════════════════════════════════════════════════

import { db } from './firebase.js';
import {
  doc, getDoc, setDoc, updateDoc, deleteDoc,
  collection, query, where, getDocs, orderBy, limit,
  serverTimestamp
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

// ─── User Profile ─────────────────────────────────────────

export async function saveUserProfile(uid, data) {
  await setDoc(doc(db, 'users', uid), {
    ...data,
    updatedAt: serverTimestamp()
  }, { merge: true });
}

export async function loadUserProfile(uid) {
  const snap = await getDoc(doc(db, 'users', uid));
  return snap.exists() ? snap.data() : null;
}

// ─── My Team ──────────────────────────────────────────────

export async function saveMyTeam(uid, teamData) {
  await setDoc(doc(db, 'users', uid), {
    myTeam: teamData,
    updatedAt: serverTimestamp()
  }, { merge: true });
}

export async function loadMyTeam(uid) {
  const snap = await getDoc(doc(db, 'users', uid));
  if (!snap.exists()) return null;
  return snap.data().myTeam || null;
}

// ─── Tournament ───────────────────────────────────────────

export async function createTournament(uid, tournamentData) {
  const tournId = `${uid}_${Date.now()}`;
  await setDoc(doc(db, 'tournaments', tournId), {
    ...tournamentData,
    uid,
    status: 'active',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
  return tournId;
}

export async function loadActiveTournament(uid) {
  const q = query(
    collection(db, 'tournaments'),
    where('uid', '==', uid),
    where('status', '==', 'active'),
    orderBy('createdAt', 'desc'),
    limit(1)
  );
  const snap = await getDocs(q);
  if (snap.empty) return null;
  const docSnap = snap.docs[0];
  return { id: docSnap.id, ...docSnap.data() };
}

export async function updateTournament(tournId, data) {
  await updateDoc(doc(db, 'tournaments', tournId), {
    ...data,
    updatedAt: serverTimestamp()
  });
}

export async function completeTournament(tournId, data) {
  await updateDoc(doc(db, 'tournaments', tournId), {
    ...data,
    status: 'completed',
    completedAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
}

// ─── Leaderboard ──────────────────────────────────────────

export async function getTopTournaments(limitCount = 10) {
  // Future: global leaderboard
  return [];
}

// ─── HYBRID STORAGE (LOCAL + FIREBASE) ─────────────────────
import { getCurrentUser } from './auth.js';

const LOCAL_KEY_TOURNAMENT = 'mundial_tournament';
const LOCAL_KEY_MYTEAM     = 'mundial_myteam';
const LOCAL_KEY_USERPROFILE = 'mundial_userprofile';
const LOCAL_KEY_HISTORY    = 'mundial_tournaments_history';
const LOCAL_KEY_CUSTOM_TEAMS = 'mundial_custom_teams';

// -- Tournament State --
export function saveLocalTournament(data) {
  localStorage.setItem(LOCAL_KEY_TOURNAMENT, JSON.stringify(data));
  const user = getCurrentUser();
  if (user && data && data.id) {
    const ref = doc(db, 'users', user.uid, 'tournaments', data.id);
    const docData = { 
      status: data.status,
      updatedAt: serverTimestamp(),
      saveData: JSON.stringify(data)
    };
    setDoc(ref, docData, { merge: true }).catch(console.error);
  }
}

export async function loadLocalTournament() {
  const user = getCurrentUser();
  if (user) {
    const q = query(
      collection(db, 'users', user.uid, 'tournaments'),
      where('status', 'in', ['active', 'matchday_done', 'phase_done']),
      orderBy('updatedAt', 'desc'),
      limit(1)
    );
    try {
      const snap = await getDocs(q);
      if (!snap.empty) {
        const rawData = snap.docs[0].data();
        const data = rawData.saveData ? JSON.parse(rawData.saveData) : rawData;
        localStorage.setItem(LOCAL_KEY_TOURNAMENT, JSON.stringify(data));
        return data;
      }
    } catch (e) {
      console.warn("Failed to load active tournament from Firebase", e);
    }
  }
  const raw = localStorage.getItem(LOCAL_KEY_TOURNAMENT);
  return raw ? JSON.parse(raw) : null;
}

export function clearLocalTournament() {
  localStorage.removeItem(LOCAL_KEY_TOURNAMENT);
}

// -- My Team --
export function saveLocalMyTeam(data) {
  localStorage.setItem(LOCAL_KEY_MYTEAM, JSON.stringify(data));
  saveCustomTeamLocally(data);
  const user = getCurrentUser();
  if (user && data) {
    setDoc(doc(db, 'users', user.uid), { myTeamRaw: JSON.stringify(data), updatedAt: serverTimestamp() }, { merge: true }).catch(console.error);
  }
}

export async function loadLocalMyTeam() {
  const user = getCurrentUser();
  if (user) {
    try {
      const snap = await getDoc(doc(db, 'users', user.uid));
      if (snap.exists()) {
        const docData = snap.data();
        let team = null;
        if (docData.myTeamRaw) team = JSON.parse(docData.myTeamRaw);
        else if (docData.myTeam) team = docData.myTeam; // Backwards compatibility
        
        if (team) {
          localStorage.setItem(LOCAL_KEY_MYTEAM, JSON.stringify(team));
          saveCustomTeamLocally(team);
          return team;
        }
      }
    } catch (e) {
      console.warn("Failed to load myTeam from Firebase", e);
    }
  }
  const raw = localStorage.getItem(LOCAL_KEY_MYTEAM);
  return raw ? JSON.parse(raw) : null;
}

// -- Custom Teams --
export function saveCustomTeamLocally(team) {
  const raw = localStorage.getItem(LOCAL_KEY_CUSTOM_TEAMS);
  const dict = raw ? JSON.parse(raw) : {};
  const tType = team.tournamentType || '2026';
  dict[`${tType}_${team.id}`] = team;
  localStorage.setItem(LOCAL_KEY_CUSTOM_TEAMS, JSON.stringify(dict));
}

export function loadCustomTeamLocally(id) {
  const raw = localStorage.getItem(LOCAL_KEY_CUSTOM_TEAMS);
  if (!raw) return null;
  const dict = JSON.parse(raw);
  return dict[id] || null;
}

// -- User Profile --
export function saveLocalUserProfile(data) {
  localStorage.setItem(LOCAL_KEY_USERPROFILE, JSON.stringify(data));
  const user = getCurrentUser();
  if (user && data) {
    setDoc(doc(db, 'users', user.uid), { profile: data, updatedAt: serverTimestamp() }, { merge: true }).catch(console.error);
  }
}

export function loadLocalUserProfile() {
  const raw = localStorage.getItem(LOCAL_KEY_USERPROFILE);
  return raw ? JSON.parse(raw) : null;
}

// -- History --
export function saveLocalTournamentHistory(tournament) {
  if (!tournament.completedAt) {
    tournament.completedAt = Date.now();
  }
  const raw = localStorage.getItem(LOCAL_KEY_HISTORY);
  const history = raw ? JSON.parse(raw) : [];
  const existingIndex = history.findIndex(t => t.id === tournament.id);
  if (existingIndex >= 0) {
    history[existingIndex] = tournament;
  } else {
    history.push(tournament);
  }
  localStorage.setItem(LOCAL_KEY_HISTORY, JSON.stringify(history));

  const user = getCurrentUser();
  if (user && tournament && tournament.id) {
    const ref = doc(db, 'users', user.uid, 'tournaments', tournament.id);
    const docData = {
      status: 'completed',
      completedAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      saveData: JSON.stringify(tournament)
    };
    setDoc(ref, docData, { merge: true }).catch(console.error);
  }
}

export async function loadLocalTournamentHistory() {
  const user = getCurrentUser();
  if (user) {
    try {
      const q = query(
        collection(db, 'users', user.uid, 'tournaments'),
        where('status', '==', 'completed')
      );
      const snap = await getDocs(q);
      if (!snap.empty) {
        const history = snap.docs.map(d => {
          const rawData = d.data();
          return rawData.saveData ? JSON.parse(rawData.saveData) : rawData;
        });
        localStorage.setItem(LOCAL_KEY_HISTORY, JSON.stringify(history));
        return history;
      }
    } catch (e) {
      console.warn("Failed to load history from Firebase", e);
    }
  }
  const raw = localStorage.getItem(LOCAL_KEY_HISTORY);
  return raw ? JSON.parse(raw) : [];
}
