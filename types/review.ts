export interface Review {
  id: string;
  itineraryId: string;
  userId: string;
  userName: string;
  userImage?: string;
  rating: number; // e.g., 1 to 5
  content: string;
  createdAt: string;
}
