import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AnimatedBackground from '../components/shared/AnimatedBackground';
import CharacterCard from '../components/shared/CharacterCard';
import Timer from '../components/shared/Timer';
import { getApiService } from '../../services/apiService';
import { socketService } from '../../services/socketService';
import { GamePhaseEnum, LocalStorageKeyEnum, RouteEnum } from '../../lib/enums';
import type {
  ApiResponse,
  CharacterType,
  GameSessionType,
  PlayerType,
  RoomType,
} from '../../lib/types';

export default function GamePage() {
  const navigate = useNavigate();
  const location = useLocation();
  // Core state
  const [room, setRoom] = useState<RoomType | null>(
    location.state?.room || null,
  );
  const [session, setSession] = useState<GameSessionType | null>(null);
  const [players, setPlayers] = useState<PlayerType[]>([]);
  const [me, setMe] = useState<number>(-1);
  const [role, setRole] = useState<CharacterType | null>(null);
  const [phase, setPhase] = useState<GamePhaseEnum>(GamePhaseEnum.NIGHT);
  const [day, setDay] = useState<number>(1);
  const [winner, setWinner] = useState<string | null>(null);
  // UI state
  const [reveal, setReveal] = useState(false);
  const [target, setTarget] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [logs, setLogs] = useState<{ id: string; text: string }[]>([]);
  // Derived
  const isAlive = useMemo(
    () => (session ? session.alivePlayers.includes(me) : true),
    [session, me],
  );
  const canAct =
    phase === GamePhaseEnum.NIGHT &&
    isAlive &&
    !submitted &&
    (role?.priority ?? 0) > 0;
  const canVote = phase === GamePhaseEnum.VOTING && isAlive && !submitted;
  const phaseLabel = useMemo(() => {
    if (winner) return 'Game Over';
    if (phase === GamePhaseEnum.NIGHT) return 'Night Phase';
    if (phase === GamePhaseEnum.DAY) return 'Day Phase';
    if (phase === GamePhaseEnum.VOTING) return 'Voting Phase';
    return 'Game';
  }, [phase, winner]);
  const addLog = useCallback((msg: string) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    setLogs((prev) => [{ id, text: msg }, ...prev].slice(0, 50));
  }, []);
  const fetchState = useCallback(async (roomCode: string) => {
    try {
      const api = getApiService();
      const res: ApiResponse<any> = await api.get(`/api/game/${roomCode}`);
      if (!res.success || !res.data) return;
      const { data } = res;
      setSession(data.session);
      setRoom(data.room);
      setPlayers(data.room.players);
      setPhase(data.session.phase);
      setDay(data.session.dayNumber);
      const storedId = parseInt(
        localStorage.getItem(LocalStorageKeyEnum.PLAYER_ID) || '-1',
        10,
      );
      setMe(storedId);
      if (storedId >= 0) {
        const roleId = data.room.players[storedId]?.role;
        const rolesRes: ApiResponse<CharacterType[]> =
          await api.get('/api/roles');
        if (rolesRes.success && rolesRes.data) {
          setRole(rolesRes.data.find((r) => r.id === roleId) || null);
        }
      }
    } catch (e: any) {
      toast.error(e?.message || 'Failed to fetch game state');
    }
  }, []);

  useEffect(() => {
    const code = localStorage.getItem(LocalStorageKeyEnum.ROOM_CODE);
    if (code && !room) fetchState(code);
    if (room) fetchState(room.roomCode);
  }, [room, fetchState]);

  useEffect(() => {
    socketService.onPhaseChanged((data) => {
      setPhase(data.phase);
      setDay(data.dayNumber);
      setSubmitted(false);
      setTarget(null);
      addLog(`Phase → ${data.phase} (Day ${data.dayNumber})`);
      if (room) fetchState(room.roomCode);
    });
    socketService.onPlayerEliminated((data) => {
      addLog(`Player ${data.playerId + 1} eliminated`);
      if (room) fetchState(room.roomCode);
    });
    socketService.onGameEnded((data) => {
      setWinner(data.winner);
      addLog(
        `Game Over: ${data.winner === 'villager' ? 'Villagers' : 'Werewolves'} win`,
      );
    });
    socketService.onActionSubmitted((data) =>
      addLog(`Player ${data.playerId + 1} submitted action`),
    );
    socketService.onVoteSubmitted((data) =>
      addLog(`Player ${data.playerId + 1} voted`),
    );
    return () => socketService.removeAllListeners();
  }, [room, fetchState, addLog]);

  const submitNightAction = async () => {
    if (!session || !room || target === null) {
      toast.warning('Select a target first');
      return;
    }
    try {
      const api = getApiService();
      const res: ApiResponse = await api.post('/api/game/action', {
        sessionId: session.id,
        playerId: me,
        action: 'target',
        targetId: target,
      });
      if (!res.success) throw new Error(res.message || 'Failed');
      setSubmitted(true);
      setTarget(null);
      socketService.emitActionSubmitted(room.roomCode, me);
      toast.success('Action submitted');
    } catch (e: any) {
      toast.error(e?.message || 'Submit failed');
    }
  };

  const skipNightAction = async () => {
    if (!session || !room) return;
    try {
      const api = getApiService();
      const res: ApiResponse = await api.post('/api/game/action', {
        sessionId: session.id,
        playerId: me,
        action: 'skip',
        targetId: null,
      });
      if (!res.success) throw new Error(res.message || 'Failed');
      setSubmitted(true);
      socketService.emitActionSubmitted(room.roomCode, me);
    } catch (e: any) {
      toast.error(e?.message || 'Skip failed');
    }
  };

  const submitVote = async () => {
    if (!session || !room || target === null) {
      toast.warning('Select a player to vote for');
      return;
    }
    try {
      const api = getApiService();
      const res: ApiResponse = await api.post('/api/game/vote', {
        sessionId: session.id,
        playerId: me,
        targetId: target,
      });
      if (!res.success) throw new Error(res.message || 'Failed');
      setSubmitted(true);
      setTarget(null);
      socketService.emitVoteSubmitted(room.roomCode, me);
      toast.success('Vote submitted');
    } catch (e: any) {
      toast.error(e?.message || 'Vote failed');
    }
  };

  const advancePhase = useCallback(async () => {
    if (!session || !room) return;
    const isAdmin = players[me]?.isAdmin;
    if (!isAdmin) return;
    try {
      const api = getApiService();
      const res: ApiResponse<any> = await api.post('/api/game/phase', {
        sessionId: session.id,
      });
      if (res.success && res.data) {
        socketService.emitPhaseChanged(room.roomCode, res.data.phase, day);
        if (res.data.winner) {
          setWinner(res.data.winner);
          socketService.emitGameEnded(room.roomCode, res.data.winner);
        }
      }
    } catch (e) {
      console.error('Phase transition failed', e);
    }
  }, [session, room, players, me, day]);

  const leaveGame = () => {
    if (room) socketService.leaveRoom(room.roomCode);
    localStorage.removeItem(LocalStorageKeyEnum.ROOM_CODE);
    localStorage.removeItem(LocalStorageKeyEnum.PLAYER_ID);
    navigate(RouteEnum.HOME);
  };

  if (!room || !session || !role) {
    return (
      <AnimatedBackground phase={GamePhaseEnum.NIGHT}>
        <div className="flex items-center justify-center w-full h-screen">
          <p className="text-2xl text-orange-50">Loading game...</p>
        </div>
      </AnimatedBackground>
    );
  }

  const alive = (idx: number) => session.alivePlayers.includes(idx);
  const selectable = (idx: number) =>
    (canAct || canVote) && alive(idx) && idx !== me && !submitted;

  return (
    <AnimatedBackground phase={phase}>
      <div className="w-full h-screen flex flex-col overflow-hidden">
        <header className="bg-slate-900/80 backdrop-blur-sm border-b border-orange-500/30 p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-bold text-orange-50">
                {phaseLabel}
              </h1>
              <span className="text-xl text-orange-200">Day {day}</span>
              {!isAlive && (
                <span className="px-3 py-1 bg-red-600/80 rounded-full text-white font-semibold">
                  Eliminated
                </span>
              )}
            </div>
            <div className="flex items-center gap-4">
              <Timer
                initialTime={room.timerLimit}
                key={`${phase}-${day}`}
                onTimeEnd={advancePhase}
              />
              <button
                type="button"
                onClick={leaveGame}
                className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                Leave Game
              </button>
            </div>
          </div>
        </header>
        <div className="flex-1 flex gap-4 p-4 overflow-hidden">
          <div className="w-80 bg-slate-900/80 backdrop-blur-sm rounded-xl border border-orange-500/30 p-6 space-y-4 overflow-y-auto">
            <h2 className="text-2xl font-bold text-orange-50 mb-4">
              Your Role
            </h2>
            <div className="flex justify-center">
              <CharacterCard
                character={role}
                isRevealed={reveal}
                onClick={() => setReveal(!reveal)}
              />
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-orange-50 font-semibold">{role.name}</p>
              <p className="text-orange-100/80 text-sm">{role.description}</p>
            </div>
          </div>
          <div className="flex-1 bg-slate-900/80 backdrop-blur-sm rounded-xl border border-orange-500/30 p-6 overflow-y-auto">
            <h2 className="text-2xl font-bold text-orange-50 mb-4">Players</h2>
            <div className="grid grid-cols-3 gap-4">
              {players.map((p, idx) => {
                const sel = selectable(idx);
                const classes = sel
                  ? 'cursor-pointer hover:scale-105'
                  : 'opacity-50';
                const active =
                  target === idx ? 'ring-4 ring-orange-500 scale-105' : '';
                return (
                  <div
                    role="button"
                    tabIndex={sel ? 0 : -1}
                    aria-disabled={!sel}
                    key={`${p.name ?? 'slot'}-${p.role}`}
                    onClick={() => sel && setTarget(idx)}
                    onKeyDown={(e) => {
                      if ((e.key === 'Enter' || e.key === ' ') && sel) {
                        e.preventDefault();
                        setTarget(idx);
                      }
                    }}
                    className={`relative transform transition-all ${classes} ${active}`}
                  >
                    <CharacterCard
                      character={{
                        ...(role as CharacterType),
                        name: p.name ?? 'Waiting',
                      }}
                      isRevealed={false}
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-slate-900/90 rounded-lg px-2 py-1">
                      <p className="text-white text-sm font-semibold text-center truncate">
                        {p.name ?? 'Waiting...'}
                        {idx === me ? ' (YOU)' : ''}
                      </p>
                    </div>
                    {!alive(idx) && (
                      <div className="absolute inset-0 bg-black/70 rounded-lg flex items-center justify-center">
                        <span className="text-red-500 font-bold text-xl">
                          ELIMINATED
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-80 bg-slate-900/80 backdrop-blur-sm rounded-xl border border-orange-500/30 p-6 space-y-4 overflow-y-auto">
            <h2 className="text-2xl font-bold text-orange-50 mb-4">Actions</h2>
            {(() => {
              if (winner) {
                return (
                  <div className="space-y-4">
                    <div
                      className={`p-6 rounded-lg border-2 ${
                        winner === 'villager'
                          ? 'bg-blue-900/50 border-blue-500'
                          : 'bg-red-900/50 border-red-500'
                      }`}
                    >
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {winner === 'villager'
                          ? 'Villagers Win!'
                          : 'Werewolves Win!'}
                      </h3>
                      <p className="text-white/80">The game has ended.</p>
                    </div>
                    <button
                      type="button"
                      onClick={leaveGame}
                      className="w-full px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
                    >
                      Return to Home
                    </button>
                  </div>
                );
              }
              if (!isAlive) {
                return (
                  <div className="p-4 bg-red-900/30 rounded-lg border border-red-500/30">
                    <p className="text-red-200 text-sm">
                      You have been eliminated. Watch as the game continues.
                    </p>
                  </div>
                );
              }
              if (phase === GamePhaseEnum.NIGHT) {
                if (canAct) {
                  if (submitted) {
                    return (
                      <div className="p-3 bg-green-900/30 rounded-lg border border-green-500/30">
                        <p className="text-green-200 text-sm">
                          Action submitted. Waiting for others...
                        </p>
                      </div>
                    );
                  }
                  return (
                    <div className="space-y-3">
                      <p className="text-orange-100/80 text-sm">
                        Select a player and submit your night action
                      </p>
                      <button
                        type="button"
                        onClick={submitNightAction}
                        disabled={target === null}
                        className="w-full px-4 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                      >
                        Submit Action
                      </button>
                      <button
                        type="button"
                        onClick={skipNightAction}
                        className="w-full px-4 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                      >
                        Skip Action
                      </button>
                    </div>
                  );
                }
                return (
                  <p className="text-orange-100/80 text-sm">
                    Waiting for night actions...
                  </p>
                );
              }
              if (phase === GamePhaseEnum.DAY) {
                return (
                  <div className="p-4 bg-yellow-900/30 rounded-lg border border-yellow-500/30">
                    <p className="text-yellow-200 text-sm">
                      Discuss. Voting will begin soon.
                    </p>
                  </div>
                );
              }
              if (phase === GamePhaseEnum.VOTING) {
                if (submitted) {
                  return (
                    <div className="p-3 bg-green-900/30 rounded-lg border border-green-500/30">
                      <p className="text-green-200 text-sm">
                        Vote submitted. Waiting for others...
                      </p>
                    </div>
                  );
                }
                return (
                  <div className="space-y-3">
                    <p className="text-orange-100/80 text-sm">
                      Select a player to vote out
                    </p>
                    <button
                      type="button"
                      onClick={submitVote}
                      disabled={target === null}
                      className="w-full px-4 py-3 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                    >
                      Cast Vote
                    </button>
                  </div>
                );
              }
              return null;
            })()}
            <div className="mt-6 pt-6 border-t border-orange-500/30">
              <h3 className="text-xl font-bold text-orange-50 mb-3">
                Game Log
              </h3>
              <div className="space-y-2 text-sm text-orange-100/80 max-h-64 overflow-y-auto">
                {logs.length === 0 ? (
                  <p>Game started. Good luck!</p>
                ) : (
                  logs.map((log) => (
                    <p
                      key={log.id}
                      className="py-1 border-b border-orange-500/10"
                    >
                      {log.text}
                    </p>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
}
