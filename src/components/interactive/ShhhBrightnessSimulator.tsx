"use client";

import React, { useState, useEffect } from "react";
import { Sliders, Sun, Moon, Eye, ShieldCheck, Box, Sparkles } from "lucide-react";
import { sound } from "@/lib/sound";
import { VoxelCavern3D } from "@/components/3d/VoxelCavern3D";
import { useWebGLSupport } from "@/components/3d/useWebGLSupport";

export function ShhhBrightnessSimulator() {
  const [enabled, setEnabled] = useState(true);
  const [gamma, setGamma] = useState(100);
  const [splitPos, setSplitPos] = useState(50);
  const [mode, setMode] = useState<"toggle" | "split">("toggle");
  const [renderMode, setRenderMode] = useState<"3d" | "2d">("3d");

  const hasWebGL = useWebGLSupport();

  // Keyboard shortcut listener for [B]
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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

  const currentBrightness = enabled ? Math.max(0.1, gamma / 100) : 0.05;

  return (
    <div className="rounded-2xl bg-[#0c0509] border border-red-500/30 overflow-hidden shadow-glow-red relative group transition-all">
      {/* Top HUD Bar */}
      <div className="bg-[#14080e] px-4 py-2.5 border-b border-[#250d18] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-zinc-200 font-bold uppercase tracking-wider">
            Shhh Brightness Toggle • {renderMode === "3d" ? "Real-Time 3D Cavern" : "2D Simulation"}
          </span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-red-950 text-red-300 text-[10px] border border-red-800/40">
            Fabric / Quilt
          </span>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-zinc-400">
          {/* 3D / 2D Engine Switch */}
          {hasWebGL && (
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                setRenderMode((prev) => (prev === "3d" ? "2d" : "3d"));
              }}
              className="px-2 py-0.5 rounded bg-[#220a16] hover:bg-red-600/30 text-zinc-300 hover:text-white border border-[#3b0f24] text-[10px] flex items-center gap-1 transition-colors"
              title="Toggle between 3D WebGL and 2D SVG"
            >
              <Box className="w-3 h-3 text-red-400" />
              <span>{renderMode === "3d" ? "3D WebGL" : "2D SVG"}</span>
            </button>
          )}

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
              type="button"
              onClick={() => {
                setMode("toggle");
                sound.playClick();
              }}
              className={`px-2 py-0.5 rounded transition-colors ${
                mode === "toggle"
                  ? "bg-red-600 text-white font-semibold"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Toggle
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("split");
                sound.playClick();
              }}
              className={`px-2 py-0.5 rounded transition-colors ${
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

      {/* Viewport: 3D WebGL Cavern or 2D SVG Fallback */}
      <div className="relative w-full overflow-hidden select-none bg-[#050204]">
        {renderMode === "3d" && hasWebGL ? (
          <VoxelCavern3D
            enabled={enabled}
            gamma={gamma}
            mode={mode}
            splitPos={splitPos}
          />
        ) : (
          /* 2D SVG Fallback */
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#050204]">
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
              <rect width="800" height="400" fill="url(#stone-pattern)" />
              <path
                d="M0,320 Q200,290 400,310 T800,300 L800,400 L0,400 Z"
                fill="#16141a"
              />
              {/* Diamond & Redstone Ores */}
              <circle cx="160" cy="180" r="14" fill="#00e5ff" />
              <circle cx="620" cy="220" r="14" fill="#ef233c" />
            </svg>
            <div
              className="absolute inset-0 pointer-events-none transition-all duration-300"
              style={{
                backgroundColor: enabled ? "transparent" : "rgba(0, 0, 0, 0.92)",
                opacity: 1 - currentBrightness,
              }}
            />
          </div>
        )}

        {/* In-Game Status Indicators Overlay */}
        <div className="absolute top-12 left-4 z-20 flex flex-col gap-1.5 font-mono text-[11px] pointer-events-none">
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

        {/* Hotkey Toggle Button at Center Bottom */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
          <button
            type="button"
            onClick={handleToggle}
            className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 border shadow-lg cursor-pointer ${
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
        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
          {/* Gamma Slider */}
          <div className="flex items-center gap-2.5">
            <Sliders className="w-4 h-4 text-red-400 shrink-0" />
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
              className="w-24 sm:w-32 accent-red-600 cursor-pointer disabled:opacity-30"
            />
          </div>

          {/* Split Position Slider (only in split mode) */}
          {mode === "split" && (
            <div className="flex items-center gap-2">
              <span className="text-zinc-400 text-[11px] whitespace-nowrap">
                Split: {splitPos}%
              </span>
              <input
                type="range"
                min="5"
                max="95"
                value={splitPos}
                onChange={(e) => setSplitPos(Number(e.target.value))}
                className="w-20 sm:w-28 accent-red-600 cursor-pointer"
              />
            </div>
          )}
        </div>

        <div className="text-[11px] text-zinc-400 text-center sm:text-right">
          <span className="text-red-400 font-bold">100% Client-Side</span> — Works on all multiplayer servers without cheats or ban risk.
        </div>
      </div>
    </div>
  );
}
