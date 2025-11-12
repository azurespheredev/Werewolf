"use client";

import React from "react";
import CharacterCard from "../shared/CharacterCard";
import type { CharacterType } from "../../lib/types";

interface RolePanelProps {
  role: CharacterType;
  isRevealed: boolean;
  onToggleReveal: () => void;
}

export default function RolePanel({ role, isRevealed, onToggleReveal }: RolePanelProps) {
  return (
    <div className="w-80 bg-slate-900/80 backdrop-blur-sm rounded-xl border border-orange-500/30 p-6 space-y-4 overflow-y-auto">
      <h2 className="text-2xl font-bold text-orange-50 mb-4">Your Role</h2>
      <div className="flex justify-center">
        <CharacterCard character={role} isRevealed={isRevealed} onClick={onToggleReveal} className="w-48 h-64" />
      </div>
      {isRevealed && (
        <div className="mt-4 space-y-2">
          <p className="text-orange-50 font-semibold">{role.name}</p>
          <p className="text-orange-100/80 text-sm">{role.description}</p>
          <p className="text-orange-200 text-xs capitalize">Team: {role.team}</p>
        </div>
      )}
    </div>
  );
}
