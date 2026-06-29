import React from "react";
import { HelpCircle, HeartCrack } from "lucide-react";
import { RegretMissing } from "../../types/itinerary";
import { Card, CardContent } from "../shared/Card";

interface RegretMissingSectionProps {
  regrets: RegretMissing[];
}

export default function RegretMissingSection({ regrets }: RegretMissingSectionProps) {
  if (regrets.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 border-b border-sand-300 pb-3">
        <HeartCrack className="w-5 h-5 text-rose-500" />
        <h3 className="text-lg font-extrabold text-deep-navy-900">
          What We Regret Missing
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {regrets.map((regret) => (
          <Card key={regret.id} className="border-rose-100 bg-rose-50/10 shadow-none rounded-xl overflow-hidden">
            <CardContent className="p-5 flex gap-3.5">
              <HelpCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-extrabold text-sm text-deep-navy-900 leading-none">
                    {regret.placeName}
                  </h4>
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-rose-600 bg-rose-50 border border-rose-150 px-1.5 py-0.5 rounded">
                    {regret.regretType.replace("_", " ")}
                  </span>
                </div>
                <p className="text-xs text-deep-navy-600 leading-relaxed pt-1">
                  {regret.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
