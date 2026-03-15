const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://oudtechnologies.com";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "Oud-Technologies",
    alternateName: ["Oudtech", "OudTech", "Oud Technologies", "oudtechnologies"],
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/logo.png`,
      width: 200,
      height: 60,
    },
    description:
      "Oud-Technologies is a product-driven technology company building practical digital solutions focused on product design, user experience, and real-world problem solving.",
    foundingDate: "2015",
    email: "info@oudtechnologies.com",
    telephone: "+2349163249133",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+2349163249133",
      email: "info@oudtechnologies.com",
      contactType: "customer service",
      availableLanguage: "English",
    },
    sameAs: [
      "https://twitter.com/oudtech",
      "https://www.linkedin.com/company/oudtech",
      "https://www.instagram.com/oudtech",
      "https://www.facebook.com/oudtech",
      "https://www.youtube.com/@oudtech",
      "https://www.tiktok.com/@oudtech",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Technology Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Optimization" } },
      ],
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "Oud-Technologies",
    alternateName: ["Oudtech", "OudTech", "oudtechnologies"],
    description:
      "Oud-Technologies — building practical digital solutions for modern businesses.",
    publisher: { "@id": `${BASE_URL}/#organization` },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateWebPageSchema({
  url,
  name,
  description,
}: {
  url: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    publisher: { "@id": `${BASE_URL}/#organization` },
    inLanguage: "en-US",
  };
}
