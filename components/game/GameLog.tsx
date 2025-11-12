"use client";

import React from "react";

interface GameLogProps {
  logs: Array<{ id: string; text: string }>;
}

export default function GameLog({ logs }: GameLogProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-bold text-orange-50">Game Log</h3>
      <div className="bg-slate-800/60 rounded-lg p-3 h-64 overflow-y-auto space-y-1">
        {logs.length === 0 ? (
          <p className="text-gray-400 text-sm text-center">Game events will appear here...</p>
        ) : (
          logs.map((log) => (
            <div key={log.id} className="text-orange-100/80 text-xs py-1 border-b border-slate-700/30">
              {log.text}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
