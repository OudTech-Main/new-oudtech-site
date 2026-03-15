import type { Metadata } from "next";
import { generateWebPageSchema } from "@/lib/structured-data";
import AboutPageHero from "@/components/sections/AboutPageHero";
import AboutMissionSection from "@/components/sections/AboutMissionSection";
import AboutStorySection from "@/components/sections/AboutStorySection";
import AboutTeamSection from "@/components/sections/AboutTeamSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Oud-Technologies — a product-driven technology company building practical digital solutions across fintech, rentals, emergency services, and e-commerce.",
  keywords: [
    "about oudtech",
    "oud technologies",
    "software company",
    "tech company nigeria",
    "fintech",
    "digital solutions",
    "product design",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Oudtech",
    description:
      "Learn about Oud-Technologies — a product-driven company building practical digital solutions across fintech, rentals, and e-commerce.",
    url: "/about",
  },
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://oudtechnologies.com";

export default function AboutPage() {
  const schema = generateWebPageSchema({
    url: `${BASE_URL}/about`,
    name: "About Us | Oudtech",
    description:
      "Learn about Oud-Technologies — a product-driven technology company building practical digital solutions.",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AboutPageHero />
      <AboutMissionSection />
      <AboutStorySection />
      <AboutTeamSection />
    </>
  );
}
