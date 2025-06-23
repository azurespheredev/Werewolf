import { body } from "express-validator";

const LoginValidationSchema = [
  body("name")
    .notEmpty()
    .withMessage("Name is required.")
    .bail()
    .isString()
    .withMessage("Name must be a string."),

  body("password")
    .notEmpty()
    .withMessage("Password is required.")
    .bail()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters."),
];

export default LoginValidationSchema;
