"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  color: string;
  fadeSpeed: number;
}

const EMBER_COLORS = [
  "rgba(239, 68, 68, ",    // Crimson Red
  "rgba(244, 63, 94, ",    // Rose
  "rgba(249, 115, 22, ",   // Blood Orange
  "rgba(251, 146, 60, ",   // Sunset Ember
  "rgba(220, 38, 38, ",    // Deep Scarlet
];

export function EmberParticles({ count = 35 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const particles: Particle[] = [];

    const createParticle = (): Particle => ({
      x: Math.random() * width,
      y: height + Math.random() * 20,
      size: Math.random() * 2.5 + 1,
      speedY: Math.random() * 0.8 + 0.3,
      speedX: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.7 + 0.3,
      color: EMBER_COLORS[Math.floor(Math.random() * EMBER_COLORS.length)],
      fadeSpeed: Math.random() * 0.003 + 0.002,
    });

    for (let i = 0; i < count; i++) {
      const p = createParticle();
      p.y = Math.random() * height; // Spread initially
      particles.push(p);
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y -= p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.02) * 0.3;
        p.opacity -= p.fadeSpeed;

        if (p.y < -10 || p.opacity <= 0) {
          particles[i] = createParticle();
        }

        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.beginPath();
        // Pixel-like square embers for a crisp retro feel
        ctx.rect(p.x, p.y, p.size, p.size);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 w-full h-full opacity-70"
    />
  );
}
