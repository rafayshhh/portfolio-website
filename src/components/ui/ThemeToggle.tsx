"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-xl border border-zinc-200 dark:border-white/10 bg-white/80 dark:bg-white/5 opacity-50 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className={`relative inline-flex items-center justify-center gap-2 p-2 rounded-xl text-xs font-medium transition-colors duration-200
        bg-zinc-100 dark:bg-[#15060e]
        text-zinc-800 dark:text-zinc-200
        border border-zinc-200 dark:border-[#2b0c1c]
        hover:border-red-500/50 dark:hover:border-red-500/50
        hover:text-red-600 dark:hover:text-red-400
        shadow-sm group ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform" />
      ) : (
        <Moon className="w-4 h-4 text-rose-700 transition-transform" />
      )}

      {showLabel && (
        <span className="hidden sm:inline text-xs font-semibold">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}
