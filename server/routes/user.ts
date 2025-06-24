import * as express from "express";
import * as passport from "passport";
import { upload } from "../middleware/multer";
import UserController from "../controllers/UserController";
import RegisterValidationSchema from "../validations/RegisterValidationSchema";
import LoginValidationSchema from "../validations/LoginValidationSchema";
import {
  UserInfoUpdateValidationSchema,
  UserPasswordUpdateValidationSchema,
} from "../validations/UserValidationSchema";

const router: express.Router = express.Router();

router.post(
  "/register",
  upload.single("avatar"),
  RegisterValidationSchema,
  UserController.register
);
router.post("/login", LoginValidationSchema, UserController.login);
router.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  UserController.accessToken
);

router.put(
  "/info",
  passport.authenticate("jwt", { session: false }),
  upload.single("avatar"),
  UserInfoUpdateValidationSchema,
  UserController.updateInfo
);

router.put(
  "/password",
  passport.authenticate("jwt", { session: false }),
  UserPasswordUpdateValidationSchema,
  UserController.updatePassword
);

export default router;
