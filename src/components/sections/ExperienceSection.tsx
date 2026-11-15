"use client";

import React from "react";
import { Briefcase, Calendar, CheckCircle2, Sparkles } from "lucide-react";
import { WORK_EXPERIENCE } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section className="py-20 relative bg-[#09090c]/60 border-t border-b border-[#161622]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-400 mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Experience & Milestones
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            A journey through mod development, Android engineering, and software craftsmanship.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-[#242436] ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {WORK_EXPERIENCE.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#08080a] border-2 border-red-500 group-hover:bg-red-500 group-hover:scale-125 transition-all shadow-glow-sm" />

              <div className="p-6 sm:p-8 rounded-2xl bg-[#0f0f15] border border-[#1e1e2b] group-hover:border-red-500/30 transition-all space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-red-300 transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-sm text-red-400/90 font-medium">
                      {item.companyOrContext}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                    <Calendar className="w-3 h-3 text-red-400" />
                    <span>{item.period}</span>
                    {item.current && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 ml-1" />
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Achievements List */}
                <ul className="space-y-2 pt-2 border-t border-[#1a1a26]">
                  {item.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills used */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#171722] text-zinc-300 border border-[#232332]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
