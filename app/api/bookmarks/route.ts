import { NextResponse } from "next/server";
import dbConnect from "../../../lib/db";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "GET /api/bookmarks - Bookmark schema endpoint"
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({
      success: true,
      message: "POST /api/bookmarks - Bookmark schema endpoint",
      data: body
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
