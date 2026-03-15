"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  distance?: number;
  className?: string;
  /** Fraction of element visible before triggering (0–1) */
  threshold?: number;
  once?: boolean;
}

function getInitial(direction: Direction, distance: number) {
  switch (direction) {
    case "up":    return { opacity: 0, y: distance };
    case "down":  return { opacity: 0, y: -distance };
    case "left":  return { opacity: 0, x: distance };
    case "right": return { opacity: 0, x: -distance };
    case "none":  return { opacity: 0, x: 0, y: 0 };
  }
}

/**
 * RevealOnScroll — uses framer-motion's whileInView + IntersectionObserver.
 * This is more reliable than manually tracking useInView state in Next.js 15.
 */
export default function RevealOnScroll({
  children,
  delay = 0,
  direction = "up",
  distance = 40,
  className,
  threshold = 0.05,
  once = true,
}: RevealOnScrollProps) {
  return (
    <motion.div
      className={className}
      initial={getInitial(direction, distance)}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: threshold, margin: "0px 0px -40px 0px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
