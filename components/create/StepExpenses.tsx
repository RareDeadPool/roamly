import React from "react";
import { EXPENSE_CATEGORIES } from "../../lib/constants";

interface StepExpensesProps {
  formData: any;
  onChange: (fields: any) => void;
}

export default function StepExpenses({ formData, onChange }: StepExpensesProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-extrabold text-deep-navy-900 mb-1">Expense Allocations</h3>
        <p className="text-xs text-deep-navy-500">Provide approximate budget allocations by category. This helps other travelers estimate their trip costs.</p>
      </div>

      <div className="space-y-4">
        {EXPENSE_CATEGORIES.map((cat) => (
          <div key={cat.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-sand-200 rounded-2xl bg-white">
            <div className="text-left space-y-0.5">
              <span className="text-xs font-bold text-deep-navy-900 capitalize flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                {cat.label}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs text-deep-navy-500 font-bold">$</span>
              <input
                type="number"
                min="0"
                placeholder="0"
                className="w-28 px-3 py-2 text-xs bg-white border border-sand-300 rounded-xl focus:outline-none focus:border-brand-orange-500"
              />
              <span className="text-xs text-deep-navy-500 font-semibold">USD</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
