import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const rooms = await prisma.rooms.findMany({
      where: {
        isActive: true,
        gameStarted: false,
      },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, data: rooms });
  } catch (error) {
    console.error("Error fetching rooms:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch rooms" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { hostName, playerCount, timerLimit, selectedRoles, isShowRole } = body;

    if (!hostName || !playerCount || !timerLimit || !selectedRoles) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    // Generate unique room code
    const roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    // Create initial players array with host
    const players = Array.from({ length: playerCount }, (_, i) => ({
      name: i === 0 ? hostName : null,
      isAdmin: i === 0,
      role: null,
    }));

    // Store selected roles as metadata in players array for now
    const playersWithMeta = {
      players,
      selectedRoles,
    };

    const room = await prisma.rooms.create({
      data: {
        roomCode,
        maxPlayers: playerCount,
        timerLimit,
        isShowRole: isShowRole || false,
        gameStarted: false,
        isActive: true,
        players: JSON.stringify(playersWithMeta),
      },
    });

    return NextResponse.json({ success: true, data: room });
  } catch (error) {
    console.error("Error creating room:", error);
    return NextResponse.json({ success: false, message: "Failed to create room" }, { status: 500 });
  }
}
