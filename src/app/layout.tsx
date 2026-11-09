import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { profile } from "@/data/profile";
import { siteDescription, siteTitle, siteUrl } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: `%s · ${profile.name}` },
  description: siteDescription,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.fullName, url: profile.socials.linkedin }],
  creator: profile.fullName,
  keywords: [
    "Akshith Reddy",
    "AI Engineer",
    "Software Engineer",
    "Multi-Agent Systems",
    "Voice AI",
    "LiveKit",
    "FastAPI",
    "Python",
    "RAG",
    "MCP",
    "Hyderabad",
    "Portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: `${profile.name} — Portfolio`,
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
    firstName: "Akshith",
    lastName: "Reddy",
  },
  twitter: { card: "summary_large_image", title: siteTitle, description: siteDescription },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.fullName,
  jobTitle: "AI Engineer",
  worksFor: { "@type": "Organization", name: profile.currently.company },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Chaitanya Bharathi Institute of Technology" },
  address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" },
  url: siteUrl,
  sameAs: [profile.socials.linkedin, profile.socials.github, profile.socials.leetcode, profile.socials.codechef],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="noise">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[200] -translate-y-24 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-950 transition focus:translate-y-0"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
