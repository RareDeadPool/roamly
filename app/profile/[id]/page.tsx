"use client";

import React from "react";
import { useParams } from "next/navigation";
import Container from "../../../components/layout/Container";
import ProfileHeader from "../../../components/profile/ProfileHeader";
import ProfileStats from "../../../components/profile/ProfileStats";
import ProfileItineraries from "../../../components/profile/ProfileItineraries";
import TravelBadges from "../../../components/profile/TravelBadges";
import { DEMO_ITINERARIES } from "../../../data/demoItineraries";
import { User } from "../../../types/user";

export default function ProfilePage() {
  const params = useParams();
  const id = params?.id as string;

  // Mock profile details
  const mockUser: User = {
    id: id || "user-1",
    name: id === "user-2" ? "Marco Rossi" : id === "user-3" ? "Klara Hansen" : "Emiko Tanaka",
    email: "traveler@roamly.com",
    image: id === "user-2" 
      ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" 
      : id === "user-3" 
      ? "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop" 
      : "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    bio: id === "user-2"
      ? "Luxury travel consultant specializing in the Italian coast, boutique cruises, and private charters."
      : id === "user-3"
      ? "Adventure lover, budget camper enthusiast, and outdoor guide who loves off-grid Ring Road drives."
      : "Tokyo resident sharing local, slow-paced temple walks and off-beat food alleyways in Kyoto and Nara.",
    location: id === "user-2" ? "Positano, Italy" : id === "user-3" ? "Reykjavik, Iceland" : "Tokyo, Japan",
    joinedAt: "2024-04-12T10:00:00Z",
    followersCount: id === "user-2" ? 982 : id === "user-3" ? 543 : 1240,
    followingCount: id === "user-2" ? 342 : id === "user-3" ? 218 : 412,
    travelBadges: id === "user-2" 
      ? ["Luxury Connoisseur ✨", "Coast Pioneer ⛵"] 
      : id === "user-3" 
      ? ["Camper Veteran 🚐", "Waterfall Hiker ⛰️"] 
      : ["Temple Guide 🏛️", "Noodle Hunter 🍜"],
    savedItineraries: [],
  };

  const userItineraries = DEMO_ITINERARIES.filter((itinerary) => itinerary.creatorId === mockUser.id);

  return (
    <div className="py-10 bg-sand-100/30 min-h-screen">
      <Container>
        {/* Header Block */}
        <ProfileHeader user={mockUser} />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start mt-8">
          {/* Left Column: Badges & Stats */}
          <div className="lg:col-span-1 space-y-6">
            <ProfileStats user={mockUser} tripsCount={userItineraries.length} />
            <TravelBadges badges={mockUser.travelBadges} />
          </div>

          {/* Right Column: Published Itineraries */}
          <div className="lg:col-span-3 space-y-6">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-deep-navy-500 text-left">
              Published Guides ({userItineraries.length})
            </h2>
            <ProfileItineraries itineraries={userItineraries} userName={mockUser.name} />
          </div>
        </div>
      </Container>
    </div>
  );
}
