"use client";

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
      "Mixin Bytecode Injection",
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
      "Material Design 3 & Typography",
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
      "Edge Middleware & SEO Metadata",
      "Schema.org JSON-LD Graphs",
    ],
  },
  {
    title: "Ecosystem & Workflow",
    icon: Wrench,
    badge: "DevOps & Tools",
    skills: [
      "Git & GitHub Releases CI",
      "CurseForge Developer Portal",
      "IntelliJ IDEA & VS Code",
      "Vercel Edge Deployment",
      "Chrome DevTools & Lighthouse",
      "Resend Transactional Email",
      "Discord Community Tooling",
      "Technical & Mod Documentation",
    ],
  },
];

export function SkillsSection() {
  return (
    <section className="py-20 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-600 dark:text-red-400 mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight font-sans">
            TECHNICAL MATRIX
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 font-light">
            Engineered capabilities across game bytecode modification, mobile platforms, and web systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#0c0408] border border-zinc-200 dark:border-[#230917] hover:border-red-500/40 transition-all flex flex-col justify-between group shadow-sm dark:shadow-lg dark:shadow-black/60 font-sans"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2 rounded-xl bg-red-100 dark:bg-red-600/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-[#16060e] text-zinc-700 dark:text-zinc-400 border border-zinc-200 dark:border-[#2b0c1c] font-bold">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-red-600 dark:group-hover:text-red-300 transition-colors">
                    {cat.title}
                  </h3>

                  <ul className="space-y-2">
                    {cat.skills.map((skill, sIdx) => (
                      <li
                        key={sIdx}
                        className="text-xs text-zinc-700 dark:text-zinc-300 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500/70" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
