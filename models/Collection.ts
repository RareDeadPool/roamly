import mongoose, { Schema, Document, Model } from "mongoose";

export interface ICollectionDocument extends Document {
  name: string;
  description?: string;
  userId: mongoose.Types.ObjectId;
  itineraries: mongoose.Types.ObjectId[];
  image?: string;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const CollectionSchema = new Schema<ICollectionDocument>(
  {
    name: { type: String, required: true },
    description: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    itineraries: [{ type: Schema.Types.ObjectId, ref: "Itinerary" }],
    image: { type: String },
    isPublic: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Collection: Model<ICollectionDocument> = mongoose.models.Collection || mongoose.model<ICollectionDocument>("Collection", CollectionSchema);
export default Collection;
