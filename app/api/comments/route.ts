import { NextResponse } from "next/server";
import dbConnect from "../../../lib/db";

export async function GET(request: Request) {
  return NextResponse.json({
    success: true,
    message: "GET /api/comments - Comment schema endpoint"
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({
      success: true,
      message: "POST /api/comments - Comment schema endpoint",
      data: body
    }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
