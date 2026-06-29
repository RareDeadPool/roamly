import { Itinerary } from "../types/itinerary";

export const DEMO_ITINERARIES: Itinerary[] = [
  {
    id: "kyoto-slow-walk",
    title: "Kyoto Temple Walk & Hidden Food Alleyways",
    description: "A deep dive into Kyoto's ancient heart. Instead of rushing to every major landmark, this focuses on early-morning crowd avoidance, traditional dining rules, and quiet gardens that tourists usually walk right past.",
    creatorId: "user-1",
    creatorName: "Emiko Tanaka",
    creatorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    destination: "Kyoto, Japan",
    duration: 5,
    budget: 1150,
    travelStyle: "Cultural Heritage 🏛️",
    pace: "moderate",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
    likesCount: 245,
    bookmarksCount: 189,
    isPublished: true,
    createdAt: "2026-06-20T10:00:00Z",
    updatedAt: "2026-06-21T12:00:00Z",
    budgetBreakdown: [
      { category: "Accommodation 🏨", amount: 450, notes: "Traditional Guesthouse in Higashiyama" },
      { category: "Food & Drinks 🍕", amount: 350, notes: "Ramen, sushi, and street food at Nishiki market" },
      { category: "Transport ✈️", amount: 150, notes: "ICOCO card, bus passes, and train tickets" },
      { category: "Activities 🎟️", amount: 120, notes: "Temple entrance fees & tea ceremony experience" },
      { category: "Miscellaneous 🪙", amount: 80, notes: "Souvenirs and pocket wifi" }
    ],
    days: [
      {
        dayNumber: 1,
        title: "Higashiyama Morning & Gion Evening",
        description: "Explore the beautifully preserved streets of Higashiyama. Tip: Arrive at Fushimi Inari before 7:00 AM to avoid the massive crowds.",
        notes: "Gion requires respectful behavior. Be aware that photographing Geishas on private streets is strictly banned and fined.",
        places: [
          {
            id: "ky-p1",
            name: "Fushimi Inari Taisha",
            description: "Famous shrine with thousands of vermilion torii gates.",
            timeSpent: "2 hours",
            cost: 0,
            category: "sightseeing"
          },
          {
            id: "ky-p2",
            name: "Kiyomizu-dera Temple",
            description: "Historic temple offering views of Kyoto from a wooden stage.",
            timeSpent: "1.5 hours",
            cost: 5,
            category: "sightseeing"
          },
          {
            id: "ky-p3",
            name: "Gion District Dinner",
            description: "Traditional dining area. Try local tofu sets or tempura.",
            timeSpent: "2.5 hours",
            cost: 35,
            category: "food"
          }
        ]
      },
      {
        dayNumber: 2,
        title: "The Bamboo Path & Zen Gardens",
        description: "Arashiyama area walk, followed by the golden temple.",
        places: [
          {
            id: "ky-p4",
            name: "Arashiyama Bamboo Grove",
            description: "Stately towering bamboo shoots. Best visited at sunrise.",
            timeSpent: "1 hour",
            cost: 0,
            category: "sightseeing"
          },
          {
            id: "ky-p5",
            name: "Kinkaku-ji (Golden Pavilion)",
            description: "Zen temple covered in brilliant gold leaf.",
            timeSpent: "1.2 hours",
            cost: 4,
            category: "sightseeing"
          }
        ]
      }
    ],
    realityChecks: [
      {
        id: "rc-ky1",
        category: "crowds",
        title: "The Arashiyama Bamboo Grove is a public road",
        description: "Do not expect a silent, spiritual walk if you arrive after 9 AM. It becomes extremely packed with selfie-sticks and tour groups. Arrive by 6:30 AM if you want a calm experience."
      },
      {
        id: "rc-ky2",
        category: "prices",
        title: "Cash is still king in traditional areas",
        description: "Many temples, buses, and small local noodle shops do not accept credit cards or IC cards. Carry at least 5000 yen in cash daily."
      }
    ],
    regretsMissing: [
      {
        id: "rg-ky1",
        placeName: "Philosopher's Path in the Evening",
        description: "We only walked this during a scorching midday heat. Locals told us it is magical around dusk when the lanterns light up and temperatures cool.",
        regretType: "rushed"
      },
      {
        id: "rg-ky2",
        placeName: "Sanjusangendo Temple",
        description: "We skipped this because it was out of the way. We later found out the hall of 1,001 life-sized wooden statues is breathtaking.",
        regretType: "skipped"
      }
    ]
  },
  {
    id: "amalfi-roadtrip",
    title: "Amalfi Coast Scenic Drive & Hidden Coves",
    description: "A luxury road trip through Italy's dramatic cliffside towns. This itinerary guides you through boat charters, beach clubs, and the realities of driving narrow roads.",
    creatorId: "user-2",
    creatorName: "Marco Rossi",
    creatorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    destination: "Amalfi Coast, Italy",
    duration: 4,
    budget: 3400,
    travelStyle: "Luxury ✨",
    pace: "relaxed",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
    likesCount: 512,
    bookmarksCount: 420,
    isPublished: true,
    createdAt: "2026-06-18T14:30:00Z",
    updatedAt: "2026-06-19T09:00:00Z",
    budgetBreakdown: [
      { category: "Accommodation 🏨", amount: 1800, notes: "Cliffside suites in Positano and Ravello" },
      { category: "Food & Drinks 🍕", amount: 800, notes: "Fine dining, local seafood, and lemon granita" },
      { category: "Transport ✈️", amount: 350, notes: "Convertible car rental and parking fees" },
      { category: "Activities 🎟️", amount: 450, notes: "Private boat tour to Capri & sunbed rentals" }
    ],
    days: [
      {
        dayNumber: 1,
        title: "Settling into Positano & Sunset Drinks",
        description: "Arrival in the coast's most photogenic village. Wander down to the beach, grab a limoncello, and watch the buildings glow.",
        places: [
          {
            id: "am-p1",
            name: "Spiaggia Grande Positano",
            description: "The main black sand beach of Positano, framed by stacked homes.",
            timeSpent: "3 hours",
            cost: 40,
            category: "stay"
          },
          {
            id: "am-p2",
            name: "Franco's Bar at Le Sirenuse",
            description: "Ultra-premium sunset cocktail spot with panoramic views.",
            timeSpent: "2 hours",
            cost: 60,
            category: "food"
          }
        ]
      }
    ],
    realityChecks: [
      {
        id: "rc-am1",
        category: "accessibility",
        title: "Positano is thousands of steep stairs",
        description: "There are almost no flat streets in Positano. If you have mobility issues or carry heavy luggage, getting from your hotel to the beach is an exhausting workout. Pack light!"
      },
      {
        id: "rc-am2",
        category: "prices",
        title: "Positano Parking is a scam",
        description: "Parking fees can run up to 80-100 Euros per day at private garages, and street parking is practically nonexistent. We recommend taking ferries or buses instead of driving."
      }
    ],
    regretsMissing: [
      {
        id: "rg-am1",
        placeName: "Fiordo di Furore Beach",
        description: "We drove right past this hidden beach and gorge because there was nowhere to park. We should have booked a water taxi to drop us off.",
        regretType: "missed_completely"
      }
    ]
  },
  {
    id: "iceland-camper-adventure",
    title: "Iceland Ring Road Budget Camper Explorer",
    description: "An adventurous 7-day budget road trip around Iceland's ring road. Ditching hotels for a cozy camper van, making hot meals on gas stoves, and hiking waterfalls.",
    creatorId: "user-3",
    creatorName: "Klara Hansen",
    creatorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    destination: "Ring Road, Iceland",
    duration: 7,
    budget: 1450,
    travelStyle: "Backpacking 🎒",
    pace: "fast-paced",
    image: "https://images.unsplash.com/photo-1504829857797-ddff28127792?q=80&w=1200&auto=format&fit=crop",
    likesCount: 388,
    bookmarksCount: 299,
    isPublished: true,
    createdAt: "2026-06-15T08:15:00Z",
    updatedAt: "2026-06-16T11:00:00Z",
    budgetBreakdown: [
      { category: "Accommodation 🏨", amount: 500, notes: "Camper van rental & campsite fees" },
      { category: "Food & Drinks 🍕", amount: 250, notes: "Groceries from Bónus supermarket" },
      { category: "Transport ✈️", amount: 550, notes: "Diesel fuel and toll road charges" },
      { category: "Activities 🎟️", amount: 150, notes: "Myvatn Nature Baths & glacier hike" }
    ],
    days: [
      {
        dayNumber: 1,
        title: "Golden Circle Waterfalls & Geysers",
        description: "Start the journey out of Reykjavik, hitting Iceland's most famous natural monuments.",
        places: [
          {
            id: "ic-p1",
            name: "Thingvellir National Park",
            description: "Valley where tectonic plates drift apart.",
            timeSpent: "2 hours",
            cost: 8,
            category: "sightseeing"
          },
          {
            id: "ic-p2",
            name: "Gullfoss Waterfall",
            description: "Thundering golden glacial river cascades.",
            timeSpent: "1 hour",
            cost: 0,
            category: "sightseeing"
          }
        ]
      }
    ],
    realityChecks: [
      {
        id: "rc-ic1",
        category: "weather",
        title: "Violent winds can rip doors off cars",
        description: "Always hold your camper doors with two hands when opening. Weather can change from sunny to a gale-force windstorm in 5 minutes, causing severe damage."
      },
      {
        id: "rc-ic2",
        category: "prices",
        title: "Grocery shopping is essential for budget trips",
        description: "A single basic burger in Iceland costs $20-$25. Buy all your meals at 'Bónus' or 'Krónan' supermarkets and cook them in your camper to save thousands of dollars."
      }
    ],
    regretsMissing: [
      {
        id: "rg-ic1",
        placeName: "Seljavallalaug Hidden Pool",
        description: "We chose to hike here but the water was lukewarm and dirty with green algae. We regret wasting 2 hours that we could have spent at Skogafoss.",
        regretType: "rushed"
      }
    ]
  }
];
