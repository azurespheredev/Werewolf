import React from 'react';

interface GameStatisticsProps {
  winner: string;
  day: number;
  alivePlayers: number[];
  deadPlayers: number[];
  onLeaveGame: () => void;
}

export default function GameStatistics({
  winner,
  day,
  alivePlayers,
  deadPlayers,
  onLeaveGame,
}: GameStatisticsProps) {
  return (
    <div className="space-y-4">
      <div
        className={`p-6 rounded-lg border-2 ${
          winner === 'villager'
            ? 'bg-blue-900/50 border-blue-500'
            : 'bg-red-900/50 border-red-500'
        }`}
      >
        <h3 className="text-2xl font-bold text-white mb-2">
          {winner === 'villager' ? 'Villagers Win!' : 'Werewolves Win!'}
        </h3>
        <p className="text-white/80 mb-3">The game has ended.</p>
        <div className="text-sm text-white/70 space-y-1">
          <p>Total Rounds: {day}</p>
          <p>Survivors: {alivePlayers.length}</p>
          <p>Eliminated: {deadPlayers.length}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={onLeaveGame}
        className="w-full px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
      >
        Return to Home
      </button>
    </div>
  );
}
