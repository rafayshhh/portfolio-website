"use client";

import React from "react";
import { Briefcase, Calendar, CheckCircle2, Sparkles, Terminal } from "lucide-react";
import { WORK_EXPERIENCE } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section className="py-20 relative bg-[#060205] border-t border-b border-[#200816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-400 mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Evolution & History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-mono">
            EXPERIENCE & MILESTONES
          </h2>
          <p className="text-sm text-zinc-400 mt-2 font-light">
            A documented track record of mod releases, Android development, and systems engineering.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-[#2b0c1c] ml-3 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {WORK_EXPERIENCE.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[33px] sm:-left-[49px] top-1.5 w-4 h-4 rounded-full bg-[#080306] border-2 border-red-500 group-hover:bg-red-500 group-hover:scale-125 transition-all shadow-glow-sm" />

              <div className="p-6 sm:p-8 rounded-2xl bg-[#0c0408] border border-[#230917] group-hover:border-red-500/40 transition-all space-y-4 shadow-lg shadow-black/60">
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-red-300 transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-xs text-red-400 font-semibold mt-0.5">
                      {item.companyOrContext}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 bg-[#16060e] px-3 py-1 rounded-full border border-[#2b0c1c]">
                    <Calendar className="w-3 h-3 text-red-400" />
                    <span>{item.period}</span>
                    {item.current && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 ml-1" />
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                  {item.description}
                </p>

                {/* Achievements List */}
                <ul className="space-y-2 pt-2 border-t border-[#1c0713]">
                  {item.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills used */}
                <div className="flex flex-wrap gap-1.5 pt-2 font-mono">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2 py-0.5 rounded bg-[#16060e] text-zinc-300 border border-[#2b0c1c]"
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
