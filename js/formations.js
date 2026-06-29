// ══════════════════════════════════════════════════════════
//  FORMATIONS.JS — Tácticas y posiciones en el campo
// ══════════════════════════════════════════════════════════

export const FORMATIONS = {
  '4-3-3': {
    id: '4-3-3',
    label: '4-3-3 Ofensivo',
    limits: { GK: 1, DEF: 4, MID: 3, FWD: 3 },
    positions: {
      GK:  [{ x: 50, y: 88 }],
      DEF: [{ x: 15, y: 70 }, { x: 35, y: 72 }, { x: 65, y: 72 }, { x: 85, y: 70 }],
      MID: [{ x: 20, y: 50 }, { x: 50, y: 48 }, { x: 80, y: 50 }],
      FWD: [{ x: 20, y: 22 }, { x: 50, y: 16 }, { x: 80, y: 22 }]
    }
  },
  '4-4-2': {
    id: '4-4-2',
    label: '4-4-2 Clásico',
    limits: { GK: 1, DEF: 4, MID: 4, FWD: 2 },
    positions: {
      GK:  [{ x: 50, y: 88 }],
      DEF: [{ x: 15, y: 70 }, { x: 35, y: 72 }, { x: 65, y: 72 }, { x: 85, y: 70 }],
      MID: [{ x: 15, y: 48 }, { x: 35, y: 50 }, { x: 65, y: 50 }, { x: 85, y: 48 }],
      FWD: [{ x: 35, y: 20 }, { x: 65, y: 20 }]
    }
  },
  '3-5-2': {
    id: '3-5-2',
    label: '3-5-2 Posesión',
    limits: { GK: 1, DEF: 3, MID: 5, FWD: 2 },
    positions: {
      GK:  [{ x: 50, y: 88 }],
      DEF: [{ x: 25, y: 72 }, { x: 50, y: 74 }, { x: 75, y: 72 }],
      MID: [{ x: 10, y: 45 }, { x: 30, y: 52 }, { x: 50, y: 54 }, { x: 70, y: 52 }, { x: 90, y: 45 }],
      FWD: [{ x: 35, y: 20 }, { x: 65, y: 20 }]
    }
  },
  '5-3-2': {
    id: '5-3-2',
    label: '5-3-2 Defensivo',
    limits: { GK: 1, DEF: 5, MID: 3, FWD: 2 },
    positions: {
      GK:  [{ x: 50, y: 88 }],
      DEF: [{ x: 10, y: 68 }, { x: 30, y: 74 }, { x: 50, y: 76 }, { x: 70, y: 74 }, { x: 90, y: 68 }],
      MID: [{ x: 25, y: 50 }, { x: 50, y: 48 }, { x: 75, y: 50 }],
      FWD: [{ x: 35, y: 20 }, { x: 65, y: 20 }]
    }
  }
};

/**
 * Selecciona automáticamente a los mejores jugadores según los límites de la formación.
 * Deselecciona a todos los demás.
 * Modifica el array `players` in-place.
 */
export function autoSelectStarters(players, formationId = '4-3-3') {
  const formation = FORMATIONS[formationId] || FORMATIONS['4-3-3'];
  const limits = { ...formation.limits };
  
  // Sort players by rating descending
  const sorted = [...players].sort((a, b) => b.rating - a.rating);
  
  // Reset all to not starter
  players.forEach(p => p.isStarter = false);
  
  // Pick the best for each position
  const counts = { GK: 0, DEF: 0, MID: 0, FWD: 0 };
  for (const p of sorted) {
    if (counts[p.position] < limits[p.position]) {
      p.isStarter = true;
      counts[p.position]++;
    }
  }
  
  // Fallback: if we didn't reach 11 (e.g. not enough MIDs), just fill with the next best available
  let selectedCount = players.filter(p => p.isStarter).length;
  if (selectedCount < 11) {
    for (const p of sorted) {
      if (!p.isStarter) {
        p.isStarter = true;
        selectedCount++;
        if (selectedCount === 11) break;
      }
    }
  }
}

/**
 * Valida los starters actuales contra la formación elegida.
 * Si sobran en alguna posición, deselecciona a los peores.
 */
export function enforceFormationLimits(players, formationId) {
  const formation = FORMATIONS[formationId] || FORMATIONS['4-3-3'];
  const limits = { ...formation.limits };
  
  const selected = players.filter(p => p.isStarter);
  const byPos = { GK: [], DEF: [], MID: [], FWD: [] };
  
  selected.forEach(p => {
    byPos[p.position].push(p);
  });
  
  // Sort each list by rating ascending (worst first)
  Object.keys(byPos).forEach(pos => {
    byPos[pos].sort((a, b) => a.rating - b.rating);
    
    // While we have too many, deselect the worst ones
    while (byPos[pos].length > limits[pos]) {
      const worst = byPos[pos].shift();
      worst.isStarter = false;
    }
  });
}
