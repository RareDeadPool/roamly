import mongoose, { Schema, Document, Model } from "mongoose";

export interface IItineraryDocument extends Document {
  title: string;
  description: string;
  creatorId: mongoose.Types.ObjectId;
  creatorName: string;
  creatorImage?: string;
  destination: string;
  duration: number;
  budget: number;
  budgetBreakdown: Array<{
    category: string;
    amount: number;
    notes?: string;
  }>;
  travelStyle: string;
  pace: 'relaxed' | 'moderate' | 'fast-paced';
  image: string;
  days: Array<{
    dayNumber: number;
    title: string;
    description?: string;
    places: Array<{
      name: string;
      description?: string;
      timeSpent?: string;
      cost?: number;
      category?: 'sightseeing' | 'food' | 'activity' | 'transport' | 'stay';
      coordinates?: { lat: number; lng: number };
    }>;
    notes?: string;
  }>;
  realityChecks: Array<{
    category: 'crowds' | 'prices' | 'weather' | 'safety' | 'accessibility' | 'general';
    title: string;
    description: string;
  }>;
  regretsMissing: Array<{
    placeName: string;
    description: string;
    regretType: 'skipped' | 'rushed' | 'missed_completely';
  }>;
  likesCount: number;
  bookmarksCount: number;
  remixedFromId?: mongoose.Types.ObjectId;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const PlaceSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  timeSpent: { type: String },
  cost: { type: Number, default: 0 },
  category: { type: String, enum: ['sightseeing', 'food', 'activity', 'transport', 'stay'], default: 'sightseeing' },
  coordinates: {
    lat: { type: Number },
    lng: { type: Number }
  }
});

const DayPlanSchema = new Schema({
  dayNumber: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String },
  places: [PlaceSchema],
  notes: { type: String }
});

const RealityCheckSchema = new Schema({
  category: { type: String, enum: ['crowds', 'prices', 'weather', 'safety', 'accessibility', 'general'], required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
});

const RegretMissingSchema = new Schema({
  placeName: { type: String, required: true },
  description: { type: String, required: true },
  regretType: { type: String, enum: ['skipped', 'rushed', 'missed_completely'], required: true }
});

const BudgetCategorySchema = new Schema({
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  notes: { type: String }
});

const ItinerarySchema = new Schema<IItineraryDocument>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    creatorId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    creatorName: { type: String, required: true },
    creatorImage: { type: String },
    destination: { type: String, required: true, index: true },
    duration: { type: Number, required: true, min: 1 },
    budget: { type: Number, required: true, min: 0 },
    budgetBreakdown: [BudgetCategorySchema],
    travelStyle: { type: String, required: true, index: true },
    pace: { type: String, enum: ['relaxed', 'moderate', 'fast-paced'], default: 'moderate' },
    image: { type: String, required: true },
    days: [DayPlanSchema],
    realityChecks: [RealityCheckSchema],
    regretsMissing: [RegretMissingSchema],
    likesCount: { type: Number, default: 0 },
    bookmarksCount: { type: Number, default: 0 },
    remixedFromId: { type: Schema.Types.ObjectId, ref: "Itinerary" },
    isPublished: { type: Boolean, default: false, index: true },
  },
  { timestamps: true }
);

const Itinerary: Model<IItineraryDocument> = mongoose.models.Itinerary || mongoose.model<IItineraryDocument>("Itinerary", ItinerarySchema);
export default Itinerary;
