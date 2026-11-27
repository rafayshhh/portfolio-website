"use client";

import React from "react";

export interface Card3DTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
}

export function Card3DTilt({
  children,
  className = "",
}: Card3DTiltProps) {
  return (
    <div
      className={`transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}
