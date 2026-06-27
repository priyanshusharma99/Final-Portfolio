export type SocialLink = {
  platform: string;
  url: string;
  label: string;
};

export type SkillCategory = {
  category: "ENGINEERING" | "DESIGN" | "INFRA" | "PRACTICE";
  skills: string[];
};

export type ExperienceItem = {
  dateRange: string;
  company: string;
  location: string;
  role: string;
  bullets: string[];
  current?: boolean;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export type JournalPost = {
  index: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  slug: string;
  featured?: boolean;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  availability: string;
  headline: string;
  shortBio: string;
  longBioParagraphs: string[];
  email: string;
  avatarUrl: string;
  resumeUrl?: string;
  socials: SocialLink[];
  infoGrid: {
    now: string;
    focus: string;
    teamSize: string;
    stackOfChoice: string;
    currentlyReading: string;
    currentlyBuilding: string;
  };
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  category: string;
  featured: boolean;
  status: string;
  year: string;
  role: string;
  stack: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  problem: string;
  solution: string;
  features: string[];
  technicalDetails: string[];
  impact: string[];
  lessons: string[];
};
