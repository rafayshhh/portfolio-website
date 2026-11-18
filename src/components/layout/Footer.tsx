"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowUp, 
  ExternalLink 
} from "lucide-react";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/data/socials";
import { getSocialIcon } from "@/components/icons/BrandIcons";
import { sound } from "@/lib/sound";

export function Footer() {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050103] border-t border-[#200816] pt-16 pb-12 overflow-hidden font-mono">
      {/* Background glow decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-red-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#1b0612]">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-red-500/60 shadow-glow-sm bg-[#12040b]">
                <Image
                  src="/images/avatar.jpg"
                  alt="RafayShhh Avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-md leading-relaxed font-sans font-light">
              {PERSONAL_INFO.bio}
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-zinc-300">
                {PERSONAL_INFO.status}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-zinc-200 uppercase tracking-wider mb-4 text-red-400">
              System Directory
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <Link
                  href="/"
                  onClick={() => sound.playClick()}
                  className="hover:text-red-400 transition-colors"
                >
                  [1] Overview & Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/mods"
                  onClick={() => sound.playClick()}
                  className="hover:text-red-400 transition-colors flex items-center gap-1.5"
                >
                  <span>[2] Minecraft Mods</span>
                  <span className="text-[9px] bg-red-950 text-red-300 px-1 py-0.2 rounded border border-red-800/40">
                    Hot
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/apps"
                  onClick={() => sound.playClick()}
                  className="hover:text-red-400 transition-colors"
                >
                  [3] Android Applications
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  onClick={() => sound.playClick()}
                  className="hover:text-red-400 transition-colors"
                >
                  [4] Software Projects
                </Link>
              </li>
              <li>
                <a
                  href="/#contact"
                  onClick={() => sound.playClick()}
                  className="hover:text-red-400 transition-colors"
                >
                  Direct Dispatch Form
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Community */}
          <div>
            <h4 className="text-xs font-bold text-zinc-200 uppercase tracking-wider mb-4 text-red-400">
              Network Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {SOCIAL_LINKS.map((link) => {
                const Icon = getSocialIcon(link.name);
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="flex items-center gap-2 text-zinc-400 hover:text-red-400 py-1 transition-colors group"
                  >
                    <Icon className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:text-red-400 transition-all shrink-0" />
                    <span className="truncate">{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name} ({PERSONAL_INFO.fullName})</span>
            <span className="text-zinc-600">•</span>
            <span className="text-red-400/80">rafayshhh.site</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#14060e] hover:bg-red-600/20 text-zinc-400 hover:text-red-400 border border-[#2b0c1c] transition-all cursor-pointer"
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
