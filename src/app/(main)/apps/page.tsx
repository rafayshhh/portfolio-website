"use client";

import React from "react";
import Image from "next/image";
import { ANDROID_APPS } from "@/data/apps";
import { JsonLd } from "@/components/seo/JsonLd";
import { 
  Smartphone, 
  Download, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  ArrowUpRight,
  ArrowRight,
  ExternalLink,
  Globe
} from "lucide-react";
import { GithubIcon, AndroidIcon } from "@/components/icons/BrandIcons";
import { Card3DTilt } from "@/components/3d/Card3DTilt";
import Link from "next/link";
import { sound } from "@/lib/sound";

export default function AppsPage() {
  return (
    <div className="pt-12 pb-24 relative transition-colors duration-200">
      <JsonLd type="apps" />

      {/* Electric Cyan Ambient Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[650px] h-[340px] bg-cyan-500/10 dark:bg-cyan-400/15 blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Kreate Brand Header */}
        <div className="space-y-4 font-sans">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/70 border border-cyan-300 dark:border-cyan-500/40 text-cyan-800 dark:text-cyan-300 text-xs font-bold tracking-wider uppercase">
            <Zap className="w-3.5 h-3.5 text-cyan-500 animate-pulse" />
            <span>KreateKode Mobile Studio</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl sm:text-6xl font-black text-zinc-900 dark:text-white tracking-tight uppercase">
                KREATE<span className="text-cyan-500">KODE</span>
              </h1>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-cyan-200/70 mt-2 max-w-xl font-light tracking-wide leading-relaxed">
                Solo Founder Building Apps For Utility &amp; Lightweight That Solve Real Problems. Handcrafted with Flutter, Clean Architecture, and zero telemetry trackers.
              </p>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-100 dark:bg-[#071524] border border-zinc-200 dark:border-cyan-500/30 text-xs text-cyan-700 dark:text-cyan-300 shadow-sm shrink-0">
              <ShieldCheck className="w-4 h-4 text-cyan-500" />
              <span className="font-semibold uppercase tracking-wider">100% Offline &amp; Private</span>
            </div>
          </div>
        </div>

        {/* Electric Kreate App Showcase */}
        <div className="space-y-8">
          {ANDROID_APPS.map((app) => (
            <Card3DTilt key={app.id} maxTilt={4} glare={true} className="rounded-2xl">
              <div className="p-6 sm:p-10 rounded-2xl bg-white dark:bg-gradient-to-br dark:from-[#05111d] dark:via-[#040c16] dark:to-[#03080e] border border-zinc-200 dark:border-cyan-500/30 hover:border-cyan-500/70 transition-all shadow-md dark:shadow-[0_10px_35px_rgba(0,240,255,0.1)] group font-sans">
                {/* App Top Meta */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-zinc-100 dark:border-cyan-900/40">
                  <div className="flex items-center gap-3">
                    {app.image ? (
                      <div className="relative w-12 h-12 rounded-2xl overflow-hidden border border-cyan-500/40 bg-zinc-900 shrink-0 shadow-sm">
                        <Image
                          src={app.image}
                          alt={app.title}
                          fill
                          sizes="48px"
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                    ) : (
                      <span className="p-3 rounded-2xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/30">
                        <AndroidIcon className="w-6 h-6" />
                      </span>
                    )}
                    <div>
                      <span className="text-xs uppercase tracking-wider text-cyan-700 dark:text-cyan-400 font-bold block">
                        {app.category}
                      </span>
                      <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono font-semibold">
                        {app.version} • {app.status}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-[#081a2e] text-zinc-700 dark:text-cyan-300 border border-zinc-200 dark:border-cyan-500/30 font-mono">
                    {app.minAndroidVersion}
                  </span>
                </div>

                {/* App Title & Copy */}
                <div className="py-6 space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors tracking-tight">
                    {app.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-cyan-700 dark:text-cyan-400 font-semibold tracking-wide">
                    {app.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-sans font-light leading-relaxed max-w-3xl">
                    {app.description}
                  </p>
                </div>

                {/* Architecture Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-6">
                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#071626] border border-zinc-200 dark:border-cyan-900/40 text-xs space-y-1">
                    <span className="text-[11px] text-zinc-500 dark:text-cyan-300/70 uppercase tracking-wider block font-bold">
                      Privacy &amp; Data Ethos
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold block">
                      ● Zero analytics SDKs, zero background telemetry trackers
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#071626] border border-zinc-200 dark:border-cyan-900/40 text-xs space-y-1">
                    <span className="text-[11px] text-zinc-500 dark:text-cyan-300/70 uppercase tracking-wider block font-bold">
                      Clean Reactive Engine
                    </span>
                    <span className="text-cyan-700 dark:text-cyan-300 font-semibold block">
                      ● Riverpod 2.x state + on-device Hive storage persistence
                    </span>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="space-y-2 pb-6 border-b border-zinc-100 dark:border-cyan-900/40">
                  {app.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-300 font-sans font-light">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills & Actions */}
                <div className="pt-6 flex flex-wrap items-center justify-between gap-4 font-mono">
                  <div className="flex flex-wrap gap-1.5">
                    {app.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-[#081a2e] text-zinc-700 dark:text-cyan-300 border border-zinc-200 dark:border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <Link
                      href={`/apps/${app.id}`}
                      onClick={() => sound.playClick()}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white dark:text-black dark:bg-cyan-400 dark:hover:bg-cyan-300 transition-all flex items-center gap-1.5 shadow-sm"
                    >
                      <span>App Landing Page &amp; Docs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {app.playStoreUrl && (
                      <a
                        href={app.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sound.playClick()}
                        className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white dark:text-black dark:bg-cyan-400 dark:hover:bg-cyan-300 transition-all flex items-center gap-1.5 shadow-sm"
                      >
                        <AndroidIcon className="w-4 h-4" />
                        <span>Google Play</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {app.webAppUrl && (
                      <a
                        href={app.webAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sound.playClick()}
                        className="px-3.5 py-2 rounded-xl text-xs font-medium text-cyan-600 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/60 hover:bg-cyan-100 dark:hover:bg-cyan-900/40 border border-cyan-200 dark:border-cyan-500/30 transition-all flex items-center gap-1.5"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>Web Studio</span>
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </a>
                    )}
                    {app.githubUrl && (
                      <a
                        href={app.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sound.playClick()}
                        className="px-3.5 py-2 rounded-xl text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white bg-zinc-100 dark:bg-[#081a2e] border border-zinc-200 dark:border-cyan-500/30 transition-colors flex items-center gap-1.5"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card3DTilt>
          ))}
        </div>

        {/* Kreate Custom Commission Card */}
        <div className="p-8 rounded-2xl bg-zinc-100 dark:bg-gradient-to-r dark:from-[#061524] dark:to-[#030911] border border-zinc-200 dark:border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm dark:shadow-xl font-sans">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2 justify-center sm:justify-start uppercase tracking-wide">
              <Zap className="w-4 h-4 text-cyan-500" />
              <span>Need a custom utility or offline native app?</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-cyan-200/70 font-sans font-light">
              Crafted under KreateKode with Flutter, Dart, Riverpod, and zero-telemetry performance focus.
            </p>
          </div>
          <Link
            href="/contact"
            onClick={() => sound.playClick()}
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white dark:text-black dark:bg-cyan-400 dark:hover:bg-cyan-300 shadow-sm transition-all shrink-0 uppercase tracking-wider"
          >
            Inquire App &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
