import React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "teal";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange-500 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";
  
  const variants = {
    primary: "bg-brand-orange-600 text-white hover:bg-brand-orange-700 shadow-md shadow-brand-orange-600/10 hover:shadow-brand-orange-600/20",
    secondary: "bg-sand-200 text-deep-navy-900 hover:bg-sand-300",
    outline: "border border-deep-navy-200 bg-transparent text-deep-navy-800 hover:bg-sand-200/50 hover:border-deep-navy-300",
    ghost: "text-deep-navy-700 hover:text-brand-orange-600 hover:bg-sand-200/30",
    teal: "bg-brand-teal-600 text-white hover:bg-brand-teal-700 shadow-md shadow-brand-teal-600/10",
    danger: "bg-red-600 text-white hover:bg-red-700 shadow-md shadow-red-600/10",
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            document-role="loader-path"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}
