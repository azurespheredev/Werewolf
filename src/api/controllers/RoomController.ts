import { Request, Response } from 'express';
import { matchedData, validationResult } from 'express-validator';
import { prisma } from '../../../prisma/client';
import { generateRoomCode } from '../../lib/utils';

export default class RoomController {
  static async create(req: Request, res: Response) {
    const errors = validationResult(req).array();

    if (errors.length > 0) {
      res.json({
        success: false,
        message: errors[0].msg,
      });
      return;
    }

    const body = matchedData(req);

    const roomCode = await generateRoomCode();
    const roles = body.roles.map((role: number) => ({ role, name: '' }));

    const createdRoom = await prisma.rooms.create({
      data: {
        code: roomCode,
        roles: JSON.stringify(roles),
        timerLimit: body.timerLimit,
        isShowRole: body.isShowRole,
      },
    });

    res.json({
      success: true,
      message: 'New room has been created successfully.',
      data: createdRoom,
    });
  }

  static async join(req: Request, res: Response) {
    res.json({
      success: true,
      message: 'Join room functionality is not implemented yet.',
      data: null,
    });
  }
}
