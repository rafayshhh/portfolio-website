import React from "react";
import type { Metadata } from "next";
import { SOFTWARE_PROJECTS } from "@/data/projects";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProjectsClientList } from "@/components/sections/ProjectsClientList";
import { Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Software & Web Projects — Tools, Full-Stack & Open Source",
  description:
    "Explore developer tools, full-stack applications, CLI utilities, and open-source software built by RafayShhh. View live demos and source code on GitHub.",
  keywords: [
    "RafayShhh projects",
    "Open source software",
    "Developer CLI tools",
    "Next.js portfolio",
    "Full-stack web developer",
    "TypeScript projects",
    "Curseforge mod packager",
  ],
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Software & Web Projects — RafayShhh",
    description:
      "Explore developer tools, full-stack applications, CLI utilities, and open-source software built by RafayShhh.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-20 relative">
      <JsonLd type="projects" />

      {/* Ambient glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-mono mb-4">
            <Code2 className="w-3.5 h-3.5" />
            <span>Software & Web Engineering</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Developer Tools, Web Applications & Open Source.
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 mt-4 leading-relaxed">
            A curated portfolio of full-stack services, publishing automations, developer tools, and utility software designed with performance and clean code.
          </p>
        </div>

        {/* Client-side filterable list */}
        <ProjectsClientList projects={SOFTWARE_PROJECTS} />
      </div>
    </div>
  );
}
