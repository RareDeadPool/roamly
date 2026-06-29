import React from "react";
import { DollarSign, PieChart, Tag } from "lucide-react";
import { BudgetCategoryItem } from "../../types/itinerary";
import { Card, CardContent, CardHeader, CardTitle } from "../shared/Card";
import { formatCurrency } from "../../lib/utils";

interface BudgetBreakdownProps {
  budget: number;
  breakdown: BudgetCategoryItem[];
}

export default function BudgetBreakdown({ budget, breakdown }: BudgetBreakdownProps) {
  const getCategoryColor = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes("accom")) return "bg-blue-500";
    if (cat.includes("food") || cat.includes("drink")) return "bg-amber-500";
    if (cat.includes("trans")) return "bg-emerald-500";
    if (cat.includes("activ") || cat.includes("sight")) return "bg-purple-500";
    if (cat.includes("shop")) return "bg-pink-500";
    return "bg-slate-500";
  };

  return (
    <Card className="shadow-none border border-sand-200 rounded-2xl overflow-hidden">
      <CardHeader className="bg-sand-100/50 border-b border-sand-200">
        <CardTitle className="text-base font-extrabold text-deep-navy-900 flex items-center gap-2">
          <PieChart className="w-5 h-5 text-brand-orange-500" />
          Budget &amp; Expense Breakdown
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {/* Total Box */}
        <div className="flex items-center justify-between p-4 bg-brand-orange-50/50 border border-brand-orange-200 rounded-xl">
          <div className="space-y-0.5">
            <span className="text-xs text-deep-navy-500 font-bold uppercase tracking-wider">Total Est. Budget</span>
            <div className="text-2xl font-black text-brand-orange-600 flex items-center">
              <DollarSign className="w-6 h-6 shrink-0" />
              <span>{formatCurrency(budget).replace("$", "")} USD</span>
            </div>
          </div>
          <span className="text-xs font-bold text-brand-teal-700 bg-brand-teal-50 border border-brand-teal-200 px-2.5 py-1 rounded-lg">
            Self-funded
          </span>
        </div>

        {/* Categories Progress Bars */}
        <div className="space-y-4">
          {breakdown.map((item, idx) => {
            const percentage = budget > 0 ? (item.amount / budget) * 100 : 0;
            return (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold text-deep-navy-800">
                  <span className="flex items-center gap-1.5 capitalize">
                    <span className={`w-2.5 h-2.5 rounded-full ${getCategoryColor(item.category)}`} />
                    {item.category.split(" ")[0]}
                  </span>
                  <span>{formatCurrency(item.amount)} ({Math.round(percentage)}%)</span>
                </div>
                <div className="h-2 w-full bg-sand-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${getCategoryColor(item.category)}`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                {item.notes && (
                  <p className="text-[10px] text-deep-navy-400 pl-4">
                    &bull; {item.notes}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Note on currency */}
        <div className="text-[10px] text-deep-navy-450 border-t border-sand-200 pt-3 flex items-center gap-1">
          <Tag className="w-3.5 h-3.5" />
          Budget estimation in USD is based on exchange rates during the trip.
        </div>
      </CardContent>
    </Card>
  );
}
