// ══════════════════════════════════════════════════════════
//  FIREBASE CONFIGURATION — Mundial Simulator 2026
// ══════════════════════════════════════════════════════════

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { getAuth, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyCLunZTmXDZ-sIEW7z_0Gr_vqbpqR4nveo",
  authDomain: "mundial-b9f1c.firebaseapp.com",
  projectId: "mundial-b9f1c",
  storageBucket: "mundial-b9f1c.firebasestorage.app",
  messagingSenderId: "611087510434",
  appId: "1:611087510434:web:e7164f84347836a63a60fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('profile');
googleProvider.addScope('email');

// Firestore
export const db = getFirestore(app);
