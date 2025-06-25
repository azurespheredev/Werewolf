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

export interface PlayerRoleType {
  role: number;
  name: string | null;
  isAdmin?: boolean;
}

export interface RoomType {
  id: number;
  code: string;
  roles: PlayerRoleType[];
  timerLimit: number;
  isShowRole: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
