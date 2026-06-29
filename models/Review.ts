import mongoose, { Schema, Document, Model } from "mongoose";

export interface IReviewDocument extends Document {
  itineraryId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  userName: string;
  userImage?: string;
  rating: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const ReviewSchema = new Schema<IReviewDocument>(
  {
    itineraryId: { type: Schema.Types.ObjectId, ref: "Itinerary", required: true, index: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    userName: { type: String, required: true },
    userImage: { type: String },
    rating: { type: Number, required: true, min: 1, max: 5 },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const Review: Model<IReviewDocument> = mongoose.models.Review || mongoose.model<IReviewDocument>("Review", ReviewSchema);
export default Review;
