"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, ExternalLink } from "lucide-react";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/data/socials";
import { getSocialIcon } from "@/components/icons/BrandIcons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-zinc-100 dark:bg-[#050103] border-t border-zinc-200 dark:border-[#200816] pt-14 pb-10 overflow-hidden font-sans transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-zinc-200 dark:border-[#1b0612]">
          {/* Column 1: Brand & Status */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-red-500/60 shadow-sm bg-zinc-900">
                <Image
                  src="/images/avatar.jpg"
                  alt="RafayShhh Avatar"
                  fill
                  loading="eager"
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-bold text-base text-zinc-900 dark:text-white tracking-tight block leading-tight">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-xs text-zinc-600 dark:text-zinc-400">
                  {PERSONAL_INFO.fullName}
                </span>
              </div>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm max-w-md leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs">
              <span className="inline-flex rounded-full h-2 w-2 bg-emerald-500 shrink-0" />
              <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                {PERSONAL_INFO.status}
              </span>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h2 className="text-xs font-bold text-red-700 dark:text-red-400 uppercase tracking-wider mb-4">
              Explore
            </h2>
            <ul className="space-y-2.5 text-xs text-zinc-700 dark:text-zinc-300">
              <li>
                <Link href="/" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/minecraft/mods" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Minecraft Mods (5)
                </Link>
              </li>
              <li>
                <Link href="/apps" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">
                  KreateKode Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  Software &amp; AI Projects
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h2 className="text-xs font-bold text-red-700 dark:text-red-400 uppercase tracking-wider mb-4">
              Connect
            </h2>
            <ul className="space-y-2.5 text-xs text-zinc-700 dark:text-zinc-300">
              {SOCIAL_LINKS.filter((s) => s.primary).map((social) => {
                const Icon = getSocialIcon(social.icon);
                return (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                      <span>{social.name}</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  </li>
                );
              })}
              <li className="pt-1">
                <Link
                  href="/socials"
                  className="text-red-700 dark:text-red-400 font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>All Profiles</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Top Button */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600 dark:text-zinc-400">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.fullName} ({PERSONAL_INFO.name}) • rafayshhh.site
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400 transition-colors px-3 py-1.5 rounded-lg bg-white dark:bg-[#12050c] border border-zinc-200 dark:border-[#220715] shadow-sm font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
