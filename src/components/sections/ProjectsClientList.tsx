"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ExternalLink, Check, ArrowRight, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";

interface ProjectsClientListProps {
  projects: Project[];
}

const CATEGORIES = ["All", "Desktop & AI", "Full-Stack", "CLI & Tools"];

export function ProjectsClientList({ projects }: ProjectsClientListProps) {
  const [selectedCat, setSelectedCat] = useState("All");

  const filteredProjects = projects.filter((p) => {
    if (selectedCat === "All") return true;
    return p.category.toLowerCase() === selectedCat.toLowerCase();
  });

  return (
    <div className="space-y-8 font-sans">
      {/* Category filter tabs */}
      <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-zinc-100 dark:bg-[#0c0408] border border-zinc-200 dark:border-[#230917] w-fit">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCat(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              selectedCat === cat
                ? "bg-red-700 text-white shadow-sm"
                : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-white dark:hover:bg-[#16060e]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project) => {
          const hasWideBanner = project.image?.endsWith("banner.jpg");

          return (
            <div
              key={project.id}
              className="h-full rounded-2xl bg-white dark:bg-[#0c0408] border border-zinc-200 dark:border-[#230917] hover:border-red-500/45 p-6 sm:p-8 flex flex-col justify-between transition-colors group shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-red-50 dark:bg-red-950/80 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800/40 font-bold">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-[#16060e] text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-[#2b0c1c] font-medium">
                      Featured
                    </span>
                  )}
                </div>

                {hasWideBanner && project.image ? (
                  <Link
                    href={`/projects/${project.id}`}
                    className="block relative w-full h-44 rounded-xl overflow-hidden border border-zinc-200 dark:border-[#200816] bg-zinc-950"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                ) : (
                  <div className="flex items-center gap-3 pt-1">
                    {project.image ? (
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-zinc-200 dark:border-[#2b0c1c] bg-zinc-950 p-1 shrink-0">
                        <Image
                          src={project.image}
                          alt={`${project.title} emblem`}
                          fill
                          sizes="48px"
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-xl border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/40 flex items-center justify-center shrink-0">
                        <Code2 className="w-5 h-5 text-red-700 dark:text-red-400" />
                      </div>
                    )}
                    <Link href={`/projects/${project.id}`}>
                      <h2 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors">
                        {project.title}
                      </h2>
                    </Link>
                  </div>
                )}

                {hasWideBanner && (
                  <Link href={`/projects/${project.id}`} className="block">
                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors">
                      {project.title}
                    </h2>
                  </Link>
                )}

                <div>
                  <p className="text-xs text-red-700 dark:text-red-400 font-semibold">
                    {project.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 mt-2.5 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Highlights */}
                <ul className="pt-2 space-y-1.5">
                  {project.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2.5 py-0.5 rounded bg-zinc-100 dark:bg-[#16060e] text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-[#2b0c1c] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-[#1c0713] flex flex-wrap items-center gap-2.5">
                <Link
                  href={`/projects/${project.id}`}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-red-700 hover:bg-red-600 text-white shadow-sm transition-colors flex items-center gap-1.5"
                >
                  <span>Architecture &amp; Docs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-[#16060e] hover:bg-zinc-200 dark:hover:bg-[#200816] transition-colors flex items-center gap-1.5"
                  >
                    <span>Live Site</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-[#16060e] transition-colors flex items-center gap-1.5"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
