"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import BackgroundBox from "@/components/shared/BackgroundBox";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import { getApiService } from "@/services/apiService";
import { ApiResponse, RoomType } from "@/lib/types";
import { LocalStorageKeyEnum, RouteEnum } from "@/lib/enums";

export default function JoinRoomPage() {
  const [roomCode, setRoomCode] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [activeRooms, setActiveRooms] = useState<RoomType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFetchingRooms, setIsFetchingRooms] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const savedUsername = localStorage.getItem(LocalStorageKeyEnum.USERNAME);
    if (savedUsername) {
      setUsername(savedUsername);
    }

    fetchActiveRooms();
  }, []);

  const fetchActiveRooms = async () => {
    try {
      setIsFetchingRooms(true);
      const apiService = getApiService();
  const response: ApiResponse<RoomType[]> = await apiService.get("/api/rooms?active=true");
      if (response.success && response.data) {
        setActiveRooms(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch rooms:", error);
    } finally {
      setIsFetchingRooms(false);
    }
  };

  const handleJoinRoom = useCallback(
    async (code: string) => {
      if (!username.trim()) {
        toast.error("Please enter your username");
        return;
      }

      if (!code.trim()) {
        toast.error("Please enter a room code");
        return;
      }

      try {
        setIsLoading(true);
        const apiService = getApiService();
        const response: ApiResponse<RoomType & { playerId: number }> = await apiService.post("/api/rooms/join", {
          roomCode: code.trim(),
          username: username.trim(),
        });

        if (response.success && response.data) {
          localStorage.setItem(LocalStorageKeyEnum.USERNAME, username.trim());
          localStorage.setItem(LocalStorageKeyEnum.ROOM_CODE, response.data.roomCode);
          localStorage.setItem(LocalStorageKeyEnum.PLAYER_ID, response.data.playerId.toString());
          toast.success("Joined room successfully!");
          router.push(RouteEnum.WAITING_ROOM);
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Failed to join room";
        toast.error(errorMessage);
      } finally {
        setIsLoading(false);
      }
    },
    [username, router]
  );

  return (
    <BackgroundBox src="/images/bg_home.jpg" className="flex flex-col items-center w-full h-screen overflow-y-auto p-8">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <Button className="px-6 py-2 text-base" onClick={() => router.push(RouteEnum.HOME)}>
            ← Back
          </Button>
          <h1 className="text-4xl font-bold text-orange-50 drop-shadow-lg">Join Room</h1>
          <div className="w-24" />
        </div>

        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-8 border-2 border-orange-600 mb-6">
          <h2 className="text-2xl font-bold text-orange-50 mb-6">Enter Room Code</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-orange-50 mb-2 text-lg">Your Username</label>
              <Input
                type="text"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full text-2xl text-white border-b-orange-400"
                maxLength={20}
              />
            </div>

            <div>
              <label className="block text-orange-50 mb-2 text-lg">Room Code</label>
              <Input
                type="text"
                placeholder="Enter room code"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                className="w-full text-2xl text-white border-b-orange-400"
              />
            </div>

            <Button
              className="w-full px-8 py-4 text-xl"
              onClick={() => handleJoinRoom(roomCode)}
              loading={isLoading}
              disabled={!username.trim() || !roomCode.trim()}
            >
              Join Room
            </Button>
          </div>
        </div>

        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-8 border-2 border-orange-600">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-orange-50">Available Rooms</h2>
            <Button className="px-4 py-2 text-sm" onClick={fetchActiveRooms} loading={isFetchingRooms}>
              Refresh
            </Button>
          </div>

          <div className="space-y-3 max-h-96 overflow-y-auto">
            {activeRooms.length === 0 ? (
              <p className="text-orange-200 text-center py-8">No active rooms available</p>
            ) : (
              activeRooms.map((room) => {
                const filledSlots = room.players.filter((p) => p.name !== null).length;
                const totalSlots = room.players.length;

                return (
                  <div
                    key={room.id}
                    className="flex items-center justify-between bg-black/40 p-4 rounded-lg hover:bg-black/60 transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="text-orange-50 font-bold text-lg">Room #{room.id}</h3>
                      <p className="text-orange-200 text-sm">Code: {room.roomCode}</p>
                      <p className="text-orange-300 text-sm">
                        Players: {filledSlots}/{totalSlots} | Timer: {room.timerLimit}s
                      </p>
                    </div>
                    <Button
                      className="px-6 py-2"
                      onClick={() => handleJoinRoom(room.roomCode)}
                      loading={isLoading}
                      disabled={filledSlots >= totalSlots}
                    >
                      {filledSlots >= totalSlots ? "Full" : "Join"}
                    </Button>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </BackgroundBox>
  );
}
