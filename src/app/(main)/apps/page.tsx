import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ANDROID_APPS } from "@/data/apps";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  Download,
  CheckCircle2,
  ShieldCheck,
  ArrowUpRight,
  ArrowRight,
  Globe,
  Smartphone,
} from "lucide-react";
import { GithubIcon, AndroidIcon } from "@/components/icons/BrandIcons";

export default function AppsPage() {
  return (
    <div className="pt-10 pb-20 relative transition-colors duration-200 font-sans">
      <JsonLd type="apps" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* KreateKode Brand Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/70 border border-cyan-300 dark:border-cyan-500/40 text-cyan-900 dark:text-cyan-300 text-xs font-bold">
            <Smartphone className="w-3.5 h-3.5 text-cyan-700 dark:text-cyan-400" />
            <span>KreateKode Mobile Studio</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
                KreateKode Mobile Apps
              </h1>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 mt-2 max-w-2xl leading-relaxed">
                Focused, lightweight Flutter &amp; Dart applications engineered for utility, offline reliability, and zero background tracking.
              </p>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-100 dark:bg-[#071524] border border-zinc-200 dark:border-cyan-500/30 text-xs text-cyan-800 dark:text-cyan-300 font-semibold shrink-0">
              <ShieldCheck className="w-4 h-4 text-cyan-700 dark:text-cyan-400" />
              <span>100% Offline &amp; Private</span>
            </div>
          </div>
        </div>

        {/* App Cards */}
        <div className="space-y-8">
          {ANDROID_APPS.map((app) => {
            const editedBanner = app.gallery.find((g) => g.aspect === "video") || app.gallery[0];

            return (
              <div
                key={app.id}
                className="rounded-2xl bg-white dark:bg-[#06111c] border border-zinc-200 dark:border-cyan-500/30 hover:border-cyan-500/60 transition-colors shadow-md overflow-hidden"
              >
                {/* Edited Wide Promotional Preview */}
                {editedBanner && (
                  <Link
                    href={`/apps/${app.id}`}
                    className="block relative aspect-[16/8] w-full bg-zinc-950 border-b border-zinc-200 dark:border-cyan-900/40 overflow-hidden group"
                  >
                    <Image
                      src={editedBanner.src}
                      alt={editedBanner.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </Link>
                )}

                <div className="p-6 sm:p-8 space-y-6">
                  {/* Top Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-zinc-100 dark:border-cyan-900/40">
                    <div className="flex items-center gap-3.5">
                      {app.image && (
                        <div className="relative w-12 h-12 rounded-2xl overflow-hidden border border-cyan-500/40 bg-zinc-900 shrink-0 shadow-sm">
                          <Image
                            src={app.image}
                            alt={`${app.title} icon`}
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <span className="text-xs uppercase tracking-wider text-cyan-700 dark:text-cyan-400 font-bold block">
                          {app.category}
                        </span>
                        <span className="text-xs text-emerald-700 dark:text-emerald-400 font-mono font-semibold">
                          {app.version} • {app.status}
                        </span>
                      </div>
                    </div>

                    <span className="text-xs px-3 py-1 rounded-xl bg-zinc-100 dark:bg-[#081a2e] text-zinc-700 dark:text-cyan-300 border border-zinc-200 dark:border-cyan-500/30 font-mono">
                      {app.minAndroidVersion}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="space-y-2.5">
                    <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
                      <Link href={`/apps/${app.id}`} className="hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors">
                        {app.title}
                      </Link>
                    </h2>
                    <p className="text-xs sm:text-sm text-cyan-800 dark:text-cyan-400 font-semibold">
                      {app.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
                      {app.description}
                    </p>
                  </div>

                  {/* Key Architecture Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#071626] border border-zinc-200 dark:border-cyan-900/40 text-xs space-y-1">
                      <span className="text-[11px] text-zinc-600 dark:text-cyan-300/80 uppercase tracking-wider block font-bold">
                        Privacy Standard
                      </span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-semibold block">
                        Zero analytics SDKs, zero background network calls
                      </span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#071626] border border-zinc-200 dark:border-cyan-900/40 text-xs space-y-1">
                      <span className="text-[11px] text-zinc-600 dark:text-cyan-300/80 uppercase tracking-wider block font-bold">
                        Core Engine
                      </span>
                      <span className="text-cyan-800 dark:text-cyan-300 font-semibold block">
                        Riverpod 2.x state + local Hive CE storage
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2 pb-5 border-b border-zinc-100 dark:border-cyan-900/40">
                    {app.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Pills & Actions */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {app.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-[#081a2e] text-zinc-700 dark:text-cyan-300 border border-zinc-200 dark:border-cyan-500/30 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5">
                      <Link
                        href={`/apps/${app.id}`}
                        className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-700 hover:bg-cyan-600 text-white dark:text-black dark:bg-cyan-400 dark:hover:bg-cyan-300 transition-colors flex items-center gap-1.5 shadow-sm"
                      >
                        <span>App Gallery &amp; Docs</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      {app.playStoreUrl && (
                        <a
                          href={app.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-700 hover:bg-cyan-600 text-white dark:text-black dark:bg-cyan-400 dark:hover:bg-cyan-300 transition-colors flex items-center gap-1.5 shadow-sm"
                        >
                          <AndroidIcon className="w-4 h-4" />
                          <span>Google Play</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {app.apkDownloadUrl && (
                        <a
                          href={app.apkDownloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-700 hover:bg-cyan-600 text-white dark:text-black dark:bg-cyan-400 dark:hover:bg-cyan-300 transition-colors flex items-center gap-1.5 shadow-sm"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download APK</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {app.webAppUrl && (
                        <a
                          href={app.webAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-2 rounded-xl text-xs font-semibold text-cyan-800 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/60 hover:bg-cyan-100 dark:hover:bg-cyan-900/40 border border-cyan-200 dark:border-cyan-500/30 transition-colors flex items-center gap-1.5"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          <span>Web App</span>
                        </a>
                      )}
                      {app.githubUrl && (
                        <a
                          href={app.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-2 rounded-xl text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-[#081a2e] border border-zinc-200 dark:border-cyan-500/30 transition-colors flex items-center gap-1.5"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Source</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Inquiry Banner */}
        <div className="p-8 rounded-2xl bg-zinc-100 dark:bg-[#061524] border border-zinc-200 dark:border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
              Need an offline utility or Flutter application?
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
              Engineered under KreateKode with Clean Architecture, Riverpod, and privacy-first local storage.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-cyan-700 hover:bg-cyan-600 text-white dark:text-black dark:bg-cyan-400 dark:hover:bg-cyan-300 shadow-sm transition-colors shrink-0"
          >
            Start a Conversation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
