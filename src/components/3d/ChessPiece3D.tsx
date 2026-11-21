"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "@/context/ThemeContext";

export function ChessPiece3D({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 180;
    const height = container.clientHeight || 180;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 1.8, 4.2);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const isDark = theme === "dark";
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.8 : 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x81b64c, 2.0); // Chess.com green rim light
    dirLight.position.set(3, 4, 3);
    scene.add(dirLight);

    const redLight = new THREE.PointLight(0xef233c, 1.8, 6);
    redLight.position.set(-2, 1, 1);
    scene.add(redLight);

    // Group for the Chess Knight
    const knightGroup = new THREE.Group();

    // Knight Base Pedestal
    const baseGeo = new THREE.CylinderGeometry(0.85, 1.0, 0.35, 16);
    const bodyGeo = new THREE.CylinderGeometry(0.55, 0.75, 1.1, 14);
    // Knight Head & Snout (stylized low-poly)
    const headGeo = new THREE.BoxGeometry(0.7, 0.9, 0.9);
    const muzzleGeo = new THREE.BoxGeometry(0.55, 0.45, 0.7);
    const earGeo = new THREE.ConeGeometry(0.2, 0.45, 4);

    const material = new THREE.MeshStandardMaterial({
      color: isDark ? 0x1f191e : 0xe4e4e7,
      roughness: 0.35,
      metalness: 0.25,
    });

    const accentMaterial = new THREE.MeshStandardMaterial({
      color: 0x81b64c, // Chess.com Emerald
      emissive: new THREE.Color(0x81b64c),
      emissiveIntensity: 0.4,
      roughness: 0.2,
    });

    const baseMesh = new THREE.Mesh(baseGeo, material);
    baseMesh.position.y = -0.8;
    knightGroup.add(baseMesh);

    const bodyMesh = new THREE.Mesh(bodyGeo, material);
    bodyMesh.position.y = -0.15;
    knightGroup.add(bodyMesh);

    const headMesh = new THREE.Mesh(headGeo, material);
    headMesh.position.set(0, 0.75, 0.1);
    headMesh.rotation.x = 0.2;
    knightGroup.add(headMesh);

    const muzzleMesh = new THREE.Mesh(muzzleGeo, material);
    muzzleMesh.position.set(0, 0.65, 0.75);
    muzzleMesh.rotation.x = 0.35;
    knightGroup.add(muzzleMesh);

    const earMesh = new THREE.Mesh(earGeo, accentMaterial);
    earMesh.position.set(0, 1.35, -0.15);
    earMesh.rotation.x = -0.2;
    knightGroup.add(earMesh);

    scene.add(knightGroup);
    camera.lookAt(0, 0.2, 0);

    // Mouse Interaction
    let targetRotationY = 0;
    let targetRotationX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotationY = x * 1.5;
      targetRotationX = y * 0.8;
    };

    container.addEventListener("mousemove", handleMouseMove);

    // Visibility observer
    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(container);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      // Smooth rotation toward mouse target with idle wobble
      knightGroup.rotation.y += (targetRotationY + Math.sin(elapsed * 1.2) * 0.2 - knightGroup.rotation.y) * 0.08;
      knightGroup.rotation.x += (targetRotationX - knightGroup.rotation.x) * 0.08;
      knightGroup.position.y = Math.sin(elapsed * 2) * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      baseGeo.dispose();
      bodyGeo.dispose();
      headGeo.dispose();
      muzzleGeo.dispose();
      earGeo.dispose();
      material.dispose();
      accentMaterial.dispose();
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      title="3D Tactical Chess Knight"
      className={`w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center filter drop-shadow-[0_10px_20px_rgba(129,182,76,0.25)] select-none pointer-events-auto ${className}`}
    />
  );
}
