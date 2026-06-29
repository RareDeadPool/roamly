/**
 * Cloudinary image upload and deletion utilities.
 * Prepared for live Cloudinary environment integration.
 */

// Placeholder Cloudinary upload function
export async function uploadImage(fileStr: string, folder: string = "roamly"): Promise<{ url: string; publicId: string }> {
  console.log(`[Cloudinary Upload Mock] Uploading file to folder: ${folder}`);
  
  // Simulation delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  // Return placeholder
  return {
    url: "/images/placeholder-trip.jpg",
    publicId: `mock_public_id_${Date.now()}`
  };
}

// Placeholder Cloudinary delete function
export async function deleteImage(publicId: string): Promise<{ success: boolean }> {
  console.log(`[Cloudinary Delete Mock] Deleting file with public ID: ${publicId}`);
  
  await new Promise((resolve) => setTimeout(resolve, 300));
  
  return { success: true };
}
