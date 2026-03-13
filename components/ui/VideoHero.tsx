"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface VideoHeroProps {
  src: string;
  poster?: string;
}

/**
 * VideoHero renders a full-viewport background video with a parallax effect.
 * The video moves at half the scroll speed, creating a classic parallax feel.
 *
 * CLS note: the container's height is fixed via CSS (not content-driven),
 * so the video never contributes to layout shift.
 */
export default function VideoHero({ src, poster }: VideoHeroProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // As the user scrolls from 0% → 100% through the hero, the video
  // moves down by 20% of the container height — pure GPU transform.
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        style={{ y, willChange: "transform" }}
        className="absolute inset-0 scale-110"
      >
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          preload="metadata"
        >
          <source src={src} type="video/mp4" />
        </video>
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>
    </div>
  );
}
