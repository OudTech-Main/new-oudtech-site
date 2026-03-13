export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Oudtech",
    url: "https://oudtech.com",
    logo: "https://oudtech.com/logo.png",
    sameAs: [
      "https://twitter.com/oudtech",
      "https://linkedin.com/company/oudtech",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-000-000-0000",
      contactType: "customer service",
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://oudtech.com",
    name: "Oudtech",
    description:
      "Oudtech — cutting-edge technology solutions for modern businesses.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://oudtech.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}
