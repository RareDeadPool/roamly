export interface Regret {
  id: string;
  itineraryId: string;
  userId: string;
  placeName: string;
  description: string;
  regretType: 'skipped' | 'rushed' | 'missed_completely';
  createdAt: string;
}
