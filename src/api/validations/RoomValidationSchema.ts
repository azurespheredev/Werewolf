import { body } from 'express-validator';

export const RoomCreateValidationSchema = [
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

export const RoomJoinValidationSchema = [
  body('roomCode')
    .notEmpty()
    .withMessage('Room code is required.')
    .bail()
    .isString()
    .withMessage('Room code must be a string.'),

  body('username')
    .notEmpty()
    .withMessage('Username is required.')
    .bail()
    .isString()
    .withMessage('Username must be a string.'),
];

export default RoomCreateValidationSchema;
