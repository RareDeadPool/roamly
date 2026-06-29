import mongoose, { Schema, Document, Model } from "mongoose";

export interface INotificationDocument extends Document {
  recipientId: mongoose.Types.ObjectId;
  senderId: mongoose.Types.ObjectId;
  senderName: string;
  senderImage?: string;
  type: 'like' | 'comment' | 'remix' | 'follow' | 'system';
  itineraryId?: mongoose.Types.ObjectId;
  content: string;
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const NotificationSchema = new Schema<INotificationDocument>(
  {
    recipientId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    senderId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    senderName: { type: String, required: true },
    senderImage: { type: String },
    type: { type: String, enum: ['like', 'comment', 'remix', 'follow', 'system'], required: true },
    itineraryId: { type: Schema.Types.ObjectId, ref: "Itinerary" },
    content: { type: String, required: true },
    read: { type: Boolean, default: false, index: true },
  },
  { timestamps: true }
);

const Notification: Model<INotificationDocument> = mongoose.models.Notification || mongoose.model<INotificationDocument>("Notification", NotificationSchema);
export default Notification;
