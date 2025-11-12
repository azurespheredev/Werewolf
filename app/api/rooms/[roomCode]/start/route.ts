import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Simple shuffle function
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ roomCode: string }> }) {
  try {
    const { roomCode } = await params;

    const room = await prisma.rooms.findUnique({
      where: { roomCode },
    });

    if (!room) {
      return NextResponse.json({ success: false, message: "Room not found" }, { status: 404 });
    }

    if (room.gameStarted) {
      return NextResponse.json({ success: false, message: "Game already started" }, { status: 400 });
    }

    const playersData = JSON.parse(room.players as string);
    const players = playersData.players || playersData;
    const selectedRoles = playersData.selectedRoles || [];

    // Assign roles to players
    const shuffledRoles = shuffleArray(selectedRoles);
    const playersWithRoles = players.map(
      (p: { name: string | null; isAdmin: boolean; role: number | null }, idx: number) => ({
        ...p,
        role: shuffledRoles[idx] || null,
      })
    );

    // Update room as started
    const updatedRoom = await prisma.rooms.update({
      where: { roomCode },
      data: {
        gameStarted: true,
        players: JSON.stringify({ players: playersWithRoles, selectedRoles }),
      },
    });

    // Create game session
    const session = await prisma.gameSession.create({
      data: {
        roomId: room.id,
        phase: "night",
        dayNumber: 1,
        alivePlayers: JSON.stringify(Array.from({ length: players.length }, (_, i) => i)),
        deadPlayers: JSON.stringify([]),
      },
    });

    return NextResponse.json({
      success: true,
      data: { room: updatedRoom, session },
    });
  } catch (error) {
    console.error("Error starting game:", error);
    return NextResponse.json({ success: false, message: "Failed to start game" }, { status: 500 });
  }
}
