import { NextResponse } from "next/server";
import { uploadImage } from "../../../lib/cloudinary";

export async function POST(request: Request) {
  try {
    const { image, folder } = await request.json();
    
    if (!image) {
      return NextResponse.json({ success: false, error: "Missing image string parameter" }, { status: 400 });
    }

    const uploadResult = await uploadImage(image, folder || "roamly");

    return NextResponse.json({
      success: true,
      message: "Image uploaded successfully (Mock Mode active)",
      ...uploadResult
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
