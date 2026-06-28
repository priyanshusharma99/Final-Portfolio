import type { Profile } from "@/types";

export const profile: Profile = {
  name: "PRIYANSHU SHARMA",
  role: "Product Engineer & Design Partner",
  location: "Brooklyn, NY",
  availability: "Available for Freelance / Q2 2026",
  headline: "BUILDING DIGITAL PRODUCTS THAT ACTUALLY SHIP.",
  shortBio: "I design and engineer interfaces at the intersection of brand and product. Six years shipping with fast-moving teams — from seed-stage startups to public companies.",
  longBioParagraphs: [
    "I'm Priyanshu — a first-year CS and AI student, designer, and builder based in Delhi, India. I care about how things look, how they work, and whether they actually solve something real.",
    "I also run a YouTube channel where I make videos on coding. I'm into space, history, and Marvel. And I'm just getting started."
  ],
  email: "[EMAIL_ADDRESS]",
  avatarUrl: "/images/avatar.jpg", // High contrast male model portrait with a beanie
  socials: [
    { platform: "GitHub", url: "https://github.com", label: "GitHub" },
    { platform: "LinkedIn", url: "https://linkedin.com", label: "LinkedIn" },
    { platform: "Twitter", url: "https://twitter.com", label: "Twitter" },
    { platform: "Dribbble", url: "https://dribbble.com", label: "Dribbble" }
  ],
  infoGrid: {
    now: "Student, Delhi NCR",
    focus: "0→1 product",
    teamSize: "3",
    stackOfChoice: "TS • React • Python • AI",
    currentlyReading: "The Pragmatic Programmer",
    currentlyBuilding: "Voke - AI powered Mock interviewer"
  }
};
