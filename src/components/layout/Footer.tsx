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
    <footer className="relative bg-zinc-100 dark:bg-[#050103] border-t border-zinc-200 dark:border-[#200816] pt-16 pb-12 overflow-hidden font-mono transition-colors duration-200">
      {/* Background glow decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-red-600/5 dark:bg-red-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-200 dark:border-[#1b0612]">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-red-500/60 shadow-sm bg-zinc-900">
                <Image
                  src="/images/avatar.jpg"
                  alt="RafayShhh Avatar"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-lg text-zinc-900 dark:text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm max-w-md leading-relaxed font-sans font-light">
              {PERSONAL_INFO.bio}
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-zinc-700 dark:text-zinc-300">
                {PERSONAL_INFO.status}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider mb-4">
              System Directory
            </h4>
            <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
              <li>
                <Link
                  href="/"
                  onClick={() => sound.playClick()}
                  className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  [1] Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  onClick={() => sound.playClick()}
                  className="hover:text-red-600 dark:hover:text-red-400 transition-colors flex items-center gap-1.5"
                >
                  <span>[2] Experience</span>
                  <span className="text-[9px] bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 px-1 py-0.2 rounded border border-red-200 dark:border-red-800/40">
                    5 Roles
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/minecraft"
                  onClick={() => sound.playClick()}
                  className="hover:text-emerald-500 transition-colors flex items-center gap-1.5"
                >
                  <span className="font-minecraft text-[11px]">[3] Minecraft</span>
                  <span className="text-[9px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-1 py-0.2 rounded border border-emerald-500/30">
                    3 Hubs
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/apps"
                  onClick={() => sound.playClick()}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="font-kreate">[4] Android (Kreate)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  onClick={() => sound.playClick()}
                  className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  [5] Software Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => sound.playClick()}
                  className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  [6] Direct Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Network Links */}
          <div>
            <h4 className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider mb-4">
              Network Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-zinc-600 dark:text-zinc-400">
              {SOCIAL_LINKS.map((s) => {
                const Icon = getSocialIcon(s.icon);
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="flex items-center gap-1.5 hover:text-red-600 dark:hover:text-red-400 transition-colors py-1 group"
                  >
                    <Icon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                    <span>{s.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name} ({PERSONAL_INFO.fullName}) • rafayshhh.site
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-red-600 dark:hover:text-red-400 transition-colors p-2 rounded-lg bg-white dark:bg-[#12050c] border border-zinc-200 dark:border-[#220715] shadow-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
