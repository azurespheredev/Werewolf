import { body } from 'express-validator';

export const GameStartValidationSchema = [
  body('roomId')
    .notEmpty()
    .withMessage('Room ID is required.')
    .bail()
    .isNumeric()
    .withMessage('Room ID must be a number.'),
];

export const GameActionValidationSchema = [
  body('sessionId')
    .notEmpty()
    .withMessage('Session ID is required.')
    .bail()
    .isNumeric()
    .withMessage('Session ID must be a number.'),

  body('playerId')
    .notEmpty()
    .withMessage('Player ID is required.')
    .bail()
    .isNumeric()
    .withMessage('Player ID must be a number.'),

  body('action').notEmpty().withMessage('Action is required.'),

  body('targetId').optional().isNumeric().withMessage('Target ID must be a number.'),
];

export const GameVoteValidationSchema = [
  body('sessionId')
    .notEmpty()
    .withMessage('Session ID is required.')
    .bail()
    .isNumeric()
    .withMessage('Session ID must be a number.'),

  body('playerId')
    .notEmpty()
    .withMessage('Player ID is required.')
    .bail()
    .isNumeric()
    .withMessage('Player ID must be a number.'),

  body('targetId')
    .notEmpty()
    .withMessage('Target ID is required.')
    .bail()
    .isNumeric()
    .withMessage('Target ID must be a number.'),
];

export const GamePhaseValidationSchema = [
  body('sessionId')
    .notEmpty()
    .withMessage('Session ID is required.')
    .bail()
    .isNumeric()
    .withMessage('Session ID must be a number.'),
];
