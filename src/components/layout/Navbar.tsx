"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Gamepad2,
  Smartphone,
  Code2,
  Briefcase,
  Mail,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/socials";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV_ITEMS = [
  { name: "Overview", href: "/" },
  { name: "Mods", href: "/minecraft", icon: Gamepad2, accent: "emerald" as const },
  { name: "Apps", href: "/apps", icon: Smartphone, accent: "cyan" as const },
  { name: "Projects", href: "/projects", icon: Code2 },
  { name: "Experience", href: "/experience", icon: Briefcase },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isRouteActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 dark:bg-[#080306]/95 backdrop-blur-md border-b border-zinc-200 dark:border-[#250817] shadow-sm dark:shadow-xl dark:shadow-black/60"
          : "bg-white/80 dark:bg-[#080306]/80 backdrop-blur-sm border-b border-zinc-200/50 dark:border-[#200613]/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-red-500/40 bg-zinc-900 shadow-sm group-hover:border-red-500 transition-colors shrink-0">
              <Image
                src="/images/avatar.jpg"
                alt="RafayShhh Avatar"
                fill
                priority
                sizes="36px"
                className="object-cover"
              />
            </div>
            <div className="text-left leading-tight">
              <span className="text-sm font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors block">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] text-zinc-600 dark:text-zinc-400 font-medium block">
                {PERSONAL_INFO.fullName}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-1 bg-zinc-100/90 dark:bg-[#12050c] p-1 rounded-xl border border-zinc-200 dark:border-[#2b0c1c] text-xs">
            {NAV_ITEMS.map((item) => {
              const active = isRouteActive(item.href);
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1.5 ${
                    active
                      ? item.accent === "cyan"
                        ? "bg-cyan-50 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 font-semibold border border-cyan-500/30"
                        : item.accent === "emerald"
                        ? "bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-semibold border border-emerald-500/30"
                        : "bg-white dark:bg-red-700 text-red-700 dark:text-white shadow-sm font-semibold"
                      : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5"
                  }`}
                >
                  {Icon && (
                    <Icon
                      className={`w-3.5 h-3.5 ${
                        active
                          ? item.accent === "cyan"
                            ? "text-cyan-600 dark:text-cyan-400"
                            : item.accent === "emerald"
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-red-700 dark:text-white"
                          : "text-zinc-500 dark:text-zinc-400"
                      }`}
                    />
                  )}
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />

            <a
              href="https://github.com/rafayshhh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="RafayShhh on GitHub"
              className="p-2 rounded-xl text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-[#14060e] border border-zinc-200 dark:border-[#2b0c1c] hover:border-red-500/40 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <Link
              href="/contact"
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-red-700 hover:bg-red-600 text-white transition-colors shadow-sm flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-[#1a0812] border border-zinc-200 dark:border-[#250917] transition-colors"
              aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5 text-red-500" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden bg-white/98 dark:bg-[#0c0408]/98 border-b border-zinc-200 dark:border-[#250817] backdrop-blur-xl px-4 pt-3 pb-5 space-y-1.5 shadow-lg"
        >
          {NAV_ITEMS.map((item) => {
            const active = isRouteActive(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active
                    ? item.accent === "cyan"
                      ? "bg-cyan-50 dark:bg-cyan-950/60 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30 font-semibold"
                      : item.accent === "emerald"
                      ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 font-semibold"
                      : "bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-500/30 font-semibold"
                    : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-[#16060e]"
                }`}
              >
                {Icon && <Icon className="w-4 h-4 shrink-0" />}
                <span>{item.name}</span>
              </Link>
            );
          })}

          <div className="pt-3 border-t border-zinc-200 dark:border-[#230816] grid grid-cols-2 gap-2">
            <a
              href="https://github.com/rafayshhh"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 rounded-xl text-xs font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-[#16060e] border border-zinc-200 dark:border-[#2b0c1c] flex items-center justify-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="py-2.5 px-3 rounded-xl text-xs font-semibold text-center bg-red-700 hover:bg-red-600 text-white flex items-center justify-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
