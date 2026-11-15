import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Gamepad2, Smartphone, Code2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 relative pt-24 pb-16">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-md w-full text-center space-y-6 relative z-10 p-8 rounded-2xl bg-[#0f0f15] border border-[#20202e] shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-red-600/10 border border-red-500/30 flex items-center justify-center mx-auto text-red-500 font-mono text-2xl font-bold">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-zinc-400">
            The page you are looking for doesn&apos;t exist or has moved. Explore one of the main sections:
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs font-medium pt-2">
          <Link
            href="/"
            className="p-2.5 rounded-xl bg-[#161622] hover:bg-red-600/20 text-zinc-300 hover:text-white border border-[#252538] hover:border-red-500/40 transition-all flex items-center justify-center gap-1.5"
          >
            <Home className="w-3.5 h-3.5 text-red-400" />
            <span>Home</span>
          </Link>
          <Link
            href="/mods"
            className="p-2.5 rounded-xl bg-[#161622] hover:bg-red-600/20 text-zinc-300 hover:text-white border border-[#252538] hover:border-red-500/40 transition-all flex items-center justify-center gap-1.5"
          >
            <Gamepad2 className="w-3.5 h-3.5 text-red-400" />
            <span>Mods</span>
          </Link>
          <Link
            href="/apps"
            className="p-2.5 rounded-xl bg-[#161622] hover:bg-red-600/20 text-zinc-300 hover:text-white border border-[#252538] hover:border-red-500/40 transition-all flex items-center justify-center gap-1.5"
          >
            <Smartphone className="w-3.5 h-3.5 text-red-400" />
            <span>Apps</span>
          </Link>
          <Link
            href="/projects"
            className="p-2.5 rounded-xl bg-[#161622] hover:bg-red-600/20 text-zinc-300 hover:text-white border border-[#252538] hover:border-red-500/40 transition-all flex items-center justify-center gap-1.5"
          >
            <Code2 className="w-3.5 h-3.5 text-red-400" />
            <span>Projects</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-[#1e1e2c]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-red-400 hover:text-red-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to rafayshhh.site</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
