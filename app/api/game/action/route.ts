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

    // Store action in database (you may want to create a separate actions table)
    // For now, we'll just log it
    console.log(`Player ${playerId} performed action: ${action} on target: ${targetId}`);

    return NextResponse.json({
      success: true,
      message: "Action recorded",
    });
  } catch (error) {
    console.error("Error recording action:", error);
    return NextResponse.json({ success: false, message: "Failed to record action" }, { status: 500 });
  }
}
