"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "none";
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const initial =
    direction === "up"
      ? { opacity: 0, y: 24 }
      : direction === "left"
      ? { opacity: 0, x: -24 }
      : { opacity: 0 };

  const animate = direction === "up"
    ? { opacity: 1, y: 0 }
    : direction === "left"
    ? { opacity: 1, x: 0 }
    : { opacity: 1 };

  return (
    <motion.div
      className={cn(className)}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" as const, delay }}
    >
      {children}
    </motion.div>
  );
}
