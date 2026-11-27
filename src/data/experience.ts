export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  leadership?: string;
  website?: string;
  websiteLabel?: string;
  description: string;
  technologies: string[];
  highlights: string[];
  badge: string;
  featured?: boolean;
}

export const WORK_EXPERIENCES: ExperienceItem[] = [
  {
    id: "kreatekode",
    role: "Solo Founder",
    company: "KreateKode",
    period: "August 2026 – Present",
    duration: "Present",
    badge: "Active Venture",
    description: "Founded KreateKode to engineer focused, lightweight utility applications that solve real-world problems. Prioritizing zero data telemetry, zero bloat, and pure user privacy.",
    highlights: [
      "Solo founder architecting native mobile and software tools",
      "Utility-first engineering with lightweight runtime footprints",
      "Strict privacy-first ethos: zero trackers, zero spyware, 100% offline-ready",
    ],
    technologies: ["Flutter", "Dart", "Android", "TypeScript", "Next.js"],
    featured: true,
  },
  {
    id: "sineix",
    role: "Front-End Developer",
    company: "Sineix",
    period: "3 Months",
    duration: "3 Months",
    leadership: "Under Leadership of Faisal Ismail",
    website: "https://sineix.com",
    websiteLabel: "sineix.com",
    badge: "Web & Flutter",
    description: "Developed modern, responsive web interfaces and actively contributed towards cross-platform Flutter applications under the direct leadership of CEO Faisal Ismail.",
    highlights: [
      "Built clean, high-performance web front-ends with modern component architectures",
      "Contributed to cross-platform mobile interfaces using Flutter & Dart",
      "Collaborated closely under the strategic leadership of Faisal Ismail",
    ],
    technologies: ["React", "Flutter", "Dart", "Tailwind CSS", "JavaScript"],
  },
  {
    id: "elanza-holdings",
    role: "Ads Manager & Performance Marketer",
    company: "Elanza Holdings",
    period: "1 Month",
    duration: "1 Month",
    website: "https://elanzaholdings.com",
    websiteLabel: "elanzaholdings.com",
    badge: "Growth Marketing",
    description: "Configured tracking systems and ran targeted Meta Ads and Google Ads campaigns to generate high-intent buyer and investor leads for premier Islamabad real estate developments.",
    highlights: [
      "Configured Google Tag Manager event tracking and conversion pipelines",
      "Orchestrated Meta Ads and Google Ads for real estate lead acquisition",
      "Delivered qualified leads for Elanza Holdings' flagship commercial developments",
    ],
    technologies: ["Google Tag Manager", "Meta Ads", "Google Ads", "Conversion Tracking", "Analytics"],
  },
  {
    id: "ravash-store",
    role: "Shopify Store Designer & Manager",
    company: "Ravash Store",
    period: "3 Months",
    duration: "3 Months",
    leadership: "Owned by Creator @Faishlization (100k+ Followers)",
    website: "https://ravash.store",
    websiteLabel: "ravash.store",
    badge: "E-Commerce",
    description: "Led theme customization, store operations, and product listing optimization for the official e-commerce brand of lifestyle and fashion content creator @Faishlization.",
    highlights: [
      "Designed and refined bespoke Shopify themes for optimal mobile conversions",
      "Managed store operations, catalog management, and seamless product listings",
      "Catered to a community audience of over 100,000+ social followers",
    ],
    technologies: ["Shopify Liquid", "UI/UX Design", "Store Management", "E-Commerce Optimization"],
  },
  {
    id: "minecraft-servers",
    role: "Systems Architect & Server Host",
    company: "Minecraft Multiplayer Infrastructure",
    period: "9 Months",
    duration: "9 Months",
    badge: "Server Systems",
    description: "Developed, deployed, and managed multiple private and public high-performance Minecraft servers with custom Paper/Purpur optimizations, network tuning, and security permissions.",
    highlights: [
      "Configured and hosted public and private multiplayer server networks",
      "Optimized Paper & Purpur server tick-rates (TPS) and chunk loading",
      "Implemented automated backups, anti-grief controls, and staff permissions",
    ],
    technologies: ["PaperMC", "Purpur", "Linux VPS", "YAML Configs", "Network Tuning"],
  },
];
