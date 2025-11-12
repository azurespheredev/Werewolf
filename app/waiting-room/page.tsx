"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";
import BackgroundBox from "../../components/shared/BackgroundBox";
import Button from "../../components/shared/Button";
import Modal from "../../components/shared/Modal";
import { getApiService } from "../../services/apiService";
import { socketService } from "../../services/socketService";
import { ApiResponse, CharacterType, PlayerType, RoomType } from "../../lib/types";
import { LocalStorageKeyEnum, RouteEnum } from "../../lib/enums";
import { SERVER_PORT } from "../../lib/constants";

export default function WaitingRoomPage() {
  const router = useRouter();
  const [room, setRoom] = useState<RoomType | null>(null);
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [isLeaveDialogOpen, setIsLeaveDialogOpen] = useState<boolean>(false);
  const [playerId] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const storedPlayerId = localStorage.getItem(LocalStorageKeyEnum.PLAYER_ID);
      return storedPlayerId ? parseInt(storedPlayerId, 10) : -1;
    }
    return -1;
  });

  // Fetch roles used in this room
  const fetchCharacters = useCallback(async () => {
    try {
      const apiService = getApiService();
      const response: ApiResponse<CharacterType[]> = await apiService.get("/api/roles");
      if (response.success && response.data) {
        setCharacters(response.data);
      }
    } catch {
      console.error("Failed to fetch characters");
    }
  }, []);

  // Fetch the latest room data by code
  const fetchRoomData = useCallback(
    async (roomCode: string) => {
      try {
        const apiService = getApiService();
        const response: ApiResponse<RoomType> = await apiService.get(`/api/rooms/${roomCode}`);
        if (response.success && response.data) {
          setRoom(response.data);
          return;
        }
        toast.error("Room not found");
        router.push(RouteEnum.HOME);
      } catch {
        toast.error("Failed to load room");
        router.push(RouteEnum.HOME);
      }
    },
    [router]
  );

  useEffect(() => {
    // Use setTimeout to avoid cascading state updates
    const timer = setTimeout(() => {
      fetchCharacters();

      const roomCode = localStorage.getItem(LocalStorageKeyEnum.ROOM_CODE);
      if (roomCode) {
        fetchRoomData(roomCode);
      } else {
        router.push(RouteEnum.HOME);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [fetchCharacters, fetchRoomData, router]);

  useEffect(() => {
    if (!room) return;

    const serverAddress = localStorage.getItem(LocalStorageKeyEnum.SERVER_ADDRESS);
    if (serverAddress) {
      socketService.connect(`http://${serverAddress}:${SERVER_PORT}`);
      socketService.joinRoom(room.roomCode);

      socketService.onGameStarted(() => {
        router.push(RouteEnum.GAME);
      });

      // Listen for player left events
      socketService.onPlayerLeft(() => {
        // Refresh room data when a player leaves
        fetchRoomData(room.roomCode);
      });
    }

    return () => {
      socketService.removeAllListeners();
    };
  }, [room, router, fetchRoomData]);

  const handleStartGame = async () => {
    if (!room) return;

    try {
      const apiService = getApiService();
      const response: ApiResponse = await apiService.post("/api/game/start", {
        roomId: room.id,
      });

      if (response.success) {
        toast.success("Game starting!");
        socketService.emitGameStarted(room.roomCode);
        router.push(RouteEnum.GAME);
      } else {
        toast.error(response.message || "Failed to start game");
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to start game";
      toast.error(errorMessage);
    }
  };

  const handleLeaveRoom = async () => {
    if (!room) return;

    try {
      const apiService = getApiService();
      const response: ApiResponse = await apiService.post("/api/rooms/leave", {
        roomCode: room.roomCode,
        playerId: playerId.toString(),
      });

      if (response.success) {
        // Emit player left event to notify other players
        socketService.emitPlayerLeft(room.roomCode, playerId);
        socketService.leaveRoom(room.roomCode);

        localStorage.removeItem(LocalStorageKeyEnum.ROOM_CODE);
        localStorage.removeItem(LocalStorageKeyEnum.PLAYER_ID);

        toast.success("Left room successfully");
        router.push(RouteEnum.HOME);
      } else {
        toast.error(response.message || "Failed to leave room");
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to leave room";
      toast.error(errorMessage);
      // Still navigate away even if the API call fails
      localStorage.removeItem(LocalStorageKeyEnum.ROOM_CODE);
      localStorage.removeItem(LocalStorageKeyEnum.PLAYER_ID);
      router.push(RouteEnum.HOME);
    }
  };

  if (!room) {
    return (
      <BackgroundBox src="/images/bg_home.jpg" className="flex justify-center items-center w-full h-screen">
        <p className="text-2xl text-orange-50">Loading room...</p>
      </BackgroundBox>
    );
  }

  const isAdmin = room.players[playerId]?.isAdmin || false;
  const allPlayersJoined = room.players.every((p) => p.name !== null);
  const filledSlots = room.players.filter((p) => p.name !== null).length;

  return (
    <BackgroundBox src="/images/bg_home.jpg" className="flex flex-col items-center w-full h-screen overflow-y-auto p-8">
      <div className="w-full max-w-6xl">
        <div className="flex justify-between items-center mb-6">
          <Button className="px-6 py-2 text-base" onClick={() => setIsLeaveDialogOpen(true)}>
            ← Leave Room
          </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-orange-50 drop-shadow-lg">Waiting Room</h1>
            <p className="text-xl text-orange-200 mt-2">
              Room Code: <span className="font-bold">{room.roomCode}</span>
            </p>
          </div>
          <div className="w-32" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-2 bg-black/60 backdrop-blur-sm rounded-lg p-6 border-2 border-orange-600">
            <h2 className="text-2xl font-bold text-orange-50 mb-4">
              Players ({filledSlots}/{room.maxPlayers})
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {room.players.map((player: PlayerType, index: number) => {
                const isCurrentPlayer = index === playerId;
                let borderClass = "border-gray-500";
                if (player.isOnline) borderClass = "border-green-500";
                if (isCurrentPlayer) borderClass = "border-yellow-400 anim-glow";
                const playerKey = `player-${room.id}-${index}-${player.name || "empty"}`;

                return (
                  <div
                    key={playerKey}
                    className={`relative bg-black/40 rounded-lg p-3 border-2 transition-all ${borderClass}`}
                  >
                    <div className="relative w-full aspect-square mb-2 rounded overflow-hidden">
                      <div className="w-full h-full bg-gray-700">
                        <Image
                          src="/images/characters/user.jpg"
                          alt="Hidden player"
                          fill
                          className="object-cover opacity-30"
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        {player.name ? (
                          <span className="text-white font-bold text-lg text-center px-2">{player.name}</span>
                        ) : (
                          <span className="text-gray-400 text-sm">Waiting...</span>
                        )}
                      </div>
                    </div>

                    {player.isAdmin && (
                      <div className="absolute top-1 left-1 bg-yellow-500 text-black text-xs px-2 py-1 rounded font-bold">
                        HOST
                      </div>
                    )}

                    {isCurrentPlayer && (
                      <div className="absolute top-1 right-1 bg-blue-500 text-white text-xs px-2 py-1 rounded font-bold">
                        YOU
                      </div>
                    )}

                    <div
                      className={`w-2 h-2 rounded-full absolute bottom-2 right-2 ${
                        player.isOnline ? "bg-green-400" : "bg-gray-400"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border-2 border-orange-600">
            <h2 className="text-2xl font-bold text-orange-50 mb-4">Game Settings</h2>

            <div className="space-y-4 text-orange-50">
              <div>
                <p className="text-sm text-orange-200">Timer Limit</p>
                <p className="text-xl font-bold">{room.timerLimit}s</p>
              </div>

              <div>
                <p className="text-sm text-orange-200">Show Roles After Game</p>
                <p className="text-xl font-bold">{room.isShowRole ? "Yes" : "No"}</p>
              </div>

              <div>
                <p className="text-sm text-orange-200">Total Roles</p>
                <p className="text-xl font-bold">{room.maxPlayers}</p>
              </div>
            </div>

            {isAdmin && (
              <div className="mt-6">
                <Button className="w-full px-6 py-3" onClick={handleStartGame} disabled={!allPlayersJoined}>
                  {allPlayersJoined ? "Start Game" : "Waiting for Players..."}
                </Button>
                {!allPlayersJoined && (
                  <p className="text-orange-300 text-sm text-center mt-2">All players must join before starting</p>
                )}
              </div>
            )}

            {!isAdmin && (
              <div className="mt-6 text-center">
                <p className="text-orange-300 text-sm">Waiting for host to start the game...</p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border-2 border-orange-600">
          <h2 className="text-2xl font-bold text-orange-50 mb-4">Roles in This Game</h2>
          <p className="text-orange-200 text-sm mb-4">Role assignments are hidden until the game starts</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {(() => {
              const roleCounts = new Map<number, number>();
              room.players.forEach((player) => {
                roleCounts.set(player.role, (roleCounts.get(player.role) || 0) + 1);
              });

              return Array.from(roleCounts.entries()).map(([roleId, count]) => {
                const character = characters.find((c) => c.id === roleId);
                return character ? (
                  <div
                    key={`role-count-${roleId}`}
                    className="relative bg-black/40 rounded-lg p-3 border-2 border-gray-600"
                  >
                    <div className="relative w-full aspect-square mb-2 rounded overflow-hidden">
                      <Image src={character.avatar} alt={character.name} fill className="object-cover" />
                      {count > 1 && (
                        <div className="absolute top-1 right-1 bg-orange-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                          {count}
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-center text-orange-50 truncate font-semibold">{character.name}</p>
                    <p className="text-xs text-center text-orange-300 capitalize">{character.team}</p>
                  </div>
                ) : null;
              });
            })()}
          </div>
        </div>
      </div>

      <Modal isOpen={isLeaveDialogOpen}>
        <h1 className="text-xl">Are you sure you want to leave?</h1>
        <div className="flex gap-8">
          <Button className="w-40 px-4 py-3" onClick={handleLeaveRoom}>
            Yes
          </Button>
          <Button className="w-40 px-4 py-3" onClick={() => setIsLeaveDialogOpen(false)}>
            No
          </Button>
        </div>
      </Modal>
    </BackgroundBox>
  );
}
