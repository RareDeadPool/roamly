export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  bio?: string;
  location?: string;
  joinedAt: string;
  travelBadges: string[];
  followersCount: number;
  followingCount: number;
  savedItineraries: string[]; // Itinerary IDs
}
