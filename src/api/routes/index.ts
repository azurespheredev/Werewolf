import * as express from 'express';
import rooms from './rooms';

const router: express.Router = express.Router();

router.use('/rooms', rooms);

export default router;
