import type { Metadata, Viewport } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
} from "@/lib/structured-data";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://oudtech.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Oudtech — Modern Technology Solutions",
    template: "%s | Oudtech",
  },
  description:
    "Oudtech delivers cutting-edge technology solutions — from product design to scalable engineering — for ambitious businesses.",
  keywords: ["technology", "software", "engineering", "design", "oudtech"],
  authors: [{ name: "Oudtech", url: BASE_URL }],
  creator: "Oudtech",
  publisher: "Oudtech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Oudtech",
    title: "Oudtech — Modern Technology Solutions",
    description:
      "Cutting-edge technology solutions for ambitious businesses.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oudtech — Modern Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oudtech — Modern Technology Solutions",
    description: "Cutting-edge technology solutions for ambitious businesses.",
    images: ["/og-image.jpg"],
    creator: "@oudtech",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebsiteSchema()),
          }}
        />
      </head>
      <body className="bg-neutral-950 text-neutral-100 font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
