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

    return NextResponse.json({ success: true, data: room });
  } catch (error) {
    console.error("Error fetching room:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch room" }, { status: 500 });
  }
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ roomCode: string }> }) {
  try {
    const { roomCode } = await params;
    const body = await request.json();
    const { playerName } = body;

    if (!playerName) {
      return NextResponse.json({ success: false, message: "Player name is required" }, { status: 400 });
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

    const playersData = JSON.parse(room.players as string);
    const players = playersData.players || playersData;
    const emptySlot = players.findIndex((p: { name: string | null }) => !p.name);

    if (emptySlot === -1) {
      return NextResponse.json({ success: false, message: "Room is full" }, { status: 400 });
    }

    players[emptySlot] = { name: playerName, isAdmin: false, role: null };

    // Preserve metadata if it exists
    const updatedPlayersData = playersData.selectedRoles
      ? { players, selectedRoles: playersData.selectedRoles }
      : players;

    const updatedRoom = await prisma.rooms.update({
      where: { roomCode },
      data: { players: JSON.stringify(updatedPlayersData) },
    });

    return NextResponse.json({
      success: true,
      data: { room: updatedRoom, playerId: emptySlot },
    });
  } catch (error) {
    console.error("Error joining room:", error);
    return NextResponse.json({ success: false, message: "Failed to join room" }, { status: 500 });
  }
}
