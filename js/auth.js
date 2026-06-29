// ══════════════════════════════════════════════════════════
//  FIREBASE AUTH — Google Authentication
// ══════════════════════════════════════════════════════════

import { auth, googleProvider } from './firebase.js';
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';

// ─── Auth State ──────────────────────────────────────────
let _currentUser = null;
const _authCallbacks = [];

export function getCurrentUser() {
  return _currentUser;
}

export function onUserChange(cb) {
  _authCallbacks.push(cb);
  // If already resolved, call immediately
  if (_currentUser !== undefined) cb(_currentUser);
}

// ─── Init Auth Listener ──────────────────────────────────
export function initAuth() {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      _currentUser = user;
      _authCallbacks.forEach(cb => cb(user));
      resolve(user);
    });
  });
}

// ─── Sign In ─────────────────────────────────────────────
export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (err) {
    if (err.code === 'auth/popup-closed-by-user') return null;
    throw err;
  }
}

// ─── Sign Out ─────────────────────────────────────────────
export async function logOut() {
  try {
    await signOut(auth);
  } catch (err) {
    console.error('Error signing out:', err);
  }
}

// ─── User Profile ─────────────────────────────────────────
export function getUserProfile(user) {
  if (!user) return null;
  return {
    uid:         user.uid,
    displayName: user.displayName || 'Seleccionador',
    email:       user.email || '',
    photoURL:    user.photoURL || null,
  };
}
