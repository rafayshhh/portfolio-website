import React from "react";
import { Cpu, Gamepad2, Smartphone, Globe, Wrench } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Minecraft Modding",
    icon: Gamepad2,
    badge: "Core Specialty",
    skills: [
      "Java (8 / 17 / 21 / 25)",
      "Fabric API & Fabric Loom",
      "SpongePowered Mixins",
      "Minecraft 26.3 & Legacy Ports",
      "Forge & NeoForge APIs",
      "Litematic & Schem NBT Parsing",
      "Custom HUD & Lightmap Rendering",
      "Gradle Multi-Project Pipelines",
    ],
  },
  {
    title: "Mobile & Desktop",
    icon: Smartphone,
    badge: "Cross-Platform",
    skills: [
      "Flutter 3.x & Dart 3.x",
      "Riverpod 2.x State Management",
      "Hive CE Binary Persistence",
      "Material Design 3 UI",
      "Python 3.12 & PySide6 / Qt6",
      "Android Studio & APK Signing",
      "Offline-First Architecture",
      "Responsive Multi-Viewport UI",
    ],
  },
  {
    title: "Web & AI Systems",
    icon: Globe,
    badge: "Modern Stack",
    skills: [
      "TypeScript 5 (Strict)",
      "Next.js 15 (App Router)",
      "React 19 & Server Components",
      "Tailwind CSS Architecture",
      "Google Gemini API (google-genai)",
      "SQLite WAL & Pydantic",
      "Technical SEO & Canonicals",
      "Schema.org JSON-LD Graphs",
    ],
  },
  {
    title: "Workflow & Tooling",
    icon: Wrench,
    badge: "Delivery",
    skills: [
      "Git & GitHub Releases CI",
      "CurseForge Publishing",
      "Google Play Console",
      "Vercel Edge Deployment",
      "Chrome DevTools & Lighthouse",
      "Resend Transactional Email",
      "Automated Unit Testing",
      "Product Documentation",
    ],
  },
];

export function SkillsSection() {
  return (
    <section className="py-14 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-red-700 dark:text-red-400 font-bold mb-1.5">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
            Core Engineering Stack
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1.5">
            Languages, frameworks, and delivery tools used across shipped software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILL_CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="p-6 rounded-2xl bg-white dark:bg-[#0c0408] border border-zinc-200 dark:border-[#240918] shadow-sm space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="p-2 rounded-xl bg-zinc-100 dark:bg-[#16060e] text-red-700 dark:text-red-400 border border-zinc-200 dark:border-[#2b0c1c]">
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-400">
                    {category.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                  {category.title}
                </h3>
                <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-300">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500/70 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
