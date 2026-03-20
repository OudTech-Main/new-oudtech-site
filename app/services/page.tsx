import type { Metadata } from "next";
import { generateWebPageSchema } from "@/lib/structured-data";
import ServicesPageHero from "@/components/sections/ServicesPageHero";
import ServicesAccordionSection from "@/components/sections/ServicesAccordionSection";
import ServicesGalleryMarquee from "@/components/sections/ServicesGalleryMarquee";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Oud Technologies' services — product design, software development, fintech solutions, rental platforms, emergency services tech, and e-commerce systems built for modern businesses.",
  keywords: [
    "oudtech services",
    "software development nigeria",
    "fintech development",
    "product design",
    "mobile app development",
    "web development",
    "digital transformation",
    "e-commerce solutions",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | OudTech",
    description:
      "End-to-end digital solutions across fintech, rentals, emergency services, and e-commerce — built by Oud Technologies.",
    url: "/services",
  },
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://oudtechnologies.com";

export default function ServicesPage() {
  const schema = generateWebPageSchema({
    url: `${BASE_URL}/services`,
    name: "Services | OudTech",
    description:
      "Explore Oud Technologies' services — UI/UX design, web development, mobile app development, and SEO optimization.",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServicesPageHero />
      <ServicesAccordionSection />
      <ServicesGalleryMarquee />
    </>
  );
}
