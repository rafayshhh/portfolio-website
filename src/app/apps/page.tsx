import React from "react";
import type { Metadata } from "next";
import { ANDROID_APPS } from "@/data/apps";
import { JsonLd } from "@/components/seo/JsonLd";
import { Smartphone, Download, CheckCircle2, ShieldCheck, Cpu, Terminal, Sparkles } from "lucide-react";
import { GithubIcon, AndroidIcon } from "@/components/icons/BrandIcons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Android Applications — Kotlin & Jetpack Compose Native",
  description:
    "Explore native Android mobile applications engineered by RafayShhh using Kotlin, Jetpack Compose, and Material Design 3. Download APKs directly or browse on GitHub.",
  keywords: [
    "Android Apps",
    "Kotlin developer",
    "Jetpack Compose",
    "RafayShhh Android",
    "Android utility app",
    "Material You Android",
    "APK direct download",
  ],
  alternates: {
    canonical: "/apps",
  },
  openGraph: {
    title: "Android Applications — RafayShhh",
    description:
      "Explore native Android mobile applications engineered by RafayShhh using Kotlin, Jetpack Compose, and Material Design 3.",
    url: "/apps",
  },
};

export default function AppsPage() {
  return (
    <div className="pt-12 pb-20 relative bg-[#080306]">
      <JsonLd type="apps" />

      {/* Ambient background glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-mono mb-4">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Modern Native Android</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-mono">
            ANDROID APPLICATIONS
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 mt-4 leading-relaxed font-light">
            Engineered following Google&apos;s Modern Android Architecture guidelines. Handcrafted with Kotlin, declarative Jetpack Compose UI, Room persistence, and zero telemetry trackers.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ANDROID_APPS.map((app) => (
            <div
              key={app.id}
              className="rounded-2xl bg-[#0c0408] border border-[#230917] hover:border-red-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all group shadow-xl shadow-black/60 font-mono"
            >
              <div className="space-y-4">
                {/* Header status */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="p-2.5 rounded-xl bg-[#16060e] text-red-400 border border-[#2b0c1c]">
                      <AndroidIcon className="w-5 h-5" />
                    </span>
                    <div>
                      <span className="text-xs text-zinc-400 block font-bold">
                        {app.category}
                      </span>
                      <span className="text-[11px] text-emerald-400">
                        {app.version} • {app.status}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded bg-[#16060e] text-zinc-300 border border-[#2b0c1c]">
                    {app.minAndroidVersion}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h2 className="text-2xl font-bold text-white group-hover:text-red-300 transition-colors">
                    {app.title}
                  </h2>
                  <p className="text-xs text-red-400 font-semibold mt-1">
                    {app.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-3 leading-relaxed font-sans font-light">
                    {app.description}
                  </p>
                </div>

                {/* Architecture Specs Box */}
                <div className="p-3 rounded-xl bg-[#080205] border border-[#1d0714] text-[11px] text-zinc-400 space-y-1">
                  <div className="flex items-center justify-between text-zinc-300 border-b border-[#180510] pb-1">
                    <span>● Permissions: Zero Trackers / Offline</span>
                    <span className="text-emerald-400 font-bold">100% Private</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-400 pt-0.5">
                    <span>● Architecture: MVI / Jetpack Compose</span>
                    <span className="text-red-400">Reactive State</span>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-zinc-400 block mb-1.5 font-bold">
                    Stack & Dependencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {app.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-[#16060e] text-zinc-300 border border-[#2b0c1c]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="pt-3 border-t border-[#1c0713] space-y-1.5">
                  {app.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-400 font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-6 mt-6 border-t border-[#1c0713] flex flex-wrap items-center gap-3">
                {app.apkDownloadUrl && (
                  <a
                    href={app.apkDownloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-500 text-white shadow-glow-sm transition-all flex items-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download APK (Direct)</span>
                  </a>
                )}
                {app.playStoreUrl && (
                  <a
                    href={app.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-[#16060e] hover:bg-[#250918] text-white border border-[#2f0c20] transition-all flex items-center gap-2"
                  >
                    <AndroidIcon className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Google Play</span>
                  </a>
                )}
                {app.githubUrl && (
                  <a
                    href={app.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl text-xs font-medium text-zinc-400 hover:text-white hover:bg-[#16060e] transition-colors flex items-center gap-1.5"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Android Commission Notice */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-red-950/40 via-[#10050c] to-[#080205] border border-red-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl font-mono">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
              <Sparkles className="w-4 h-4 text-red-400" />
              <span>Have an Android Project in Mind?</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-sans font-light">
              Need a modern Kotlin & Jetpack Compose native mobile utility or offline-first tool? Let&apos;s build it.
            </p>
          </div>
          <Link
            href="/#contact"
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-500 text-white shadow-glow-sm transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
