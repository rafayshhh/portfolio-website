"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { GalleryImage } from "@/data/types";
import { X, ChevronLeft, ChevronRight, Maximize2, Image as ImageIcon } from "lucide-react";
import { sound } from "@/lib/sound";

export interface ItemGalleryProps {
  gallery: GalleryImage[];
  title: string;
  theme: "cyan" | "emerald" | "red";
}

export function ItemGallery({ gallery, title, theme }: ItemGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const themeStyles = {
    cyan: {
      accentText: "text-cyan-600 dark:text-cyan-400",
      borderActive: "border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)]",
      badge: "bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 border-cyan-300 dark:border-cyan-700/50",
    },
    emerald: {
      accentText: "text-emerald-600 dark:text-emerald-400",
      borderActive: "border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]",
      badge: "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700/50",
    },
    red: {
      accentText: "text-red-600 dark:text-red-400",
      borderActive: "border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]",
      badge: "bg-red-100 dark:bg-red-950/80 text-red-800 dark:text-red-300 border-red-300 dark:border-red-700/50",
    },
  }[theme];

  const handleNext = useCallback(() => {
    if (lightboxIndex === null || gallery.length === 0) return;
    sound.playClick();
    setLightboxIndex((prev) => ((prev ?? 0) + 1) % gallery.length);
  }, [lightboxIndex, gallery.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null || gallery.length === 0) return;
    sound.playClick();
    setLightboxIndex((prev) => (((prev ?? 0) - 1 + gallery.length) % gallery.length));
  }, [lightboxIndex, gallery.length]);

  const handleClose = useCallback(() => {
    sound.playClick();
    setLightboxIndex(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, handleClose, handleNext, handlePrev]);

  if (!gallery || gallery.length === 0) {
    return (
      <div className="p-8 rounded-2xl bg-zinc-50 dark:bg-[#070b12] border border-zinc-200 dark:border-zinc-800 text-center space-y-3">
        <ImageIcon className={`w-8 h-8 mx-auto ${themeStyles.accentText} opacity-60`} />
        <h2 className="text-base font-bold text-zinc-900 dark:text-white">Visual Assets Pending</h2>
        <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
          Screenshots for {title} are archived cleanly in the linked GitHub repository.
        </p>
      </div>
    );
  }

  return (
    <section aria-labelledby="gallery-heading" className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <ImageIcon className={`w-4 h-4 ${themeStyles.accentText}`} />
          <h2 id="gallery-heading" className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Visual Gallery &amp; Captures
          </h2>
        </div>
        <span className={`text-[11px] px-2.5 py-0.5 rounded-full border font-mono font-bold ${themeStyles.badge}`}>
          {gallery.length} {gallery.length === 1 ? "Asset" : "Assets"}
        </span>
      </div>

      {/* Responsive Showcase Grid */}
      <div className={`grid gap-4 ${gallery.length === 1 ? "grid-cols-1 max-w-md" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}>
        {gallery.map((img, idx) => {
          const isContain = img.aspect === "square" || img.aspect === "portrait";
          return (
            <button
              key={img.src + idx}
              type="button"
              onClick={() => {
                sound.playClick();
                setLightboxIndex(idx);
              }}
              className="group relative text-left rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#070b12] cursor-pointer transition-all duration-300 hover:scale-[1.015] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <div className={`relative aspect-video w-full overflow-hidden ${isContain ? "bg-zinc-950" : "bg-zinc-900"}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={
                    isContain
                      ? "object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                      : "object-cover group-hover:scale-105 transition-transform duration-300"
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity flex items-end p-4">
                  <div className="flex items-center justify-between w-full text-white">
                    <span className="text-xs font-medium line-clamp-1">{img.alt}</span>
                    <Maximize2 className="w-4 h-4 shrink-0 ml-2" />
                  </div>
                </div>
              </div>
              <div className="p-3.5 bg-white dark:bg-[#070b12] border-t border-zinc-100 dark:border-zinc-800/80">
                <p className="text-xs text-zinc-700 dark:text-zinc-300 font-medium line-clamp-2 leading-snug">
                  {img.caption}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Accessible Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} image lightbox`}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
        >
          {/* Top Bar */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-between text-white max-w-6xl mx-auto w-full z-10"
          >
            <span className="text-xs font-mono font-bold tracking-wider text-zinc-300 truncate pr-4">
              {lightboxIndex + 1} / {gallery.length} • {gallery[lightboxIndex].alt}
            </span>
            <button
              type="button"
              onClick={handleClose}
              className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
              aria-label="Close gallery lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Active Image Center View */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex-1 flex items-center justify-center max-w-6xl mx-auto w-full my-4"
          >
            {gallery.length > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/15 transition-all hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            <div className="relative w-full h-full max-h-[75vh]">
              <Image
                src={gallery[lightboxIndex].src}
                alt={gallery[lightboxIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {gallery.length > 1 && (
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/15 transition-all hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Bottom Caption & Thumbnails */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl mx-auto w-full text-center space-y-3 z-10"
          >
            <p className="text-sm text-zinc-200 font-light max-w-2xl mx-auto">
              {gallery[lightboxIndex].caption}
            </p>
            {gallery.length > 1 && (
              <div className="flex justify-center gap-2 overflow-x-auto py-2">
                {gallery.map((img, idx) => (
                  <button
                    key={img.src + idx}
                    type="button"
                    aria-label={`Select image ${idx + 1}: ${img.alt}`}
                    onClick={() => {
                      sound.playClick();
                      setLightboxIndex(idx);
                    }}
                    className={`relative w-14 h-10 rounded-lg overflow-hidden border-2 transition-all bg-zinc-950 ${
                      idx === lightboxIndex ? themeStyles.borderActive : "border-transparent opacity-55 hover:opacity-100"
                    }`}
                  >
                    <Image src={img.src} alt={img.alt} fill sizes="56px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
