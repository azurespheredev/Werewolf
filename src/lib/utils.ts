import { prisma } from '../../prisma/client';

export async function generateRoomCode(): Promise<string> {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  while (true) {
    let result = '';
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }

    const isCodeExist = await prisma.rooms.findUnique({
      where: { code: result },
    });

    if (!isCodeExist) {
      return result;
    }
  }
}
