"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowUp, 
  ExternalLink 
} from "lucide-react";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/data/socials";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#060608] border-t border-[#1a1a24] pt-16 pb-12 overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-red-600/10 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#181822]">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600 to-rose-950 flex items-center justify-center font-bold text-white border border-red-500/30">
                R
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs text-zinc-300 font-medium">
                {PERSONAL_INFO.status}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider mb-4 font-mono">
              Directory
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link href="/" className="hover:text-red-400 transition-colors">
                  Overview & Experience
                </Link>
              </li>
              <li>
                <Link href="/mods" className="hover:text-red-400 transition-colors flex items-center gap-1.5">
                  <span>Minecraft Mods</span>
                  <span className="text-[10px] bg-red-950 text-red-300 px-1.5 py-0.2 rounded border border-red-800/40">
                    Hot
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/apps" className="hover:text-red-400 transition-colors">
                  Android Applications
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-red-400 transition-colors">
                  Software Projects
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-400 transition-colors">
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Community */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider mb-4 font-mono">
              Network & Socials
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-zinc-400 hover:text-red-400 py-1 transition-colors group"
                >
                  <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name} ({PERSONAL_INFO.fullName}). All rights reserved.</span>
            <span className="text-zinc-500">•</span>
            <span className="font-mono text-zinc-400">rafayshhh.site</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#14141c] hover:bg-red-600/20 text-zinc-400 hover:text-red-400 border border-[#22222f] transition-all"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
