"use client";

import React, { useState, useEffect } from "react";
import { Sliders, Sun, Moon, Eye, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { sound } from "@/lib/sound";

export function ShhhBrightnessSimulator() {
  const [enabled, setEnabled] = useState(true);
  const [gamma, setGamma] = useState(100);
  const [splitPos, setSplitPos] = useState(50);
  const [mode, setMode] = useState<"toggle" | "split">("toggle");

  // Keyboard shortcut listener for [B]
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key.toLowerCase() === "b") {
        setEnabled((prev) => {
          const next = !prev;
          sound.playToggle(next);
          return next;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleToggle = () => {
    const next = !enabled;
    setEnabled(next);
    sound.playToggle(next);
  };

  // Effective brightness level (0 to 1)
  const currentBrightness = enabled ? Math.max(0.1, gamma / 100) : 0.05;

  return (
    <div className="rounded-2xl bg-[#0c0509] border border-red-500/30 overflow-hidden shadow-glow-red relative group">
      {/* Top HUD Bar */}
      <div className="bg-[#14080e] px-4 py-2.5 border-b border-[#250d18] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-zinc-200 font-bold uppercase tracking-wider">
            Shhh Brightness Toggle • Interactive Simulator
          </span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-red-950 text-red-300 text-[10px] border border-red-800/40">
            Fabric / Quilt
          </span>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-zinc-400">
          <span className="hidden md:inline">Hotkey:</span>
          <kbd
            onClick={handleToggle}
            className="px-2 py-0.5 rounded bg-[#200b14] hover:bg-red-600 text-red-300 hover:text-white border border-red-500/40 font-bold cursor-pointer transition-colors"
            title="Press [B] on your keyboard"
          >
            [B]
          </kbd>
          <span className="text-zinc-600">|</span>
          <div className="flex items-center gap-1 bg-[#1a0911] p-0.5 rounded border border-[#2b0e1b]">
            <button
              onClick={() => {
                setMode("toggle");
                sound.playClick();
              }}
              className={`px-2 py-0.5 rounded ${
                mode === "toggle"
                  ? "bg-red-600 text-white font-semibold"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Toggle
            </button>
            <button
              onClick={() => {
                setMode("split");
                sound.playClick();
              }}
              className={`px-2 py-0.5 rounded ${
                mode === "split"
                  ? "bg-red-600 text-white font-semibold"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Split View
            </button>
          </div>
        </div>
      </div>

      {/* Visual Simulation Canvas / Viewport */}
      <div className="relative h-64 sm:h-80 w-full overflow-hidden select-none bg-[#050204]">
        {/* Pixel Cave Background Graphics */}
        <div className="absolute inset-0">
          {/* Base rock textures & ore deposits */}
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 800 400"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="stone-pattern"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <rect width="40" height="40" fill="#242129" />
                <rect x="0" y="0" width="20" height="20" fill="#2d2933" />
                <rect x="20" y="20" width="20" height="20" fill="#1e1c24" />
                <rect x="8" y="8" width="6" height="4" fill="#36323d" />
                <rect x="26" y="28" width="8" height="4" fill="#18161c" />
              </pattern>
            </defs>

            {/* Cave walls */}
            <rect width="800" height="400" fill="url(#stone-pattern)" />

            {/* Deepslate strata at bottom */}
            <path
              d="M0,260 Q200,280 400,250 T800,270 L800,400 L0,400 Z"
              fill="#121117"
            />
            <path
              d="M0,280 Q250,300 500,275 T800,290 L800,400 L0,400 Z"
              fill="#0b0a0e"
            />

            {/* Glowing Diamond Ore Vein */}
            <g transform="translate(180, 140)">
              <rect width="50" height="50" fill="#242129" stroke="#18161c" strokeWidth="2" />
              <rect x="8" y="10" width="10" height="10" fill="#4deeea" />
              <rect x="26" y="24" width="12" height="10" fill="#38b6ff" />
              <rect x="14" y="28" width="8" height="8" fill="#74f0ed" />
              <rect x="30" y="12" width="6" height="6" fill="#a6f7f5" />
            </g>

            {/* Glowing Redstone Ore Vein */}
            <g transform="translate(560, 200)">
              <rect width="55" height="55" fill="#18171f" stroke="#0e0d12" strokeWidth="2" />
              <rect x="10" y="12" width="12" height="10" fill="#ef4444" />
              <rect x="28" y="26" width="14" height="12" fill="#dc2626" />
              <rect x="14" y="32" width="10" height="10" fill="#f87171" />
              <rect x="34" y="10" width="8" height="8" fill="#fca5a5" />
            </g>

            {/* Cave Stalactites hanging down */}
            <polygon points="120,0 140,0 130,90" fill="#1b1921" />
            <polygon points="126,0 136,0 131,70" fill="#25232c" />
            <polygon points="340,0 370,0 355,140" fill="#18161c" />
            <polygon points="346,0 364,0 355,110" fill="#24222a" />
            <polygon points="680,0 710,0 695,100" fill="#1b1921" />

            {/* Torches with faint flickering light */}
            <g transform="translate(420, 180)">
              <rect x="6" y="14" width="4" height="22" fill="#6d4c41" />
              <rect x="4" y="8" width="8" height="8" fill="#ffb300" />
              <rect x="6" y="4" width="4" height="6" fill="#ffea00" />
              <circle cx="8" cy="8" r="14" fill="#ffb300" opacity="0.15" />
            </g>
          </svg>
        </div>

        {/* Dynamic Lightmap Darkness Overlay */}
        {mode === "toggle" ? (
          <div
            className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
            style={{
              backgroundColor: "black",
              opacity: 1 - currentBrightness,
            }}
          />
        ) : (
          /* Split View Slider Mode */
          <>
            {/* Dark Side (Vanilla Left) */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                clipPath: `polygon(0 0, ${splitPos}% 0, ${splitPos}% 100%, 0 100%)`,
                backgroundColor: "black",
                opacity: 0.94,
              }}
            />
            {/* Bright Side (Shhh Right) */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                clipPath: `polygon(${splitPos}% 0, 100% 0, 100% 100%, ${splitPos}% 100%)`,
                backgroundColor: "black",
                opacity: 0.05,
              }}
            />

            {/* Draggable Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-red-500 shadow-glow-red z-20 cursor-ew-resize flex items-center justify-center"
              style={{ left: `${splitPos}%` }}
            >
              <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] font-bold shadow-lg border border-white/40">
                ↔
              </div>
            </div>

            {/* Invisible Range Slider over entire canvas */}
            <input
              type="range"
              min="0"
              max="100"
              value={splitPos}
              onChange={(e) => setSplitPos(Number(e.target.value))}
              className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
            />
          </>
        )}

        {/* Ambient CRT Scanline Overlay */}
        <div className="absolute inset-0 bg-scanlines pointer-events-none opacity-20" />

        {/* In-Game Status Indicators */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-1.5 font-mono text-[11px]">
          {mode === "toggle" ? (
            <div
              className={`px-3 py-1.5 rounded-lg border backdrop-blur-md transition-colors flex items-center gap-2 ${
                enabled
                  ? "bg-red-950/80 border-red-500/50 text-red-200 shadow-glow-sm"
                  : "bg-black/80 border-zinc-800 text-zinc-400"
              }`}
            >
              {enabled ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-red-400" />
                  <span className="font-bold">SHHH LIGHTMAP ACTIVE ({gamma}%)</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-zinc-500" />
                  <span>VANILLA DARKNESS (0%)</span>
                </>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded bg-black/80 text-zinc-400 border border-zinc-800 text-[10px]">
                ← VANILLA (DARK)
              </span>
              <span className="px-2 py-1 rounded bg-red-950/90 text-red-300 border border-red-500/50 text-[10px]">
                SHHH FULLBRIGHT →
              </span>
            </div>
          )}

          {/* Clean HUD Highlight Pill */}
          <div className="hidden sm:flex items-center gap-2 text-[10px] text-zinc-400 bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm border border-white/5 w-fit">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>Zero Potion Icons • Zero Swirl Clutter</span>
          </div>
        </div>

        {/* Quick Hotkey Badge Center Bottom */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20">
          <button
            onClick={handleToggle}
            className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 border shadow-lg ${
              enabled
                ? "bg-red-600 hover:bg-red-500 text-white border-red-400 shadow-glow-red"
                : "bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 border-zinc-700"
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{enabled ? "Toggle OFF [B]" : "Toggle ON [B]"}</span>
          </button>
        </div>
      </div>

      {/* Bottom Controls Panel */}
      <div className="p-4 bg-[#10070c] border-t border-[#200b14] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Sliders className="w-4 h-4 text-red-400 shrink-0" />
          <div className="flex items-center gap-2 flex-grow sm:flex-grow-0">
            <span className="text-zinc-400 text-[11px] whitespace-nowrap">
              Gamma: {gamma}%
            </span>
            <input
              type="range"
              min="10"
              max="100"
              value={gamma}
              disabled={!enabled}
              onChange={(e) => {
                setGamma(Number(e.target.value));
              }}
              className="w-28 sm:w-36 accent-red-600 cursor-pointer disabled:opacity-30"
            />
          </div>
        </div>

        <div className="text-[11px] text-zinc-400 text-center sm:text-right">
          <span className="text-red-400 font-bold">100% Client-Side</span> — Works on all multiplayer servers without cheats or ban risk.
        </div>
      </div>
    </div>
  );
}
