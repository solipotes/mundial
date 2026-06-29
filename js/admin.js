// ══════════════════════════════════════════════════════════
//  ADMIN.JS — Admin Dashboard Backend and UI
// ══════════════════════════════════════════════════════════

import { db } from './firebase.js';
import { 
  doc, 
  getDoc, 
  setDoc, 
  deleteDoc, 
  collection, 
  getDocs, 
  collectionGroup 
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';
import { showToast, showLoading, hideLoading, showView } from './ui.js';

// ─── Check Admin Status ────────────────────────────────────
export async function checkIsAdmin(uid) {
  if (!uid) return false;
  try {
    const adminDoc = await getDoc(doc(db, 'admins', uid));
    return adminDoc.exists();
  } catch (e) {
    console.warn("Error checking admin status:", e);
    return false;
  }
}

// ─── Fetch Admin Data ──────────────────────────────────────
async function fetchAdminData() {
  const data = {
    users: [],
    multiplayerRooms: [],
    totalIndividualTournaments: 0,
    tournamentsPerUser: {},
    admins: new Set()
  };

  try {
    // 1. Fetch Admins
    const adminsSnap = await getDocs(collection(db, 'admins'));
    adminsSnap.forEach(d => data.admins.add(d.id));

    // 2. Fetch Users
    const usersSnap = await getDocs(collection(db, 'users'));
    usersSnap.forEach(d => {
      data.users.push({ id: d.id, ...d.data(), isAdmin: data.admins.has(d.id) });
    });

    // 3. Fetch Multiplayer Rooms
    const mpSnap = await getDocs(collection(db, 'multiplayerTournaments'));
    mpSnap.forEach(d => {
      data.multiplayerRooms.push({ pin: d.id, ...d.data() });
    });

    // 4. Fetch Individual Tournaments (collectionGroup)
    const tournSnap = await getDocs(collectionGroup(db, 'tournaments'));
    data.totalIndividualTournaments = tournSnap.size;
    tournSnap.forEach(d => {
      const uid = d.ref.parent.parent?.id;
      if (uid) {
        data.tournamentsPerUser[uid] = (data.tournamentsPerUser[uid] || 0) + 1;
      }
    });

  } catch (e) {
    console.error("Error fetching admin data:", e);
    showToast("Error al cargar datos de admin", "error");
  }

  return data;
}

// ─── Init Admin Dashboard ──────────────────────────────────
export async function initAdminDashboard(uid) {
  showLoading('Cargando Panel de Control...');
  const data = await fetchAdminData();
  
  // Render Metrics
  document.getElementById('admin-metric-users').textContent = data.users.length;
  document.getElementById('admin-metric-tournaments').textContent = data.totalIndividualTournaments;
  document.getElementById('admin-metric-mp').textContent = data.multiplayerRooms.length;

  // Render Users Table
  const tbody = document.getElementById('admin-users-tbody');
  if (tbody) {
    tbody.innerHTML = '';
    data.users.forEach(u => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="padding:10px; border-bottom:1px solid rgba(255,255,255,0.1);">
          <div style="display:flex; align-items:center; gap:10px;">
            <img src="${u.profile?.photoURL || u.photoURL || ''}" onerror="this.style.display='none'" style="width:30px; height:30px; border-radius:50%;">
            <span>${u.profile?.displayName || u.displayName || 'Sin nombre'}</span>
          </div>
        </td>
        <td style="padding:10px; border-bottom:1px solid rgba(255,255,255,0.1); color:var(--text-muted); font-size:0.85rem;">
          ${u.profile?.email || u.email || '<span style="color:var(--text-secondary)">No disponible</span>'}
        </td>
        <td style="padding:10px; border-bottom:1px solid rgba(255,255,255,0.1); color:var(--text-muted); font-size:0.85rem;">
          ${data.tournamentsPerUser[u.id] || 0}
        </td>
        <td style="padding:10px; border-bottom:1px solid rgba(255,255,255,0.1);">
          <span style="background:${u.isAdmin ? 'var(--gold)' : 'var(--text-muted)'}; color:#000; padding:2px 8px; border-radius:12px; font-size:0.75rem; font-weight:bold;">
            ${u.isAdmin ? 'ADMIN' : 'USER'}
          </span>
        </td>
        <td style="padding:10px; border-bottom:1px solid rgba(255,255,255,0.1); text-align:right;">
          ${u.id !== uid ? `
            <button class="btn-secondary" style="padding:4px 8px; font-size:0.75rem;" onclick="window.toggleAdminStatus('${u.id}', ${!u.isAdmin})">
              ${u.isAdmin ? 'Revocar' : 'Hacer Admin'}
            </button>
          ` : '<span style="color:var(--text-muted); font-size:0.75rem;">(Tú)</span>'}
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  hideLoading();
}

// ─── Set Admin Status ──────────────────────────────────────
window.toggleAdminStatus = async (targetUid, makeAdmin) => {
  if (!confirm(`¿Estás seguro de que quieres ${makeAdmin ? 'hacer admin' : 'quitar admin'} a este usuario?`)) return;
  
  showLoading('Actualizando permisos...');
  try {
    if (makeAdmin) {
      await setDoc(doc(db, 'admins', targetUid), { grantedAt: new Date().toISOString() });
    } else {
      await deleteDoc(doc(db, 'admins', targetUid));
    }
    showToast('Permisos actualizados', 'success');
    // Refresh dashboard
    const user = (await import('./auth.js')).getCurrentUser();
    if (user) initAdminDashboard(user.uid);
  } catch (e) {
    console.error(e);
    showToast('Error al actualizar permisos', 'error');
    hideLoading();
  }
};
