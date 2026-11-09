import { profile } from "@/data/profile";

/** Resolves the canonical URL: Vercel production domain if available, else the configured one. */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : profile.siteUrl;

export const siteTitle = `${profile.name} — AI Engineer & Software Engineer`;
export const siteDescription =
  "Akshith Reddy is an AI Engineer and Software Engineer II at Accellor in Hyderabad, building multi-agent LLM systems, real-time multilingual voice AI and FastAPI backends in production.";
