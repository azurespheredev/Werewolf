import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sessionId, playerId, action, targetId } = body;

    if (!sessionId || playerId === undefined) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    const session = await prisma.gameSession.findUnique({
      where: { id: sessionId },
    });

    if (!session) {
      return NextResponse.json({ success: false, message: "Session not found" }, { status: 404 });
    }

    // Persist night action in session.nightActions JSON { [playerId]: { action, target } }
    const nightActions = (() => {
      try {
        return JSON.parse(session.nightActions as unknown as string);
      } catch {
        return {} as Record<number, { action: string; target: number | null }>;
      }
    })() as Record<number, { action: string; target: number | null }>;

    nightActions[playerId] = { action: action || "", target: targetId ?? null };

    await prisma.gameSession.update({
      where: { id: sessionId },
      data: { nightActions: JSON.stringify(nightActions) },
    });

    // Check if all players with night actions have acted
    const room = await prisma.rooms.findFirst({
      where: { gameSessions: { some: { id: sessionId } } },
      include: { gameSessions: true },
    });

    if (room) {
      // Get alive players and their roles
      const alivePlayers = JSON.parse(session.alivePlayers as unknown as string) as number[];
      let playersData: Array<{ role: number | null }> = [];
      try {
        const parsed = JSON.parse(room.players as unknown as string);
        playersData = Array.isArray(parsed?.players) ? parsed.players : Array.isArray(parsed) ? parsed : [];
      } catch {
        playersData = [];
      }

      // Get all roles from the database to check priorities
      const roles = await prisma.roles.findMany();
      const rolesWithActions = alivePlayers.filter((pIdx) => {
        const playerRole = playersData[pIdx]?.role;
        if (!playerRole) return false;
        const role = roles.find((r) => r.id === playerRole);
        return role && role.priority > 0;
      });

      const actedPlayers = Object.keys(nightActions).map(Number);
      const allActed = rolesWithActions.every((pIdx) => actedPlayers.includes(pIdx));

      return NextResponse.json({
        success: true,
        message: "Action recorded",
        allActionsComplete: allActed,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Action recorded",
    });
  } catch (error) {
    console.error("Error recording action:", error);
    return NextResponse.json({ success: false, message: "Failed to record action" }, { status: 500 });
  }
}
