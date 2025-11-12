import { RouteEnum } from '../../lib/enums';
import { RouteType } from '../../lib/types';
import CreateRoomPage from '../pages/CreateRoomPage';
import GamePage from '../pages/GamePage';
import HomePage from '../pages/HomePage';
import JoinRoomPage from '../pages/JoinRoomPage';
import WaitRoomPage from '../pages/WaitingRoomPage';
import WelcomePage from '../pages/WelcomePage';

const routes: RouteType[] = [
  {
    path: RouteEnum.WELCOME,
    element: <WelcomePage />,
  },
  {
    path: RouteEnum.HOME,
    element: <HomePage />,
  },
  {
    path: RouteEnum.CREATE_ROOM,
    element: <CreateRoomPage />,
  },
  {
    path: RouteEnum.JOIN_ROOM,
    element: <JoinRoomPage />,
  },
  {
    path: RouteEnum.WAITING_ROOM,
    element: <WaitRoomPage />,
  },
  {
    path: RouteEnum.GAME,
    element: <GamePage />,
  },
];

export default routes;
