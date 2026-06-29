export interface BudgetCategoryItem {
  category: string; // e.g., 'Accommodation', 'Food', 'Transport', 'Activities', 'Shopping', 'Misc'
  amount: number;
  notes?: string;
}

export interface Place {
  id: string;
  name: string;
  description?: string;
  timeSpent?: string;
  cost?: number;
  category?: 'sightseeing' | 'food' | 'activity' | 'transport' | 'stay';
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface DayPlan {
  dayNumber: number;
  title: string;
  description?: string;
  places: Place[];
  notes?: string;
}

export interface RealityCheck {
  id: string;
  category: 'crowds' | 'prices' | 'weather' | 'safety' | 'accessibility' | 'general';
  title: string;
  description: string;
}

export interface RegretMissing {
  id: string;
  placeName: string;
  description: string;
  regretType: 'skipped' | 'rushed' | 'missed_completely';
}

export interface Itinerary {
  id: string;
  title: string;
  description: string;
  creatorId: string;
  creatorName: string;
  creatorImage?: string;
  destination: string;
  duration: number; // in days
  budget: number; // total budget in USD/local currency
  budgetBreakdown: BudgetCategoryItem[];
  travelStyle: string; // e.g., 'Backpacking', 'Luxury', 'Adventure', 'Slow Travel'
  pace: 'relaxed' | 'moderate' | 'fast-paced';
  image: string; // header image url
  days: DayPlan[];
  realityChecks: RealityCheck[];
  regretsMissing: RegretMissing[];
  likesCount: number;
  bookmarksCount: number;
  remixedFromId?: string; // ID of the original itinerary if remixed
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}
