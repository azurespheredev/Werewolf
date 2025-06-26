import { body } from 'express-validator';

const RoomCreateValidationSchema = [
  body('roles')
    .notEmpty()
    .withMessage('Roles are required.')
    .bail()
    .isArray({ min: 3 })
    .withMessage('You must have to choose at least 3 roles.'),

  body('username')
    .notEmpty()
    .withMessage('Username is required.')
    .bail()
    .isString()
    .withMessage('Username must be a string.'),

  body('timerLimit')
    .notEmpty()
    .withMessage('Timer limit seconds settings is required.')
    .bail()
    .isNumeric()
    .withMessage('Timer limit must be a number.'),

  body('isShowRole')
    .isBoolean()
    .withMessage('Show roles setting must be a boolean.'),
];

export default RoomCreateValidationSchema;
