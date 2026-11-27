"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { GalleryImage } from "@/data/types";
import { X, ChevronLeft, ChevronRight, Maximize2, Image as ImageIcon } from "lucide-react";

export interface ItemGalleryProps {
  gallery: GalleryImage[];
  title: string;
  theme: "cyan" | "emerald" | "red";
}

export function ItemGallery({ gallery, title, theme }: ItemGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const themeStyles = {
    cyan: {
      accentText: "text-cyan-700 dark:text-cyan-400",
      borderActive: "border-cyan-500 ring-2 ring-cyan-500/30",
      badge:
        "bg-cyan-50 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700/50",
    },
    emerald: {
      accentText: "text-emerald-700 dark:text-emerald-400",
      borderActive: "border-emerald-500 ring-2 ring-emerald-500/30",
      badge:
        "bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/50",
    },
    red: {
      accentText: "text-red-700 dark:text-red-400",
      borderActive: "border-red-500 ring-2 ring-red-500/30",
      badge:
        "bg-red-50 dark:bg-red-950/80 text-red-800 dark:text-red-300 border-red-200 dark:border-red-700/50",
    },
  }[theme];

  const handleNext = useCallback(() => {
    if (lightboxIndex === null || gallery.length === 0) return;
    setLightboxIndex((prev) => ((prev ?? 0) + 1) % gallery.length);
  }, [lightboxIndex, gallery.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null || gallery.length === 0) return;
    setLightboxIndex((prev) => ((prev ?? 0) - 1 + gallery.length) % gallery.length);
  }, [lightboxIndex, gallery.length]);

  const handleClose = useCallback(() => {
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

  // Strict edited-only policy: hide empty gallery cleanly instead of rendering placeholder cards
  if (!gallery || gallery.length === 0) {
    return null;
  }

  const gridClass =
    gallery.length === 1
      ? "grid-cols-1 max-w-3xl"
      : gallery.length === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section aria-labelledby="gallery-heading" className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <ImageIcon className={`w-4 h-4 ${themeStyles.accentText}`} aria-hidden="true" />
          <h2 id="gallery-heading" className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Visual Showcase
          </h2>
        </div>
        <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${themeStyles.badge}`}>
          {gallery.length} {gallery.length === 1 ? "Graphic" : "Graphics"}
        </span>
      </div>

      {/* Responsive Showcase Grid */}
      <div className={`grid gap-4 ${gridClass}`}>
        {gallery.map((img, idx) => {
          const isContain = img.aspect === "square" || img.aspect === "portrait";
          return (
            <button
              key={img.src + idx}
              type="button"
              onClick={() => setLightboxIndex(idx)}
              className="group relative text-left rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#070c14] cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <div
                className={`relative aspect-video w-full overflow-hidden ${
                  isContain ? "bg-zinc-950" : "bg-zinc-900"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={
                    gallery.length === 1
                      ? "(max-width: 768px) 100vw, 768px"
                      : gallery.length === 2
                      ? "(max-width: 640px) 100vw, 50vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                  className={
                    isContain
                      ? "object-contain p-2 transition-transform duration-300 group-hover:scale-[1.03]"
                      : "object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity flex items-end p-4">
                  <div className="flex items-center justify-between w-full text-white">
                    <span className="text-xs font-medium line-clamp-1">{img.alt}</span>
                    <Maximize2 className="w-4 h-4 shrink-0 ml-2" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-[#070c14] border-t border-zinc-100 dark:border-zinc-800/80">
                <p className="text-xs text-zinc-700 dark:text-zinc-300 font-medium line-clamp-2 leading-relaxed">
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
          aria-label={`${title} image viewer`}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
        >
          {/* Top Bar */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-between text-white max-w-6xl mx-auto w-full z-10"
          >
            <span className="text-xs font-mono font-semibold tracking-wider text-zinc-300 truncate pr-4">
              {lightboxIndex + 1} / {gallery.length} • {gallery[lightboxIndex].alt}
            </span>
            <button
              type="button"
              onClick={handleClose}
              className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
              aria-label="Close image viewer"
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
                className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/75 hover:bg-black/95 text-white border border-white/15 transition-colors"
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
                className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/75 hover:bg-black/95 text-white border border-white/15 transition-colors"
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
            <p className="text-sm text-zinc-200 max-w-2xl mx-auto">
              {gallery[lightboxIndex].caption}
            </p>
            {gallery.length > 1 && (
              <div className="flex justify-center gap-2 overflow-x-auto py-2">
                {gallery.map((img, idx) => (
                  <button
                    key={img.src + idx}
                    type="button"
                    aria-label={`Select image ${idx + 1}: ${img.alt}`}
                    onClick={() => setLightboxIndex(idx)}
                    className={`relative w-14 h-10 rounded-lg overflow-hidden border-2 transition-all bg-zinc-950 ${
                      idx === lightboxIndex ? themeStyles.borderActive : "border-transparent opacity-60 hover:opacity-100"
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
