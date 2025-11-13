import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { roomCode, username } = body;

    if (!roomCode || !username) {
      return NextResponse.json(
        { success: false, message: "roomCode and username are required" },
        { status: 400 }
      );
    }

    const room = await prisma.rooms.findUnique({
      where: { roomCode },
    });

    if (!room) {
      return NextResponse.json({ success: false, message: "Room not found" }, { status: 404 });
    }

    if (room.gameStarted) {
      return NextResponse.json({ success: false, message: "Game already started" }, { status: 400 });
    }

    // Parse players array
    const playersField: unknown = room.players as unknown;
    let players: Array<{
      name: string | null;
      isAdmin?: boolean;
      role?: number | null;
      isAlive?: boolean;
      isOnline?: boolean;
      isReady?: boolean;
    }> = [];

    if (typeof playersField === "string") {
      try {
        const parsed = JSON.parse(playersField);
        if (Array.isArray(parsed?.players)) {
          players = parsed.players;
        } else if (Array.isArray(parsed)) {
          players = parsed;
        }
      } catch {
        players = [];
      }
    } else if (Array.isArray(playersField)) {
      players = playersField as typeof players;
    }

    // Find first empty slot
    const emptySlotIndex = players.findIndex((p) => !p || !p.name);

    if (emptySlotIndex === -1) {
      return NextResponse.json({ success: false, message: "Room is full" }, { status: 400 });
    }

    // Set player data with initial state
    players[emptySlotIndex] = {
      name: username.trim(),
      isAdmin: false,
      role: players[emptySlotIndex]?.role ?? null,
      isAlive: true,
      isOnline: true,
      isReady: false,
    };

    // Preserve metadata (selectedRoles) if it exists
    const originalData =
      typeof room.players === "string" ? (() => { try { return JSON.parse(room.players as string); } catch { return null; } })() : null;
    const updatedPlayersData =
      originalData && originalData.selectedRoles
        ? { players, selectedRoles: originalData.selectedRoles }
        : players;

    const updatedRoom = await prisma.rooms.update({
      where: { roomCode },
      data: { players: JSON.stringify(updatedPlayersData) },
    });

    // Normalize response: return players as array with role as number
    const normalizedPlayers = players.map((p) => ({
      ...p,
      role: typeof p.role === "string" ? parseInt(p.role as string, 10) : p.role,
    }));

    return NextResponse.json({
      success: true,
      data: {
        ...updatedRoom,
        players: normalizedPlayers,
        playerId: emptySlotIndex,
      },
    });
  } catch (error) {
    console.error("Error joining room:", error);
    return NextResponse.json({ success: false, message: "Failed to join room" }, { status: 500 });
  }
}
