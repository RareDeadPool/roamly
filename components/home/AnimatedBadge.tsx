"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedBadgeProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  floating?: boolean;
  variant?: "lake" | "warm" | "pine" | "amber" | "rose" | "default";
}

const variantStyles: Record<string, React.CSSProperties> = {
  default: {
    background: "linear-gradient(135deg, #E3EFEC, #D0E8E5)",
    color: "#0F6F78",
  },
  lake: {
    background: "linear-gradient(135deg, #CFE5E8, #A8D4D9)",
    color: "#0F6F78",
  },
  warm: {
    background: "linear-gradient(135deg, #EDE6D8, #DDD2BC)",
    color: "#5A4535",
  },
  pine: {
    background: "linear-gradient(135deg, #D6E8E0, #C0D9CC)",
    color: "#203A32",
  },
  amber: {
    background: "linear-gradient(135deg, #F5EBD8, #EAD9BC)",
    color: "#7A5835",
  },
  rose: {
    background: "linear-gradient(135deg, #F5E0DF, #ECC8C6)",
    color: "#8B3535",
  },
};

export default function AnimatedBadge({
  children,
  delay = 0,
  className = "",
  floating = false,
  variant = "default",
}: AnimatedBadgeProps) {
  const style = variantStyles[variant];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {floating ? (
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 3.5 + delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay * 0.4,
          }}
        >
          <span
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold"
            style={{
              ...style,
              boxShadow:
                "5px 5px 12px rgba(89,102,106,0.16), -4px -4px 10px rgba(255,255,255,0.85)",
              border: "1px solid rgba(255,255,255,0.72)",
            }}
          >
            {children}
          </span>
        </motion.div>
      ) : (
        <span
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold"
          style={{
            ...style,
            boxShadow:
              "5px 5px 12px rgba(89,102,106,0.16), -4px -4px 10px rgba(255,255,255,0.85)",
            border: "1px solid rgba(255,255,255,0.72)",
          }}
        >
          {children}
        </span>
      )}
    </motion.div>
  );
}
