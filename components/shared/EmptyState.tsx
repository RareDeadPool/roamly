import React from "react";
import { Info } from "lucide-react";
import Button from "./Button";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
}

export default function EmptyState({
  icon = <Info className="h-10 w-10 text-deep-navy-300" />,
  title,
  description,
  actionText,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-sand-300 rounded-2xl bg-sand-100/30 min-h-[300px]">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sand-200 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-deep-navy-900 mb-1">{title}</h3>
      <p className="text-sm text-deep-navy-500 max-w-sm leading-relaxed mb-6">{description}</p>
      {actionText && onAction && (
        <Button variant="primary" onClick={onAction}>
          {actionText}
        </Button>
      )}
    </div>
  );
}
