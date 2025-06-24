import { body } from "express-validator";

const JobUpdateValidationSchema = [
  body("comments")
    .notEmpty()
    .withMessage("Comments are required.")
    .isString()
    .withMessage("Comments must be a string."),
];

export default JobUpdateValidationSchema;
