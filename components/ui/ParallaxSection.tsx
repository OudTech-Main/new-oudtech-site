"use client";

import { useRef, type ReactNode, type CSSProperties } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  /** Content rendered on top of the parallax layer */
  children: ReactNode;
  /** Speed multiplier: positive = slower (moves up), negative = faster (moves down).
   *  Typical range: 0.1 – 0.5  */
  speed?: number;
  /** Height of the outer container (default 100vh) */
  height?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * ParallaxSection
 *
 * Uses Framer Motion's `useScroll` + `useTransform` to drive a
 * hardware-accelerated CSS `transform: translateY()` — no JS layout
 * thrashing, no CLS, and no jank on 60/120 Hz displays.
 *
 * The inner layer is oversized by `overflow` so the parallax travel
 * distance never reveals a gap at the top or bottom.
 */
export default function ParallaxSection({
  children,
  speed = 0.3,
  height = "100vh",
  className,
  style,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll progress relative to this element's viewport entry/exit
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map 0→1 scroll progress to a translateY range.
  // The layer starts slightly below its natural position and moves up.
  const yRange = speed * 200; // pixels of travel
  const y = useTransform(scrollYProgress, [0, 1], [`${yRange}px`, `-${yRange}px`]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className ?? ""}`}
      style={{ height, ...style }}
    >
      {/* Parallax background layer — sized larger than the container so
          the translateY travel never shows empty space */}
      <motion.div
        style={{
          y,
          position: "absolute",
          inset: `-${Math.abs(yRange)}px 0`,
          willChange: "transform",
        }}
        aria-hidden="true"
        className="parallax-bg"
      />

      {/* Foreground content sits above the parallax layer */}
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </div>
  );
}
