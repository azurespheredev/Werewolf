import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const roles = await prisma.roles.findMany({
      orderBy: { priority: "desc" },
    });
    return NextResponse.json({ success: true, data: roles });
  } catch (error) {
    console.error("Error fetching roles:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch roles" }, { status: 500 });
  }
}
