"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  Gamepad2, 
  Smartphone, 
  Code2, 
  Sparkles, 
  Mail, 
  ExternalLink 
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/socials";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08080a]/90 backdrop-blur-md border-b border-[#1f1f28] shadow-lg shadow-black/50"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-red-600 to-rose-950 flex items-center justify-center font-bold text-white shadow-glow-sm group-hover:scale-105 transition-transform border border-red-500/30">
              <span className="text-base tracking-wider">R</span>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#08080a]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-red-400 transition-colors flex items-center gap-1.5">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] text-zinc-400 font-mono tracking-wider -mt-0.5">
                rafayshhh.site
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121218]/80 p-1.5 rounded-full border border-[#232330] shadow-inner">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 relative ${
                    isActive
                      ? "text-white bg-red-600/20 text-red-400 border border-red-500/30 shadow-glow-sm"
                      : "text-zinc-300 hover:text-white hover:bg-zinc-800/50"
                  }`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5 opacity-80" />}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded-full bg-red-950/80 text-red-300 border border-red-800/40">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.discordInvite}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#5865F2]/15 text-[#8ea0ff] hover:bg-[#5865F2]/25 border border-[#5865F2]/30 transition-all flex items-center gap-1.5"
            >
              <span>Discord</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            <a
              href="#contact"
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-red-600 hover:bg-red-500 text-white transition-all shadow-glow-sm hover:shadow-glow-red flex items-center gap-1.5 group"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={PERSONAL_INFO.discordInvite}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#5865F2]/20 text-[#8ea0ff] border border-[#5865F2]/30 text-xs"
              aria-label="Join Discord"
            >
              Discord
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-[#1a1a24] border border-[#22222f] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6 text-red-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0c0c12]/95 border-b border-[#22222e] backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-red-600/20 text-red-400 border border-red-500/30"
                    : "text-zinc-300 hover:bg-[#161620] hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {Icon && <Icon className="w-4 h-4 text-red-400" />}
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-950 text-red-300 border border-red-800/40">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-[#20202c] flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 rounded-xl text-center text-sm font-semibold bg-red-600 text-white shadow-glow-sm"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
