import React from 'react';

interface NightPhaseActionsProps {
  canAct: boolean;
  submitted: boolean;
  target: number | null;
  onSubmitAction: () => void;
  onSkipAction: () => void;
}

export default function NightPhaseActions({
  canAct,
  submitted,
  target,
  onSubmitAction,
  onSkipAction,
}: NightPhaseActionsProps) {
  if (!canAct) {
    return (
      <p className="text-orange-100/80 text-sm">Waiting for night actions...</p>
    );
  }

  if (submitted) {
    return (
      <div className="p-3 bg-green-900/30 rounded-lg border border-green-500/30">
        <p className="text-green-200 text-sm">
          Action submitted. Waiting for others...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-orange-100/80 text-sm">
        Select a player and submit your night action
      </p>
      <button
        type="button"
        onClick={onSubmitAction}
        disabled={target === null}
        className="w-full px-4 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
      >
        Submit Action
      </button>
      <button
        type="button"
        onClick={onSkipAction}
        className="w-full px-4 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
      >
        Skip Action
      </button>
    </div>
  );
}
