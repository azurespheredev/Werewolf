import * as express from "express";
import * as passport from "passport";
import AnalyticsController from "../controllers/AnalyticsController";

const router: express.Router = express.Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  AnalyticsController.getAnalytics
);

export default router;
