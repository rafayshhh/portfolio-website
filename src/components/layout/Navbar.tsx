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
  Mail, 
  ExternalLink 
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/socials";
import { DiscordIcon } from "@/components/icons/BrandIcons";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { sound } from "@/lib/sound";

const NAV_ITEMS = [
  { name: "Overview", href: "/" },
  { name: "Minecraft Mods", href: "/mods", icon: Gamepad2, badge: "Fabric" },
  { name: "Android Apps", href: "/apps", icon: Smartphone, badge: "Compose" },
  { name: "Projects", href: "/projects", icon: Code2 },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#080306]/95 backdrop-blur-md border-b border-zinc-200 dark:border-[#250817] shadow-sm dark:shadow-xl dark:shadow-black/80"
          : "bg-white/70 dark:bg-[#080306]/70 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo / Brand with Pixel Avatar */}
          <Link 
            href="/" 
            onClick={() => sound.playClick()}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-red-500/40 bg-zinc-900 shadow-sm group-hover:border-red-500 transition-colors">
              <Image
                src="/images/avatar.jpg"
                alt="RafayShhh Avatar"
                fill
                sizes="40px"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="font-mono text-left">
              <div className="text-sm font-black tracking-tight text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors flex items-center gap-1.5">
                <span>{PERSONAL_INFO.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block animate-pulse" />
              </div>
              <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium tracking-wide">
                rafayshhh.site
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-100 dark:bg-[#12050c] p-1.5 rounded-xl border border-zinc-200 dark:border-[#2b0c1c] font-mono text-xs">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => sound.playClick()}
                  className={`px-3.5 py-1.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 relative ${
                    isActive
                      ? "bg-white dark:bg-red-600 text-red-600 dark:text-white shadow-sm font-bold"
                      : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5"
                  }`}
                >
                  {Icon && (
                    <Icon
                      className={`w-3.5 h-3.5 ${
                        isActive ? "text-red-600 dark:text-white" : "text-zinc-400 dark:text-zinc-500"
                      }`}
                    />
                  )}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span
                      className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${
                        isActive
                          ? "bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-200"
                          : "bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5 font-mono">
            <ThemeToggle />

            <a
              href={PERSONAL_INFO.discordInvite}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-[#5865F2]/10 dark:bg-[#5865F2]/15 text-[#4752c4] dark:text-[#8ea0ff] hover:bg-[#5865F2]/20 border border-[#5865F2]/20 dark:border-[#5865F2]/30 transition-all flex items-center gap-1.5"
            >
              <DiscordIcon className="w-3.5 h-3.5" />
              <span>Discord</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            <a
              href="/#contact"
              onClick={() => sound.playClick()}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-red-600 hover:bg-red-500 text-white transition-all shadow-sm hover:shadow-red-500/20 flex items-center gap-1.5 group"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex md:hidden items-center gap-2 font-mono">
            <ThemeToggle />
            <a
              href={PERSONAL_INFO.discordInvite}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="p-2 rounded-xl bg-[#5865F2]/15 text-[#4752c4] dark:text-[#8ea0ff] border border-[#5865F2]/25 text-xs flex items-center"
              aria-label="Join Discord"
            >
              <DiscordIcon className="w-4 h-4" />
            </a>
            <button
              onClick={() => {
                sound.playClick();
                setIsOpen(!isOpen);
              }}
              className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-[#1a0812] border border-zinc-200 dark:border-[#250917] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5 text-red-500" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white/98 dark:bg-[#0c0408]/98 border-b border-zinc-200 dark:border-[#250817] backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200 font-mono shadow-lg">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  sound.playClick();
                  setIsOpen(false);
                }}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-red-50 dark:bg-red-600/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/30"
                    : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-[#16060e]"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {Icon && <Icon className="w-4 h-4 text-red-500" />}
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-zinc-200 dark:border-[#230816] flex flex-col gap-2">
            <a
              href="/#contact"
              onClick={() => {
                sound.playClick();
                setIsOpen(false);
              }}
              className="w-full py-2.5 rounded-xl text-xs font-bold text-center bg-red-600 text-white shadow-sm flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Contact via Resend</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
