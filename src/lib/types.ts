import { JSX } from 'react';

export interface RouteType {
  path: string;
  element: JSX.Element;
}

export interface RoleType {
  name: string;
  description: string;
  avatar: string;
}
