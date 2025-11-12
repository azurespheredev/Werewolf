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
            isAlive: true,
            isOnline: true,
            isReady: true,
          };
        }

        return {
          role,
          name: null,
          isAdmin: false,
          isAlive: true,
          isOnline: false,
          isReady: false,
        };
      },
    );

    const createdRoom = await prisma.rooms.create({
      data: {
        players: JSON.stringify(roles),
        timerLimit: body.timerLimit,
        isShowRole: body.isShowRole,
        maxPlayers: body.roles.length,
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
    const errors = validationResult(req).array();

    if (errors.length > 0) {
      res.json({
        success: false,
        message: errors[0].msg,
      });
      return;
    }

    const body = matchedData(req);

    const room = await prisma.rooms.findFirst({
      where: {
        OR: [
          { id: parseInt(body.roomCode, 10) || -1 },
          { roomCode: body.roomCode },
        ],
        isActive: true,
        gameStarted: false,
      },
    });

    if (!room) {
      res.json({
        success: false,
        message: 'Room not found or game already started.',
      });
      return;
    }

    const players: PlayerType[] = JSON.parse(room.players);
    const emptySlotIndex = players.findIndex((p) => p.name === null);

    if (emptySlotIndex === -1) {
      res.json({
        success: false,
        message: 'Room is full.',
      });
      return;
    }

    players[emptySlotIndex] = {
      ...players[emptySlotIndex],
      name: body.username,
      isOnline: true,
      isReady: false,
    };

    await prisma.rooms.update({
      where: { id: room.id },
      data: {
        players: JSON.stringify(players),
      },
    });

    res.json({
      success: true,
      message: 'Joined room successfully.',
      data: {
        ...room,
        players,
        playerId: emptySlotIndex,
      },
    });
  }

  static async getByCode(req: Request, res: Response) {
    try {
      const { code } = req.params;
      const room = await prisma.rooms.findFirst({
        where: {
          OR: [{ id: parseInt(code, 10) || -1 }, { roomCode: code }],
          isActive: true,
        },
      });

      if (!room) {
        res.status(404).json({
          success: false,
          message: 'Room not found.',
          data: null,
        });
        return;
      }

      res.json({
        success: true,
        message: 'Room fetched successfully.',
        data: {
          ...room,
          players: JSON.parse(room.players),
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to fetch room.',
        data: null,
      });
    }
  }

  static async leave(req: Request, res: Response) {
    try {
      const { roomCode, playerId } = req.body;

      if (!roomCode || playerId === undefined) {
        res.status(400).json({
          success: false,
          message: 'Room code and player ID are required.',
        });
        return;
      }

      const room = await prisma.rooms.findFirst({
        where: {
          OR: [
            { id: parseInt(roomCode, 10) || -1 },
            { roomCode: roomCode },
          ],
          isActive: true,
        },
      });

      if (!room) {
        res.status(404).json({
          success: false,
          message: 'Room not found.',
        });
        return;
      }

      const players: PlayerType[] = JSON.parse(room.players);
      const playerIndex = parseInt(playerId, 10);

      if (playerIndex < 0 || playerIndex >= players.length) {
        res.status(400).json({
          success: false,
          message: 'Invalid player ID.',
        });
        return;
      }

      const player = players[playerIndex];

      // If the player leaving is the host (admin), delete the room
      if (player.isAdmin) {
        await prisma.rooms.update({
          where: { id: room.id },
          data: { isActive: false },
        });

        res.json({
          success: true,
          message: 'Room closed successfully.',
          data: { roomClosed: true },
        });
        return;
      }

      // For non-admin players, clear their slot
      players[playerIndex] = {
        ...players[playerIndex],
        name: null,
        isOnline: false,
        isReady: false,
      };

      await prisma.rooms.update({
        where: { id: room.id },
        data: {
          players: JSON.stringify(players),
        },
      });

      res.json({
        success: true,
        message: 'Left room successfully.',
        data: {
          ...room,
          players,
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to leave room.',
        data: null,
      });
    }
  }

  static async listActive(_req: Request, res: Response) {
    try {
      const rooms = await prisma.rooms.findMany({
        where: {
          isActive: true,
          gameStarted: false,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

      const roomsData = rooms.map((room) => ({
        ...room,
        players: JSON.parse(room.players),
      }));

      res.json({
        success: true,
        message: 'Active rooms fetched successfully.',
        data: roomsData,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to fetch rooms.',
        data: null,
      });
    }
  }
}
