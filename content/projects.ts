import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "lumen-analytics",
    title: "Lumen Analytics",
    tagline: "Rebuilt a 14-year-old BI tool into a real-time analytics platform.",
    summary: "Rebuilt a 14-year-old BI tool into a real-time analytics platform. Cut query latency by 78% and shipped a new design system that lifted activation 31%.",
    category: "SAAS · PRODUCT ENGINEERING · 2025",
    featured: true,
    status: "Live",
    year: "2025",
    role: "Lead Product Engineer",
    stack: ["Next.js", "DuckDB", "Stripe"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", // Dark dashboard analytics screen
    liveUrl: "#",
    repoUrl: "#",
    problem: "A legacy business intelligence suite suffered from multi-second load times and high churn due to its dated design system.",
    solution: "We re-architected the database queries with DuckDB, created an edge-cached Next.js application, and implemented a strict monospace-driven component library.",
    features: ["Real-time database integration", "Monospace design system", "Edge query caching"],
    technicalDetails: ["DuckDB integration", "Next.js App Router query caching"],
    impact: ["78% latency reduction", "31% activation improvement"],
    lessons: ["Incremental migrations of 14-year databases require extensive query audits."]
  },
  {
    slug: "northwind-studio",
    title: "Northwind Studio",
    tagline: "Identity and editorial site for a creative studio.",
    summary: "Identity and editorial site for a creative studio. WebGL-driven hero, motion-rich case studies.",
    category: "BRAND · SITE · 2024",
    featured: true,
    status: "Live",
    year: "2024",
    role: "Lead Front-end Dev",
    stack: ["Framer", "GLSL"],
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80", // Abstract brand design screenshot
    liveUrl: "#",
    repoUrl: "#",
    problem: "A creative agency needed an online home that matched their premium, physical design aesthetic.",
    solution: "Developed an interactive WebGL showcase with highly detailed physics constraints in GLSL shaders.",
    features: ["GLSL physics-driven hero", "Fluid view transitions", "Markdown-powered case studies"],
    technicalDetails: ["Custom GLSL shaders", "Framer Motion layout animations"],
    impact: ["Featured on SiteInspire", "200k unique visitors during launch week"],
    lessons: ["Optimizing web workers is crucial for maintaining 60fps on low-end devices."]
  },
  {
    slug: "cardinal-health-ai",
    title: "Cardinal Health AI",
    tagline: "Internal LLM platform for clinical-summary generation.",
    summary: "Internal LLM platform for clinical-summary generation. HIPAA-compliant, audited, fast.",
    category: "ENTERPRISE · ML · 2024",
    featured: true,
    status: "Live",
    year: "2024",
    role: "Lead AI Engineer",
    stack: ["FastAPI", "LangGraph"],
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80", // Cyberpunk code/terminal theme
    liveUrl: "#",
    repoUrl: "#",
    problem: "Clinicians spent over 3 hours a day drafting summaries of patient documents.",
    solution: "Built a reliable, multi-agent AI system that parses document histories and produces formatted summaries in under 30 seconds.",
    features: ["HIPAA-compliant document parsing", "Multi-agent LangGraph workflow", "Audited source tracking"],
    technicalDetails: ["LangGraph workflow automation", "FastAPI web streams"],
    impact: ["Reduced daily summary time by 72%", "HIPAA certified in under 3 months"],
    lessons: ["Deterministic validation is required at each agent node when handling medical details."]
  },
  {
    slug: "glide-wallet",
    title: "Glide Wallet",
    tagline: "Multi-chain wallet built for first-time crypto users.",
    summary: "Multi-chain wallet built for first-time crypto users. Onboarded 120k users in beta.",
    category: "FINTECH · MOBILE · 2023",
    featured: true,
    status: "Live",
    year: "2023",
    role: "Full Stack Engineer",
    stack: ["React Native", "Solidity"],
    imageUrl: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80", // Abstract dark grid overlay
    liveUrl: "#",
    repoUrl: "#",
    problem: "Standard crypto wallets were too confusing for mainstream users due to complex seed-phrase management.",
    solution: "Designed a mobile wallet with social login and smart-contract abstraction built directly on Solidity.",
    features: ["Social account abstraction", "Gasless transaction flows", "Multi-chain balance tracking"],
    technicalDetails: ["Solidity smart contracts", "React Native multi-platform build"],
    impact: ["120k users onboarded in beta", "Over $2M in transactional volume secured"],
    lessons: ["Smart contract security audits are essential before launching consumer finance applications."]
  }
];
