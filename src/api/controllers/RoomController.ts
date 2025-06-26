import { Request, Response } from 'express';
import { matchedData, validationResult } from 'express-validator';
import { prisma } from '../../../prisma/client';
import { PlayerType } from '../../lib/types';

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

    const roleChecks = await Promise.all(
      body.roles.map(async (roleId: number) => {
        const exists = await prisma.roles.findUnique({ where: { id: roleId } });
        return { roleId, exists };
      }),
    );

    const invalidRole = roleChecks.find((r) => !r.exists);
    if (invalidRole) {
      res.json({
        success: false,
        message: `Player role with ID ${invalidRole.roleId} does not exist.`,
      });
      return;
    }

    const roles: PlayerType[] = body.roles.map(
      (role: number, index: number) => {
        if (index === 0) {
          return {
            role,
            name: body.username,
            isAdmin: true,
            isActive: false,
            isOnline: true,
          };
        }

        return {
          role,
          name: null,
          isAdmin: false,
          isActive: false,
          isOnline: false,
        };
      },
    );

    const createdRoom = await prisma.rooms.create({
      data: {
        players: JSON.stringify(roles),
        timerLimit: body.timerLimit,
        isShowRole: body.isShowRole,
      },
    });

    res.json({
      success: true,
      message: 'New room has been created.',
      data: {
        ...createdRoom,
        players: JSON.parse(createdRoom.players),
      },
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
