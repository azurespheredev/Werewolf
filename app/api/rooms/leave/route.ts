import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { roomCode, playerId } = body as { roomCode?: string; playerId?: string | number };

    if (!roomCode || playerId === undefined || playerId === null) {
      return NextResponse.json({ success: false, message: "roomCode and playerId are required" }, { status: 400 });
    }

    const numericPlayerId = typeof playerId === "string" ? parseInt(playerId, 10) : playerId;
    if (Number.isNaN(numericPlayerId) || numericPlayerId < 0) {
      return NextResponse.json({ success: false, message: "Invalid playerId" }, { status: 400 });
    }

    const room = await prisma.rooms.findUnique({ where: { roomCode } });
    if (!room) {
      return NextResponse.json({ success: false, message: "Room not found" }, { status: 404 });
    }

    const raw = room.players as unknown as string;
    type StoredPlayer = {
      name: string | null;
      isAdmin?: boolean;
      role?: number | null;
      isOnline?: boolean;
      isAlive?: boolean;
      isReady?: boolean;
    };
    let playersObj: unknown = [];
    try {
      const parsed = JSON.parse(raw);
      playersObj = parsed?.players ?? parsed;
    } catch {
      // if parsing fails treat as empty list
      playersObj = [];
    }

    const players: StoredPlayer[] = Array.isArray(playersObj) ? (playersObj as StoredPlayer[]) : [];
    if (numericPlayerId >= players.length) {
      return NextResponse.json({ success: false, message: "Player not found in room" }, { status: 404 });
    }

    // Clear the slot but keep the slot index
    const existing = players[numericPlayerId] || {};
    players[numericPlayerId] = {
      ...existing,
      name: null,
      isOnline: false,
    };

    const updatedPayload =
      raw && JSON.parse(raw)?.players
        ? { players, ...(JSON.parse(raw).selectedRoles ? { selectedRoles: JSON.parse(raw).selectedRoles } : {}) }
        : players;

    const updatedRoom = await prisma.rooms.update({
      where: { roomCode },
      data: {
        players: JSON.stringify(updatedPayload),
        // If room becomes empty, mark inactive
        isActive: players.some((p) => p && p.name) ? true : false,
      },
    });

    return NextResponse.json({ success: true, data: updatedRoom });
  } catch (error) {
    console.error("Error leaving room:", error);
    return NextResponse.json({ success: false, message: "Failed to leave room" }, { status: 500 });
  }
}
