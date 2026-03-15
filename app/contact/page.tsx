import type { Metadata } from "next";
import { generateWebPageSchema } from "@/lib/structured-data";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Oud-Technologies. Reach out for partnerships, project inquiries, or general questions — we're here to help.",
  keywords: [
    "contact oudtech",
    "oud technologies contact",
    "hire software company nigeria",
    "tech partnership",
    "software inquiry",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Oudtech",
    description:
      "Reach out to Oud-Technologies for partnerships, events, or general inquiries.",
    url: "/contact",
  },
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://oudtechnologies.com";

export default function ContactPage() {
  const schema = generateWebPageSchema({
    url: `${BASE_URL}/contact`,
    name: "Contact | Oudtech",
    description:
      "Get in touch with Oud-Technologies for partnerships, project inquiries, or general questions.",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ContactFormSection />
    </>
  );
}
