"use client";

import React from "react";
import Image from "next/image";
import { CharacterType, PlayerType } from "../../lib/types";

interface PlayerCardProps {
  player: PlayerType;
  index: number;
  currentPlayerId: number;
  isAlive: boolean;
  isSelectable: boolean;
  isSelected: boolean;
  character: CharacterType;
  actualCharacter?: CharacterType;
  showActualRole: boolean;
  onSelect: () => void;
}

export default function PlayerCard({
  player,
  index,
  currentPlayerId,
  isAlive,
  isSelectable,
  isSelected,
  character,
  actualCharacter,
  showActualRole,
  onSelect,
}: PlayerCardProps) {
  const isMe = index === currentPlayerId;

  let borderClass = "border-gray-600";
  if (isSelected) {
    borderClass = "border-yellow-400 shadow-yellow-400 shadow-lg";
  } else if (!isAlive) {
    borderClass = "border-red-600";
  } else if (isMe) {
    borderClass = "border-blue-500";
  }

  const displayChar = showActualRole && actualCharacter ? actualCharacter : character;

  return (
    <div
      className={`relative bg-slate-800/60 rounded-lg p-3 border-2 transition-all ${borderClass} ${
        isSelectable ? "cursor-pointer hover:scale-105" : "cursor-default"
      } ${isSelected ? "scale-105" : ""}`}
      onClick={isSelectable ? onSelect : undefined}
      role={isSelectable ? "button" : undefined}
      tabIndex={isSelectable ? 0 : undefined}
      onKeyDown={(e) => {
        if (isSelectable && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onSelect();
        }
      }}
    >
      {/* Player Avatar */}
      <div className="relative w-full aspect-square mb-2 rounded overflow-hidden">
        <Image
          src={displayChar.avatar}
          alt={player.name || "Player"}
          width={200}
          height={200}
          className={`w-full h-full object-cover ${!isAlive ? "grayscale opacity-50" : ""}`}
        />
        {!isAlive && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60">
            <span className="text-red-400 text-2xl font-bold">💀</span>
          </div>
        )}
      </div>

      {/* Player Name */}
      <p className="text-orange-50 font-semibold text-center truncate">{player.name || `Player ${index + 1}`}</p>

      {/* Role Info (only if showing actual roles) */}
      {showActualRole && actualCharacter && (
        <p className="text-orange-300 text-xs text-center truncate">{actualCharacter.name}</p>
      )}

      {/* Tags */}
      {isMe && (
        <div className="absolute top-1 right-1 bg-blue-500 text-white text-xs px-2 py-1 rounded font-bold">YOU</div>
      )}
      {player.isAdmin && (
        <div className="absolute top-1 left-1 bg-yellow-500 text-black text-xs px-2 py-1 rounded font-bold">HOST</div>
      )}
      {!isAlive && (
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs px-2 py-1 rounded font-bold">
          DEAD
        </div>
      )}
    </div>
  );
}
