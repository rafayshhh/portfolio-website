"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { sound } from "@/lib/sound";
import { useTheme } from "@/context/ThemeContext";

export function VoxelOreBlock3D({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 220;
    const height = container.clientHeight || 220;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(2.8, 2.2, 3.2);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, theme === "dark" ? 0.7 : 1.1);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(4, 6, 5);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0xef233c, 2.2, 8);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // Procedural Minecraft-style 16x16 Pixel Texture Generator
    const createPixelTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 16;
      canvas.height = 16;
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;

      // Base deepslate/stone background shades
      const baseColors = ["#1a1518", "#231c20", "#2c2328", "#1f181c"];
      for (let x = 0; x < 16; x++) {
        for (let y = 0; y < 16; y++) {
          ctx.fillStyle = baseColors[Math.floor(Math.random() * baseColors.length)];
          ctx.fillRect(x, y, 1, 1);
        }
      }

      // Glowing Redstone / Diamond Ore Veins
      const veinPixels = [
        [3, 3], [4, 3], [3, 4], [4, 4],
        [10, 4], [11, 4], [11, 5],
        [6, 8], [7, 8], [7, 9], [8, 9],
        [2, 11], [3, 11], [3, 12],
        [12, 11], [13, 11], [12, 12],
        [8, 14], [9, 14],
      ];

      const glowColors = ["#ef233c", "#d90429", "#ff4d6d", "#f88145"];
      veinPixels.forEach(([px, py]) => {
        ctx.fillStyle = glowColors[Math.floor(Math.random() * glowColors.length)];
        ctx.fillRect(px, py, 1, 1);
      });

      const texture = new THREE.CanvasTexture(canvas);
      texture.magFilter = THREE.NearestFilter; // Minecraft crisp pixel art filtering
      texture.minFilter = THREE.NearestFilter;
      return texture;
    };

    const texture = createPixelTexture();

    // Voxel Cube
    const geometry = new THREE.BoxGeometry(1.6, 1.6, 1.6);
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.6,
      metalness: 0.15,
      emissive: new THREE.Color(0xef233c),
      emissiveIntensity: 0.28,
    });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.lookAt(cube.position);

    // Interactive Drag to Rotate
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let velocityX = 0.006;
    let velocityY = 0.004;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      setIsInteracting(true);
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      prevMouseX = clientX;
      prevMouseY = clientY;
      sound.playClick();

      // Click burst: brighten emissive
      material.emissiveIntensity = 0.8;
      setTimeout(() => {
        material.emissiveIntensity = 0.28;
      }, 300);
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      const deltaX = clientX - prevMouseX;
      const deltaY = clientY - prevMouseY;

      cube.rotation.y += deltaX * 0.015;
      cube.rotation.x += deltaY * 0.015;

      velocityX = deltaX * 0.003;
      velocityY = deltaY * 0.003;

      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    const dom = renderer.domElement;
    dom.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);
    dom.addEventListener("touchstart", onPointerDown, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("touchend", onPointerUp);

    // Visibility observer
    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      if (!isDragging) {
        cube.rotation.y += velocityX;
        cube.rotation.x += velocityY;
        // Friction return to slow spin
        velocityX *= 0.98;
        velocityY *= 0.98;
        if (Math.abs(velocityX) < 0.004) velocityX = 0.004;
        if (Math.abs(velocityY) < 0.002) velocityY = 0.001;

        // Subtle floating bob
        cube.position.y = Math.sin(elapsed * 2) * 0.08;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      dom.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      dom.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);
      observer.disconnect();

      if (container.contains(dom)) {
        container.removeChild(dom);
      }
      geometry.dispose();
      material.dispose();
      if (texture) texture.dispose();
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      <div
        ref={containerRef}
        title="Interactive 3D Minecraft Ore Core — Click & Drag to Spin"
        className="w-48 h-48 sm:w-56 sm:h-56 cursor-grab active:cursor-grabbing flex items-center justify-center filter drop-shadow-[0_15px_25px_rgba(239,68,68,0.25)]"
      />
      <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mt-1 flex items-center gap-1.5 pointer-events-none">
        <span className={`w-1.5 h-1.5 rounded-full ${isInteracting ? "bg-red-500" : "bg-emerald-500"} animate-pulse`} />
        <span>{isInteracting ? "Rotating Voxel 3D" : "Click & Drag to Rotate 3D"}</span>
      </div>
    </div>
  );
}
