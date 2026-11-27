import { GalleryImage, SpecificationItem, DocumentationSection, FaqItem, ItemSeo } from "./types";

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
  gallery: GalleryImage[];
  specifications: SpecificationItem[];
  documentation: DocumentationSection[];
  faqs?: FaqItem[];
  seo: ItemSeo;
}

export const SOFTWARE_PROJECTS: Project[] = [
  {
    id: "blogforge-studio",
    title: "BlogForge",
    tagline: "Local-first, privacy-focused desktop studio for Google Gemini AI content research & publishing.",
    description:
      "Modern desktop workspace for technical writers, content creators, and developer marketers. Bridges raw LLM chats with production-ready editorial drafting via Brand Voice Profiles, Topic-Aware Context Engine, and an iterative 4-stage pipeline (Outline → Section Writing → Critical Review → FAQ Synthesis) powered by Google Gemini using the official google-genai SDK.",
    category: "Desktop & AI",
    techStack: ["Python", "PySide6 / Qt", "google-genai SDK", "Gemini API", "SQLite WAL", "Pydantic"],
    githubUrl: "https://github.com/rafayshhh/blogforge",
    featured: true,
    highlights: [
      "Local-first architecture: drafts, brand guidelines, and research stay on device",
      "Iterative multi-stage AI generation pipeline eliminating repetitive AI filler",
      "Strict Brand Voice Profiles & Topic-Aware Context Engine reducing hallucinations",
      "Multi-format editorial export to Markdown, HTML, and publication targets",
    ],
    gallery: [],
    specifications: [
      { label: "Application Type", value: "Native Desktop App (PySide6 / Qt6)" },
      { label: "AI Integration", value: "Google Gemini via official google-genai Python SDK" },
      { label: "Data Storage", value: "SQLite with Write-Ahead Logging (WAL mode)" },
      { label: "Data Privacy", value: "Local-First (Drafts & API keys stored exclusively on device)" },
      { label: "Export Targets", value: "GitHub Flavored Markdown, HTML, JSON Feed" },
    ],
    documentation: [
      {
        title: "Local-First Desktop Architecture",
        slug: "architecture",
        content: `BlogForge is engineered as a standalone desktop studio using **PySide6 (Qt for Python)**. Unlike cloud-hosted SaaS generators that log user drafts on centralized servers, BlogForge stores everything in a local **SQLite database configured in WAL (Write-Ahead Logging) mode**.

### Key Architectural Strengths
- **Air-Gapped Confidentiality**: Your unpublished research, confidential product specs, and company brand voice profiles never touch an intermediary SaaS server.
- **Direct API Protocol**: All LLM communications stream directly between your local machine and Google's Gemini API endpoints via encrypted TLS with the \`google-genai\` SDK.`,
      },
      {
        title: "The 4-Stage Iterative Editorial Pipeline",
        slug: "pipeline",
        content: `Single-prompt generation consistently yields repetitive, shallow, and hallucination-prone prose. BlogForge resolves this with an **iterative 4-stage pipeline**:

1. **Stage 1 — Deep Outline**: Generates a structured hierarchy of H2/H3 sections with target word allocations and required technical citations.
2. **Stage 2 — Section-by-Section Synthesis**: Iterates over each section individually, providing preceding context and strict technical boundaries to prevent repetition.
3. **Stage 3 — Critical Reviewer**: An adversarial pass inspects drafts to strip generic AI filler, passive voice, and unsupported claims.
4. **Stage 4 — FAQ & Metadata Synthesis**: Extracts schema-ready FAQs, OpenGraph descriptions, and publication snippets.`,
      },
    ],
    faqs: [
      {
        question: "Are my articles and API keys stored on external servers?",
        answer: "No. All drafts, research notes, style guides, and API credentials stay locally on disk inside a SQLite WAL database and communicate directly with Google Gemini API endpoints.",
      },
      {
        question: "Why use a 4-stage pipeline instead of single-prompt article generation?",
        answer: "Separating Outlining, Section-by-Section Drafting, Adversarial Critical Review, and FAQ Synthesis keeps structure coherent and removes repetitive filler common in one-shot prompts.",
      },
    ],
    seo: {
      metaTitle: "BlogForge — Local-First Gemini AI Publishing Studio",
      metaDescription: "Local-first PySide6 desktop workspace for editorial style guides, deep research, and structured AI content workflows using the Google google-genai SDK.",
      keywords: ["BlogForge", "Gemini AI desktop app", "local first AI editor", "PySide6 content studio", "Google genai SDK", "RafayShhh projects"],
    },
  },
  {
    id: "p-pointer-agent",
    title: "P-Pointer",
    tagline: "Autonomous desktop agent using Gemini Multimodal Vision for creative suites & Photoshop.",
    description:
      "Experimental desktop automation agent that pairs the Google Gemini Vision API with OS-level mouse and keyboard controls to perceive your active canvas, map UI targets, and orchestrate workflows in Photoshop and desktop creative suites.",
    category: "Desktop & AI",
    techStack: ["Python", "Gemini Multimodal API", "PyAutoGUI", "Computer Vision", "Desktop Automation"],
    githubUrl: "https://github.com/rafayshhh/p-pointer",
    image: "/images/projects/p-pointer/p-pointer-logo.png",
    featured: false,
    highlights: [
      "Multimodal screen perception and coordinate target mapping",
      "OS-level cursor and keyboard automation for Photoshop & desktop apps",
      "Real-time visual feedback loop verifying completed UI actions",
    ],
    gallery: [],
    specifications: [
      { label: "Vision Core", value: "Google Gemini Multimodal Vision API" },
      { label: "OS Automation", value: "PyAutoGUI & OS-level pointer/keyboard execution" },
      { label: "Target Domain", value: "Adobe Photoshop, Creative Desktop Suites & Windows UI" },
      { label: "Fail-Safe", value: "Corner cursor abort triggers & step confirmations" },
    ],
    documentation: [
      {
        title: "Perception-Action Vision Loop",
        slug: "loop",
        content: `P-Pointer operates as an experimental visual cursor over your desktop:

1. **Frame Capture**: Captures the active monitor framebuffer cleanly into memory.
2. **Multimodal Reasoning**: Sends the frame plus natural language instructions to the Gemini Vision API.
3. **Coordinate Normalization**: Converts normalized \`[0, 1000]\` bounding-box targets into physical screen coordinates and dispatches OS pointer clicks or shortcuts via PyAutoGUI.`,
      },
    ],
    faqs: [
      {
        question: "How does P-Pointer prevent runaway desktop automation?",
        answer: "It enforces corner failsafe aborts, step-by-step action caps, dry-run validation, and Escape kill-switch interrupts during OS pointer control.",
      },
    ],
    seo: {
      metaTitle: "P-Pointer — Autonomous Gemini Vision Desktop Cursor",
      metaDescription: "Experimental AI cursor for Photoshop and creative desktop applications powered by Google Gemini Multimodal Vision and OS-level PyAutoGUI automation.",
      keywords: ["Gemini Vision agent", "AI cursor for Photoshop", "desktop automation Python", "PyAutoGUI agent", "P-Pointer", "RafayShhh projects"],
    },
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    tagline: "Bespoke high-performance developer portfolio built with Next.js 15, React 19 & Tailwind CSS.",
    description:
      "Official open-source engineering portfolio powering rafayshhh.site. Built on Next.js 15 App Router with static site generation (SSG), React 19, strict TypeScript, Obsidian/Crimson aesthetics, interactive canvas & lightmap demos, Schema.org JSON-LD, and Resend serverless email delivery.",
    category: "Full-Stack",
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Resend API", "Vercel"],
    githubUrl: "https://github.com/rafayshhh/portfolio-website",
    demoUrl: "https://rafayshhh.site",
    image: "/images/banner.jpg",
    featured: true,
    highlights: [
      "Static-First Next.js 15 App Router with dedicated routes for every mod, app, and project",
      "Dynamic Schema.org JSON-LD (Person, ItemList, SoftwareApplication, BreadcrumbList, FAQPage)",
      "Custom accessible image lightbox, theme persistence, and interactive mod simulators",
      "Resend transactional contact API with honeypot filtering & sanitized HTML rendering",
    ],
    gallery: [],
    specifications: [
      { label: "Framework", value: "Next.js 15 (App Router, Static Site Generation)" },
      { label: "Frontend Stack", value: "React 19, TypeScript 5 Strict, Tailwind CSS" },
      { label: "Contact Pipeline", value: "Serverless /api/contact via Resend SDK + Honeypot Guard" },
      { label: "SEO & Schema", value: "Centralized Metadata Builder, Dynamic Sitemap, Rich JSON-LD" },
      { label: "Hosting Platform", value: "Vercel Edge Network (rafayshhh.site)" },
    ],
    documentation: [
      {
        title: "Architecture & Static-First Performance",
        slug: "architecture",
        content: `Every public mod, Android app, and engineering project compiles into static edge-cached HTML via \`generateStaticParams\`, eliminating cold-start waits for visitors and crawlers alike.

### Key Architectural Highlights
- **Dedicated Showcase Templates**: Modular \`ItemHero\`, \`ItemGallery\`, and \`ItemDocSections\` provide unified accessibility, responsive framing, and copyable command/code references across every route.
- **Automated Search Indexing**: Centralized metadata builders keep titles, canonicals, OpenGraph cards, and JSON-LD \`BreadcrumbList\`, \`SoftwareApplication\`, and \`FAQPage\` schemas in lockstep.`,
      },
    ],
    faqs: [
      {
        question: "How does rafayshhh.site optimize load performance and SEO?",
        answer: "All 35 routes pre-render as static HTML via Next.js App Router, paired with structured Schema.org graphs, edited Open Graph banners, and clean semantic landmarks.",
      },
    ],
    seo: {
      metaTitle: "Portfolio Website — Next.js 15 & React 19 Showcase",
      metaDescription: "Explore the open-source Next.js 15 & React 19 architecture powering rafayshhh.site with static edge rendering, interactive demos, and rich SEO schemas.",
      keywords: ["Next.js 15 portfolio", "RafayShhh portfolio website", "React 19 TypeScript", "Tailwind CSS dark portfolio"],
    },
  },
];
