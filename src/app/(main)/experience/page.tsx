import React from "react";
import type { Metadata } from "next";
import { WORK_EXPERIENCES } from "@/data/experience";
import { Card3DTilt } from "@/components/3d/Card3DTilt";
import { 
  Briefcase, 
  ExternalLink, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experience & Roles — RafayShhh",
  description: "Verified engineering roles, ventures, and leadership experience by RafayShhh (Muhammad Abdul Rafay).",
  alternates: {
    canonical: "/experience",
  },
};

export default function ExperiencePage() {
  return (
    <div className="pt-12 pb-24 relative transition-colors duration-200">
      {/* Background crimson ambient glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-red-600/5 dark:bg-red-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Clean Header */}
        <div className="max-w-2xl space-y-3 font-mono">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-600/15 border border-red-300 dark:border-red-500/30 text-red-700 dark:text-red-400 text-xs font-bold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones & Roles</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
            ENGINEERING EXPERIENCE
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans font-light">
            A verified timeline of tech leadership, front-end software development, e-commerce brand infrastructure, and distributed game server architecture.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6">
          {WORK_EXPERIENCES.map((exp) => (
            <Card3DTilt key={exp.id} maxTilt={4} glare={true} className="rounded-2xl">
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0c0408] border border-zinc-200 dark:border-[#240918] hover:border-red-500/50 dark:hover:border-red-500/50 shadow-sm dark:shadow-xl dark:shadow-black/60 transition-all font-mono">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-100 dark:border-[#1d0714]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                        {exp.company}
                      </h2>
                      {exp.featured && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-950/80 text-red-700 dark:text-red-300 border border-red-300 dark:border-red-800/40 font-bold">
                          {exp.badge}
                        </span>
                      )}
                      {!exp.featured && exp.badge && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-[#16060e] text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-[#2a0b1c]">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-semibold text-red-600 dark:text-red-400 flex items-center gap-2">
                      <span>{exp.role}</span>
                      {exp.leadership && (
                        <>
                          <span className="text-zinc-400 dark:text-zinc-600">•</span>
                          <span className="text-xs text-zinc-500 dark:text-zinc-400 font-normal">
                            {exp.leadership}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Period badge */}
                  <div className="flex items-center gap-2 self-start sm:self-center text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-[#14050e] px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-[#270b1b] shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-red-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="py-4 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans font-light">
                  {exp.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 pb-4">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400 font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
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
                        className="text-[10px] px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-[#16060e] text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-[#2a0b1c]"
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
                      className="text-xs font-bold text-red-600 dark:text-red-400 hover:text-red-500 flex items-center gap-1 group"
                    >
                      <span>Visit {exp.websiteLabel || exp.company}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </Card3DTilt>
          ))}
        </div>

        {/* Clean CTA Footer */}
        <div className="p-8 rounded-2xl bg-zinc-100 dark:bg-[#10050c] border border-zinc-200 dark:border-[#290a1c] flex flex-col sm:flex-row items-center justify-between gap-6 font-mono">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2 justify-center sm:justify-start">
              <Sparkles className="w-4 h-4 text-red-500" />
              <span>Looking to collaborate or build together?</span>
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans font-light">
              Available for high-performance software engineering, custom Minecraft modding, and technical consulting.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-500 text-white shadow-sm transition-all shrink-0"
          >
            Get In Touch &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
