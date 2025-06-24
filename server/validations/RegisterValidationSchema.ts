import { body } from "express-validator";

const RegisterValidationSchema = [
  body("name")
    .notEmpty()
    .withMessage("Name is required.")
    .bail()
    .isString()
    .withMessage("Name must be a string."),

  body("groupId")
    .notEmpty()
    .withMessage("Group ID is required.")
    .bail()
    .isString()
    .withMessage("Group ID must be a string."),

  body("color")
    .notEmpty()
    .withMessage("Color is required.")
    .bail()
    .isString()
    .withMessage("Color must be a string."),

  body("avatar").custom((_, { req }) => {
    if (!req.file) {
      throw new Error("Please upload the avatar image.");
    }
    return true;
  }),

  body("password")
    .notEmpty()
    .withMessage("Password is required.")
    .bail()
    .isString()
    .withMessage("Password must be a string.")
    .bail()
    .isLength({ min: 6, max: 30 })
    .withMessage("Password must be between 6 and 30 characters."),

  body("confirmPassword")
    .notEmpty()
    .withMessage("Confirm password is required.")
    .bail()
    .isString()
    .withMessage("Confirm password must be a string.")
    .bail()
    .isLength({ min: 6, max: 30 })
    .withMessage("Confirm password must be between 6 and 30 characters.")
    .bail()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match.");
      }
      return true;
    }),

  body("secret").notEmpty().withMessage("Secret key is required."),
];

export default RegisterValidationSchema;
