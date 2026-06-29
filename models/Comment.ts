import mongoose, { Schema, Document, Model } from "mongoose";

export interface ICommentDocument extends Document {
  itineraryId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  userName: string;
  userImage?: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const CommentSchema = new Schema<ICommentDocument>(
  {
    itineraryId: { type: Schema.Types.ObjectId, ref: "Itinerary", required: true, index: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    userName: { type: String, required: true },
    userImage: { type: String },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const Comment: Model<ICommentDocument> = mongoose.models.Comment || mongoose.model<ICommentDocument>("Comment", CommentSchema);
export default Comment;
