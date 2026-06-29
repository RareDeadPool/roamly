import React from "react";
import { cn } from "../../lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline" | "teal" | "orange" | "navy";
}

export default function Badge({ children, className, variant = "default", ...props }: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide transition-colors";
  
  const variants = {
    default: "bg-deep-navy-900 text-white",
    secondary: "bg-sand-200 text-deep-navy-800 hover:bg-sand-300",
    outline: "border border-deep-navy-200 text-deep-navy-700 bg-transparent",
    teal: "bg-brand-teal-50 text-brand-teal-700 border border-brand-teal-200",
    orange: "bg-brand-orange-50 text-brand-orange-700 border border-brand-orange-200",
    navy: "bg-deep-navy-50 text-deep-navy-700 border border-deep-navy-200",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
