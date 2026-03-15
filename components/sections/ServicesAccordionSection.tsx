"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const MinusIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g clipPath="url(#minus-clip)">
      <path
        d="M5 12H19"
        stroke="#0F1010"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="minus-clip">
        <rect width="16" height="16" fill="white" transform="translate(4 4)" />
      </clipPath>
    </defs>
  </svg>
);

const PlusIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g clipPath="url(#plus-clip)">
      <path
        d="M19 12H5M12 5V19"
        stroke="#0F1010"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="plus-clip">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="matrix(0 1 -1 0 20 4)"
        />
      </clipPath>
    </defs>
  </svg>
);

const services = [
  {
    title: "UI/UX Design",
    description:
      "We build stunning, responsive websites with intuitive designs that enhance user experience.",
  },
  {
    title: "Website Development",
    description:
      "Custom web applications built for performance, scalability, and reliability — from simple landing pages to complex platforms.",
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android, crafted with seamless UX and robust architecture.",
  },
  {
    title: "SEO Optimization",
    description:
      "Data-driven SEO strategies that improve search rankings, drive organic traffic, and grow your online visibility.",
  },
];

export default function ServicesAccordionSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className="bg-white py-20 lg:py-28"
      aria-labelledby="services-detail-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          {/* Left: label */}
          <RevealOnScroll direction="up" delay={0.1} threshold={0}>
            <div>
              <h2
                id="services-detail-heading"
                className="text-[2.2rem] tracking-tight text-[#0F1010] lg:text-6xl"
              >
                Services
              </h2>
              <p className="mt-4 text-sm text-[#696F77]">
                Crafting User-Centric Experiences
              </p>
            </div>
          </RevealOnScroll>

          {/* Right: intro + accordion */}
          <RevealOnScroll direction="up" delay={0.2} threshold={0}>
            <div>
              <p className="text-base leading-[1.5] text-[#0F1010] md:text-2xl lg:text-[28px] lg:leading-[1.4]">
                Elevate your digital products with our comprehensive product
                design services. Our expertise includes:
              </p>

              <div className="mt-10">
                {services.map((service, i) => {
                  const isOpen = openIndex === i;
                  return (
                    <div key={service.title}>
                      {/* Divider */}
                      <div className="h-px bg-[#E5E7EB]" />

                      <button
                        className="flex w-full items-center gap-5 py-6 text-left"
                        onClick={() => setOpenIndex(isOpen ? -1 : i)}
                        aria-expanded={isOpen}
                      >
                        {/* Circle icon */}
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D1D5DB]">
                          {isOpen ? <MinusIcon /> : <PlusIcon />}
                        </span>
                        <span className="text-base text-[#0F1010] md:text-2xl">
                          {service.title}
                        </span>
                      </button>

                      {/* Expanded content */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.4, 0, 0.2, 1],
                            }}
                            style={{ overflow: "hidden" }}
                          >
                            <p className="pb-6 pl-15 text-base leading-7 text-[#03030FB2]">
                              {service.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
                {/* Bottom divider */}
                <div className="h-px bg-[#E5E7EB]" />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
