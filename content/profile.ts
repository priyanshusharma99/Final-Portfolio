import type { Profile } from "@/types";

export const profile: Profile = {
  name: "ALEX MORGAN",
  role: "Product Engineer & Design Partner",
  location: "Brooklyn, NY",
  availability: "Available for Freelance / Q2 2026",
  headline: "BUILDING DIGITAL PRODUCTS THAT ACTUALLY SHIP.",
  shortBio: "I design and engineer interfaces at the intersection of brand and product. Six years shipping with fast-moving teams — from seed-stage startups to public companies.",
  longBioParagraphs: [
    "I'm Alex — a product engineer and design partner based in Brooklyn, NY. For the last six years I've helped teams take ideas from a Figma scribble to a live, paying product. I care about the small stuff: typography, micro-interactions, how an empty state feels at 2am.",
    "Before going independent, I shipped at Linear, Stripe and Square. Today, I take on a small number of selected engagements per year — usually as the first engineer or design partner for a seed-stage team.",
    "Outside of work I write a weekly journal on craft and shipping. I drink too much pour-over coffee. I'm learning to surf — badly."
  ],
  email: "hello@alexmorgan.dev",
  avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&h=1000&q=80", // High contrast male model portrait with a beanie
  socials: [
    { platform: "GitHub", url: "https://github.com", label: "GitHub" },
    { platform: "LinkedIn", url: "https://linkedin.com", label: "LinkedIn" },
    { platform: "Twitter", url: "https://twitter.com", label: "Twitter" },
    { platform: "Dribbble", url: "https://dribbble.com", label: "Dribbble" }
  ],
  infoGrid: {
    now: "Independent, NYC",
    focus: "0→1 product",
    teamSize: "Solo or w/ small teams",
    stackOfChoice: "TS • React • Python",
    currentlyReading: "“Working in Public” — Eghbal",
    currentlyBuilding: "A CRM for design studios"
  }
};
