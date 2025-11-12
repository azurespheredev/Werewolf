import { useState } from 'react';
import { CharacterType } from '../../../lib/types';

interface CharacterCardProps {
  character: CharacterType | null;
  isRevealed?: boolean;
  className?: string;
  onClick?: () => void;
  isSelected?: boolean;
  showDetails?: boolean;
}

export default function CharacterCard({
  character,
  isRevealed = false,
  className = '',
  onClick,
  isSelected = false,
  showDetails = false,
}: CharacterCardProps) {
  const [isFlipped, setIsFlipped] = useState(isRevealed);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const displayImage =
    isFlipped && character ? character.avatar : '/images/characters/user.jpg';

  const borderColor = isSelected
    ? 'border-yellow-400 shadow-yellow-400'
    : character?.team === 'werewolf'
      ? 'border-red-600 shadow-red-600'
      : character?.team === 'villager'
        ? 'border-blue-600 shadow-blue-600'
        : 'border-purple-600 shadow-purple-600';

  return (
    <div
      className={`relative group cursor-pointer ${className}`}
      onClick={handleClick}
    >
      <div
        className={`relative overflow-hidden rounded-lg border-4 ${borderColor} shadow-lg transition-all duration-300 hover:scale-105 ${
          isSelected ? 'scale-110 shadow-2xl' : ''
        }`}
        style={{
          perspective: '1000px',
        }}
      >
        <div
          className="relative w-full h-full transition-transform duration-700"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* Front - Hidden User */}
          <div
            className="absolute inset-0"
            style={{
              backfaceVisibility: 'hidden',
            }}
          >
            <img
              src="/images/characters/user.jpg"
              alt="Hidden"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-2 left-0 right-0 text-center text-white font-bold text-sm px-2">
              ???
            </div>
          </div>

          {/* Back - Revealed Character */}
          {character && (
            <div
              className="absolute inset-0"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            >
              <img
                src={character.avatar}
                alt={character.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-2 left-0 right-0 text-center text-white font-bold text-sm px-2">
                {character.name}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Details Tooltip */}
      {showDetails && character && isFlipped && (
        <div className="absolute z-50 left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-3 bg-gray-900 text-white rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <h4 className="font-bold text-lg mb-1">{character.name}</h4>
          <p className="text-xs text-gray-300 mb-2">
            Team: <span className="capitalize">{character.team}</span>
          </p>
          <p className="text-sm">{character.description}</p>
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-900" />
        </div>
      )}
    </div>
  );
}
