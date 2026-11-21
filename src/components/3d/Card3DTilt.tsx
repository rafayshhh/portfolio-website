"use client";

import React, { useRef, useState } from "react";

interface Card3DTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  glare?: boolean;
}

export function Card3DTilt({
  children,
  className = "",
  maxTilt = 7,
  scale = 1.015,
  glare = true,
}: Card3DTiltProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState<string>(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  );
  const [glareStyle, setGlareStyle] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;

    const rotateX = -percentY * maxTilt;
    const rotateY = percentX * maxTilt;

    setTransform(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
        2
      )}deg) scale3d(${scale}, ${scale}, ${scale})`
    );

    if (glare) {
      setGlareStyle({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.15,
      });
    }
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlareStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transformStyle: "preserve-3d",
        transition: "transform 0.18s cubic-bezier(0.2, 0.8, 0.4, 1)",
      }}
      className={`relative will-change-transform ${className}`}
    >
      {children}

      {/* Dynamic Cursor Specular Glare Overlay */}
      {glare && (
        <div
          aria-hidden="true"
          style={{
            background: `radial-gradient(circle 240px at ${glareStyle.x}% ${glareStyle.y}%, rgba(239, 68, 68, ${glareStyle.opacity}), transparent 80%)`,
            transition: "opacity 0.3s ease",
          }}
          className="absolute inset-0 rounded-[inherit] pointer-events-none z-30"
        />
      )}
    </div>
  );
}
