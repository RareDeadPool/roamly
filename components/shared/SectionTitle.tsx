import React from "react";
import { cn } from "../../lib/utils";

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  tag?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  title,
  subtitle,
  tag,
  align = "left",
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col mb-8",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
      {...props}
    >
      {tag && (
        <span className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-2">
          {tag}
        </span>
      )}
      <h2 className="text-2xl font-extrabold text-white sm:text-3xl tracking-tight text-shadow">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-white/70 max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
