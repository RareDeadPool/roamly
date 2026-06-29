import React from "react";
import { BookOpen, Bookmark, Heart, Shuffle } from "lucide-react";
import { Card, CardContent } from "../shared/Card";

export default function DashboardStats() {
  const stats = [
    { label: "My Itineraries", value: 3, icon: <BookOpen className="w-5 h-5 text-brand-orange-500" />, bg: "bg-brand-orange-50/50" },
    { label: "Saved Trips", value: 12, icon: <Bookmark className="w-5 h-5 text-brand-teal-500" />, bg: "bg-brand-teal-50/50" },
    { label: "Total Likes Received", value: 418, icon: <Heart className="w-5 h-5 text-red-500" />, bg: "bg-red-50/50" },
    { label: "Remixed Guides", value: 2, icon: <Shuffle className="w-5 h-5 text-purple-500" />, bg: "bg-purple-50/50" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, idx) => (
        <Card key={idx} className="shadow-none border border-sand-200 rounded-2xl overflow-hidden bg-white">
          <CardContent className="p-5 flex items-center gap-4">
            <div className={`p-3 rounded-xl ${stat.bg} shrink-0`}>
              {stat.icon}
            </div>
            <div className="text-left space-y-0.5">
              <div className="text-2xl font-black text-deep-navy-900">{stat.value}</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-deep-navy-500">{stat.label}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
