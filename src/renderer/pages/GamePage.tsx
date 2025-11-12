import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AnimatedBackground from '../components/shared/AnimatedBackground';
import DayPhaseActions from '../components/game/DayPhaseActions';
import VotingPhaseActions from '../components/game/VotingPhaseActions';
import NightPhaseActions from '../components/game/NightPhaseActions';
import GameStatistics from '../components/game/GameStatistics';
import PlayerCard from '../components/game/PlayerCard';
import GameHeader from '../components/game/GameHeader';
import RolePanel from '../components/game/RolePanel';
import GameLog from '../components/game/GameLog';
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
  const [allCharacters, setAllCharacters] = useState<CharacterType[]>([]);
  const [phase, setPhase] = useState<GamePhaseEnum>(GamePhaseEnum.NIGHT);
  const [day, setDay] = useState<number>(1);
  const [winner, setWinner] = useState<string | null>(null);
  // UI state
  const [reveal, setReveal] = useState(false);
  const [target, setTarget] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [logs, setLogs] = useState<{ id: string; text: string }[]>([]);
  const [chatMessages, setChatMessages] = useState<
    { id: string; playerId: number; playerName: string; message: string }[]
  >([]);
  const [chatInput, setChatInput] = useState<string>('');
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
      // Fetch all characters for role reveal
      const rolesRes: ApiResponse<CharacterType[]> =
        await api.get('/api/roles');
      if (rolesRes.success && rolesRes.data) {
        setAllCharacters(rolesRes.data);
        if (storedId >= 0) {
          const roleId = data.room.players[storedId]?.role;
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
      setChatMessages([]);
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
    socketService.onChatMessage((data) => {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      setChatMessages((prev) => [
        ...prev,
        {
          id,
          playerId: data.playerId,
          playerName: data.playerName,
          message: data.message,
        },
      ]);
    });
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

  const sendChat = useCallback(() => {
    if (!room || !chatInput.trim()) return;
    const playerName = players[me]?.name || `Player ${me + 1}`;
    socketService.emitChatMessage(room.roomCode, me, chatInput, playerName);
    setChatInput('');
  }, [room, chatInput, players, me]);

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
        <GameHeader
          phaseLabel={phaseLabel}
          day={day}
          isAlive={isAlive}
          timerLimit={room.timerLimit}
          phase={phase}
          onTimerEnd={advancePhase}
          onLeaveGame={leaveGame}
        />
        <div className="flex-1 flex gap-4 p-4 overflow-hidden">
          <RolePanel
            role={role}
            isRevealed={reveal}
            onToggleReveal={() => setReveal(!reveal)}
          />
          <div className="flex-1 bg-slate-900/80 backdrop-blur-sm rounded-xl border border-orange-500/30 p-6 overflow-y-auto">
            <h2 className="text-2xl font-bold text-orange-50 mb-4">
              {winner && room?.isShowRole ? 'Final Roles Revealed' : 'Players'}
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {players.map((p, idx) => {
                const showActualRole = !!(winner && room?.isShowRole);
                const actualCharacter = allCharacters.find(
                  (c) => c.id === p.role,
                );
                const displayCharacter =
                  showActualRole && actualCharacter
                    ? actualCharacter
                    : {
                        ...(role as CharacterType),
                        name: p.name ?? 'Waiting',
                      };

                const playerKey = `${room.id}-player-${p.name || 'empty'}-${p.role}-${idx}`;

                return (
                  <PlayerCard
                    key={playerKey}
                    player={p}
                    index={idx}
                    currentPlayerId={me}
                    isAlive={alive(idx)}
                    isSelectable={selectable(idx)}
                    isSelected={target === idx}
                    character={displayCharacter}
                    actualCharacter={actualCharacter}
                    showActualRole={showActualRole}
                    onSelect={() => selectable(idx) && setTarget(idx)}
                  />
                );
              })}
            </div>
          </div>
          <div className="w-80 bg-slate-900/80 backdrop-blur-sm rounded-xl border border-orange-500/30 p-6 space-y-4 overflow-y-auto">
            <h2 className="text-2xl font-bold text-orange-50 mb-4">Actions</h2>
            {(() => {
              if (winner) {
                return (
                  <GameStatistics
                    winner={winner}
                    day={day}
                    alivePlayers={session.alivePlayers}
                    deadPlayers={session.deadPlayers}
                    onLeaveGame={leaveGame}
                  />
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
                  return (
                    <NightPhaseActions
                      canAct={canAct}
                      submitted={submitted}
                      target={target}
                      onSubmitAction={submitNightAction}
                      onSkipAction={skipNightAction}
                    />
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
                  <DayPhaseActions
                    chatMessages={chatMessages}
                    chatInput={chatInput}
                    currentPlayerId={me}
                    onChatInputChange={setChatInput}
                    onSendChat={sendChat}
                  />
                );
              }
              if (phase === GamePhaseEnum.VOTING) {
                return (
                  <VotingPhaseActions
                    submitted={submitted}
                    target={target}
                    chatMessages={chatMessages}
                    chatInput={chatInput}
                    currentPlayerId={me}
                    onSubmitVote={submitVote}
                    onChatInputChange={setChatInput}
                    onSendChat={sendChat}
                  />
                );
              }
              return null;
            })()}
            <GameLog logs={logs} />
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
}
