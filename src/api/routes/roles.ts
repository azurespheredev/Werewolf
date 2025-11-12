import * as express from 'express';
import RoleController from '../controllers/RoleController';

const router: express.Router = express.Router();

router.get('/', RoleController.getAll);
router.get('/:id', RoleController.getById);

export default router;
