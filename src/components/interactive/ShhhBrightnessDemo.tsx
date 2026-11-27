"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Sun, Moon, Minus, Plus, Sliders } from "lucide-react";

export function ShhhBrightnessDemo() {
  const [isBright, setIsBright] = useState(true);
  const [level, setLevel] = useState(100);

  const toggleBrightness = useCallback(() => {
    setIsBright((prev) => !prev);
  }, []);

  const adjustLevel = useCallback((delta: number) => {
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

  // Actionbar color reflects in-mod rules: crimson <= 30%, amber 40–70%, emerald >= 80%
  const actionBarColor = !isBright
    ? "text-zinc-300"
    : level <= 30
    ? "text-red-400"
    : level <= 70
    ? "text-amber-300"
    : "text-emerald-400";

  return (
    <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-emerald-500/35 bg-white dark:bg-[#07120b] shadow-md font-sans">
      {/* Control Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-zinc-50 dark:bg-[#0a180e] border-b border-zinc-200 dark:border-emerald-500/25 text-xs">
        <div className="flex items-center gap-2">
          <Sliders className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" />
          <span className="font-bold text-zinc-900 dark:text-white">
            Brightness Level &amp; Comparison Preview
          </span>
          <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700/50 hidden sm:inline font-mono">
            Keys: [B] / [↑][↓]
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Brightness Level Stepper */}
          <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-700 rounded-xl px-2 py-1">
            <button
              type="button"
              onClick={() => adjustLevel(-10)}
              aria-label="Decrease brightness 10%"
              className="p-1 rounded hover:bg-zinc-800 text-zinc-200"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className={`min-w-[44px] text-center text-[11px] font-mono font-bold ${actionBarColor}`}>
              {isBright ? `${level}%` : "OFF"}
            </span>
            <button
              type="button"
              onClick={() => adjustLevel(10)}
              aria-label="Increase brightness 10%"
              className="p-1 rounded hover:bg-zinc-800 text-zinc-200"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          <button
            type="button"
            aria-pressed={isBright}
            onClick={toggleBrightness}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm ${
              isBright
                ? "bg-amber-400 hover:bg-amber-300 text-black"
                : "bg-emerald-700 hover:bg-emerald-600 text-white"
            }`}
          >
            {isBright ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            <span>Fullbright: {isBright ? "ON" : "OFF"}</span>
          </button>
        </div>
      </div>

      {/* Edited Comparison Poster + Simulated Lightmap Curve Strip */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-8 relative aspect-video bg-zinc-950 overflow-hidden">
          <Image
            src="/images/minecraft/mods/shhh-brightness-toggle/1.jpg"
            alt="Edited side-by-side mineshaft showcase comparing standard darkness vs Shhh Brightness Toggle"
            fill
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        {/* Interactive Actionbar & Lightmap Controls Simulator */}
        <div className="lg:col-span-4 p-5 sm:p-6 bg-zinc-950 text-zinc-100 flex flex-col justify-between gap-4 border-t lg:border-t-0 lg:border-l border-zinc-800">
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
              In-Game Behavior Preview
            </span>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <label htmlFor="brightness-range" className="text-zinc-300">
                  Target Brightness Level
                </label>
                <span className={`font-bold ${actionBarColor}`}>
                  {isBright ? `${level}%` : "Vanilla"}
                </span>
              </div>
              <input
                id="brightness-range"
                type="range"
                min={10}
                max={100}
                step={10}
                value={level}
                onChange={(e) => {
                  setIsBright(true);
                  setLevel(Number(e.target.value));
                }}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            {/* Visual Contrast / Actionbar Simulation Box */}
            <div className="rounded-xl border border-zinc-800 bg-[#0d1117] p-4 space-y-2.5">
              <div className="text-[11px] font-mono text-zinc-400">
                Simulated Actionbar Feedback
              </div>
              <div className="px-3 py-2 rounded-lg bg-black/70 border border-white/10 font-mono text-xs text-center">
                <span className={`font-bold ${actionBarColor}`}>
                  {isBright
                    ? `Shhh Brightness: ON (${level}%)`
                    : "Shhh Brightness: OFF (Vanilla Restored)"}
                </span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-zinc-800 overflow-hidden">
                <div
                  className={`h-full transition-all duration-200 ${
                    !isBright
                      ? "bg-zinc-600"
                      : level <= 30
                      ? "bg-red-500"
                      : level <= 70
                      ? "bg-amber-400"
                      : "bg-emerald-500"
                  }`}
                  style={{ width: isBright ? `${level}%` : "12%" }}
                />
              </div>
            </div>
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed">
            Adjusts memory lightmap gamma cleanly without Night Vision potion particles or writing to <code className="text-zinc-200">options.txt</code>.
          </p>
        </div>
      </div>
    </div>
  );
}
