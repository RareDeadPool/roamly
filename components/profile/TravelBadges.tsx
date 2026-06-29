import React from "react";
import { Award, ShieldAlert, Sparkles, MapPin } from "lucide-react";
import { Card, CardContent } from "../shared/Card";

interface TravelBadgesProps {
  badges: string[];
}

export default function TravelBadges({ badges }: TravelBadgesProps) {
  const getBadgeIcon = (badgeName: string) => {
    const name = badgeName.toLowerCase();
    if (name.includes("food") || name.includes("taste")) return "🍜";
    if (name.includes("solo") || name.includes("pioneer")) return "🎒";
    if (name.includes("culture") || name.includes("temple")) return "🏛️";
    if (name.includes("road")) return "🚗";
    return "✈️";
  };

  if (badges.length === 0) {
    return (
      <div className="text-xs text-deep-navy-500 italic p-4 border border-dashed border-sand-300 rounded-xl bg-sand-50/10">
        No travel badges earned yet. Publish guides to unlock.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xs font-bold uppercase tracking-wider text-deep-navy-500 flex items-center gap-1.5">
        <Award className="w-4 h-4 text-brand-orange-500" />
        Travel Badges
      </h3>

      <div className="grid grid-cols-1 gap-3">
        {badges.map((badge, idx) => (
          <Card key={idx} className="shadow-none border border-sand-200 rounded-xl overflow-hidden bg-white">
            <CardContent className="p-3 flex items-center gap-3">
              <span className="text-xl shrink-0">{getBadgeIcon(badge)}</span>
              <span className="text-xs font-extrabold text-deep-navy-800">{badge}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
