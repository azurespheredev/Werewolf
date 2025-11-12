import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import BackgroundBox from '../components/shared/BackgroundBox';
import Button from '../components/shared/Button';
import Modal from '../components/shared/Modal';
import { getApiService } from '../../services/apiService';
import {
  ApiResponse,
  CharacterType,
  PlayerType,
  RoomType,
} from '../../lib/types';
import { LocalStorageKeyEnum, RouteEnum } from '../../lib/enums';

export default function WaitingRoomPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [room, setRoom] = useState<RoomType | null>(
    location.state?.room || null,
  );
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [isLeaveDialogOpen, setIsLeaveDialogOpen] = useState<boolean>(false);
  const [playerId, setPlayerId] = useState<number>(-1);

  useEffect(() => {
    const storedPlayerId = localStorage.getItem(LocalStorageKeyEnum.PLAYER_ID);
    if (storedPlayerId) {
      setPlayerId(parseInt(storedPlayerId, 10));
    }

    fetchCharacters();

    if (!room) {
      const roomCode = localStorage.getItem(LocalStorageKeyEnum.ROOM_CODE);
      if (roomCode) {
        fetchRoomData(roomCode);
      } else {
        navigate(RouteEnum.HOME);
      }
    }
  }, []);

  const fetchCharacters = async () => {
    try {
      const apiService = getApiService();
      const response: ApiResponse<CharacterType[]> =
        await apiService.get('/api/roles');
      if (response.success && response.data) {
        setCharacters(response.data);
      }
    } catch (error) {
      console.error('Failed to fetch characters');
    }
  };

  const fetchRoomData = async (roomCode: string) => {
    try {
      const apiService = getApiService();
      const response: ApiResponse<RoomType> = await apiService.get(
        `/api/rooms/${roomCode}`,
      );
      if (response.success && response.data) {
        setRoom(response.data);
      } else {
        toast.error('Room not found');
        navigate(RouteEnum.HOME);
      }
    } catch (error) {
      toast.error('Failed to load room');
      navigate(RouteEnum.HOME);
    }
  };

  const handleStartGame = () => {
    toast.info('Start game functionality coming soon!');
  };

  const handleLeaveRoom = () => {
    localStorage.removeItem(LocalStorageKeyEnum.ROOM_CODE);
    localStorage.removeItem(LocalStorageKeyEnum.PLAYER_ID);
    navigate(RouteEnum.HOME);
  };

  if (!room) {
    return (
      <BackgroundBox
        src="/images/bg_home.jpg"
        className="flex justify-center items-center w-full h-screen"
      >
        <p className="text-2xl text-orange-50">Loading room...</p>
      </BackgroundBox>
    );
  }

  const isAdmin = room.players[playerId]?.isAdmin || false;
  const allPlayersJoined = room.players.every((p) => p.name !== null);
  const filledSlots = room.players.filter((p) => p.name !== null).length;

  return (
    <BackgroundBox
      src="/images/bg_home.jpg"
      className="flex flex-col items-center w-full h-screen overflow-y-auto p-8"
    >
      <div className="w-full max-w-6xl">
        <div className="flex justify-between items-center mb-6">
          <Button
            className="px-6 py-2 text-base"
            onClick={() => setIsLeaveDialogOpen(true)}
          >
            ← Leave Room
          </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-orange-50 drop-shadow-lg">
              Waiting Room
            </h1>
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
                const character = characters.find((c) => c.id === player.role);
                const isCurrentPlayer = index === playerId;

                return (
                  <div
                    key={index}
                    className={`relative bg-black/40 rounded-lg p-3 border-2 transition-all ${
                      isCurrentPlayer
                        ? 'border-yellow-400 anim-glow'
                        : player.isOnline
                          ? 'border-green-500'
                          : 'border-gray-500'
                    }`}
                  >
                    <div className="relative w-full aspect-square mb-2 rounded overflow-hidden">
                      {character ? (
                        <img
                          src={character.avatar}
                          alt={character.name}
                          className="w-full h-full object-cover opacity-30"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-700" />
                      )}
                      <div className="absolute inset-0 flex items-center justify-center">
                        {player.name ? (
                          <span className="text-white font-bold text-lg text-center px-2">
                            {player.name}
                          </span>
                        ) : (
                          <span className="text-gray-400 text-sm">
                            Waiting...
                          </span>
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
                        player.isOnline ? 'bg-green-400' : 'bg-gray-400'
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border-2 border-orange-600">
            <h2 className="text-2xl font-bold text-orange-50 mb-4">
              Game Settings
            </h2>

            <div className="space-y-4 text-orange-50">
              <div>
                <p className="text-sm text-orange-200">Timer Limit</p>
                <p className="text-xl font-bold">{room.timerLimit}s</p>
              </div>

              <div>
                <p className="text-sm text-orange-200">Show Roles After Game</p>
                <p className="text-xl font-bold">
                  {room.isShowRole ? 'Yes' : 'No'}
                </p>
              </div>

              <div>
                <p className="text-sm text-orange-200">Total Roles</p>
                <p className="text-xl font-bold">{room.maxPlayers}</p>
              </div>
            </div>

            {isAdmin && (
              <div className="mt-6">
                <Button
                  className="w-full px-6 py-3"
                  onClick={handleStartGame}
                  disabled={!allPlayersJoined}
                >
                  {allPlayersJoined ? 'Start Game' : 'Waiting for Players...'}
                </Button>
                {!allPlayersJoined && (
                  <p className="text-orange-300 text-sm text-center mt-2">
                    All players must join before starting
                  </p>
                )}
              </div>
            )}

            {!isAdmin && (
              <div className="mt-6 text-center">
                <p className="text-orange-300 text-sm">
                  Waiting for host to start the game...
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border-2 border-orange-600">
          <h2 className="text-2xl font-bold text-orange-50 mb-4">
            Roles in This Game
          </h2>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-3">
            {room.players.map((player, index) => {
              const character = characters.find((c) => c.id === player.role);
              return character ? (
                <div
                  key={index}
                  className="relative group"
                  title={character.name}
                >
                  <img
                    src={character.avatar}
                    alt={character.name}
                    className="w-full aspect-square object-cover rounded-lg border-2 border-gray-600 opacity-70 hover:opacity-100 transition-opacity"
                  />
                  <p className="text-xs text-center text-orange-50 mt-1 truncate">
                    {character.name}
                  </p>
                </div>
              ) : null;
            })}
          </div>
        </div>
      </div>

      <Modal isOpen={isLeaveDialogOpen}>
        <h1 className="text-xl">Are you sure you want to leave?</h1>
        <div className="flex gap-8">
          <Button className="w-40 px-4 py-3" onClick={handleLeaveRoom}>
            Yes
          </Button>
          <Button
            className="w-40 px-4 py-3"
            onClick={() => setIsLeaveDialogOpen(false)}
          >
            No
          </Button>
        </div>
      </Modal>
    </BackgroundBox>
  );
}
