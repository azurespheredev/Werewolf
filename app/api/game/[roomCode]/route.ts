import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest, { params }: { params: Promise<{ roomCode: string }> }) {
  try {
    const { roomCode } = await params;

    const room = await prisma.rooms.findUnique({
      where: { roomCode },
    });

    if (!room) {
      return NextResponse.json({ success: false, message: "Room not found" }, { status: 404 });
    }

    const session = await prisma.gameSession.findFirst({
      where: { roomId: room.id },
      orderBy: { createdAt: "desc" },
    });

    if (!session) {
      return NextResponse.json({ success: false, message: "Game session not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: { room, session },
    });
  } catch (error) {
    console.error("Error fetching game state:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch game state" }, { status: 500 });
  }
}
