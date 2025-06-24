import * as express from 'express';
import RoomController from '../controllers/RoomController';
import RoomCreateValidationSchema from '../validations/RoomValidationSchema';

const router: express.Router = express.Router();

router.post('/create', RoomCreateValidationSchema, RoomController.create);

export default router;
