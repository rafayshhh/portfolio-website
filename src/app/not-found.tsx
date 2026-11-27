import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Gamepad2, Smartphone, Code2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 relative bg-zinc-50 dark:bg-[#080306] transition-colors">
      <div className="max-w-md w-full text-center space-y-6 relative z-10 p-8 rounded-2xl bg-white dark:bg-[#0c0408] border border-zinc-200 dark:border-[#230917] shadow-lg font-sans">
        <div className="w-14 h-14 rounded-2xl bg-red-100 dark:bg-red-950/70 border border-red-200 dark:border-red-500/40 flex items-center justify-center mx-auto text-red-700 dark:text-red-400 text-xl font-black">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            The page you requested could not be found or has moved. Browse verified sections below:
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2.5 text-xs font-semibold pt-1">
          <Link
            href="/"
            className="p-2.5 rounded-xl bg-zinc-50 dark:bg-[#16060e] hover:bg-zinc-100 dark:hover:bg-red-950/40 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-[#2b0c1c] transition-colors flex items-center justify-center gap-1.5"
          >
            <Home className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
            <span>Overview</span>
          </Link>
          <Link
            href="/minecraft/mods"
            className="p-2.5 rounded-xl bg-zinc-50 dark:bg-[#16060e] hover:bg-zinc-100 dark:hover:bg-emerald-950/40 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-[#2b0c1c] transition-colors flex items-center justify-center gap-1.5"
          >
            <Gamepad2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Minecraft Mods</span>
          </Link>
          <Link
            href="/apps"
            className="p-2.5 rounded-xl bg-zinc-50 dark:bg-[#16060e] hover:bg-zinc-100 dark:hover:bg-cyan-950/40 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-[#2b0c1c] transition-colors flex items-center justify-center gap-1.5"
          >
            <Smartphone className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Mobile Apps</span>
          </Link>
          <Link
            href="/projects"
            className="p-2.5 rounded-xl bg-zinc-50 dark:bg-[#16060e] hover:bg-zinc-100 dark:hover:bg-red-950/40 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-[#2b0c1c] transition-colors flex items-center justify-center gap-1.5"
          >
            <Code2 className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
            <span>Projects</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-zinc-200 dark:border-[#1c0713]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-red-700 dark:text-red-400 hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
