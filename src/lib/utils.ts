import { prisma } from '../../prisma/client';
import { PlayerRoleType } from './types';

export async function generateRoomCode(): Promise<string> {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const generateCode = (): string => {
    let result = '';
    for (let i = 0; i < 4; i += 1) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }
    return result;
  };

  const code = generateCode();
  const isCodeExist = await prisma.rooms.findUnique({
    where: { code },
  });

  if (isCodeExist) {
    return generateRoomCode(); // recursive retry until a unique code is generated
  }

  return code;
}

export function shuffleRoleAssignment(roles: PlayerRoleType[]) {
  return roles;
}
