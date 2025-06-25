import { RouteEnum } from '../../lib/enums';
import { RouteType } from '../../lib/types';
import HomePage from '../pages/HomePage';
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
];

export default routes;
