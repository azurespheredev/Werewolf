import { JSX } from 'react';

export interface RouteType {
  path: string;
  element: JSX.Element;
}

export interface CharacterType {
  name: string;
  description: string;
  avatar: string;
}

export interface PlayerType {
  role: number;
  name: string | null;
  isAdmin?: boolean;
  isOnline: boolean;
}

export interface RoomType {
  id: number;
  code: string;
  players: PlayerType[];
  timerLimit: number;
  isShowRole: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
