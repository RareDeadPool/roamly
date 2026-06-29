import React from "react";
import { AlertTriangle, AlertCircle, ShieldAlert, Sparkles, MapPin } from "lucide-react";
import { RealityCheck } from "../../types/itinerary";
import { Card, CardContent } from "../shared/Card";

interface RealityCheckCardProps {
  check: RealityCheck;
}

export default function RealityCheckCard({ check }: RealityCheckCardProps) {
  const getCategoryTheme = (category: string) => {
    switch (category) {
      case "crowds":
        return {
          icon: <AlertTriangle className="w-5 h-5 text-amber-600" />,
          bgColor: "bg-amber-50/30",
          borderColor: "border-amber-200",
          tagColor: "bg-amber-50 text-amber-700 border-amber-200"
        };
      case "prices":
        return {
          icon: <AlertCircle className="w-5 h-5 text-rose-600" />,
          bgColor: "bg-rose-50/20",
          borderColor: "border-rose-200",
          tagColor: "bg-rose-50 text-rose-700 border-rose-200"
        };
      case "weather":
        return {
          icon: <AlertCircle className="w-5 h-5 text-blue-600" />,
          bgColor: "bg-blue-50/20",
          borderColor: "border-blue-200",
          tagColor: "bg-blue-50 text-blue-700 border-blue-200"
        };
      default:
        return {
          icon: <ShieldAlert className="w-5 h-5 text-deep-navy-600" />,
          bgColor: "bg-sand-100/50",
          borderColor: "border-sand-300",
          tagColor: "bg-sand-200 text-deep-navy-700 border-sand-300"
        };
    }
  };

  const theme = getCategoryTheme(check.category);

  return (
    <Card className={`shadow-none border ${theme.borderColor} ${theme.bgColor} rounded-2xl`}>
      <CardContent className="p-5 space-y-3">
        <div className="flex items-center justify-between">
          <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded border ${theme.tagColor}`}>
            {check.category} Realities
          </span>
        </div>
        
        <div className="flex gap-2.5">
          <div className="shrink-0 mt-0.5">{theme.icon}</div>
          <div className="space-y-1">
            <h4 className="font-extrabold text-sm text-deep-navy-900 leading-snug">
              {check.title}
            </h4>
            <p className="text-xs text-deep-navy-600 leading-relaxed">
              {check.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
