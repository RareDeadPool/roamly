import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBookmarkDocument extends Document {
  userId: mongoose.Types.ObjectId;
  itineraryId: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const BookmarkSchema = new Schema<IBookmarkDocument>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    itineraryId: { type: Schema.Types.ObjectId, ref: "Itinerary", required: true, index: true },
  },
  { timestamps: true }
);

// Ensure a user can only bookmark an itinerary once
BookmarkSchema.index({ userId: 1, itineraryId: 1 }, { unique: true });

const Bookmark: Model<IBookmarkDocument> = mongoose.models.Bookmark || mongoose.model<IBookmarkDocument>("Bookmark", BookmarkSchema);
export default Bookmark;
