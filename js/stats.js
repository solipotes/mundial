// ══════════════════════════════════════════════════════════
//  STATS — Accumulated statistics helpers
// ══════════════════════════════════════════════════════════
// This module provides utility functions for computing
// and displaying tournament statistics.

/**
 * Computes the player's overall performance score.
 * Used to rank players across the tournament.
 */
export function playerPerformanceScore(player) {
  return (
    (player.goals  || 0) * 5 +
    (player.assists || 0) * 3 +
    (player.saves  || 0) * 0.5 -
    (player.yellowCards || 0) * 1 -
    (player.redCards    || 0) * 3
  );
}

/**
 * Returns sorted list of all players across all teams,
 * with their tournament stats included.
 */
export function getAllPlayerStats(teamRatings) {
  const all = [];
  Object.values(teamRatings).forEach(team => {
    team.players.forEach(player => {
      all.push({
        ...player,
        countryId:   team.id,
        countryName: team.name,
        countryFlag: team.flag,
        score:       playerPerformanceScore(player),
      });
    });
  });
  return all;
}

/**
 * Get top goal-scorers across the tournament.
 */
export function getTopGoalScorers(teamRatings, limit = 10) {
  return getAllPlayerStats(teamRatings)
    .filter(p => (p.goals || 0) > 0)
    .sort((a, b) => b.goals - a.goals || b.assists - a.assists)
    .slice(0, limit);
}

/**
 * Get top assist providers.
 */
export function getTopAssistProviders(teamRatings, limit = 10) {
  return getAllPlayerStats(teamRatings)
    .filter(p => (p.assists || 0) > 0)
    .sort((a, b) => b.assists - a.assists)
    .slice(0, limit);
}

/**
 * Get top goalkeepers by saves.
 */
export function getTopGoalkeepers(teamRatings, limit = 10) {
  return getAllPlayerStats(teamRatings)
    .filter(p => p.position === 'GK' && (p.saves || 0) > 0)
    .sort((a, b) => b.saves - a.saves)
    .slice(0, limit);
}

/**
 * Compute round-by-round rating progression for a team.
 */
export function getTeamRatingHistory(teamId, rounds) {
  const history = [];
  Object.entries(rounds).forEach(([round, roundData]) => {
    if (!roundData.simulated) return;
    const match = roundData.matches.find(
      m => m.team1Id === teamId || m.team2Id === teamId
    );
    if (!match) return;
    history.push({
      round:   parseInt(round),
      won:     match.winnerId === teamId,
      goalsFor: match.team1Id === teamId ? match.score1 : match.score2,
      goalsAgainst: match.team1Id === teamId ? match.score2 : match.score1,
    });
  });
  return history;
}

/**
 * Compute cards summary for disciplinary table.
 */
export function getCardsTable(teamRatings, limit = 20) {
  return getAllPlayerStats(teamRatings)
    .filter(p => (p.yellowCards || 0) + (p.redCards || 0) > 0)
    .sort((a, b) =>
      (b.yellowCards + b.redCards * 3) - (a.yellowCards + a.redCards * 3)
    )
    .slice(0, limit);
}

/**
 * Format a player's name short (Last name only).
 */
export function shortName(fullName) {
  if (!fullName) return '—';
  const parts = fullName.trim().split(' ');
  return parts.length > 1 ? parts[parts.length - 1] : fullName;
}
