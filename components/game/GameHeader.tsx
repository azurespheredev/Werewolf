"use client";

import React from "react";
import Timer from "../shared/Timer";
import { GamePhaseEnum } from "../../lib/enums";

interface GameHeaderProps {
  phaseLabel: string;
  day: number;
  isAlive: boolean;
  timerLimit: number;
  phase: GamePhaseEnum;
  onTimerEnd: () => void;
  onLeaveGame: () => void;
}

export default function GameHeader({
  phaseLabel,
  day,
  isAlive,
  timerLimit,
  phase,
  onTimerEnd,
  onLeaveGame,
}: GameHeaderProps) {
  return (
    <header className="bg-slate-900/80 backdrop-blur-sm border-b border-orange-500/30 p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold text-orange-50">{phaseLabel}</h1>
          <span className="text-xl text-orange-200">Day {day}</span>
          {!isAlive && (
            <span className="px-3 py-1 bg-red-600/80 rounded-full text-white font-semibold">Eliminated</span>
          )}
        </div>
        <div className="flex items-center gap-4">
          <Timer initialTime={timerLimit} key={`${phase}-${day}`} onTimeEnd={onTimerEnd} className="w-24 h-24" />
          <button
            type="button"
            onClick={onLeaveGame}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            Leave Game
          </button>
        </div>
      </div>
    </header>
  );
}
