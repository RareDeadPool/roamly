export interface Comment {
  id: string;
  itineraryId: string;
  userId: string;
  userName: string;
  userImage?: string;
  content: string;
  createdAt: string;
}
