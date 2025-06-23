import { body } from "express-validator";

const CalendarSyncValidationSchema = [
  body("token").notEmpty().withMessage("Access token is required."),
];

export default CalendarSyncValidationSchema;
