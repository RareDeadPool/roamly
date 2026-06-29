export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  averageDuration: string;
  averageBudget: string;
  tags: string[];
}

export const DESTINATIONS: Destination[] = [
  {
    id: "kyoto-japan",
    name: "Kyoto",
    country: "Japan",
    description: "Experience ancient temples, sublime gardens, traditional teahouses, and serene bamboo forests in Japan's cultural heart.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop",
    averageDuration: "4-6 Days",
    averageBudget: "$$$",
    tags: ["Temples", "Culture", "Foodie", "Spring Cherry Blossoms"],
  },
  {
    id: "amalfi-coast-italy",
    name: "Amalfi Coast",
    country: "Italy",
    description: "Marvel at sheer cliffs, pastel-colored coastal villages, lush lemon gardens, and sparkling turquoise Mediterranean waters.",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=600&auto=format&fit=crop",
    averageDuration: "5-7 Days",
    averageBudget: "$$$$",
    tags: ["Coastal", "Romantic", "Fine Dining", "Scenery"],
  },
  {
    id: "reykjavik-iceland",
    name: "Reykjavik & The Golden Circle",
    country: "Iceland",
    description: "Explore dramatic volcanic landscapes, therapeutic geothermal pools, cascading waterfalls, and the dancing Northern Lights.",
    image: "https://images.unsplash.com/photo-1504829857797-ddff28127792?q=80&w=600&auto=format&fit=crop",
    averageDuration: "5-8 Days",
    averageBudget: "$$$$",
    tags: ["Nature", "Adventure", "Hot Springs", "Road Trip"],
  },
  {
    id: "oaxaca-mexico",
    name: "Oaxaca City",
    country: "Mexico",
    description: "Dive into Mexico's ultimate culinary capital, vibrant indigenous markets, colorful colonial architecture, and ancient ruins.",
    image: "https://images.unsplash.com/photo-1465256410760-10485d5be681?q=80&w=600&auto=format&fit=crop",
    averageDuration: "4-5 Days",
    averageBudget: "$$",
    tags: ["Foodie", "Artisan Markets", "History", "Festivals"],
  },
  {
    id: "bali-indonesia",
    name: "Ubud & Islands",
    country: "Indonesia",
    description: "Find spiritual peace, terraced rice paddies, wellness sanctuaries, local arts, and amazing beach club sunsets.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop",
    averageDuration: "7-10 Days",
    averageBudget: "$",
    tags: ["Wellness", "Slow Travel", "Beaches", "Budget Friendly"],
  },
];
