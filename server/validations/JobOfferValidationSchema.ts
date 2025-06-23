import { body } from "express-validator";

const JobOfferValidationSchema = [
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

  body("salary")
    .notEmpty()
    .withMessage("Salary is required.")
    .isString()
    .withMessage("Salary must be a string."),

  body("jobType")
    .notEmpty()
    .withMessage("Job type is required.")
    .isString()
    .withMessage("Job type must be a string."),

  body("source")
    .notEmpty()
    .withMessage("Source is required.")
    .isString()
    .withMessage("Source must be a string."),

  body("interviews")
    .notEmpty()
    .withMessage("Interviews count is required.")
    .isNumeric()
    .withMessage("Interviews must be a numeric value."),

  body("receivedAt")
    .notEmpty()
    .withMessage("Received date is required.")
    .isString()
    .withMessage("Received date must be a string."),

  body("startAt").isString().withMessage("Start date must be a string."),

  body("document").custom((value, { req }) => {
    if (!req.file) {
      throw new Error("Please upload the offer letter document.");
    }
    return true;
  }),
];

export default JobOfferValidationSchema;
