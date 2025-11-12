import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sessionId, playerId, targetId } = body;

    if (!sessionId || playerId === undefined || targetId === undefined) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    const session = await prisma.gameSession.findUnique({
      where: { id: sessionId },
    });

    if (!session) {
      return NextResponse.json({ success: false, message: "Session not found" }, { status: 404 });
    }

    // Store vote in database (you may want to create a separate votes table)
    // For now, we'll just log it
    console.log(`Player ${playerId} voted for player ${targetId}`);

    return NextResponse.json({
      success: true,
      message: "Vote recorded",
    });
  } catch (error) {
    console.error("Error recording vote:", error);
    return NextResponse.json({ success: false, message: "Failed to record vote" }, { status: 500 });
  }
}
