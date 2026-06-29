import { NextResponse } from "next/server";
import dbConnect from "../../../lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({
      success: true,
      message: "POST /api/likes - Liking an itinerary placeholder",
      data: body
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
