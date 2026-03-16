"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { playfairDisplay } from "@/lib/fonts";

/* ── Testimonial data ─────────────────────────────────────────── */
const testimonials = [
  {
    name: "Student 1",
    // Replace with actual testimonial thumbnail paths
    image: "/about-us.jpg",
    objectPosition: "left top",
  },
  {
    name: "Student 2",
    image: "/about-us.jpg",
    objectPosition: "center top",
  },
  {
    name: "Student 3",
    image: "/about-us.jpg",
    objectPosition: "right top",
  },
];

function PlayButton() {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path d="M5 3.5l12 6.5-12 6.5V3.5z" fill="#0F1010" />
      </svg>
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-2xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        width={440}
        height={360}
        className="h-[300px] w-full object-cover transition-transform duration-500"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 440px"
        style={{
          objectPosition: testimonial.objectPosition,
          transform: hovered ? "scale(1.04)" : "scale(1)",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <PlayButton />
      </div>
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
              {testimonials.map((t, i) => (
                <RevealOnScroll key={t.name} direction="up" delay={0.1 * i}>
                  <TestimonialCard testimonial={t} />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
