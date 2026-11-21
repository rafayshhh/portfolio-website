"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { sound } from "@/lib/sound";

interface VoxelCavern3DProps {
  enabled: boolean;
  gamma: number;
  mode: "toggle" | "split";
  splitPos: number;
}

export function VoxelCavern3D({
  enabled,
  gamma,
  mode,
  splitPos,
}: VoxelCavern3DProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);
  const torchLightRef = useRef<THREE.PointLight | null>(null);
  const cavernGroupRef = useRef<THREE.Group | null>(null);

  const [isDragging, setIsDragging] = useState(false);

  // Initialize Scene & Voxel Geometry
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 800;
    let height = container.clientHeight || 420;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 9.5);
    cameraRef.current = camera;

    // 2. WebGL Renderer with Scissor Test support for Split View
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
      preserveDrawingBuffer: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x050204, 1);
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.05);
    ambientLightRef.current = ambientLight;
    scene.add(ambientLight);

    // Torch Warm Point Light
    const torchLight = new THREE.PointLight(0xff9944, 2.8, 12, 1.2);
    torchLight.position.set(-1.8, 0.8, -0.8);
    torchLightRef.current = torchLight;
    scene.add(torchLight);

    // 4. Procedural Pixel Textures
    const createVoxelTexture = (baseHexes: string[], oreHexes?: string[]) => {
      const canvas = document.createElement("canvas");
      canvas.width = 16;
      canvas.height = 16;
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;

      for (let x = 0; x < 16; x++) {
        for (let y = 0; y < 16; y++) {
          ctx.fillStyle = baseHexes[Math.floor(Math.random() * baseHexes.length)];
          ctx.fillRect(x, y, 1, 1);
        }
      }

      if (oreHexes && oreHexes.length > 0) {
        const oreSpots = [
          [3, 3], [4, 3], [4, 4], [10, 5], [11, 5], [10, 6],
          [6, 9], [7, 9], [7, 10], [12, 11], [13, 11],
        ];
        oreSpots.forEach(([ox, oy]) => {
          ctx.fillStyle = oreHexes[Math.floor(Math.random() * oreHexes.length)];
          ctx.fillRect(ox, oy, 1, 1);
        });
      }

      const tex = new THREE.CanvasTexture(canvas);
      tex.magFilter = THREE.NearestFilter;
      tex.minFilter = THREE.NearestFilter;
      return tex;
    };

    const stoneTex = createVoxelTexture(["#2c282d", "#363238", "#242025", "#3a363d"]);
    const deepslateTex = createVoxelTexture(["#171419", "#1f1b22", "#131015", "#26212a"]);
    const diamondTex = createVoxelTexture(
      ["#2c282d", "#363238", "#242025"],
      ["#00e5ff", "#2979ff", "#80d8ff", "#00b0ff"]
    );
    const redstoneTex = createVoxelTexture(
      ["#171419", "#1f1b22", "#131015"],
      ["#ef233c", "#d90429", "#ff1744", "#ff5252"]
    );

    // Materials
    const stoneMat = new THREE.MeshStandardMaterial({ map: stoneTex, roughness: 0.85 });
    const deepslateMat = new THREE.MeshStandardMaterial({ map: deepslateTex, roughness: 0.9 });
    const diamondMat = new THREE.MeshStandardMaterial({
      map: diamondTex,
      emissive: new THREE.Color(0x00e5ff),
      emissiveIntensity: 0.45,
      roughness: 0.5,
    });
    const redstoneMat = new THREE.MeshStandardMaterial({
      map: redstoneTex,
      emissive: new THREE.Color(0xef233c),
      emissiveIntensity: 0.5,
      roughness: 0.5,
    });

    // 5. Construct 3D Minecraft Cavern Chunk
    const cavernGroup = new THREE.Group();
    cavernGroupRef.current = cavernGroup;
    const boxGeo = new THREE.BoxGeometry(1, 1, 1);

    // Floor (Deepslate)
    for (let x = -5; x <= 5; x++) {
      for (let z = -5; z <= 4; z++) {
        // Natural uneven cave floor
        const yOffset = Math.sin(x * 0.7) * 0.35 + Math.cos(z * 0.8) * 0.35;
        const mat = (x + z) % 3 === 0 ? deepslateMat : stoneMat;
        const block = new THREE.Mesh(boxGeo, mat);
        block.position.set(x, -2.5 + yOffset, z);
        cavernGroup.add(block);
      }
    }

    // Walls & Ore Veins
    const wallBlocks = [
      // Back wall with Diamond veins
      { x: -3, y: -1.5, z: -4, mat: stoneMat },
      { x: -2, y: -1.5, z: -4, mat: diamondMat },
      { x: -2, y: -0.5, z: -4, mat: diamondMat },
      { x: -1, y: -1.5, z: -4, mat: stoneMat },
      { x: 0, y: -1.5, z: -4, mat: stoneMat },
      { x: 1, y: -1.5, z: -4, mat: stoneMat },
      { x: 2, y: -1.5, z: -4, mat: redstoneMat },
      { x: 3, y: -1.5, z: -4, mat: redstoneMat },
      { x: 2, y: -0.5, z: -4, mat: redstoneMat },
      { x: -3, y: -0.5, z: -4, mat: stoneMat },
      { x: -1, y: -0.5, z: -4, mat: stoneMat },
      { x: 0, y: -0.5, z: -4, mat: stoneMat },
      { x: 1, y: -0.5, z: -4, mat: stoneMat },
      { x: 3, y: -0.5, z: -4, mat: stoneMat },

      // Left Wall
      { x: -4, y: -1.5, z: -3, mat: deepslateMat },
      { x: -4, y: -0.5, z: -2, mat: diamondMat },
      { x: -4, y: 0.5, z: -1, mat: stoneMat },
      { x: -4, y: -1.5, z: -1, mat: deepslateMat },

      // Right Wall
      { x: 4, y: -1.5, z: -3, mat: deepslateMat },
      { x: 4, y: -0.5, z: -2, mat: stoneMat },
      { x: 4, y: -1.5, z: -1, mat: redstoneMat },
      { x: 4, y: 0.5, z: -1, mat: stoneMat },

      // Ceiling Arch & Stalactites
      { x: -2, y: 2.2, z: -3, mat: stoneMat },
      { x: -1, y: 2.5, z: -3, mat: stoneMat },
      { x: 0, y: 2.6, z: -3, mat: stoneMat },
      { x: 1, y: 2.5, z: -3, mat: stoneMat },
      { x: 2, y: 2.2, z: -3, mat: stoneMat },
    ];

    wallBlocks.forEach(({ x, y, z, mat }) => {
      const mesh = new THREE.Mesh(boxGeo, mat);
      mesh.position.set(x, y, z);
      cavernGroup.add(mesh);
    });

    // 6. 3D Wall Torch Model
    const torchWoodGeo = new THREE.BoxGeometry(0.14, 0.65, 0.14);
    const torchWoodMat = new THREE.MeshStandardMaterial({ color: 0x8b5a2b, roughness: 0.8 });
    const torchWood = new THREE.Mesh(torchWoodGeo, torchWoodMat);
    torchWood.position.set(-1.8, 0.45, -0.8);
    torchWood.rotation.z = -0.25;
    cavernGroup.add(torchWood);

    const torchHeadGeo = new THREE.BoxGeometry(0.18, 0.18, 0.18);
    const torchHeadMat = new THREE.MeshStandardMaterial({
      color: 0xffaa00,
      emissive: new THREE.Color(0xff7700),
      emissiveIntensity: 1.5,
    });
    const torchHead = new THREE.Mesh(torchHeadGeo, torchHeadMat);
    torchHead.position.set(-1.72, 0.75, -0.8);
    cavernGroup.add(torchHead);

    scene.add(cavernGroup);

    // Initial camera look target
    camera.lookAt(0, -0.2, 0);

    // 7. Mouse Orbit Drag Control
    let isMouseDown = false;
    let prevX = 0;
    let prevY = 0;

    const onMouseDown = (e: MouseEvent | TouchEvent) => {
      isMouseDown = true;
      setIsDragging(true);
      const cx = "touches" in e ? e.touches[0].clientX : e.clientX;
      const cy = "touches" in e ? e.touches[0].clientY : e.clientY;
      prevX = cx;
      prevY = cy;
    };

    const onMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!isMouseDown || !cavernGroupRef.current) return;
      const cx = "touches" in e ? e.touches[0].clientX : e.clientX;
      const cy = "touches" in e ? e.touches[0].clientY : e.clientY;
      const dx = cx - prevX;
      const dy = cy - prevY;

      cavernGroupRef.current.rotation.y += dx * 0.008;
      cavernGroupRef.current.rotation.x = Math.max(
        -0.4,
        Math.min(0.4, cavernGroupRef.current.rotation.x + dy * 0.006)
      );

      prevX = cx;
      prevY = cy;
    };

    const onMouseUp = () => {
      isMouseDown = false;
      setIsDragging(false);
    };

    const canvasDom = renderer.domElement;
    canvasDom.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    canvasDom.addEventListener("touchstart", onMouseDown, { passive: true });
    window.addEventListener("touchmove", onMouseMove, { passive: true });
    window.addEventListener("touchend", onMouseUp);

    // Resize Listener
    const onResize = () => {
      if (!container) return;
      width = container.clientWidth || 800;
      height = container.clientHeight || 420;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    // Visibility Observer
    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(container);

    // Render loop state
    let frameId: number;
    let clock = new THREE.Clock();

    const renderScene = () => {
      frameId = requestAnimationFrame(renderScene);
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      // Torch flicker simulation
      if (torchLightRef.current) {
        torchLightRef.current.intensity = 2.6 + Math.sin(elapsed * 18) * 0.25 + Math.cos(elapsed * 27) * 0.15;
      }

      // Idle gentle cavern float if not dragging
      if (!isMouseDown && cavernGroupRef.current) {
        cavernGroupRef.current.rotation.y += 0.0012;
      }

      renderer.render(scene, camera);
    };

    renderScene();

    return () => {
      cancelAnimationFrame(frameId);
      canvasDom.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      canvasDom.removeEventListener("touchstart", onMouseDown);
      window.removeEventListener("touchmove", onMouseMove);
      window.removeEventListener("touchend", onMouseUp);
      window.removeEventListener("resize", onResize);
      observer.disconnect();

      if (container.contains(canvasDom)) {
        container.removeChild(canvasDom);
      }

      boxGeo.dispose();
      torchWoodGeo.dispose();
      torchHeadGeo.dispose();
      stoneMat.dispose();
      deepslateMat.dispose();
      diamondMat.dispose();
      redstoneMat.dispose();
      torchWoodMat.dispose();
      torchHeadMat.dispose();
      if (stoneTex) stoneTex.dispose();
      if (deepslateTex) deepslateTex.dispose();
      if (diamondTex) diamondTex.dispose();
      if (redstoneTex) redstoneTex.dispose();
      renderer.dispose();
    };
  }, []);

  // Update Dynamic Lighting & Scissor Test when Enabled/Gamma/Mode/Split changes
  useEffect(() => {
    if (!ambientLightRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current) {
      return;
    }

    const renderer = rendererRef.current;
    const scene = sceneRef.current;
    const camera = cameraRef.current;
    const ambientLight = ambientLightRef.current;

    if (mode === "toggle") {
      renderer.setScissorTest(false);

      if (!enabled) {
        // Vanilla Dark (0% gamma)
        ambientLight.intensity = 0.04;
        scene.fog = new THREE.FogExp2(0x050204, 0.22);
      } else {
        // Shhh Fullbright (10% to 100% gamma)
        const intensity = Math.max(0.12, (gamma / 100) * 1.55);
        ambientLight.intensity = intensity;
        scene.fog = null;
      }
    } else {
      // Split Mode: scissor test
      const container = containerRef.current;
      if (!container) return;
      const width = container.clientWidth || 800;
      const height = container.clientHeight || 420;
      const splitPx = (splitPos / 100) * width;

      renderer.setScissorTest(true);

      // 1. Left Viewport: Vanilla Dark
      renderer.setScissor(0, 0, splitPx, height);
      renderer.setViewport(0, 0, width, height);
      ambientLight.intensity = 0.04;
      scene.fog = new THREE.FogExp2(0x050204, 0.22);
      renderer.render(scene, camera);

      // 2. Right Viewport: Shhh Fullbright
      renderer.setScissor(splitPx, 0, width - splitPx, height);
      renderer.setViewport(0, 0, width, height);
      ambientLight.intensity = Math.max(0.2, (gamma / 100) * 1.55);
      scene.fog = null;
      renderer.render(scene, camera);

      renderer.setScissorTest(false);
    }
  }, [enabled, gamma, mode, splitPos]);

  const handleResetCamera = useCallback(() => {
    sound.playClick();
    if (cavernGroupRef.current) {
      cavernGroupRef.current.rotation.set(0, 0, 0);
    }
  }, []);

  return (
    <div className="relative w-full h-[360px] sm:h-[440px] select-none overflow-hidden bg-[#050204] cursor-grab active:cursor-grabbing">
      {/* 3D Canvas Container */}
      <div ref={containerRef} className="w-full h-full" />

      {/* 3D Orbit & Interaction Hint Overlay */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-2 pointer-events-none font-mono">
        <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[10px] text-zinc-300 flex items-center gap-1.5 shadow-md">
          <span className={`w-1.5 h-1.5 rounded-full ${isDragging ? "bg-red-500" : "bg-emerald-400"} animate-pulse`} />
          <span>{isDragging ? "Orbiting Cavern 3D" : "Click & Drag to Orbit 3D"}</span>
        </span>
      </div>

      {/* Reset Camera Button */}
      <button
        type="button"
        onClick={handleResetCamera}
        title="Reset 3D Cavern Camera"
        className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-lg bg-black/70 hover:bg-red-600/80 text-zinc-300 hover:text-white border border-white/10 hover:border-red-500 text-[10px] font-mono transition-colors shadow-md backdrop-blur-md cursor-pointer"
      >
        Reset Camera
      </button>

      {/* Split View Divider Bar Indicator */}
      {mode === "split" && (
        <div
          aria-hidden="true"
          style={{ left: `${splitPos}%` }}
          className="absolute top-0 bottom-0 w-0.5 bg-red-500 pointer-events-none z-20 shadow-[0_0_15px_rgba(239,68,68,0.8)] flex items-center justify-center"
        >
          <div className="w-6 h-6 rounded-full bg-red-600 text-white text-[9px] font-mono font-bold flex items-center justify-center border-2 border-white shadow-lg -ml-0.5">
            ↔
          </div>
        </div>
      )}
    </div>
  );
}
