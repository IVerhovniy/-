"use client";

import { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";

/**
 * 3D Wireframe-глобус в стиле unseen studio.
 * Использует стандартный WebGL-рендерер Three.js (WebGPU не нужен для wireframe-сферы).
 *
 * Глобус плавно вращается, реагирует на движение мыши (параллакс).
 * Прозрачный фон — чтобы синий градиент сайта просвечивал.
 */
export function WireframeGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameIdRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 4.5;

    // Renderer — прозрачный фон
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Wireframe-сфера (основная)
    const sphereGeometry = new THREE.SphereGeometry(2.2, 36, 24);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const sphere = new THREE.Mesh(sphereGeometry, wireframeMaterial);
    scene.add(sphere);

    // Вторая сфера (внутренняя, чуть ярче, меньше сегментов)
    const innerGeometry = new THREE.SphereGeometry(2.15, 18, 12);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      wireframe: true,
      transparent: true,
      opacity: 0.04,
    });
    const innerSphere = new THREE.Mesh(innerGeometry, innerMaterial);
    scene.add(innerSphere);

    // Точки на пересечениях (создают эффект узлов сетки)
    const dotGeometry = new THREE.BufferGeometry();
    const positions = sphereGeometry.attributes.position;
    const dotPositions = new Float32Array(positions.count * 3);
    for (let i = 0; i < positions.count; i++) {
      dotPositions[i * 3] = positions.getX(i);
      dotPositions[i * 3 + 1] = positions.getY(i);
      dotPositions[i * 3 + 2] = positions.getZ(i);
    }
    dotGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(dotPositions, 3)
    );
    const dotMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.015,
      transparent: true,
      opacity: 0.3,
    });
    const dots = new THREE.Points(dotGeometry, dotMaterial);
    scene.add(dots);

    // Слабое свечение — ambient
    const ambientLight = new THREE.AmbientLight(0x3b82f6, 0.3);
    scene.add(ambientLight);

    // Mouse listener
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const startTime = performance.now();

    const animate = () => {
      const elapsed = (performance.now() - startTime) / 1000;

      // Автовращение
      sphere.rotation.y = elapsed * 0.08;
      sphere.rotation.x = Math.sin(elapsed * 0.05) * 0.1;
      innerSphere.rotation.y = -elapsed * 0.05;
      innerSphere.rotation.x = Math.cos(elapsed * 0.03) * 0.08;
      dots.rotation.y = sphere.rotation.y;
      dots.rotation.x = sphere.rotation.x;

      // Параллакс от мыши
      const targetRotX = mouseRef.current.y * 0.15;
      const targetRotY = mouseRef.current.x * 0.15;
      scene.rotation.x += (targetRotX - scene.rotation.x) * 0.02;
      scene.rotation.y += (targetRotY - scene.rotation.y) * 0.02;

      // Динамическое увеличение и интенсивность
      const mouseDistance = Math.sqrt(
        mouseRef.current.x ** 2 + mouseRef.current.y ** 2
      );
      // Масштаб: от 1 в центре до ~1.1 по краям
      const targetScale = 1 + mouseDistance * 0.1;
      scene.scale.x += (targetScale - scene.scale.x) * 0.05;
      scene.scale.y += (targetScale - scene.scale.y) * 0.05;
      scene.scale.z += (targetScale - scene.scale.z) * 0.05;

      // Интенсивность свечения: от 0.3 до 0.8
      const targetIntensity = 0.3 + mouseDistance * 0.5;
      ambientLight.intensity += (targetIntensity - ambientLight.intensity) * 0.05;

      // Параллакс от скролла (противоположно прокрутке страницы)
      // При скролле вниз страница едет вверх, а глобус уходит вниз (negative Y)
      const scrollY = window.scrollY;
      const targetPosY = -scrollY * 0.005;
      scene.position.y += (targetPosY - scene.position.y) * 0.05;

      renderer.render(scene, camera);
      frameIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameIdRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      sphereGeometry.dispose();
      wireframeMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      dotGeometry.dispose();
      dotMaterial.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [handleMouseMove]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0"
      aria-hidden="true"
    />
  );
}
