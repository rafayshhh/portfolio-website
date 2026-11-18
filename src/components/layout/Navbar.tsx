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
  Sparkles, 
  Mail, 
  ExternalLink 
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/socials";
import { DiscordIcon } from "@/components/icons/BrandIcons";
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
          ? "bg-[#080306]/95 backdrop-blur-md border-b border-[#250817] shadow-xl shadow-black/80"
          : "bg-[#080306]/70 backdrop-blur-sm border-b border-transparent"
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
            <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-red-500/60 shadow-glow-sm group-hover:scale-105 group-hover:border-red-400 transition-all bg-[#12040b]">
              <Image
                src="/images/avatar.jpg"
                alt="RafayShhh Avatar"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-red-400 transition-colors font-mono">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] text-zinc-500 font-mono tracking-wider -mt-0.5">
                rafayshhh.site
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#12050c]/90 p-1.5 rounded-full border border-[#2b0c1c] shadow-inner">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => sound.playClick()}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all flex items-center gap-1.5 relative ${
                    isActive
                      ? "text-white bg-red-600/30 text-red-300 border border-red-500/40 shadow-glow-sm"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/40"
                  }`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5 opacity-80" />}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="text-[9px] uppercase font-mono px-1.5 py-0.2 rounded-full bg-red-950 text-red-300 border border-red-800/40">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3 font-mono">
            <a
              href={PERSONAL_INFO.discordInvite}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#5865F2]/15 text-[#8ea0ff] hover:bg-[#5865F2]/25 border border-[#5865F2]/30 transition-all flex items-center gap-1.5"
            >
              <DiscordIcon className="w-3.5 h-3.5" />
              <span>Discord</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            <a
              href="/#contact"
              onClick={() => sound.playClick()}
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-red-600 hover:bg-red-500 text-white transition-all shadow-glow-sm hover:shadow-glow-red flex items-center gap-1.5 group"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2 font-mono">
            <a
              href={PERSONAL_INFO.discordInvite}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="px-2.5 py-1.5 rounded-lg bg-[#5865F2]/20 text-[#8ea0ff] border border-[#5865F2]/30 text-xs flex items-center gap-1"
              aria-label="Join Discord"
            >
              <DiscordIcon className="w-3.5 h-3.5" />
              <span>Discord</span>
            </a>
            <button
              onClick={() => {
                sound.playClick();
                setIsOpen(!isOpen);
              }}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-[#1a0812] border border-[#250917] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6 text-red-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0c0408]/98 border-b border-[#250817] backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200 font-mono">
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
                    ? "bg-red-600/20 text-red-400 border border-red-500/30"
                    : "text-zinc-300 hover:bg-[#16060e] hover:text-white"
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

          <div className="pt-3 border-t border-[#200713] flex flex-col gap-2">
            <a
              href="/#contact"
              onClick={() => {
                sound.playClick();
                setIsOpen(false);
              }}
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
