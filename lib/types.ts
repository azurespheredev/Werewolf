import { GamePhaseEnum } from "./enums";

export interface CharacterType {
  id: number;
  name: string;
  description: string;
  avatar: string;
  team: string;
  priority: number;
}

export interface PlayerType {
  role: number;
  name: string | null;
  isAdmin?: boolean;
  isAlive: boolean;
  isOnline: boolean;
  isReady?: boolean;
}

export interface RoomType {
  id: number;
  roomCode: string;
  players: PlayerType[];
  timerLimit: number;
  isShowRole: boolean;
  isActive: boolean;
  gameStarted: boolean;
  maxPlayers: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface GameSessionType {
  id: number;
  roomId: number;
  phase: GamePhaseEnum;
  dayNumber: number;
  timeRemaining: number;
  currentPhaseStarted: Date;
  alivePlayers: number[];
  deadPlayers: number[];
  votes: Record<number, number>;
  nightActions: Record<number, NightActionType>;
  createdAt: Date;
  updatedAt: Date;
}

export interface NightActionType {
  action: string;
  target: number | null;
}

export interface GameLogType {
  id: number;
  gameSessionId: number;
  phase: string;
  dayNumber: number;
  action: string;
  actorId: number | null;
  targetId: number | null;
  description: string;
  timestamp: Date;
}

export interface ChatMessageType {
  id: number;
  roomId: number;
  playerId: number;
  playerName: string;
  message: string;
  isSystem: boolean;
  timestamp: Date;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
}
