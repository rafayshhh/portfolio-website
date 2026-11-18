"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Sparkles } from "lucide-react";
import { sound } from "@/lib/sound";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";

export function SystemHUD() {
  const [muted, setMuted] = useState(false);
  const [timeStr, setTimeStr] = useState("");
  const router = useRouter();
  const { toggleTheme, theme } = useTheme();

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
      } else if (e.key.toLowerCase() === "t") {
        toggleTheme();
      }
    };

    window.addEventListener("keydown", handleGlobalKey);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleGlobalKey);
    };
  }, [router, toggleTheme]);

  const handleMuteToggle = () => {
    const nextMuted = sound.toggleMute();
    setMuted(nextMuted);
  };

  return (
    <aside
      aria-label="System telemetry bar"
      className="w-full bg-zinc-100/90 dark:bg-[#060205]/90 border-b border-zinc-200 dark:border-[#200613] text-[11px] font-mono text-zinc-600 dark:text-zinc-400 py-1.5 px-4 z-50 relative select-none backdrop-blur-sm transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left Telemetry */}
        <div className="flex items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap">
          <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>SYS: ONLINE</span>
          </div>
          <span className="text-zinc-300 dark:text-zinc-700">·</span>
          <div className="text-zinc-700 dark:text-zinc-300 font-semibold">{timeStr || "00:00:00"}</div>
          <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">|</span>
          <div className="hidden sm:flex items-center gap-1 text-red-600 dark:text-red-400 font-medium">
            <Sparkles className="w-3 h-3" />
            <span>LOADER: FABRIC 1.21.x</span>
          </div>
        </div>

        {/* Center / Hotkeys Guide */}
        <div className="hidden lg:flex items-center gap-2.5 text-[10px] text-zinc-500 dark:text-zinc-400">
          <span>HOTKEYS:</span>
          <span className="px-1.5 py-0.5 rounded bg-zinc-200/80 dark:bg-white/5 border border-zinc-300 dark:border-white/10 text-zinc-700 dark:text-zinc-300 font-bold">[1] Home</span>
          <span className="px-1.5 py-0.5 rounded bg-zinc-200/80 dark:bg-white/5 border border-zinc-300 dark:border-white/10 text-zinc-700 dark:text-zinc-300 font-bold">[2] Mods</span>
          <span className="px-1.5 py-0.5 rounded bg-zinc-200/80 dark:bg-white/5 border border-zinc-300 dark:border-white/10 text-zinc-700 dark:text-zinc-300 font-bold">[3] Apps</span>
          <span className="px-1.5 py-0.5 rounded bg-zinc-200/80 dark:bg-white/5 border border-zinc-300 dark:border-white/10 text-zinc-700 dark:text-zinc-300 font-bold">[4] Projects</span>
          <span className="px-1.5 py-0.5 rounded bg-red-100 dark:bg-red-950/60 border border-red-300 dark:border-red-900/40 text-red-700 dark:text-red-300 font-bold">[B] Toggle Brightness</span>
          <span className="px-1.5 py-0.5 rounded bg-zinc-200/80 dark:bg-white/5 border border-zinc-300 dark:border-white/10 text-zinc-700 dark:text-zinc-300 font-bold">[T] Theme</span>
        </div>

        {/* Right Audio Toggle */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleMuteToggle}
            className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-200/80 dark:bg-white/5 hover:bg-zinc-300 dark:hover:bg-white/10 border border-zinc-300 dark:border-white/10 text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
            title="Toggle synthesized Web Audio FX [M]"
          >
            {muted ? (
              <>
                <VolumeX className="w-3 h-3 text-red-500" />
                <span className="text-[10px] font-bold">AUDIO: OFF</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                <span className="text-[10px] font-bold">AUDIO: ON</span>
              </>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
}
