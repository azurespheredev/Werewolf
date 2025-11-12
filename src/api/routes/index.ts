import * as express from 'express';
import rooms from './rooms';
import roles from './roles';
import game from './game';

const router: express.Router = express.Router();

router.use('/rooms', rooms);
router.use('/roles', roles);
router.use('/game', game);

export default router;
