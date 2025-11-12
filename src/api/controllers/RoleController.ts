import { Request, Response } from 'express';
import { prisma } from '../../../prisma/client';

export default class RoleController {
  static async getAll(_req: Request, res: Response) {
    try {
      const roles = await prisma.roles.findMany({
        orderBy: {
          name: 'asc',
        },
      });

      res.json({
        success: true,
        message: 'Roles fetched successfully.',
        data: roles,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to fetch roles.',
        data: null,
      });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const role = await prisma.roles.findUnique({
        where: { id: parseInt(id, 10) },
      });

      if (!role) {
        res.status(404).json({
          success: false,
          message: 'Role not found.',
          data: null,
        });
        return;
      }

      res.json({
        success: true,
        message: 'Role fetched successfully.',
        data: role,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to fetch role.',
        data: null,
      });
    }
  }
}
