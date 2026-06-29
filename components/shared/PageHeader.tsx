import React from "react";
import { cn } from "../../lib/utils";

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

export default function PageHeader({ title, description, actions, className, ...props }: PageHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 md:flex-row md:items-center md:justify-between pb-6 mb-8 border-b border-sand-300",
        className
      )}
      {...props}
    >
      <div className="space-y-1.5">
        <h1 className="text-3xl font-extrabold tracking-tight text-deep-navy-900 md:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="text-base text-deep-navy-500 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {actions && <div className="flex items-center gap-3 shrink-0">{actions}</div>}
    </div>
  );
}
