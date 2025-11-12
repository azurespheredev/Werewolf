import * as express from 'express';
import rooms from './rooms';
import roles from './roles';

const router: express.Router = express.Router();

router.use('/rooms', rooms);
router.use('/roles', roles);

export default router;
