import * as express from "express";
import user from "./user";
import calendar from "./calendar";
import job from "./job";
import analytics from "./analytics";

const router: express.Router = express.Router();

router.use("/user", user);
router.use("/calendar", calendar);
router.use("/job", job);
router.use("/analytics", analytics);

export default router;
