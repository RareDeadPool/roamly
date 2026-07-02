export interface TravelerReview {
  id: string;
  name: string;
  username: string;
  avatar: string;
  tripTitle: string;
  destination: string;
  rating: number;
  review: string;
  wouldFollow: boolean;
  month: string;
  tags: string[];
  helpfulCount: number;
}

export const TRAVELER_REVIEWS: TravelerReview[] = [
  {
    id: "rev-1",
    name: "Ananya Krishnan",
    username: "@ananya.travels",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    tripTitle: "7 Days in Himachal",
    destination: "Himachal Pradesh",
    rating: 5,
    review:
      "Followed this itinerary almost exactly. The Sissu day was the highlight of my trip — no tourists, just the glacier and silence. The reality check about roads was spot on. Carry cash and extra food.",
    wouldFollow: true,
    month: "June 2026",
    tags: ["Budget verified", "Hidden gem found", "Reality check accurate"],
    helpfulCount: 87,
  },
  {
    id: "rev-2",
    name: "Karan Mehta",
    username: "@karanexplores",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    tripTitle: "Budget Goa Without Clubs",
    destination: "Goa",
    rating: 4,
    review:
      "Remixed this trip and saved ₹4,200 by cutting the expensive beach clubs. The Kakolem Tiger Beach suggestion was gold — we were the only ones there for 3 hours. The bike rental advice was crucial.",
    wouldFollow: true,
    month: "May 2026",
    tags: ["Remixed", "Budget saved", "Underrated beaches"],
    helpfulCount: 134,
  },
  {
    id: "rev-3",
    name: "Divya Nair",
    username: "@divyaontheroadd",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    tripTitle: "Kerala Backwaters & Munnar",
    destination: "Kerala",
    rating: 5,
    review:
      "The Kumarakom bird sanctuary at 5 AM tip changed my entire trip. We saw kingfishers, herons, and purple moorhens in complete silence. This itinerary is the reason I use Roamly over travel blogs.",
    wouldFollow: true,
    month: "April 2026",
    tags: ["Wildlife surprise", "Budget accurate", "Houseboat tips spot-on"],
    helpfulCount: 198,
  },
  {
    id: "rev-4",
    name: "Rahul Verma",
    username: "@rahul.wanders",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    tripTitle: "Jaipur Weekend Plan",
    destination: "Rajasthan",
    rating: 3,
    review:
      "Good trip overall but the weekend crowd warning was understated. Amber Fort was a zoo. Go on a Thursday if possible. The blue pottery workshop was a genuine surprise — highly recommend.",
    wouldFollow: false,
    month: "March 2026",
    tags: ["Crowds worse than stated", "Workshop was great", "Morning timing critical"],
    helpfulCount: 56,
  },
  {
    id: "rev-5",
    name: "Shruti Patil",
    username: "@shrutisees",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    tripTitle: "Konkan Coastal Escape",
    destination: "Maharashtra",
    rating: 5,
    review:
      "The secret sunset cliff near Vijaydurg was the most beautiful moment of our entire trip. My friend nearly cried. Nobody mentions it on any travel blog. This is why real itineraries matter.",
    wouldFollow: true,
    month: "February 2026",
    tags: ["Hidden gem verified", "Sunset unforgettable", "Zero tourists"],
    helpfulCount: 211,
  },
  {
    id: "rev-6",
    name: "Arjun Kapoor",
    username: "@arjun.offtrack",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    tripTitle: "Uttarakhand Mountain Loop",
    destination: "Uttarakhand",
    rating: 4,
    review:
      "Jim Corbett safari was the dream. Booked in advance as suggested and got a tiger sighting on Day 2. The regret about Landour cafes is real — plan a Tuesday or Wednesday visit specifically for them.",
    wouldFollow: true,
    month: "January 2026",
    tags: ["Safari booking tip saved us", "Tiger sighting!", "Landour note accurate"],
    helpfulCount: 92,
  },
];
