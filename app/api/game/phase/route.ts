import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, GamePhase } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sessionId } = body;

    if (!sessionId) {
      return NextResponse.json({ success: false, message: "Session ID is required" }, { status: 400 });
    }

    const session = await prisma.gameSession.findUnique({
      where: { id: sessionId },
    });

    if (!session) {
      return NextResponse.json({ success: false, message: "Session not found" }, { status: 404 });
    }

    // Phase transition logic
    let nextPhase: GamePhase = session.phase;
    let nextDay = session.dayNumber;
    let winner: string | null = null;

    switch (session.phase) {
      case "night":
        nextPhase = "day";
        break;
      case "day":
        nextPhase = "voting";
        break;
      case "voting":
        nextPhase = "night";
        nextDay += 1;
        break;
      default:
        break;
    }

    // Check win condition (simplified logic)
    const alivePlayers = JSON.parse(session.alivePlayers as string);
    if (alivePlayers.length <= 2) {
      winner = "werewolf"; // Simplified: werewolves win if 2 or fewer alive
      nextPhase = "ended";
    }

    const updatedSession = await prisma.gameSession.update({
      where: { id: sessionId },
      data: {
        phase: nextPhase,
        dayNumber: nextDay,
      },
    });

    return NextResponse.json({
      success: true,
      data: {
        phase: nextPhase,
        dayNumber: nextDay,
        winner,
        session: updatedSession,
      },
    });
  } catch (error) {
    console.error("Error advancing phase:", error);
    return NextResponse.json({ success: false, message: "Failed to advance phase" }, { status: 500 });
  }
}
