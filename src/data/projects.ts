export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Desktop & AI" | "Full-Stack" | "CLI & Tools";
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  featured: boolean;
  highlights: string[];
}

export const SOFTWARE_PROJECTS: Project[] = [
  {
    id: "blogforge-studio",
    title: "BlogForge",
    tagline: "Local-first, privacy-focused desktop studio for Google Gemini AI content research & publishing.",
    description: "Modern desktop workspace for technical writers, content creators, and developer marketers. Bridges raw LLM chats with production-ready editorial drafting via Brand Voice Profiles, Topic-Aware Context Engine, and an iterative 4-stage pipeline (Outline → Section Writing → Critical Review → FAQ Synthesis) powered by Google Gemini 3.8 Flash, 3.5 Flash-Lite, and Gemini 4 models using the official google-genai SDK.",
    category: "Desktop & AI",
    techStack: ["Python", "PySide6 / Qt", "google-genai SDK", "Gemini 3.8 / 4", "SQLite WAL", "Pydantic"],
    githubUrl: "https://github.com/RafayShhh",
    image: "/images/projects/blogforge-dashboard.png",
    featured: true,
    highlights: [
      "Local-first architecture: drafts, brand guidelines, and research stay on device",
      "Iterative multi-stage AI generation pipeline eliminating repetitive AI slop",
      "Strict Brand Voice Profiles & Topic-Aware Context Engine preventing hallucinations",
      "Multi-format editorial export to Markdown, HTML, and publication targets",
    ],
  },
  {
    id: "syncly-automation",
    title: "Syncly",
    tagline: "High-performance multi-account browser automation and sync orchestrator.",
    description: "Autonomous synchronization engine engineered with Playwright, SQLAlchemy SQLite WAL mode, and robust bot-detection avoidance heuristics. Features Chrome 131 desktop fingerprint emulation, semantic element locators, safe pattern checkpoint guards, and automated headless operational health scans.",
    category: "CLI & Tools",
    techStack: ["Python", "Playwright", "SQLAlchemy", "SQLite WAL", "Pydantic", "pytest"],
    githubUrl: "https://github.com/RafayShhh",
    featured: true,
    highlights: [
      "Anti-fingerprint emulation with Chrome 131 desktop user agents",
      "SQLAlchemy instance-level SQLite WAL isolation preventing concurrency locks",
      "Semantic button locators targeting interactive DOM containers",
      "Automated headless health scans and granular error recovery profiles",
    ],
  },
  {
    id: "p-pointer-agent",
    title: "P-Pointer",
    tagline: "Autonomous desktop agent using Gemini Multimodal AI for creative tools & Photoshop.",
    description: "Experimental desktop automation agent that pairs the Gemini Vision API with OS-level mouse and keyboard controls to orchestrate complex design workflows and canvas actions in creative desktop suites.",
    category: "Desktop & AI",
    techStack: ["Python", "Gemini Multimodal API", "PyAutoGUI", "Computer Vision", "Desktop Automation"],
    githubUrl: "https://github.com/RafayShhh",
    image: "/images/projects/p-pointer-logo.png",
    featured: false,
    highlights: [
      "Multimodal screen perception and coordinate target mapping",
      "Zero-dependency desktop control pipeline for creative tools",
      "Automated macro sequence generation and prompt-driven canvas execution",
    ],
  },
  {
    id: "kreatekode-platform",
    title: "KreateKode Studio & Web Hub",
    tagline: "Official production website and PWA workstation for KreateKode digital tools.",
    description: "The official web platform powering kreatekode.website. Built on Next.js 15 static site generation, responsive obsidian styling, and client-side PWA capabilities with sub-0.05ms O(1) typography preview algorithms.",
    category: "Full-Stack",
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "PWA", "Vercel"],
    githubUrl: "https://github.com/RafayShhh",
    demoUrl: "https://kreatekode.website",
    featured: true,
    highlights: [
      "100% client-side privacy: text formatting runs in-browser without server logs",
      "Precomputed O(1) hash maps eliminating runtime garbage collection pauses",
      "PWA offline manifest allowing full workstation use without an active network",
    ],
  },
];
