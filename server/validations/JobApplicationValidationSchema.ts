import { body } from "express-validator";

const JobApplicationValidationSchema = [
  body("companyName")
    .notEmpty()
    .withMessage("Company name is required.")
    .isString()
    .withMessage("Company name must be a string."),

  body("position")
    .notEmpty()
    .withMessage("Position is required.")
    .isString()
    .withMessage("Position must be a string."),

  body("token")
    .notEmpty()
    .withMessage("Token is required.")
    .isString()
    .withMessage("Token must be a string."),
];

export default JobApplicationValidationSchema;
