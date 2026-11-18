"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Terminal, Sparkles, Cpu, Clock } from "lucide-react";
import { sound } from "@/lib/sound";
import { useRouter } from "next/navigation";

export function SystemHUD() {
  const [muted, setMuted] = useState(false);
  const [timeStr, setTimeStr] = useState("");
  const router = useRouter();

  useEffect(() => {
    setMuted(sound.getMuted());

    const updateClock = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    // Global Hotkey Navigation listener
    const handleGlobalKey = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === "1") {
        sound.playClick();
        router.push("/");
      } else if (e.key === "2") {
        sound.playClick();
        router.push("/mods");
      } else if (e.key === "3") {
        sound.playClick();
        router.push("/apps");
      } else if (e.key === "4") {
        sound.playClick();
        router.push("/projects");
      } else if (e.key.toLowerCase() === "m") {
        const nextMuted = sound.toggleMute();
        setMuted(nextMuted);
      }
    };

    window.addEventListener("keydown", handleGlobalKey);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleGlobalKey);
    };
  }, [router]);

  const toggleAudio = () => {
    const nextMuted = sound.toggleMute();
    setMuted(nextMuted);
  };

  return (
    <div className="w-full bg-[#070205] border-b border-[#220713] text-[11px] font-mono text-zinc-400 select-none relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
        {/* Left: System Status & Clock */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-zinc-300 font-semibold uppercase tracking-wider text-[10px]">
              SYS: ONLINE
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1 text-zinc-400">
            <Clock className="w-3 h-3 text-red-500" />
            <span>{timeStr || "00:00:00"}</span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 text-zinc-400">
            <span className="text-zinc-600">|</span>
            <span className="text-red-400/90 font-medium">LOADER: FABRIC 1.21.x</span>
          </div>
        </div>

        {/* Center: Keyboard Navigation Hints */}
        <div className="hidden lg:flex items-center gap-3 text-[10px] text-zinc-400">
          <span>HOTKEYS:</span>
          <span className="text-zinc-300">[1] Home</span>
          <span className="text-zinc-300">[2] Mods</span>
          <span className="text-zinc-300">[3] Apps</span>
          <span className="text-zinc-300">[4] Projects</span>
          <span className="text-red-400 font-bold">[B] Toggle Brightness</span>
        </div>

        {/* Right: Sound FX Mute & Interactive Trigger */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleAudio}
            className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#16060e] hover:bg-[#250918] text-zinc-300 hover:text-white border border-[#300c1e] transition-colors"
            title="Toggle retro audio FX (Hotkey: [M])"
          >
            {muted ? (
              <>
                <VolumeX className="w-3 h-3 text-zinc-500" />
                <span className="text-[10px]">AUDIO: OFF</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3 h-3 text-red-400" />
                <span className="text-[10px] text-red-300">AUDIO: ON</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
