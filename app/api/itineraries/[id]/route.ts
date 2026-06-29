import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/db";
import Itinerary from "../../../../models/Itinerary";

// GET /api/itineraries/[id]
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    await dbConnect();
    const { id } = await params;
    
    return NextResponse.json({
      success: true,
      message: `GET /api/itineraries/${id} - Connected to DB`,
      id
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// PUT /api/itineraries/[id]
export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    await dbConnect();
    const { id } = await params;
    const body = await request.json();
    
    return NextResponse.json({
      success: true,
      message: `PUT /api/itineraries/${id} - Connected to DB`,
      data: body
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// DELETE /api/itineraries/[id]
export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    await dbConnect();
    const { id } = await params;
    
    return NextResponse.json({
      success: true,
      message: `DELETE /api/itineraries/${id} - Connected to DB`
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
