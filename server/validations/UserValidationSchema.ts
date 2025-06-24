import { body } from "express-validator";

export const UserInfoUpdateValidationSchema = [
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
    // Make avatar optional
    if (req.file === undefined || req.file === null) {
      return true;
    }
    // Add further validation for the file if needed
    return true;
  }),
];

export const UserPasswordUpdateValidationSchema = [
  body("currentPassword")
    .notEmpty()
    .withMessage("Current password is required.")
    .bail()
    .isString()
    .withMessage("Current password must be a string."),

  body("newPassword")
    .notEmpty()
    .withMessage("Password is required.")
    .bail()
    .isString()
    .withMessage("Password must be a string.")
    .bail()
    .isLength({ min: 6, max: 30 })
    .withMessage("Password must be between 6 and 30 characters."),

  body("confirmNewPassword")
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
      if (value !== req.body.newPassword) {
        throw new Error("Passwords do not match.");
      }
      return true;
    }),
];
