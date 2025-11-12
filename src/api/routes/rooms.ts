import * as express from 'express';
import RoomController from '../controllers/RoomController';
import {
  RoomCreateValidationSchema,
  RoomJoinValidationSchema,
} from '../validations/RoomValidationSchema';

const router: express.Router = express.Router();

router.post('/create', RoomCreateValidationSchema, RoomController.create);
router.post('/join', RoomJoinValidationSchema, RoomController.join);
router.post('/leave', RoomController.leave);
router.get('/active', RoomController.listActive);
router.get('/:code', RoomController.getByCode);

export default router;
