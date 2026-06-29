import { NextResponse } from "next/server";
import dbConnect from "../../../lib/db";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "GET /api/regrets - Regrets list endpoint"
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({
      success: true,
      message: "POST /api/regrets - Add regret instance",
      data: body
    }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
