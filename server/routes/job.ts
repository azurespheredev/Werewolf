import * as express from "express";
import * as passport from "passport";
import { upload } from "../middleware/multer";
import JobController from "../controllers/JobController";
import JobOfferValidationSchema from "../validations/JobOfferValidationSchema";
import JobApplicationValidationSchema from "../validations/JobApplicationValidationSchema";
import JobValidationSchema from "../validations/JobValidationSchema";
import JobUpdateValidationSchema from "../validations/JobUpdateValidationSchema";

const router: express.Router = express.Router();

router.post(
  "/offer/create",
  passport.authenticate("jwt", { session: false }),
  upload.single("document"),
  JobOfferValidationSchema,
  JobController.createOffer
);

router.post(
  "/apply",
  JobApplicationValidationSchema,
  JobController.createJobApplication
);

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  JobValidationSchema,
  JobController.createJob
);

router.get(
  "/offers",
  passport.authenticate("jwt", { session: false }),
  JobController.getOffers
);

router.get(
  "/applications",
  passport.authenticate("jwt", { session: false }),
  JobController.getApplications
);

router.get(
  "/list",
  passport.authenticate("jwt", { session: false }),
  JobController.getJobs
);

router.put(
  "/update/:id",
  passport.authenticate("jwt", { session: false }),
  JobUpdateValidationSchema,
  JobController.terminateJob
);

router.delete(
  "/offer/delete/:id",
  passport.authenticate("jwt", { session: false }),
  JobController.deleteOffer
);

export default router;
