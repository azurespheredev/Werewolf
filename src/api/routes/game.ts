import * as express from 'express';
import GameController from '../controllers/GameController';
import {
  GameStartValidationSchema,
  GameActionValidationSchema,
  GameVoteValidationSchema,
  GamePhaseValidationSchema,
} from '../validations/GameValidationSchema';

const router: express.Router = express.Router();

router.post('/start', GameStartValidationSchema, GameController.start);
router.post('/action', GameActionValidationSchema, GameController.submitAction);
router.post('/vote', GameVoteValidationSchema, GameController.submitVote);
router.post('/phase', GamePhaseValidationSchema, GameController.processPhase);
router.get('/:roomId', GameController.getState);

export default router;
