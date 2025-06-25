import { RouteType } from '../../lib/types';
import HomePage from '../pages/HomePage';
import WelcomePage from '../pages/WelcomePage';

const routes: RouteType[] = [
  {
    path: '/',
    element: <WelcomePage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
];

export default routes;
