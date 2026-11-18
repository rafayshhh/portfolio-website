"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Gamepad2, Smartphone, Code2 } from "lucide-react";
import { sound } from "@/lib/sound";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 relative pt-20 pb-16 bg-[#080306]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-md w-full text-center space-y-6 relative z-10 p-8 rounded-2xl bg-[#0c0408] border border-[#230917] shadow-2xl font-mono">
        <div className="w-16 h-16 rounded-2xl bg-red-600/15 border border-red-500/40 flex items-center justify-center mx-auto text-red-500 text-2xl font-black shadow-glow-sm">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            SECTOR NOT FOUND
          </h1>
          <p className="text-xs text-zinc-400 font-sans font-light">
            The target coordinates you requested do not exist or have moved. Choose a verified directory:
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs font-bold pt-2">
          <Link
            href="/"
            onClick={() => sound.playClick()}
            className="p-2.5 rounded-xl bg-[#16060e] hover:bg-red-600/20 text-zinc-300 hover:text-white border border-[#2b0c1c] hover:border-red-500/40 transition-all flex items-center justify-center gap-1.5"
          >
            <Home className="w-3.5 h-3.5 text-red-400" />
            <span>[1] Overview</span>
          </Link>
          <Link
            href="/mods"
            onClick={() => sound.playClick()}
            className="p-2.5 rounded-xl bg-[#16060e] hover:bg-red-600/20 text-zinc-300 hover:text-white border border-[#2b0c1c] hover:border-red-500/40 transition-all flex items-center justify-center gap-1.5"
          >
            <Gamepad2 className="w-3.5 h-3.5 text-red-400" />
            <span>[2] Mods</span>
          </Link>
          <Link
            href="/apps"
            onClick={() => sound.playClick()}
            className="p-2.5 rounded-xl bg-[#16060e] hover:bg-red-600/20 text-zinc-300 hover:text-white border border-[#2b0c1c] hover:border-red-500/40 transition-all flex items-center justify-center gap-1.5"
          >
            <Smartphone className="w-3.5 h-3.5 text-red-400" />
            <span>[3] Apps</span>
          </Link>
          <Link
            href="/projects"
            onClick={() => sound.playClick()}
            className="p-2.5 rounded-xl bg-[#16060e] hover:bg-red-600/20 text-zinc-300 hover:text-white border border-[#2b0c1c] hover:border-red-500/40 transition-all flex items-center justify-center gap-1.5"
          >
            <Code2 className="w-3.5 h-3.5 text-red-400" />
            <span>[4] Projects</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-[#1c0713]">
          <Link
            href="/"
            onClick={() => sound.playClick()}
            className="inline-flex items-center gap-2 text-xs font-bold text-red-400 hover:text-red-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to rafayshhh.site</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
