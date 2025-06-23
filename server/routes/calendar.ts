import * as express from "express";
import * as passport from "passport";
import CalendarController from "../controllers/CalendarController";

const router: express.Router = express.Router();

router.get(
  "/events",
  passport.authenticate("jwt", { session: false }),
  CalendarController.getData
);

router.get(
  "/list",
  passport.authenticate("jwt", { session: false }),
  CalendarController.getList
);

router.get("/google/callback", CalendarController.googleCallback);

router.post(
  "/google/sync",
  passport.authenticate("jwt", { session: false }),
  CalendarController.syncGoogleCalendar
);

router.delete(
  "/delete/:calendarId",
  passport.authenticate("jwt", { session: false }),
  CalendarController.removeCalendar
);

router.delete(
  "/delete",
  passport.authenticate("jwt", { session: false }),
  CalendarController.resetCalendar
);

export default router;
