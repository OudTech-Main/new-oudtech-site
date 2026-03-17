"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { playfairDisplay } from "@/lib/fonts";

/* ── Video data ───────────────────────────────────────────────── */
const videos = [
  { id: "BP4hKfrj8Qw", title: "OudTech Academy highlight" },
  { id: "lR44_69Trg4", title: "OudTech Academy short" },
  { id: "oe6Svxjxf3g", title: "OudTech Academy short" },
];

function VideoCard({ video }: { video: (typeof videos)[0] }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl bg-black lg:w-[399px]"
      style={{ aspectRatio: "1 / 1", border: "3px solid #FFFFFF80" }}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <>
          <Image
            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
            alt={video.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 440px"
          />
          <div className="absolute inset-0 bg-black/30" />
          <button
            onClick={() => setPlaying(true)}
            aria-label={`Play ${video.title}`}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl transition-transform duration-200 hover:scale-110">
              <svg
                width="22"
                height="22"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path d="M5 3.5l12 6.5-12 6.5V3.5z" fill="#0F1010" />
              </svg>
            </span>
          </button>
        </>
      )}
    </div>
  );
}

/* ── Section ────────────────────────────────────────────────────── */
export default function AcademySection() {
  return (
    <section
      id="academy"
      className="bg-neutral-950 py-12 lg:py-16"
      aria-label="OudTech Academy"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="overflow-hidden rounded-3xl bg-[#141414] px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-20">
          {/* ── Part 1: Academy intro ── */}
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
            {/* Left: group photo */}
            <RevealOnScroll direction="up">
              <div className="overflow-hidden rounded-2xl bg-neutral-800">
                {/*
                  Replace src with your academy group photo.
                  Recommended: drop it in /public/academy-group.jpg
                */}
                <Image
                  src="/academy-image.png"
                  alt="OudTech Academy students at Tech Skills Day"
                  width={430}
                  height={481}
                  className="h-[300px] w-full object-cover object-top md:h-[400px] lg:h-[481px]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 430px"
                />
              </div>
            </RevealOnScroll>

            {/* Right: copy */}
            <div>
              <RevealOnScroll direction="right">
                <h2 className="text-3xl font-medium leading-[1.15] text-white md:text-4xl lg:text-5xl">
                  Empowering the
                  <br />
                  Next Generation of
                  <br />
                  Tech{" "}
                  <em
                    className={`${playfairDisplay.className} italic font-normal`}
                  >
                    Talent
                  </em>
                </h2>
              </RevealOnScroll>

              <RevealOnScroll direction="right" delay={0.15}>
                <p className="mt-5 max-w-sm text-sm leading-7 text-white/80">
                  OudTech Academy provides unskilled individuals with practical,
                  hands-on training that transforms them into skilled
                  professionals.
                </p>
              </RevealOnScroll>

              <RevealOnScroll direction="right" delay={0.25}>
                <Link
                  href="https://academy.oudtechnologies.com"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-5 pr-1.5 transition-opacity hover:opacity-90"
                >
                  <span className="text-sm font-medium text-neutral-900">
                    Visit Academy
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#064ADF]">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9"
                        stroke="white"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </RevealOnScroll>
            </div>
          </div>

          {/* ── Part 2: Testimonials ── */}
          <div className="mt-12 lg:mt-28">
            <RevealOnScroll direction="up">
              <h2 className="text-3xl font-medium leading-[1.2] text-white lg:text-4xl">
                What our Academy students
                <br />
                are saying about{" "}
                <em
                  className={`${playfairDisplay.className} italic font-normal`}
                >
                  OudTech
                </em>
              </h2>
            </RevealOnScroll>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((v, i) => (
                <RevealOnScroll key={v.id} direction="up" delay={0.1 * i}>
                  <VideoCard video={v} />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
