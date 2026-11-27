"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, ExternalLink, Download, ChevronRight } from "lucide-react";
import { AndroidIcon, CurseForgeIcon, ModrinthIcon, GithubIcon } from "@/components/icons/BrandIcons";

export interface BreadcrumbCrumb {
  label: string;
  href?: string;
}

export interface ItemHeroProps {
  title: string;
  tagline: string;
  description?: string;
  category: string;
  status: string;
  versionOrPlatform?: string;
  image?: string;
  theme: "cyan" | "emerald" | "red";
  backHref: string;
  backLabel: string;
  breadcrumbs?: BreadcrumbCrumb[];
  playStoreUrl?: string;
  curseForgeUrl?: string;
  modrinthUrl?: string;
  webAppUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  releaseUrl?: string;
  apkDownloadUrl?: string;
}

export function ItemHero({
  title,
  tagline,
  description,
  category,
  status,
  versionOrPlatform,
  image,
  theme,
  backHref,
  backLabel,
  breadcrumbs,
  playStoreUrl,
  curseForgeUrl,
  modrinthUrl,
  webAppUrl,
  demoUrl,
  githubUrl,
  releaseUrl,
  apkDownloadUrl,
}: ItemHeroProps) {
  const themeStyles = {
    cyan: {
      accentText: "text-cyan-700 dark:text-cyan-400",
      accentBg:
        "bg-cyan-50 dark:bg-cyan-950/70 border-cyan-200 dark:border-cyan-500/40 text-cyan-800 dark:text-cyan-300",
      primaryBtn:
        "bg-cyan-700 hover:bg-cyan-600 text-white dark:bg-cyan-400 dark:hover:bg-cyan-300 dark:text-zinc-950",
    },
    emerald: {
      accentText: "text-emerald-700 dark:text-emerald-400",
      accentBg:
        "bg-emerald-50 dark:bg-emerald-950/70 border-emerald-200 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300",
      primaryBtn:
        "bg-emerald-700 hover:bg-emerald-600 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-zinc-950",
    },
    red: {
      accentText: "text-red-700 dark:text-red-400",
      accentBg:
        "bg-red-50 dark:bg-red-950/70 border-red-200 dark:border-red-500/40 text-red-800 dark:text-red-300",
      primaryBtn:
        "bg-red-700 hover:bg-red-600 text-white",
    },
  }[theme];

  return (
    <div className="relative font-sans">
      <div className="relative z-10 space-y-5">
        {/* Breadcrumb Trail */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400"
          >
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && (
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-600 shrink-0" aria-hidden="true" />
                )}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    className="text-zinc-900 dark:text-zinc-200 font-medium truncate max-w-[280px]"
                    aria-current="page"
                  >
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Top Back Navigation & Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors py-1.5 px-3 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Back to {backLabel}</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`text-xs px-3 py-1 rounded-full border font-semibold ${themeStyles.accentBg}`}
            >
              {status}
            </span>
            {versionOrPlatform && (
              <span className="text-xs px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-mono">
                {versionOrPlatform}
              </span>
            )}
          </div>
        </div>

        {/* Hero Card */}
        <div className="p-6 sm:p-10 rounded-2xl bg-white dark:bg-[#070c14] border border-zinc-200 dark:border-zinc-800/80 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-start gap-5">
              {image && (
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950 shrink-0 shadow-sm">
                  <Image
                    src={image}
                    alt={`${title} icon`}
                    fill
                    sizes="96px"
                    priority
                    className="object-cover"
                  />
                </div>
              )}
              <div className="space-y-2.5">
                <span className={`text-xs font-semibold uppercase tracking-wider block ${themeStyles.accentText}`}>
                  {category}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight">
                  {title}
                </h1>
                <p className="text-sm sm:text-base text-zinc-800 dark:text-zinc-200 font-medium leading-relaxed max-w-2xl">
                  {tagline}
                </p>
                {description && (
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
                    {description}
                  </p>
                )}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap md:flex-col gap-2.5 shrink-0 min-w-[210px]">
              {playStoreUrl && (
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-5 py-2.5 rounded-xl text-xs font-semibold ${themeStyles.primaryBtn} transition-colors flex items-center justify-center gap-2 shadow-sm`}
                >
                  <AndroidIcon className="w-4 h-4" />
                  <span>Get on Google Play</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              )}
              {apkDownloadUrl && (
                <a
                  href={apkDownloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-5 py-2.5 rounded-xl text-xs font-semibold ${themeStyles.primaryBtn} transition-colors flex items-center justify-center gap-2 shadow-sm`}
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  <span>Download Signed APK</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              )}
              {releaseUrl && (
                <a
                  href={releaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-5 py-2.5 rounded-xl text-xs font-semibold ${themeStyles.primaryBtn} transition-colors flex items-center justify-center gap-2 shadow-sm`}
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  <span>Download Release</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              )}
              {curseForgeUrl && (
                <a
                  href={curseForgeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#c2410c] hover:bg-[#9a3412] text-white transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <CurseForgeIcon className="w-4 h-4" />
                  <span>CurseForge Listing</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              )}
              {modrinthUrl && (
                <a
                  href={modrinthUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#047857] hover:bg-[#065f46] text-white transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <ModrinthIcon className="w-4 h-4" />
                  <span>Modrinth Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              )}
              {(webAppUrl || demoUrl) && (
                <a
                  href={webAppUrl || demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-5 py-2.5 rounded-xl text-xs font-semibold ${
                    !playStoreUrl && !apkDownloadUrl && !releaseUrl
                      ? themeStyles.primaryBtn
                      : "bg-zinc-900 dark:bg-zinc-800 hover:bg-zinc-800 dark:hover:bg-zinc-700 text-white border border-zinc-700"
                  } transition-colors flex items-center justify-center gap-2 shadow-sm`}
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  <span>Open Live Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-700 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 transition-colors flex items-center justify-center gap-2"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Source Repository</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
