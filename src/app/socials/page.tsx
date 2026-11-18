"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowUpRight, 
  Copy, 
  Check, 
  Mail, 
  Sparkles,
  ShieldCheck,
  Share2
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
  ThreadsIcon 
} from "@/components/icons/BrandIcons";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { sound } from "@/lib/sound";

export default function SocialsPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      sound.playClick();
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getBrandIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 transition-transform group-hover:scale-110" };
    switch (iconName.toLowerCase()) {
      case "github":
        return <GithubIcon {...props} />;
      case "discord":
        return <DiscordIcon {...props} className="w-5 h-5 text-[#5865F2] group-hover:scale-110" />;
      case "curseforge":
        return <CurseForgeIcon {...props} className="w-5 h-5 text-[#f16436] group-hover:scale-110" />;
      case "modrinth":
        return <ModrinthIcon {...props} className="w-5 h-5 text-[#00AF5C] group-hover:scale-110" />;
      case "chess":
        return <ChessComIcon {...props} className="w-5 h-5 text-[#81b64c] group-hover:scale-110" />;
      case "youtube":
        return <YoutubeIcon {...props} className="w-5 h-5 text-[#FF0000] group-hover:scale-110" />;
      case "twitter":
      case "x":
        return <XTwitterIcon {...props} />;
      case "instagram":
        return <InstagramIcon {...props} className="w-5 h-5 text-[#E4405F] group-hover:scale-110" />;
      case "threads":
        return <ThreadsIcon {...props} />;
      default:
        return <ArrowUpRight {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#080306] text-zinc-900 dark:text-zinc-100 flex flex-col items-center justify-between p-4 sm:p-6 transition-colors duration-200 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-red-500/10 dark:bg-red-600/15 blur-3xl pointer-events-none rounded-full" />

      {/* Top Bar with Theme Toggle */}
      <header className="w-full max-w-md flex items-center justify-between py-2 relative z-10">
        <Link
          href="/"
          onClick={() => sound.playClick()}
          className="text-xs font-mono font-bold tracking-wider text-zinc-500 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-400 transition-colors flex items-center gap-1.5"
          title="Return to Portfolio"
        >
          <span>RafayShhh</span>
          <span className="text-[10px] text-zinc-400 dark:text-zinc-600">•</span>
          <span className="text-[11px] font-normal text-zinc-400 dark:text-zinc-500">Hub</span>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </header>

      {/* Main Bio & Links Container */}
      <main className="w-full max-w-md mx-auto my-auto py-6 relative z-10 flex flex-col items-center">
        {/* Profile Avatar */}
        <div className="relative mb-4 group">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-red-500 shadow-xl shadow-red-500/20 bg-zinc-900">
            <Image
              src="/images/avatar.jpg"
              alt="RafayShhh Avatar"
              fill
              priority
              sizes="112px"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <span className="absolute bottom-0 right-0 p-1.5 rounded-full bg-emerald-500 text-white border-2 border-white dark:border-[#080306] shadow-md" title="Active">
            <span className="sr-only">Active</span>
          </span>
        </div>

        {/* Name & Headline */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <h1 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-white font-mono">
              {PERSONAL_INFO.name}
            </h1>
            <span className="inline-flex items-center text-red-600 dark:text-red-400" title="Verified Creator">
              <ShieldCheck className="w-5 h-5" />
            </span>
          </div>
          <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 font-medium mb-2">
            @{PERSONAL_INFO.handle} • {PERSONAL_INFO.fullName}
          </p>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 max-w-xs mx-auto leading-relaxed">
            Minecraft Mod Developer & Systems Engineer
          </p>
        </div>

        {/* Social Links List */}
        <div className="w-full space-y-2.5">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="group flex items-center justify-between p-3.5 rounded-2xl transition-all duration-200
                bg-white dark:bg-[#12050c]
                border border-zinc-200 dark:border-red-950/60
                hover:border-red-500/50 dark:hover:border-red-500/60
                hover:shadow-md hover:shadow-red-500/10
                active:scale-[0.99]"
            >
              <div className="flex items-center gap-3.5">
                <span className="p-2 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-200 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  {getBrandIcon(social.icon)}
                </span>
                <div className="text-left font-mono">
                  <div className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {social.name}
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-sans">
                    {social.username}
                  </div>
                </div>
              </div>

              <span className="p-1 text-zinc-400 dark:text-zinc-500 group-hover:text-red-500 dark:group-hover:text-red-400 group-hover:translate-x-0.5 transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
          ))}

          {/* Direct Email Link */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            onClick={() => sound.playClick()}
            className="group flex items-center justify-between p-3.5 rounded-2xl transition-all duration-200
              bg-white dark:bg-[#12050c]
              border border-zinc-200 dark:border-red-950/60
              hover:border-red-500/50 dark:hover:border-red-500/60
              hover:shadow-md hover:shadow-red-500/10
              active:scale-[0.99]"
          >
            <div className="flex items-center gap-3.5">
              <span className="p-2 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-200 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                <Mail className="w-5 h-5 text-red-500" />
              </span>
              <div className="text-left font-mono">
                <div className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  Direct Email
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-sans">
                  {PERSONAL_INFO.email}
                </div>
              </div>
            </div>

            <span className="p-1 text-zinc-400 dark:text-zinc-500 group-hover:text-red-500 dark:group-hover:text-red-400 group-hover:translate-x-0.5 transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* Share / Copy Link Button */}
        <div className="w-full mt-6 pt-2">
          <button
            type="button"
            onClick={handleCopy}
            className="w-full py-3 px-4 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2
              bg-zinc-900 dark:bg-red-600 text-white
              hover:bg-red-600 dark:hover:bg-red-500
              shadow-lg shadow-black/10 dark:shadow-red-600/25 active:scale-98"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Link Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span>Share Socials Page</span>
              </>
            )}
          </button>
        </div>
      </main>

      {/* Clean minimal footer */}
      <footer className="w-full max-w-md py-4 text-center text-[11px] font-mono text-zinc-400 dark:text-zinc-500 relative z-10">
        © 2026 {PERSONAL_INFO.name} • rafayshhh.site
      </footer>
    </div>
  );
}
