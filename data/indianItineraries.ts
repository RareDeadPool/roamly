export interface IndianItinerary {
  id: string;
  title: string;
  destination: string;
  state: string;
  duration: number;
  budget: number; // INR
  coverImage: string;
  tags: string[];
  hiddenGem: string;
  realityCheck: string;
  regret?: string;
  creatorName: string;
  creatorAvatar: string;
  rating: number;
  reviews: number;
  saves: number;
  remixes: number;
  pace: "relaxed" | "moderate" | "fast";
  days: {
    day: number;
    title: string;
    highlights: string[];
  }[];
  budgetBreakdown: {
    category: string;
    amount: number;
  }[];
  isRemixable: boolean;
  remixedFromId?: string;
}

export const INDIAN_ITINERARIES: IndianItinerary[] = [
  {
    id: "himachal-7-days",
    title: "7 Days in Himachal",
    destination: "Manali & Spiti Valley",
    state: "Himachal Pradesh",
    duration: 7,
    budget: 18500,
    coverImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    tags: ["Mountains", "Budget", "Road Trip", "Snow"],
    hiddenGem: "Sissu waterfall — zero crowd, just you and the glacier",
    realityCheck: "Roads were rough and mostly blocked after July rains",
    regret: "Should have stayed one more day in Sissu",
    creatorName: "Priya Sharma",
    creatorAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 4.8,
    reviews: 312,
    saves: 894,
    remixes: 142,
    pace: "moderate",
    days: [
      {
        day: 1,
        title: "Manali arrival + Old Manali cafes",
        highlights: [
          "Check into guesthouse near Manu Temple",
          "Explore Old Manali market lanes",
          "Café 1947 for dinner",
        ],
      },
      {
        day: 2,
        title: "Solang Valley + sunset point",
        highlights: [
          "Early morning Solang Valley ride",
          "Paragliding optional (₹1,200)",
          "Sunset from Kullu viewpoint",
        ],
      },
      {
        day: 3,
        title: "Hidden waterfall trail",
        highlights: [
          "Jogini waterfall trek (3 hrs)",
          "Local dhaba lunch (₹80 thali)",
          "Evening bonfire at camp",
        ],
      },
    ],
    budgetBreakdown: [
      { category: "Stay (7 nights)", amount: 7000 },
      { category: "Food", amount: 3500 },
      { category: "Transport", amount: 5000 },
      { category: "Activities", amount: 2000 },
      { category: "Miscellaneous", amount: 1000 },
    ],
    isRemixable: true,
  },
  {
    id: "konkan-coastal-escape",
    title: "Konkan Coastal Escape",
    destination: "Alibaug to Tarkarli",
    state: "Maharashtra",
    duration: 4,
    budget: 8000,
    coverImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    tags: ["Beach", "Food", "Heritage", "Coastal"],
    hiddenGem: "Secret sunset cliff near Vijaydurg fort — no tourists",
    realityCheck:
      "Limited public transport after 8 PM. Book private cabs in advance.",
    regret: "Missed the fish thali at the local market in Malvan",
    creatorName: "Rohan Naik",
    creatorAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 4.6,
    reviews: 187,
    saves: 541,
    remixes: 78,
    pace: "relaxed",
    days: [
      {
        day: 1,
        title: "Alibaug — forts and beaches",
        highlights: ["Kolaba Fort walk at low tide", "Alibaug beach sunset"],
      },
      {
        day: 2,
        title: "Drive to Ganpatipule",
        highlights: [
          "Coastal highway drive",
          "Ganpatipule temple",
          "Seafood dinner",
        ],
      },
      {
        day: 3,
        title: "Tarkarli snorkeling",
        highlights: [
          "Snorkeling trip (₹600)",
          "Vijaydurg fort visit",
          "Local malvani cuisine",
        ],
      },
      {
        day: 4,
        title: "Head back via Ratnagiri",
        highlights: ["Thibaw Palace", "Alphonso mango farm stop"],
      },
    ],
    budgetBreakdown: [
      { category: "Stay (4 nights)", amount: 3200 },
      { category: "Food", amount: 1800 },
      { category: "Transport", amount: 2000 },
      { category: "Activities", amount: 1000 },
    ],
    isRemixable: true,
  },
  {
    id: "uttarakhand-mountain-loop",
    title: "Uttarakhand Mountain Loop",
    destination: "Mussoorie → Nainital → Jim Corbett",
    state: "Uttarakhand",
    duration: 7,
    budget: 22000,
    coverImage:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    tags: ["Mountains", "Wildlife", "Lakes", "Forest"],
    hiddenGem: "Local sunrise trail behind Landour market — completely empty",
    realityCheck:
      "Jim Corbett safari booking closes weeks in advance. Book online.",
    regret: "Missed the Landour cafes — most were closed on weekdays",
    creatorName: "Aditya Singh",
    creatorAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    rating: 4.7,
    reviews: 245,
    saves: 712,
    remixes: 99,
    pace: "moderate",
    days: [
      {
        day: 1,
        title: "Mussoorie — Mall Road & Kempty Falls",
        highlights: ["Kempty Falls visit", "Mall Road stroll", "Camel's Back Road sunset"],
      },
      {
        day: 2,
        title: "Landour sunrise trail",
        highlights: ["4 AM trek to sunrise point", "Rokeby Manor breakfast", "Char Dukan market"],
      },
      {
        day: 3,
        title: "Drive to Nainital",
        highlights: ["Naini Lake boating", "Naina Devi Temple", "Mall Road shopping"],
      },
      {
        day: 4,
        title: "Nainital Eco Cave Gardens",
        highlights: ["Eco Cave Gardens", "Snow View Point", "Local Bal Mithai"],
      },
      {
        day: 5,
        title: "Jim Corbett arrival",
        highlights: ["Check into forest lodge", "Buffer zone walk", "Campfire night"],
      },
      {
        day: 6,
        title: "Jim Corbett safari",
        highlights: ["Early 6 AM safari", "Garjia Devi Temple", "Corbett Museum"],
      },
      {
        day: 7,
        title: "Drive back to Delhi",
        highlights: ["Ramnagar market stop", "Moradabad brass shopping"],
      },
    ],
    budgetBreakdown: [
      { category: "Stay (7 nights)", amount: 9000 },
      { category: "Food", amount: 3500 },
      { category: "Transport", amount: 6000 },
      { category: "Safari & Activities", amount: 2500 },
      { category: "Miscellaneous", amount: 1000 },
    ],
    isRemixable: true,
  },
  {
    id: "jaipur-weekend",
    title: "Jaipur Weekend Plan",
    destination: "The Pink City",
    state: "Rajasthan",
    duration: 3,
    budget: 9500,
    coverImage:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80",
    tags: ["Heritage", "Food", "Culture", "Shopping"],
    hiddenGem: "Blue pottery workshop in Ramganj — watch artisans live",
    realityCheck:
      "Extremely crowded on weekends. Visit Amber Fort before 8 AM.",
    regret: "Skipped Panna Meena ka Kund stepwell — unique and uncrowded",
    creatorName: "Sneha Gupta",
    creatorAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 4.5,
    reviews: 423,
    saves: 1102,
    remixes: 215,
    pace: "fast",
    days: [
      {
        day: 1,
        title: "Old City forts and palaces",
        highlights: ["Amber Fort (early morning)", "Nahargarh Fort sunset", "Chokhi Dhani dinner"],
      },
      {
        day: 2,
        title: "Street food trail + markets",
        highlights: ["Johari Bazaar walk", "Kachori breakfast at Rawat", "Hawa Mahal exterior"],
      },
      {
        day: 3,
        title: "Hidden gems day",
        highlights: ["Galtaji Temple at dawn", "Panna Meena stepwell", "Blue pottery workshop"],
      },
    ],
    budgetBreakdown: [
      { category: "Stay (3 nights)", amount: 3500 },
      { category: "Food", amount: 2000 },
      { category: "Transport (local)", amount: 1500 },
      { category: "Entry fees & Activities", amount: 1500 },
      { category: "Shopping", amount: 1000 },
    ],
    isRemixable: true,
  },
  {
    id: "goa-budget-trip",
    title: "Budget Goa Trip Without Clubs",
    destination: "North & South Goa",
    state: "Goa",
    duration: 5,
    budget: 12000,
    coverImage:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
    tags: ["Beach", "Budget", "Remixed", "Chill"],
    hiddenGem: "Kakolem Beach (Tiger Beach) — accessible only by forest path",
    realityCheck:
      "Bike rental costs ₹350/day. Fuel is cheap but roads near spice farms flood.",
    regret: "Skipped Old Goa Portuguese churches — stunning architecture",
    creatorName: "Kabir Mehta",
    creatorAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 4.4,
    reviews: 567,
    saves: 1834,
    remixes: 347,
    pace: "relaxed",
    days: [
      {
        day: 1,
        title: "Arrive + North Goa beaches",
        highlights: ["Arambol beach walk", "Sunset at Chapora fort", "Local shacks dinner"],
      },
      {
        day: 2,
        title: "Hidden beaches day",
        highlights: ["Kakolem Tiger Beach hike", "Vagator for lunch", "Night market at Arpora"],
      },
      {
        day: 3,
        title: "South Goa calm day",
        highlights: ["Palolem beach swim", "Agonda cove walk", "Seafood at Martin's Corner"],
      },
      {
        day: 4,
        title: "Culture and spice trails",
        highlights: ["Old Goa churches", "Sahakari spice farm tour", "Panaji street food"],
      },
      {
        day: 5,
        title: "Departure day",
        highlights: ["Miramar beach morning", "Casseroles bakery breakfast", "Airport"],
      },
    ],
    budgetBreakdown: [
      { category: "Stay (5 nights)", amount: 4500 },
      { category: "Food & Drinks", amount: 3000 },
      { category: "Bike Rental + Fuel", amount: 2000 },
      { category: "Activities", amount: 1500 },
      { category: "Miscellaneous", amount: 1000 },
    ],
    isRemixable: true,
    remixedFromId: "goa-party-trip-original",
  },
  {
    id: "kerala-backwaters",
    title: "Kerala Backwaters & Munnar",
    destination: "Alleppey → Munnar → Thekkady",
    state: "Kerala",
    duration: 6,
    budget: 15000,
    coverImage:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    tags: ["Backwaters", "Tea Gardens", "Wildlife", "Houseboats"],
    hiddenGem: "Kumarakom Bird Sanctuary at 5 AM — just birds and silence",
    realityCheck:
      "Houseboat prices jump 40% in December. Book at least 2 weeks ahead.",
    regret: "Didn't try the toddy at a local kallu shappu — a real experience",
    creatorName: "Meera Pillai",
    creatorAvatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    rating: 4.9,
    reviews: 289,
    saves: 967,
    remixes: 124,
    pace: "relaxed",
    days: [
      {
        day: 1,
        title: "Alleppey — backwater entry",
        highlights: ["Arrive at Alleppey", "Houseboat boarding", "Sunset cruise on backwaters"],
      },
      {
        day: 2,
        title: "Houseboat life + Kumarakom",
        highlights: ["Dawn bird watching", "Village walk", "Traditional Kerala lunch on board"],
      },
      {
        day: 3,
        title: "Drive to Munnar tea gardens",
        highlights: ["Eravikulam National Park", "Mattupetty Dam", "Tea factory tour"],
      },
      {
        day: 4,
        title: "Munnar sunrise hikes",
        highlights: ["Top Station sunrise trek", "Lakkam Waterfall", "KDHP Tea Museum"],
      },
      {
        day: 5,
        title: "Thekkady wildlife",
        highlights: ["Periyar Lake boat ride", "Jungle patrol walk", "Spice garden visit"],
      },
      {
        day: 6,
        title: "Head to Kochi",
        highlights: ["Fort Kochi walk", "Chinese fishing nets", "Kerala fish curry farewell meal"],
      },
    ],
    budgetBreakdown: [
      { category: "Houseboat (1 night)", amount: 4000 },
      { category: "Stay (4 nights)", amount: 4500 },
      { category: "Food", amount: 2500 },
      { category: "Transport", amount: 2500 },
      { category: "Activities", amount: 1500 },
    ],
    isRemixable: true,
  },
];
