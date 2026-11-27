import React from "react";
import type { Metadata } from "next";
import { WORK_EXPERIENCES } from "@/data/experience";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = buildPageMetadata({
  title: "Experience & Roles",
  description:
    "Engineering roles, leadership at KreateKode, front-end web & Flutter development at Sineix, e-commerce store operations, and server infrastructure by Muhammad Abdul Rafay.",
  path: "/experience",
  type: "profile",
  keywords: [
    "RafayShhh experience",
    "Muhammad Abdul Rafay resume",
    "KreateKode Founder",
    "Front-end developer",
    "Flutter developer",
  ],
  imageAlt: "Experience & Roles — RafayShhh",
});

export default function ExperiencePage() {
  return (
    <div className="pt-10 pb-20 relative transition-colors duration-200 font-sans">
      <JsonLd type="profile" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Page Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/70 border border-red-200 dark:border-red-800/40 text-red-700 dark:text-red-300 text-xs font-bold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career &amp; Ventures</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
            Experience &amp; Leadership
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Timeline of independent app studio leadership, web &amp; Flutter software development, e-commerce operations, and multiplayer server systems.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6">
          {WORK_EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0c0408] border border-zinc-200 dark:border-[#240918] hover:border-red-500/45 shadow-sm transition-colors"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-100 dark:border-[#1d0714]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                      {exp.company}
                    </h2>
                    {exp.badge && (
                      <span
                        className={`text-[11px] px-2.5 py-0.5 rounded-full font-semibold border ${
                          exp.featured
                            ? "bg-red-50 dark:bg-red-950/80 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800/40"
                            : "bg-zinc-100 dark:bg-[#16060e] text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-[#2a0b1c]"
                        }`}
                      >
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-semibold text-red-700 dark:text-red-400 flex flex-wrap items-center gap-2">
                    <span>{exp.role}</span>
                    {exp.leadership && (
                      <>
                        <span className="text-zinc-400 dark:text-zinc-600">•</span>
                        <span className="text-xs text-zinc-600 dark:text-zinc-400 font-normal">
                          {exp.leadership}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Period badge */}
                <div className="flex items-center gap-2 self-start sm:self-center text-xs text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-[#14050e] px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-[#270b1b] shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="py-4 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {exp.description}
              </p>

              {/* Key Highlights */}
              <div className="space-y-2 pb-4">
                {exp.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Tech Pills and Links */}
              <div className="pt-4 border-t border-zinc-100 dark:border-[#1d0714] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-[#16060e] text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-[#2a0b1c]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {exp.website && (
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-red-700 dark:text-red-400 hover:underline flex items-center gap-1"
                  >
                    <span>Visit {exp.websiteLabel || exp.company}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Clean CTA Footer */}
        <div className="p-8 rounded-2xl bg-zinc-100 dark:bg-[#10050c] border border-zinc-200 dark:border-[#290a1c] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">
              Looking to collaborate or hire?
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
              Available for full-stack software engineering, Flutter apps, and custom Minecraft mods.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-red-700 hover:bg-red-600 text-white shadow-sm transition-colors shrink-0"
          >
            Get in Touch &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
