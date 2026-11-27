import React from "react";
import type { Metadata } from "next";
import { SOFTWARE_PROJECTS } from "@/data/projects";
import { JsonLd } from "@/components/seo/JsonLd";
import { Code2 } from "lucide-react";
import { ProjectsClientList } from "@/components/sections/ProjectsClientList";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Software & Web Projects",
  description:
    "Explore BlogForge Studio, P-Pointer AI desktop agent, and open-source Next.js, TypeScript, and Python platforms engineered by RafayShhh.",
  path: "/projects",
  keywords: [
    "RafayShhh projects",
    "BlogForge Studio",
    "P-Pointer AI",
    "Next.js portfolio",
    "Python PySide6 desktop app",
    "Full stack projects",
  ],
  imageAlt: "Software & Web Projects — RafayShhh",
});

export default function ProjectsPage() {
  return (
    <div className="pt-12 pb-20 relative transition-colors duration-200">
      <JsonLd type="projects" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Header */}
        <header className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-700 dark:text-red-400 text-xs font-medium mb-4">
            <Code2 className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Software & AI Engineering</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight font-sans">
            Software &amp; AI Projects
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mt-4 leading-relaxed">
            Open-source publishing platforms, voice accessibility utilities, and full-stack web engineering built for reliability and clean code.
          </p>
        </header>

        {/* Client-side filterable list */}
        <ProjectsClientList projects={SOFTWARE_PROJECTS} />
      </div>
    </div>
  );
}
