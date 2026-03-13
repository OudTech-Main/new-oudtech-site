import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";

// Page-level metadata overrides the root layout defaults
export const metadata: Metadata = {
  title: "Oudtech — Modern Technology Solutions",
  description:
    "We design and engineer scalable digital products for ambitious companies. Explore our services in product strategy, UX, full-stack engineering, and AI integration.",
  alternates: {
    canonical: "/",
  },
};

// This is a React Server Component — no "use client" needed.
// Client-side interactivity is isolated inside individual leaf components.
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />

      {/* Contact section */}
      <section
        id="contact"
        className="py-24 lg:py-36"
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Ready to build something great?
          </h2>
          <p className="mx-auto mt-6 text-lg text-neutral-400">
            Tell us about your project and we&apos;ll get back to you within 24
            hours.
          </p>
          <a
            href="mailto:hello@oudtech.com"
            className="mt-10 inline-block rounded-full bg-sky-500 px-10 py-4 text-base font-semibold text-white transition-colors hover:bg-sky-400"
          >
            hello@oudtech.com
          </a>
        </div>
      </section>
    </>
  );
}
