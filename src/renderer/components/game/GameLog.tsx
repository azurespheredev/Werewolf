import React from 'react';

interface GameLogProps {
  logs: Array<{ id: string; text: string }>;
}

export default function GameLog({ logs }: GameLogProps) {
  return (
    <div className="mt-6 pt-6 border-t border-orange-500/30">
      <h3 className="text-xl font-bold text-orange-50 mb-3">Game Log</h3>
      <div className="space-y-2 text-sm text-orange-100/80 max-h-64 overflow-y-auto">
        {logs.length === 0 ? (
          <p>Game started. Good luck!</p>
        ) : (
          logs.map((log) => (
            <p key={log.id} className="py-1 border-b border-orange-500/10">
              {log.text}
            </p>
          ))
        )}
      </div>
    </div>
  );
}
