export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Full-Stack" | "CLI & Tools" | "Open Source" | "Web App";
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  highlights: string[];
}

export const SOFTWARE_PROJECTS: Project[] = [
  {
    id: "rafayshhh-web-platform",
    title: "RafayShhh Web Platform",
    tagline: "Ultra-fast personal showcase and digital hub built on Next.js 15 & Tailwind CSS.",
    description: "The bespoke digital portfolio and project explorer powering rafayshhh.site. Engineered with App Router architecture, rich JSON-LD Schema.org SEO for Google & Bing, Resend email routing, and crimson-accented visual ergonomics.",
    category: "Full-Stack",
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Resend API", "Vercel"],
    githubUrl: "https://github.com/RafayShhh",
    demoUrl: "https://rafayshhh.site",
    featured: true,
    highlights: [
      "Custom multi-route SEO architecture for /mods, /apps, /projects",
      "Interactive client-side filtering and buttery-smooth animations",
      "Server-side Resend contact delivery with spam honeypot",
      "Perfect score Lighthouse accessibility and performance",
    ],
  },
  {
    id: "mc-mod-packager-cli",
    title: "Forge & Fabric Build Automator",
    tagline: "Developer CLI to automate multi-loader releases, changelog generation, and Modrinth/CurseForge uploads.",
    description: "A developer workflow tool written to automate the tedious chore of publishing Minecraft mod jars across both Modrinth and CurseForge APIs with release tags and changelogs.",
    category: "CLI & Tools",
    techStack: ["Node.js", "TypeScript", "REST APIs", "Commander", "Gradle"],
    githubUrl: "https://github.com/RafayShhh",
    featured: true,
    highlights: [
      "Dual-publishing to Modrinth & CurseForge v2 API in one command",
      "Automated changelog extraction from Git commit history",
      "Verification of Minecraft version compatibility matrix",
    ],
  },
  {
    id: "pulse-api-monitor",
    title: "Pulse: Microservice Health Checker",
    tagline: "Lightweight uptime monitoring and status notifier with Discord webhook alerts.",
    description: "A self-hostable service monitoring tool that pings REST endpoints, checks SSL certificates, and dispatches detailed embed alerts to Discord channels upon outage detection.",
    category: "Web App",
    techStack: ["TypeScript", "Next.js", "Tailwind CSS", "Discord Webhooks", "Cron"],
    githubUrl: "https://github.com/RafayShhh",
    featured: false,
    highlights: [
      "Sub-second HTTP/WebSocket latency probing",
      "Rich Discord embed alerts with downtime duration stats",
      "Configurable check intervals and retry thresholds",
    ],
  },
];
