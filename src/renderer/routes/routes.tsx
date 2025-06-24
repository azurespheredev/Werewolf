import { RouteType } from '../lib/types';
import WelcomePage from '../pages/WelcomePage';

const routes: RouteType[] = [
  {
    path: '/',
    element: <WelcomePage />,
  },
];

export default routes;
