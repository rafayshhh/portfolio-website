"use client";

import React, { useState } from "react";
import { Project } from "@/data/projects";
import { 
  ExternalLink, 
  Check, 
  Code2, 
  Layers, 
  Terminal 
} from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { sound } from "@/lib/sound";

interface ProjectsClientListProps {
  projects: Project[];
}

const CATEGORIES = ["All", "Full-Stack", "CLI & Tools", "Web App"];

export function ProjectsClientList({ projects }: ProjectsClientListProps) {
  const [selectedCat, setSelectedCat] = useState("All");

  const filteredProjects = projects.filter((p) => {
    if (selectedCat === "All") return true;
    return p.category.toLowerCase() === selectedCat.toLowerCase();
  });

  return (
    <div className="space-y-8 font-mono">
      {/* Category filter tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#0c0408] border border-[#230917] w-fit">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              sound.playClick();
              setSelectedCat(cat);
            }}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              selectedCat === cat
                ? "bg-red-600 text-white shadow-glow-sm font-bold"
                : "text-zinc-400 hover:text-white hover:bg-[#16060e]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl bg-[#0c0408] border border-[#230917] hover:border-red-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all group shadow-xl shadow-black/60"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-red-950/80 text-red-300 border border-red-800/40 font-bold">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#16060e] text-zinc-400 border border-[#2b0c1c]">
                    Featured
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-red-400 font-semibold mt-1">
                  {project.tagline}
                </p>
                <p className="text-xs sm:text-sm text-zinc-300 mt-3 leading-relaxed font-sans font-light">
                  {project.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-2 space-y-1.5">
                {project.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-zinc-400 font-sans">
                    <Check className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded bg-[#16060e] text-zinc-300 border border-[#2b0c1c]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 mt-6 border-t border-[#1c0713] flex flex-wrap items-center gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-500 text-white shadow-glow-sm transition-all flex items-center gap-1.5"
                >
                  <span>Live Preview</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="px-3.5 py-2 rounded-xl text-xs font-medium text-zinc-400 hover:text-white hover:bg-[#16060e] transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
