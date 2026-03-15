"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface VideoHeroProps {
  src: string;
  poster?: string;
}

export default function VideoHero({ src, poster }: VideoHeroProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Bidirectional travel: video starts 15% ABOVE its natural position and
  // drifts DOWN to 15% BELOW as the hero scrolls out — 30% total travel.
  // This means the parallax is active from pixel 0 of scroll, not just
  // halfway through. The wrapper is oversized via -inset-y-[18%] so the
  // extra space never reveals a gap.
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        style={{ y, willChange: "transform" }}
        // -inset-y-[18%] extends the video 18% beyond top & bottom of the
        // container, covering the ±15% of travel with a small safety margin.
        className="absolute -inset-y-[18%] inset-x-0"
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
        {/* Gradient overlay: darker at bottom for text pop, lighter at top */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
      </motion.div>
    </div>
  );
}
