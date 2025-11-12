import React from 'react';
import CharacterCard from '../shared/CharacterCard';
import type { CharacterType, PlayerType } from '../../../lib/types';

interface PlayerCardProps {
  player: PlayerType;
  index: number;
  currentPlayerId: number;
  isAlive: boolean;
  isSelectable: boolean;
  isSelected: boolean;
  character: CharacterType | null;
  actualCharacter?: CharacterType | null;
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
  const classes = isSelectable
    ? 'cursor-pointer hover:scale-105'
    : 'opacity-50';
  const active = isSelected ? 'ring-4 ring-orange-500 scale-105' : '';

  let displayCharacter = null;
  if (showActualRole && actualCharacter) {
    displayCharacter = actualCharacter;
  } else if (character) {
    displayCharacter = { ...character, name: player.name ?? 'Waiting' };
  }

  return (
    <div
      role="button"
      tabIndex={isSelectable ? 0 : -1}
      aria-disabled={!isSelectable}
      onClick={() => isSelectable && onSelect()}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && isSelectable) {
          e.preventDefault();
          onSelect();
        }
      }}
      className={`relative transform transition-all ${classes} ${active}`}
    >
      {displayCharacter && (
        <CharacterCard
          character={displayCharacter}
          isRevealed={showActualRole}
        />
      )}
      <div className="absolute bottom-2 left-2 right-2 bg-slate-900/90 rounded-lg px-2 py-1">
        <p className="text-white text-sm font-semibold text-center truncate">
          {player.name ?? 'Waiting...'}
          {index === currentPlayerId ? ' (YOU)' : ''}
        </p>
        {showActualRole && actualCharacter && (
          <p className="text-orange-300 text-xs text-center truncate">
            {actualCharacter.name}
          </p>
        )}
      </div>
      {!isAlive && (
        <div className="absolute inset-0 bg-black/70 rounded-lg flex items-center justify-center">
          <span className="text-red-500 font-bold text-xl">ELIMINATED</span>
        </div>
      )}
    </div>
  );
}
