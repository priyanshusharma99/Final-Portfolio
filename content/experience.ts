import type { ExperienceItem } from "@/types";

export const experienceItems: ExperienceItem[] = [
  {
    dateRange: "2024 — NOW",
    company: "Independent",
    location: "REMOTE",
    role: "Principal Engineer & Design Partner",
    bullets: [
      "Selected client engagements with seed-Series-B teams.",
      "Built 0→1 products for two YC W25 companies."
    ],
    current: true
  },
  {
    dateRange: "2022 — 2024",
    company: "Linear",
    location: "REMOTE",
    role: "Senior Product Engineer",
    bullets: [
      "Led web platform performance initiative; cut p95 to 180ms.",
      "Designed and built the Insights module from scratch."
    ]
  },
  {
    dateRange: "2020 — 2022",
    company: "Stripe",
    location: "SAN FRANCISCO",
    role: "Product Engineer, Atlas",
    bullets: [
      "Owned the founder onboarding surface end-to-end.",
      "Shipped 4 new countries with localized payments + tax."
    ]
  },
  {
    dateRange: "2018 — 2020",
    company: "Square",
    location: "NEW YORK",
    role: "Software Engineer",
    bullets: [
      "Worked on POS hardware-software handshake protocols.",
      "Migrated legacy Ruby services to Go (12 services)."
    ]
  }
];
