"use client";

import React from "react";
import { Cpu, Gamepad2, Smartphone, Globe, Wrench } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Minecraft Modding",
    icon: Gamepad2,
    badge: "Core Specialty",
    skills: [
      "Java (8/17/21)",
      "Fabric API",
      "Fabric Loom & Gradle",
      "Mixin Code Injection",
      "Quilt Standard Libraries",
      "NeoForge & Forge",
      "Paper / Spigot Server API",
      "Lightmap & Render Hooking",
    ],
  },
  {
    title: "Android Engineering",
    icon: Smartphone,
    badge: "Mobile Native",
    skills: [
      "Kotlin",
      "Jetpack Compose",
      "Android SDK & NDK",
      "Coroutines & StateFlow",
      "Room Persistence DB",
      "Material Design 3 (Material You)",
      "MVVM & Clean Architecture",
      "WorkManager Background Tasks",
    ],
  },
  {
    title: "Web & Full-Stack",
    icon: Globe,
    badge: "Web Standards",
    skills: [
      "TypeScript",
      "Next.js 15 (App Router)",
      "React 19",
      "Tailwind CSS",
      "Node.js",
      "REST & Webhook APIs",
      "Edge Middleware",
      "Schema.org & SEO",
    ],
  },
  {
    title: "Ecosystem & Workflow",
    icon: Wrench,
    badge: "DevOps & Tools",
    skills: [
      "Git & GitHub Actions",
      "Modrinth API Automation",
      "CurseForge Developer API",
      "IntelliJ IDEA & Android Studio",
      "Vercel Deployment",
      "Resend Email Delivery",
      "Discord Bot Webhooks",
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & Technology Stack
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Specialized engineering capabilities across game modding, mobile platforms, and web engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0f0f15] border border-[#1e1e2b] hover:border-red-500/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2 rounded-xl bg-red-600/10 text-red-400 border border-red-500/20">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-4 group-hover:text-red-300 transition-colors">
                    {cat.title}
                  </h3>

                  <ul className="space-y-2">
                    {cat.skills.map((skill, sIdx) => (
                      <li
                        key={sIdx}
                        className="text-xs text-zinc-300 flex items-center gap-2 font-mono"
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
