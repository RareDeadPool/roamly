import mongoose, { Schema, Document, Model } from "mongoose";

export interface IRegretDocument extends Document {
  itineraryId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  placeName: string;
  description: string;
  regretType: 'skipped' | 'rushed' | 'missed_completely';
  createdAt: Date;
  updatedAt: Date;
}

const RegretSchema = new Schema<IRegretDocument>(
  {
    itineraryId: { type: Schema.Types.ObjectId, ref: "Itinerary", required: true, index: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    placeName: { type: String, required: true },
    description: { type: String, required: true },
    regretType: { type: String, enum: ['skipped', 'rushed', 'missed_completely'], required: true },
  },
  { timestamps: true }
);

const Regret: Model<IRegretDocument> = mongoose.models.Regret || mongoose.model<IRegretDocument>("Regret", RegretSchema);
export default Regret;
