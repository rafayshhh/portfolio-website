"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Sun, Moon, Eye, Terminal, Minus, Plus } from "lucide-react";
import { sound } from "@/lib/sound";

export function ShhhBrightnessDemo() {
  const [isBright, setIsBright] = useState(true);
  const [level, setLevel] = useState(100);

  const toggleBrightness = useCallback(() => {
    sound.playToggle(!isBright);
    setIsBright((prev) => !prev);
  }, [isBright]);

  const adjustLevel = useCallback((delta: number) => {
    sound.playClick();
    setIsBright(true);
    setLevel((prev) => Math.min(100, Math.max(10, prev + delta)));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (e.key.toLowerCase() === "b") {
        toggleBrightness();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        adjustLevel(10);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        adjustLevel(-10);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleBrightness, adjustLevel]);

  // Actionbar color matches mod logic: red <= 30%, yellow/amber 40-70%, green >= 80%
  const actionBarColor = !isBright
    ? "text-zinc-300"
    : level <= 30
    ? "text-red-400"
    : level <= 70
    ? "text-amber-300"
    : "text-emerald-400";

  const effectiveOpacity = isBright ? level / 100 : 0;

  return (
    <div className="relative rounded-2xl overflow-hidden border border-emerald-500/40 bg-zinc-950 shadow-xl font-sans">
      {/* Top HUD Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-[#0a180e] border-b border-emerald-500/30 text-xs font-mono">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="font-bold text-emerald-300">
            Interactive Lightmap Test (Actual MC 26.3 Capture)
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700/50 hidden sm:inline">
            Keys: [B] / [↑][↓]
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Brightness Level Stepper */}
          <div className="flex items-center gap-1 bg-zinc-900/90 border border-zinc-700 rounded-xl px-2 py-1">
            <button
              type="button"
              onClick={() => adjustLevel(-10)}
              aria-label="Decrease brightness 10%"
              className="p-1 rounded hover:bg-zinc-800 text-zinc-300"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className={`min-w-[44px] text-center text-[11px] font-bold ${actionBarColor}`}>
              {isBright ? `${level}%` : "OFF"}
            </span>
            <button
              type="button"
              onClick={() => adjustLevel(10)}
              aria-label="Increase brightness 10%"
              className="p-1 rounded hover:bg-zinc-800 text-zinc-300"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          <button
            type="button"
            aria-pressed={isBright}
            onClick={toggleBrightness}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm ${
              isBright
                ? "bg-amber-400 hover:bg-amber-300 text-black"
                : "bg-emerald-700 hover:bg-emerald-600 text-white"
            }`}
          >
            {isBright ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            <span>Toggle [B]: {isBright ? "ON" : "OFF"}</span>
          </button>
        </div>
      </div>

      {/* Main Paired Mineshaft Capture Canvas */}
      <div className="relative w-full aspect-video max-h-[480px] overflow-hidden bg-black">
        {/* Baseline Dark Mineshaft */}
        <Image
          src="/images/minecraft/mods/shhh-brightness-toggle/demo-dark.png"
          alt="Mineshaft captured with Shhh Brightness turned OFF"
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover object-center"
        />

        {/* Matching 100% Lit Layer scaled cleanly by configured level */}
        <Image
          src="/images/minecraft/mods/shhh-brightness-toggle/demo-bright.png"
          alt="Same mineshaft captured with Shhh Brightness ON (100%)"
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          style={{ opacity: effectiveOpacity }}
          className="object-cover object-center transition-opacity duration-300"
        />

        {/* Simulated Minecraft Actionbar Feedback */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-xs font-mono flex items-center gap-2 pointer-events-none whitespace-nowrap">
          <Eye className="w-3.5 h-3.5 text-zinc-300" />
          <span className={`font-bold ${actionBarColor}`}>
            {isBright
              ? `Brightness: ON (${level}%) — Zero Potion Swirls`
              : "Brightness: OFF — Vanilla Lightmap"}
          </span>
        </div>
      </div>
    </div>
  );
}
