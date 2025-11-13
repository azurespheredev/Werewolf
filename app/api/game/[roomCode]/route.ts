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

    // Normalize shapes for client consumption
    let playersField: unknown = room.players as unknown;
    if (typeof playersField === "string") {
      try {
        const parsed = JSON.parse(playersField);
        if (Array.isArray(parsed?.players)) {
          playersField = parsed.players;
        } else if (Array.isArray(parsed)) {
          playersField = parsed;
        } else {
          playersField = [];
        }
      } catch {
        playersField = [];
      }
    }
    if (!Array.isArray(playersField)) playersField = [];

    const normalizedRoom = {
      ...room,
      players: (playersField as Array<{ role: number | string | null; name: string | null; isAdmin?: boolean }>).map(
        (p) => ({
          ...p,
          role: typeof p.role === "string" ? parseInt(p.role, 10) : (p.role as number | null),
        })
      ),
    };

    const parseJsonArray = (val: unknown): number[] => {
      if (typeof val === "string") {
        try {
          const parsed = JSON.parse(val);
          return Array.isArray(parsed) ? parsed : [];
        } catch {
          return [];
        }
      }
      return Array.isArray(val) ? (val as number[]) : [];
    };

    const parseJsonObject = <T extends object>(val: unknown, fallback: T): T => {
      if (typeof val === "string") {
        try {
          const parsed = JSON.parse(val);
          return (parsed && typeof parsed === "object" ? parsed : fallback) as T;
        } catch {
          return fallback;
        }
      }
      return (val && typeof val === "object" ? (val as T) : fallback) as T;
    };

    const normalizedSession = {
      ...session,
      alivePlayers: parseJsonArray(session.alivePlayers as unknown),
      deadPlayers: parseJsonArray(session.deadPlayers as unknown),
      votes: parseJsonObject<Record<number, number>>(session.votes as unknown, {}),
      nightActions: parseJsonObject<Record<number, { action: string; target: number | null }>>(
        session.nightActions as unknown,
        {}
      ),
    };

    return NextResponse.json({ success: true, data: { room: normalizedRoom, session: normalizedSession } });
  } catch (error) {
    console.error("Error fetching game state:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch game state" }, { status: 500 });
  }
}
