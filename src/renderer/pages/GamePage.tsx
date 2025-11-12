import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '../components/shared/AnimatedBackground';
import CharacterCard from '../components/shared/CharacterCard';
import Timer from '../components/shared/Timer';
import Button from '../components/shared/Button';
import { GamePhaseEnum, RouteEnum } from '../../lib/enums';
import { CharacterType, GameSessionType } from '../../lib/types';

export default function GamePage() {
  const navigate = useNavigate();
  const [gameSession, setGameSession] = useState<GameSessionType | null>(null);
  const [myRole, setMyRole] = useState<CharacterType | null>(null);
  const [isRoleRevealed, setIsRoleRevealed] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<number | null>(null);

  // Mock data for demonstration
  const currentPhase = GamePhaseEnum.NIGHT;
  const dayNumber = 1;
  const timerLimit = 60;

  useEffect(() => {
    // TODO: Fetch game session data from API
    // TODO: Fetch player's assigned role
    // TODO: Setup WebSocket connection for real-time updates
  }, []);

  const handleAction = () => {
    // TODO: Submit night action or vote to API
    console.log('Action submitted for player:', selectedPlayer);
  };

  const handleSkipAction = () => {
    // TODO: Skip action
    console.log('Action skipped');
  };

  return (
    <AnimatedBackground
      phase={currentPhase}
      className="flex flex-col items-center w-full h-screen overflow-hidden"
    >
      <div className="w-full max-w-7xl h-full flex flex-col p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-orange-50">
            <h1 className="text-4xl font-bold drop-shadow-lg">
              {currentPhase === GamePhaseEnum.NIGHT
                ? '🌙 Night Phase'
                : currentPhase === GamePhaseEnum.DAY
                  ? '☀️ Day Phase'
                  : '🗳️ Voting Phase'}
            </h1>
            <p className="text-xl mt-1">Day {dayNumber}</p>
          </div>

          <div className="flex items-center gap-6">
            <Timer
              initialTime={timerLimit}
              onTimeEnd={() => console.log('Time ended')}
              className="w-24 h-24"
            />
            <Button
              className="px-4 py-2"
              onClick={() => navigate(RouteEnum.HOME)}
            >
              Leave Game
            </Button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 grid grid-cols-4 gap-4">
          {/* Left Panel - Your Role */}
          <div className="col-span-1 bg-black/60 backdrop-blur-sm rounded-lg p-4 border-2 border-orange-600">
            <h2 className="text-xl font-bold text-orange-50 mb-4">Your Role</h2>
            <CharacterCard
              character={myRole}
              isRevealed={isRoleRevealed}
              className="w-full aspect-square mb-4"
              onClick={() => setIsRoleRevealed(!isRoleRevealed)}
            />
            <Button
              className="w-full py-2 mb-2"
              onClick={() => setIsRoleRevealed(!isRoleRevealed)}
            >
              {isRoleRevealed ? 'Hide' : 'Reveal'} Role
            </Button>

            {myRole && (
              <div className="text-orange-50 text-sm mt-4">
                <p className="font-semibold mb-2">Description:</p>
                <p className="text-xs">{myRole.description}</p>
              </div>
            )}
          </div>

          {/* Center Panel - Players Grid */}
          <div className="col-span-2 bg-black/60 backdrop-blur-sm rounded-lg p-4 border-2 border-orange-600 overflow-y-auto">
            <h2 className="text-xl font-bold text-orange-50 mb-4">
              Players (Select Target)
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {/* TODO: Map through players */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((playerId) => (
                <div
                  key={playerId}
                  onClick={() => setSelectedPlayer(playerId)}
                  className={`relative bg-black/40 rounded-lg p-2 cursor-pointer border-2 transition-all ${
                    selectedPlayer === playerId
                      ? 'border-yellow-400 scale-105'
                      : 'border-gray-600 hover:border-gray-400'
                  }`}
                >
                  <div className="w-full aspect-square bg-gray-700 rounded mb-2" />
                  <p className="text-orange-50 text-sm text-center">
                    Player {playerId}
                  </p>
                  <div className="w-2 h-2 rounded-full bg-green-400 absolute top-2 right-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Actions & Chat */}
          <div className="col-span-1 flex flex-col gap-4">
            {/* Actions */}
            <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 border-2 border-orange-600">
              <h2 className="text-xl font-bold text-orange-50 mb-4">Actions</h2>
              <div className="space-y-2">
                <Button
                  className="w-full py-2"
                  onClick={handleAction}
                  disabled={selectedPlayer === null}
                >
                  Confirm Action
                </Button>
                <Button className="w-full py-2" onClick={handleSkipAction}>
                  Skip Action
                </Button>
              </div>
            </div>

            {/* Game Log */}
            <div className="flex-1 bg-black/60 backdrop-blur-sm rounded-lg p-4 border-2 border-orange-600 overflow-y-auto">
              <h2 className="text-xl font-bold text-orange-50 mb-4">
                Game Log
              </h2>
              <div className="space-y-2 text-sm">
                <p className="text-orange-200">🌙 Night phase begins...</p>
                <p className="text-orange-200">⏳ Waiting for players...</p>
                {/* TODO: Display game events */}
              </div>
            </div>
          </div>
        </div>

        {/* Phase Instructions */}
        <div className="mt-4 bg-black/70 backdrop-blur-sm rounded-lg p-3 border-2 border-orange-600 text-center">
          <p className="text-orange-50 text-lg">
            {currentPhase === GamePhaseEnum.NIGHT
              ? 'Use your special ability by selecting a target...'
              : currentPhase === GamePhaseEnum.DAY
                ? 'Discuss with other players to find the werewolves...'
                : 'Vote for who you think is a werewolf...'}
          </p>
        </div>
      </div>
    </AnimatedBackground>
  );
}
