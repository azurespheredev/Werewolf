"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NextImage from "next/image";
import { toast } from "react-toastify";
import BackgroundBox from "../../components/shared/BackgroundBox";
import Button from "../../components/shared/Button";
import Input from "../../components/shared/Input";
import CharacterCard from "../../components/shared/CharacterCard";
import { configureApiService, getApiService } from "../../services/apiService";
import { CharacterType, ApiResponse, RoomType } from "../../lib/types";
import { LocalStorageKeyEnum, RouteEnum } from "../../lib/enums";
import { PLAYER_ROLES_DATA, SERVER_PORT } from "../../lib/constants";

export default function CreateRoomPage() {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [playerCount, setPlayerCount] = useState<number>(4);
  const [selectedRoles, setSelectedRoles] = useState<number[]>([]);
  const [username, setUsername] = useState<string>("");
  const [timerLimit, setTimerLimit] = useState<number>(60);
  const [isShowRole, setIsShowRole] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [draggedCharacterId, setDraggedCharacterId] = useState<number | null>(null);
  const [draggedSlotIndex, setDraggedSlotIndex] = useState<number | null>(null);
  const router = useRouter();

  // Configure API from saved address and fetch all available characters
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const savedAddress = localStorage.getItem(LocalStorageKeyEnum.SERVER_ADDRESS);
        if (savedAddress) {
          configureApiService(`${savedAddress}:${SERVER_PORT}`);
        }
        const apiService = getApiService();
        const response: ApiResponse<CharacterType[]> = await apiService.get("/api/roles");
        if (response.success && response.data) {
          setCharacters(response.data);
        }
      } catch {
        toast.error("Failed to load characters");
      }
    };
    fetchCharacters();

    // Load saved username
    const savedUsername = localStorage.getItem(LocalStorageKeyEnum.USERNAME);
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  // Auto-select roles based on player count
  useEffect(() => {
    if (playerCount >= 4 && playerCount <= 23 && characters.length > 0) {
      const rolesForCount = PLAYER_ROLES_DATA[playerCount - 4];
      if (rolesForCount) {
        // Ensure unique role IDs only
        const uniqueRoles = Array.from(new Set(rolesForCount));
        setSelectedRoles(uniqueRoles);
      }
    }
  }, [playerCount, characters]);

  // Drag handlers for character cards
  const handleDragStartFromGrid = (roleId: number) => {
    setDraggedCharacterId(roleId);
    setDraggedSlotIndex(null);
  };

  const handleDragStartFromSlot = (index: number) => {
    setDraggedSlotIndex(index);
    setDraggedCharacterId(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDropOnSlot = (targetIndex: number) => {
    if (draggedCharacterId !== null) {
      // Dropping from character grid to slot
      setSelectedRoles((prev) => {
        const newRoles = [...prev];
        if (targetIndex < newRoles.length) {
          // Replace existing slot
          newRoles[targetIndex] = draggedCharacterId;
        } else {
          // Add to end
          newRoles.push(draggedCharacterId);
        }
        return newRoles;
      });
    } else if (draggedSlotIndex !== null && draggedSlotIndex !== targetIndex) {
      // Reordering within selected roles
      setSelectedRoles((prev) => {
        const newRoles = [...prev];
        const [removed] = newRoles.splice(draggedSlotIndex, 1);
        newRoles.splice(targetIndex, 0, removed);
        return newRoles;
      });
    }
    setDraggedCharacterId(null);
    setDraggedSlotIndex(null);
  };

  const handleDropOnGrid = () => {
    // Dropping back to grid removes from selection
    if (draggedSlotIndex !== null) {
      setSelectedRoles((prev) => {
        const newRoles = [...prev];
        newRoles.splice(draggedSlotIndex, 1);
        return newRoles;
      });
    }
    setDraggedCharacterId(null);
    setDraggedSlotIndex(null);
  };

  const handleRemoveRole = (index: number) => {
    setSelectedRoles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddRoleToEnd = (roleId: number) => {
    if (selectedRoles.length < playerCount) {
      setSelectedRoles((prev) => [...prev, roleId]);
    } else {
      toast.warning(`You can only select ${playerCount} roles`);
    }
  };

  const handlePlayerCountChange = (count: number) => {
    let validCount = count;
    if (validCount < 4) validCount = 4;
    if (validCount > 23) validCount = 23;
    setPlayerCount(validCount);
  };

  const handleCreateRoom = useCallback(async () => {
    if (!username.trim()) {
      toast.error("Please enter your username");
      return;
    }

    if (selectedRoles.length !== playerCount) {
      toast.error(`Please select exactly ${playerCount} roles`);
      return;
    }

    try {
      setIsLoading(true);
      const apiService = getApiService();
      const response: ApiResponse<RoomType> = await apiService.post("/api/rooms/create", {
        username: username.trim(),
        roles: selectedRoles,
        timerLimit,
        isShowRole,
      });

      if (response.success && response.data) {
        localStorage.setItem(LocalStorageKeyEnum.USERNAME, username.trim());
        localStorage.setItem(LocalStorageKeyEnum.ROOM_CODE, response.data.roomCode);
        localStorage.setItem(LocalStorageKeyEnum.PLAYER_ID, "0"); // Admin is first player
        toast.success("Room created successfully!");
        router.push(RouteEnum.WAITING_ROOM);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to create room";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [username, selectedRoles, playerCount, timerLimit, isShowRole, router]);

  return (
    <BackgroundBox src="/images/bg_home.jpg" className="flex flex-col items-center w-full h-screen overflow-y-auto p-8">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <Button className="px-6 py-2 text-base" onClick={() => router.push(RouteEnum.HOME)}>
            ← Back
          </Button>
          <h1 className="text-4xl font-bold text-orange-50 drop-shadow-lg">Create Room</h1>
          <div className="w-24" />
        </div>

        {/* Configuration Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Left Panel - Settings */}
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border-2 border-orange-600">
            <h2 className="text-2xl font-bold text-orange-50 mb-4">Game Settings</h2>

            <div className="space-y-4">
              <div>
                <label htmlFor="username-input" className="block text-orange-50 mb-2">
                  Your Username
                </label>
                <Input
                  id="username-input"
                  type="text"
                  placeholder="Enter your name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full text-2xl text-white border-b-orange-400"
                  maxLength={20}
                />
              </div>

              <div>
                <label htmlFor="player-count-range" className="block text-orange-50 mb-2">
                  Players: {playerCount}
                </label>
                <input
                  id="player-count-range"
                  type="range"
                  min="4"
                  max="23"
                  value={playerCount}
                  onChange={(e) => handlePlayerCountChange(parseInt(e.target.value, 10))}
                  className="w-full accent-orange-600"
                />
              </div>

              <div>
                <label htmlFor="timer-limit-range" className="block text-orange-50 mb-2">
                  Timer Limit (seconds): {timerLimit}
                </label>
                <input
                  id="timer-limit-range"
                  type="range"
                  min="30"
                  max="300"
                  step="30"
                  value={timerLimit}
                  onChange={(e) => setTimerLimit(parseInt(e.target.value, 10))}
                  className="w-full accent-orange-600"
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="showRole"
                  checked={isShowRole}
                  onChange={(e) => setIsShowRole(e.target.checked)}
                  className="w-5 h-5 accent-orange-600"
                />
                <label htmlFor="showRole" className="text-orange-50">
                  Show roles to all players after game ends
                </label>
              </div>
            </div>
          </div>

          {/* Right Panel - Selected Roles Summary */}
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border-2 border-orange-600">
            <h2 className="text-2xl font-bold text-orange-50 mb-4">
              Selected Roles ({selectedRoles.length}/{playerCount})
            </h2>
            <p className="text-orange-200 text-sm mb-3">Drag characters here or click to remove</p>
            <div className="space-y-2 max-h-72 overflow-y-auto">
              {Array.from({ length: playerCount }).map((_, index) => {
                const roleId = selectedRoles[index];
                const character = roleId ? characters.find((c) => c.id === roleId) : null;
                const slotKey = `slot-pos-${index}-${roleId || "empty"}`;

                return (
                  <div
                    key={slotKey}
                    className={`flex items-center gap-3 p-2 rounded border-2 transition-all ${
                      character
                        ? "bg-black/40 border-orange-600/50 cursor-move hover:border-orange-600"
                        : "bg-black/20 border-dashed border-orange-600/30 hover:border-orange-600/60"
                    }`}
                    draggable={!!character}
                    onDragStart={() => handleDragStartFromSlot(index)}
                    onDragOver={handleDragOver}
                    onDrop={() => handleDropOnSlot(index)}
                    onClick={() => character && handleRemoveRole(index)}
                    onKeyDown={(e) => {
                      if ((e.key === "Enter" || e.key === " ") && character) {
                        e.preventDefault();
                        handleRemoveRole(index);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    {character ? (
                      <>
                        <NextImage
                          src={character.avatar}
                          alt={character.name}
                          width={48}
                          height={48}
                          className="w-12 h-12 rounded object-cover"
                        />
                        <div className="flex-1">
                          <p className="text-orange-50 font-semibold">{character.name}</p>
                          <p className="text-orange-200 text-xs capitalize">Team: {character.team}</p>
                        </div>
                        <span className="text-orange-400 text-xs">✕ Click to remove</span>
                      </>
                    ) : (
                      <div className="w-full text-center text-orange-400 text-sm py-2">
                        Slot {index + 1} - Drop character here
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Character Selection Grid */}
        <div
          className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border-2 border-orange-600 mb-6"
          onDragOver={handleDragOver}
          onDrop={handleDropOnGrid}
        >
          <h2 className="text-2xl font-bold text-orange-50 mb-4">
            Select Characters (Drag to slots above or click to add)
          </h2>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
            {characters.map((character) => (
              <div
                key={character.id}
                draggable
                onDragStart={() => handleDragStartFromGrid(character.id)}
                className="cursor-move"
              >
                <CharacterCard
                  character={character}
                  isRevealed
                  onClick={() => handleAddRoleToEnd(character.id)}
                  isSelected={false}
                  showDetails
                  className="w-full aspect-square"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Create Button */}
        <div className="flex justify-center">
          <Button
            className="px-12 py-4 text-2xl"
            onClick={handleCreateRoom}
            loading={isLoading}
            disabled={selectedRoles.length !== playerCount || !username.trim()}
          >
            Create Room
          </Button>
        </div>
      </div>
    </BackgroundBox>
  );
}
