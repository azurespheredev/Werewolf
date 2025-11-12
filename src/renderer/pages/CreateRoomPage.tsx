import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import BackgroundBox from '../components/shared/BackgroundBox';
import Button from '../components/shared/Button';
import Input from '../components/shared/Input';
import CharacterCard from '../components/shared/CharacterCard';
import { configureApiService, getApiService } from '../../services/apiService';
import { CharacterType, ApiResponse, RoomType } from '../../lib/types';
import { LocalStorageKeyEnum, RouteEnum } from '../../lib/enums';
import { PLAYER_ROLES_DATA, SERVER_PORT } from '../../lib/constants';

export default function CreateRoomPage() {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [playerCount, setPlayerCount] = useState<number>(4);
  const [selectedRoles, setSelectedRoles] = useState<number[]>([]);
  const [username, setUsername] = useState<string>('');
  const [timerLimit, setTimerLimit] = useState<number>(60);
  const [isShowRole, setIsShowRole] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  // Configure API from saved address and fetch all available characters
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const savedAddress = localStorage.getItem(
          LocalStorageKeyEnum.SERVER_ADDRESS,
        );
        if (savedAddress) {
          configureApiService(`${savedAddress}:${SERVER_PORT}`);
        }
        const apiService = getApiService();
        const response: ApiResponse<CharacterType[]> =
          await apiService.get('/api/roles');
        if (response.success && response.data) {
          setCharacters(response.data);
        }
      } catch {
        toast.error('Failed to load characters');
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

  const handleRoleToggle = (roleId: number) => {
    setSelectedRoles((prev) => {
      if (prev.includes(roleId)) {
        return prev.filter((id) => id !== roleId);
      }
      if (prev.length < playerCount) {
        return [...prev, roleId];
      }
      toast.warning(`You can only select ${playerCount} roles`);
      return prev;
    });
  };

  const handlePlayerCountChange = (count: number) => {
    let validCount = count;
    if (validCount < 4) validCount = 4;
    if (validCount > 23) validCount = 23;
    setPlayerCount(validCount);
  };

  const handleCreateRoom = useCallback(async () => {
    if (!username.trim()) {
      toast.error('Please enter your username');
      return;
    }

    if (selectedRoles.length !== playerCount) {
      toast.error(`Please select exactly ${playerCount} roles`);
      return;
    }

    try {
      setIsLoading(true);
      const apiService = getApiService();
      const response: ApiResponse<RoomType> = await apiService.post(
        '/api/rooms/create',
        {
          username: username.trim(),
          roles: selectedRoles,
          timerLimit,
          isShowRole,
        },
      );

      if (response.success && response.data) {
        localStorage.setItem(LocalStorageKeyEnum.USERNAME, username.trim());
        localStorage.setItem(
          LocalStorageKeyEnum.ROOM_CODE,
          response.data.roomCode,
        );
        localStorage.setItem(LocalStorageKeyEnum.PLAYER_ID, '0'); // Admin is first player
        toast.success('Room created successfully!');
        navigate(RouteEnum.WAITING_ROOM, { state: { room: response.data } });
      }
    } catch (error: any) {
      toast.error(error.message || 'Failed to create room');
    } finally {
      setIsLoading(false);
    }
  }, [username, selectedRoles, playerCount, timerLimit, isShowRole, navigate]);

  return (
    <BackgroundBox
      src="/images/bg_home.jpg"
      className="flex flex-col items-center w-full h-screen overflow-y-auto p-8"
    >
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <Button
            className="px-6 py-2 text-base"
            onClick={() => navigate(RouteEnum.HOME)}
          >
            ← Back
          </Button>
          <h1 className="text-4xl font-bold text-orange-50 drop-shadow-lg">
            Create Room
          </h1>
          <div className="w-24" />
        </div>

        {/* Configuration Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Left Panel - Settings */}
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border-2 border-orange-600">
            <h2 className="text-2xl font-bold text-orange-50 mb-4">
              Game Settings
            </h2>

            <div className="space-y-4">
              <div>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label
                  htmlFor="username-input"
                  className="block text-orange-50 mb-2"
                >
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
                <label
                  htmlFor="player-count-range"
                  className="block text-orange-50 mb-2"
                >
                  Players: {playerCount}
                </label>
                <input
                  id="player-count-range"
                  type="range"
                  min="4"
                  max="23"
                  value={playerCount}
                  onChange={(e) =>
                    handlePlayerCountChange(parseInt(e.target.value, 10))
                  }
                  className="w-full accent-orange-600"
                />
              </div>

              <div>
                <label
                  htmlFor="timer-limit-range"
                  className="block text-orange-50 mb-2"
                >
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
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
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
            <div className="space-y-2 max-h-72 overflow-y-auto">
              {selectedRoles.map((roleId) => {
                const character = characters.find((c) => c.id === roleId);
                return character ? (
                  <div
                    key={`role-${roleId}`}
                    className="flex items-center gap-3 bg-black/40 p-2 rounded"
                  >
                    <img
                      src={character.avatar}
                      alt={character.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div>
                      <p className="text-orange-50 font-semibold">
                        {character.name}
                      </p>
                      <p className="text-orange-200 text-xs capitalize">
                        Team: {character.team}
                      </p>
                    </div>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        </div>

        {/* Character Selection Grid */}
        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border-2 border-orange-600 mb-6">
          <h2 className="text-2xl font-bold text-orange-50 mb-4">
            Select Characters (Click to add/remove)
          </h2>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
            {characters.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                isRevealed
                onClick={() => handleRoleToggle(character.id)}
                isSelected={selectedRoles.includes(character.id)}
                showDetails
                className="w-full aspect-square"
              />
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
