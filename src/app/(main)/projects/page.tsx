import React from "react";
import type { Metadata } from "next";
import { SOFTWARE_PROJECTS } from "@/data/projects";
import { JsonLd } from "@/components/seo/JsonLd";
import { Code2 } from "lucide-react";
import { ProjectsClientList } from "@/components/sections/ProjectsClientList";

export const metadata: Metadata = {
  title: "Software & Web Projects — RafayShhh",
  description:
    "Explore full-stack web platforms, developer CLI utilities, and open-source software engineered by RafayShhh.",
  keywords: [
    "Full stack projects",
    "developer CLI",
    "RafayShhh projects",
    "Next.js portfolio",
    "software engineer projects",
  ],
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Software & Web Projects — RafayShhh",
    description:
      "Explore full-stack web platforms, developer CLI utilities, and open-source software engineered by RafayShhh.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="pt-12 pb-20 relative transition-colors duration-200">
      <JsonLd type="projects" />

      {/* Ambient glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/5 dark:bg-red-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-600/15 border border-red-300 dark:border-red-500/30 text-red-700 dark:text-red-400 text-xs font-mono mb-4 font-bold">
            <Code2 className="w-3.5 h-3.5" />
            <span>Software & Web Engineering</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight font-mono">
            ENGINEERING & TOOLS
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mt-4 leading-relaxed font-light">
            A curated portfolio of full-stack services, publishing automations, developer tools, and utility software designed with performance and clean code.
          </p>
        </div>

        {/* Client-side filterable list */}
        <ProjectsClientList projects={SOFTWARE_PROJECTS} />
      </div>
    </div>
  );
}
