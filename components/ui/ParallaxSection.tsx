"use client";

import { useRef, type ReactNode, type CSSProperties } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: ReactNode;
  /** Travel intensity. 1 = 150px each direction (300px total arc). Default: 0.5 */
  speed?: number;
  height?: string;
  className?: string;
  style?: CSSProperties;
}

export default function ParallaxSection({
  children,
  speed = 0.5,
  height = "100vh",
  className,
  style,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Full bidirectional arc: layer enters from below its rest position and
  // exits above it. Higher speed = more dramatic depth separation.
  const yRange = speed * 150;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${yRange}px`, `-${yRange}px`]
  );

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className ?? ""}`}
      style={{ height, ...style }}
    >
      <motion.div
        style={{
          y,
          position: "absolute",
          // Oversize by the full travel distance so edges never show
          inset: `-${yRange}px 0`,
          willChange: "transform",
        }}
        aria-hidden="true"
        className="parallax-bg"
      />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </div>
  );
}
