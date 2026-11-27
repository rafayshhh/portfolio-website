"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Mail,
  ShieldCheck,
  Share2,
} from "lucide-react";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/data/socials";
import {
  GithubIcon,
  DiscordIcon,
  CurseForgeIcon,
  ModrinthIcon,
  ChessComIcon,
  YoutubeIcon,
  XTwitterIcon,
  InstagramIcon,
  ThreadsIcon,
} from "@/components/icons/BrandIcons";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function SocialsPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      // Clipboard API unavailable
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getBrandIcon = (iconName: string) => {
    const props = { className: "w-5 h-5" };
    switch (iconName.toLowerCase()) {
      case "github":
        return <GithubIcon {...props} />;
      case "discord":
        return <DiscordIcon {...props} className="w-5 h-5 text-[#5865F2]" />;
      case "curseforge":
        return <CurseForgeIcon {...props} className="w-5 h-5 text-[#c2410c]" />;
      case "modrinth":
        return <ModrinthIcon {...props} className="w-5 h-5 text-[#00AF5C]" />;
      case "chess":
        return <ChessComIcon {...props} className="w-5 h-5 text-[#81b64c]" />;
      case "youtube":
        return <YoutubeIcon {...props} className="w-5 h-5 text-[#FF0000]" />;
      case "twitter":
      case "x":
        return <XTwitterIcon {...props} />;
      case "instagram":
        return <InstagramIcon {...props} className="w-5 h-5 text-[#E4405F]" />;
      case "threads":
        return <ThreadsIcon {...props} />;
      default:
        return <ArrowUpRight {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#080306] text-zinc-900 dark:text-zinc-100 flex flex-col items-center justify-between p-4 sm:p-6 transition-colors duration-200 relative font-sans">
      <header className="w-full max-w-md flex items-center justify-between py-2 relative z-10">
        <Link
          href="/"
          className="text-xs font-bold tracking-tight text-zinc-700 dark:text-zinc-200 hover:text-red-700 dark:hover:text-red-400 transition-colors flex items-center gap-1.5"
        >
          <span>{PERSONAL_INFO.name}</span>
          <span className="text-zinc-400">•</span>
          <span className="font-normal text-zinc-600 dark:text-zinc-400">Portfolio</span>
        </Link>
        <ThemeToggle />
      </header>

      <main className="w-full max-w-md mx-auto my-auto py-6 relative z-10 flex flex-col items-center">
        <div className="relative mb-4">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-red-500 shadow-lg bg-zinc-900">
            <Image
              src="/images/avatar.jpg"
              alt="RafayShhh portrait"
              fill
              priority
              sizes="112px"
              className="object-cover"
            />
          </div>
          <span className="sr-only">Active profile</span>
        </div>

        <div className="text-center mb-6 space-y-1">
          <div className="flex items-center justify-center gap-1.5">
            <h1 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-white">
              {PERSONAL_INFO.name}
            </h1>
            <ShieldCheck className="w-5 h-5 text-red-600 dark:text-red-400" aria-hidden="true" />
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">
            @{PERSONAL_INFO.handle} • {PERSONAL_INFO.fullName}
          </p>
          <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 max-w-xs mx-auto leading-relaxed pt-1">
            Software Engineer, Minecraft Mod &amp; Flutter Developer
          </p>
        </div>

        <div className="w-full space-y-2.5">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-3.5 rounded-2xl transition-colors bg-white dark:bg-[#12050c] border border-zinc-200 dark:border-red-950/60 hover:border-red-500/50"
            >
              <div className="flex items-center gap-3.5">
                <span className="p-2 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-200">
                  {getBrandIcon(social.icon)}
                </span>
                <div className="text-left">
                  <div className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors">
                    {social.name}
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">
                    {social.username}
                  </div>
                </div>
              </div>

              <ArrowUpRight className="w-4 h-4 text-zinc-500 dark:text-zinc-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
            </a>
          ))}

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="group flex items-center justify-between p-3.5 rounded-2xl transition-colors bg-white dark:bg-[#12050c] border border-zinc-200 dark:border-red-950/60 hover:border-red-500/50"
          >
            <div className="flex items-center gap-3.5">
              <span className="p-2 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
                <Mail className="w-5 h-5 text-red-600 dark:text-red-400" />
              </span>
              <div className="text-left">
                <div className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors">
                  Direct Email
                </div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">
                  {PERSONAL_INFO.email}
                </div>
              </div>
            </div>

            <ArrowUpRight className="w-4 h-4 text-zinc-500 dark:text-zinc-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
          </a>
        </div>

        <div className="w-full mt-6">
          <button
            type="button"
            onClick={handleCopy}
            className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 bg-red-700 hover:bg-red-600 text-white shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-200" />
                <span>Link Copied</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span>Share Profile Page</span>
              </>
            )}
          </button>
        </div>
      </main>

      <footer className="w-full max-w-md py-4 text-center text-xs text-zinc-600 dark:text-zinc-400 relative z-10">
        © {new Date().getFullYear()} {PERSONAL_INFO.fullName} • rafayshhh.site
      </footer>
    </div>
  );
}
