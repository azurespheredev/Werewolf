"use client";

import React from "react";
import Button from "@/components/shared/Button";

interface GameStatisticsProps {
  winner: string;
  day: number;
  alivePlayers: number[];
  deadPlayers: number[];
  onLeaveGame: () => void;
}

export default function GameStatistics({ winner, day, alivePlayers, deadPlayers, onLeaveGame }: GameStatisticsProps) {
  const winnerTeam = winner === "villager" ? "Villagers" : "Werewolves";

  return (
    <div className="space-y-4">
      <div className="p-6 bg-linear-to-br from-yellow-900/40 to-orange-900/40 rounded-lg border-2 border-yellow-500/50">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-4">🎉 Game Over! 🎉</h2>
        <p className="text-2xl text-orange-100 text-center font-semibold">{winnerTeam} Win!</p>
      </div>

      <div className="p-4 bg-slate-800/60 rounded-lg space-y-3">
        <h3 className="text-xl font-bold text-orange-50">Statistics</h3>

        <div className="space-y-2 text-orange-100/80">
          <div className="flex justify-between">
            <span>Days Survived:</span>
            <span className="font-semibold">{day}</span>
          </div>
          <div className="flex justify-between">
            <span>Players Alive:</span>
            <span className="font-semibold text-green-400">{alivePlayers.length}</span>
          </div>
          <div className="flex justify-between">
            <span>Players Eliminated:</span>
            <span className="font-semibold text-red-400">{deadPlayers.length}</span>
          </div>
        </div>
      </div>

      <div className="p-4 bg-blue-900/30 rounded-lg border border-blue-500/30">
        <p className="text-blue-100 text-sm text-center">Check the player grid to see everyone&apos;s roles!</p>
      </div>

      <Button className="w-full px-6 py-4 text-lg" onClick={onLeaveGame}>
        Leave Game
      </Button>
    </div>
  );
}
