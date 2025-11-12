"use client";

import React from "react";
import Button from "../shared/Button";

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
  if (submitted) {
    return (
      <div className="p-4 bg-green-900/30 rounded-lg border border-green-500/30">
        <p className="text-green-200 text-sm">✓ Action submitted. Waiting for other players...</p>
      </div>
    );
  }

  if (!canAct) {
    return (
      <div className="p-4 bg-gray-900/30 rounded-lg border border-gray-500/30">
        <p className="text-gray-300 text-sm">Your role has no night action. Rest while others act...</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="p-4 bg-purple-900/30 rounded-lg border border-purple-500/30">
        <h3 className="text-purple-200 font-semibold mb-2">Night Phase</h3>
        <p className="text-purple-100/80 text-sm">
          {target !== null
            ? `Target selected. Click submit to confirm your action.`
            : `Select a player to target with your night action.`}
        </p>
      </div>

      <div className="flex gap-2">
        <Button className="flex-1 px-4 py-3 text-sm" onClick={onSubmitAction} disabled={target === null}>
          Submit Action
        </Button>
        <Button className="flex-1 px-4 py-3 text-sm bg-gray-600 hover:bg-gray-500" onClick={onSkipAction}>
          Skip
        </Button>
      </div>
    </div>
  );
}
