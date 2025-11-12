"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CharacterType } from "@/lib/types";

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
  className = "",
  onClick,
  isSelected = false,
  showDetails = false,
}: CharacterCardProps) {
  const [isFlipped] = useState(isRevealed);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if ((event.key === "Enter" || event.key === " ") && onClick) {
      event.preventDefault();
      onClick();
    }
  };

  let borderColor = "border-gray-600 shadow-gray-600";
  if (isSelected) {
    borderColor = "border-yellow-400 shadow-yellow-400";
  } else if (character?.team === "werewolf") {
    borderColor = "border-red-600 shadow-red-600";
  } else if (character?.team === "villager") {
    borderColor = "border-blue-600 shadow-blue-600";
  } else if (character?.team === "neutral") {
    borderColor = "border-purple-600 shadow-purple-600";
  }

  return (
    <div
      className={`relative group cursor-pointer ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div
        className={`relative h-full overflow-hidden rounded-lg border-4 ${borderColor} shadow-lg transition-all duration-300 hover:scale-105 ${
          isSelected ? "scale-110 shadow-2xl" : ""
        }`}
        style={{
          perspective: "1000px",
        }}
      >
        <div
          className="relative w-full h-full transition-transform duration-700"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front - Hidden User */}
          <div
            className="absolute inset-0"
            style={{
              backfaceVisibility: "hidden",
            }}
          >
            <Image
              src="/images/characters/user.jpg"
              alt="Hidden"
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 12vw"
              className="object-cover"
              priority={false}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-2 left-0 right-0 text-center text-white font-bold text-sm px-2">???</div>
          </div>

          {/* Back - Revealed Character */}
          {character && (
            <div
              className="absolute inset-0"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <Image
                src={character.avatar}
                alt={character.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 12vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
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
