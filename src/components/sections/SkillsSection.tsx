"use client";

import React from "react";
import { Cpu, Gamepad2, Smartphone, Globe, Wrench } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Minecraft Modding",
    icon: Gamepad2,
    badge: "Core Specialty",
    skills: [
      "Java (8 / 17 / 21)",
      "Fabric API & Fabric Loom",
      "Mixin Bytecode Injection",
      "Quilt Standard Libraries",
      "NeoForge & Forge APIs",
      "Paper / Purpur Server APIs",
      "Lightmap & GL Render Hooking",
      "Gradle Multi-Project Pipelines",
    ],
  },
  {
    title: "Android Engineering",
    icon: Smartphone,
    badge: "Mobile Native",
    skills: [
      "Kotlin Modern Coroutines",
      "Jetpack Compose Declarative UI",
      "Android SDK & NDK Tooling",
      "Room Persistence DB & SQLite",
      "Material Design 3 (Material You)",
      "Clean Architecture & MVI / MVVM",
      "WorkManager Background Deferrals",
      "Offline-First Data Synchronization",
    ],
  },
  {
    title: "Web & Full-Stack",
    icon: Globe,
    badge: "Web Standards",
    skills: [
      "TypeScript 5 (Strict)",
      "Next.js 15 (App Router)",
      "React 19 Server Components",
      "Tailwind CSS Utility Architecture",
      "Node.js Runtime Services",
      "REST & Webhook Protocols",
      "Edge Middleware & CDN Caching",
      "Schema.org JSON-LD SEO",
    ],
  },
  {
    title: "Ecosystem & Workflow",
    icon: Wrench,
    badge: "DevOps & Tools",
    skills: [
      "Git & Automated GitHub Actions",
      "Modrinth API Automation",
      "CurseForge Developer API",
      "IntelliJ IDEA & Android Studio",
      "Vercel Edge Cloud Deployment",
      "Resend Transactional Email",
      "Discord Webhook Integrations",
      "Local Sandbox Virtualization",
    ],
  },
];

export function SkillsSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-400 mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-mono">
            TECHNICAL MATRIX
          </h2>
          <p className="text-sm text-zinc-400 mt-2 font-light">
            Engineered capabilities across game bytecode modification, mobile platforms, and web systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0c0408] border border-[#230917] hover:border-red-500/40 transition-all flex flex-col justify-between group shadow-lg shadow-black/60 font-mono"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2 rounded-xl bg-red-600/10 text-red-400 border border-red-500/20">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#16060e] text-zinc-400 border border-[#2b0c1c]">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-4 group-hover:text-red-300 transition-colors">
                    {cat.title}
                  </h3>

                  <ul className="space-y-2">
                    {cat.skills.map((skill, sIdx) => (
                      <li
                        key={sIdx}
                        className="text-xs text-zinc-300 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
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
