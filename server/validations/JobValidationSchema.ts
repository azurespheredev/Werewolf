import { body } from "express-validator";

const JobValidationSchema = [
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

  body("startedAt")
    .notEmpty()
    .withMessage("Received date is required.")
    .isString()
    .withMessage("Received date must be a string."),
];

export default JobValidationSchema;
