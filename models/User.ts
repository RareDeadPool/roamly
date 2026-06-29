import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUserDocument extends Document {
  name: string;
  email: string;
  image?: string;
  bio?: string;
  location?: string;
  travelBadges: string[];
  followersCount: number;
  followingCount: number;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUserDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    image: { type: String },
    bio: { type: String, default: "" },
    location: { type: String, default: "" },
    travelBadges: { type: [String], default: [] },
    followersCount: { type: Number, default: 0 },
    followingCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const User: Model<IUserDocument> = mongoose.models.User || mongoose.model<IUserDocument>("User", UserSchema);
export default User;
