"use client";

import React, { useState } from "react";
import { Heart, Shield, Sparkles } from "lucide-react";
import { sound } from "@/lib/sound";

type PresetId = "hearts" | "compact" | "bar" | "numeric" | "rpg";

interface Scenario {
  id: string;
  label: string;
  entityName: string;
  hp: number;
  maxHp: number;
  absorption: number;
  tierLabel?: string;
  tierColorClass: string;
}

const MOB_SCENARIOS: Scenario[] = [
  { id: "zombie", label: "Zombie (20 HP)", entityName: "Zombie", hp: 14, maxHp: 20, absorption: 0, tierColorClass: "text-red-500" },
  { id: "golem", label: "Iron Golem (100 HP)", entityName: "Iron Golem", hp: 85, maxHp: 100, absorption: 0, tierLabel: "x5", tierColorClass: "text-amber-400" },
  { id: "warden", label: "Warden Boss (500 HP)", entityName: "Warden", hp: 420, maxHp: 500, absorption: 0, tierLabel: "x25", tierColorClass: "text-fuchsia-400" },
];

const PLAYER_SCENARIOS: Scenario[] = [
  { id: "vanilla", label: "Survival + GApple", entityName: "RafayShhh", hp: 16, maxHp: 20, absorption: 4, tierColorClass: "text-red-500" },
  { id: "lifesteal", label: "Lifesteal SMP (40 HP)", entityName: "RafayShhh", hp: 34, maxHp: 40, absorption: 4, tierColorClass: "text-red-500" },
  { id: "godapple", label: "Enchanted GApple (+16)", entityName: "RafayShhh", hp: 20, maxHp: 20, absorption: 16, tierColorClass: "text-red-500" },
];

const PRESETS: { id: PresetId; label: string }[] = [
  { id: "hearts", label: "Classic Hearts" },
  { id: "compact", label: "Compact" },
  { id: "bar", label: "Health Bar" },
  { id: "numeric", label: "Minimal Numeric" },
  { id: "rpg", label: "RPG / Lifesteal" },
];

export function HealthIndicatorPreview({ mode }: { mode: "mob" | "player" }) {
  const scenarios = mode === "mob" ? MOB_SCENARIOS : PLAYER_SCENARIOS;
  const [preset, setPreset] = useState<PresetId>("hearts");
  const [scenarioIdx, setScenarioIdx] = useState(mode === "mob" ? 1 : 1);

  const s = scenarios[scenarioIdx];
  const heartsCount = Math.min(10, Math.ceil(s.maxHp / 2));
  const filledHearts = s.tierLabel ? Math.round((s.hp / s.maxHp) * 10) : Math.ceil(s.hp / 2);
  const absorbHearts = Math.ceil(s.absorption / 2);

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#07120b] border border-emerald-200 dark:border-emerald-500/30 shadow-md space-y-6 font-sans">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 dark:border-emerald-900/40 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Overhead Preset Simulator</span>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            Switch visual presets and entity health tiers to preview how indicators render in-world.
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {scenarios.map((sc, idx) => (
            <button
              key={sc.id}
              type="button"
              onClick={() => {
                sound.playClick();
                setScenarioIdx(idx);
              }}
              className={`px-3 py-1 rounded-lg text-[11px] font-mono font-bold transition-colors ${
                idx === scenarioIdx
                  ? "bg-emerald-700 text-white"
                  : "bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800"
              }`}
            >
              {sc.label}
            </button>
          ))}
        </div>
      </div>

      {/* Preset Selector */}
      <div className="flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => {
              sound.playClick();
              setPreset(p.id);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              preset === p.id
                ? "bg-zinc-900 dark:bg-emerald-500 text-white dark:text-black shadow-sm"
                : "bg-zinc-100 dark:bg-zinc-900/70 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/40"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Simulated Minecraft Nameplate Canvas */}
      <div className="rounded-xl bg-gradient-to-b from-[#1a2b42] via-[#131d2d] to-[#0a0f18] border border-zinc-800 p-8 flex flex-col items-center justify-center min-h-[190px] space-y-2.5 text-center select-none">
        {/* Rendered Indicator Line */}
        {preset === "hearts" && (
          <div className="space-y-1 flex flex-col items-center">
            {absorbHearts > 0 && (
              <div className="flex items-center gap-0.5 self-start bg-black/45 px-1.5 py-0.5 rounded">
                {Array.from({ length: absorbHearts }).map((_, i) => (
                  <Heart key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-300" />
                ))}
              </div>
            )}
            <div className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded font-mono text-xs">
              {s.tierLabel && <span className={`font-black mr-1 ${s.tierColorClass}`}>{s.tierLabel}</span>}
              <div className="flex items-center gap-0.5">
                {Array.from({ length: heartsCount }).map((_, i) => (
                  <Heart
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < filledHearts
                        ? s.tierLabel
                          ? `${s.tierColorClass} fill-current`
                          : "fill-red-500 text-red-400"
                        : "fill-zinc-800 text-zinc-700"
                    }`}
                  />
                ))}
              </div>
              {s.tierLabel && (
                <span className="text-zinc-200 text-[11px] ml-1.5 font-bold">
                  {s.hp}/{s.maxHp}
                </span>
              )}
            </div>
          </div>
        )}

        {preset === "compact" && (
          <div className="px-3 py-1 rounded bg-black/55 font-mono text-xs font-bold flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 fill-red-500 text-red-400" />
            <span className="text-emerald-400">{s.hp}</span>
            <span className="text-zinc-400">/</span>
            <span className="text-zinc-200">{s.maxHp} HP</span>
            {s.absorption > 0 && <span className="text-amber-300">(+{s.absorption.toFixed(1)})</span>}
          </div>
        )}

        {preset === "bar" && (
          <div className="px-3 py-1.5 rounded bg-black/55 font-mono text-xs flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 10 }).map((_, i) => (
                <span
                  key={i}
                  className={`w-2.5 h-3 rounded-[2px] ${
                    i < Math.round((s.hp / s.maxHp) * 10) ? "bg-emerald-500" : "bg-zinc-700"
                  }`}
                />
              ))}
            </div>
            <span className="text-white font-bold">
              {s.hp}/{s.maxHp}
            </span>
            {s.absorption > 0 && <Shield className="w-3.5 h-3.5 text-amber-400" />}
          </div>
        )}

        {preset === "numeric" && (
          <div className="px-3 py-1 rounded bg-black/55 font-mono text-xs font-bold text-white flex items-center gap-1.5">
            <Heart className="w-3 h-3 fill-red-500 text-red-500" />
            <span>
              {s.hp.toFixed(1)} / {s.maxHp.toFixed(1)} HP
            </span>
            {s.absorption > 0 && <span className="text-amber-300">(+{s.absorption.toFixed(1)})</span>}
          </div>
        )}

        {preset === "rpg" && (
          <div className="px-3 py-1 rounded bg-black/55 font-mono text-xs font-bold flex items-center gap-2">
            <Heart className={`w-3.5 h-3.5 fill-current ${s.tierColorClass}`} />
            <span className={s.tierColorClass}>{Math.round(s.hp / 2)}/{Math.round(s.maxHp / 2)} Hearts</span>
            <span className="text-zinc-300">
              {s.hp}/{s.maxHp} HP
            </span>
            {s.absorption > 0 && <span className="text-amber-300">(+{s.absorption.toFixed(1)})</span>}
          </div>
        )}

        {/* Simulated Entity Nametag */}
        <div className="px-3 py-0.5 rounded bg-black/45 text-white font-minecraft text-sm tracking-wide">
          {s.entityName}
        </div>
      </div>
    </div>
  );
}
