import React from "react";
import { User } from "../../types/user";
import { Card, CardContent } from "../shared/Card";

interface ProfileStatsProps {
  user: User;
  tripsCount: number;
}

export default function ProfileStats({ user, tripsCount }: ProfileStatsProps) {
  const stats = [
    { label: "Itineraries", value: tripsCount },
    { label: "Followers", value: user.followersCount },
    { label: "Following", value: user.followingCount },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((stat, idx) => (
        <Card key={idx} className="shadow-none border border-sand-200 rounded-xl bg-white text-center">
          <CardContent className="p-4">
            <div className="text-xl font-black text-deep-navy-900">{stat.value}</div>
            <div className="text-[9px] font-bold uppercase tracking-wider text-deep-navy-450 mt-0.5">{stat.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
