"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealOnScrollProps {
  children: ReactNode;
  /** Delay in seconds before the animation starts */
  delay?: number;
  /** Direction from which the element enters */
  direction?: Direction;
  /** Distance in pixels the element travels */
  distance?: number;
  /** Tailwind/class string to apply to the wrapper */
  className?: string;
  /** Fraction of element visible before triggering (0–1) */
  threshold?: number;
  /** Only animate once */
  once?: boolean;
}

const directionOffset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

export default function RevealOnScroll({
  children,
  delay = 0,
  direction = "up",
  distance = 40,
  className,
  threshold = 0.15,
  once = true,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: threshold, once });

  const base = directionOffset[direction];
  const initial = {
    opacity: 0,
    x: base.x !== 0 ? (base.x > 0 ? distance : -distance) : 0,
    y: base.y !== 0 ? (base.y > 0 ? distance : -distance) : 0,
  };

  return (
    <motion.div
      ref={ref}
      // Setting dimensions statically prevents CLS — the element occupies
      // its full layout space even before the animation runs.
      data-reveal
      className={className}
      initial={initial}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : initial
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier "ease"
      }}
    >
      {children}
    </motion.div>
  );
}
