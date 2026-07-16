"use client";

import { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";

const PHOTOS = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=600&auto=format&fit=crop"
];

// Шейдер для полноэкранной рефракции (Glass / Liquid Distortion)
const LiquidShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uScrollVelocity: { value: 0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uScrollVelocity;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      
      // Плавное искажение, имитирующее рефракцию стекла или жидкости
      // Интенсивность искажения увеличивается при скролле
      float intensity = 0.005 + abs(uScrollVelocity) * 0.02;
      float noiseX = sin(uv.y * 8.0 + uTime * 2.0) * intensity;
      float noiseY = cos(uv.x * 8.0 + uTime * 2.0) * intensity;
      
      vec2 distortedUv = uv + vec2(noiseX, noiseY);
      
      // Читаем пиксель со сдвигом, без цветовых аберраций, чтобы цвета оставались естественными
      gl_FragColor = texture2D(tDiffuse, distortedUv);
    }
  `
};

/**
 * 3D-сцена: Глобус + Плавающие картинки (как в unseen studio).
 * Все элементы находятся в одном WebGL-пространстве.
 */
export function WireframeGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameIdRef = useRef<number>(0);
  const isMountedRef = useRef(true);
  const scrollYRef = useRef(0);
  const lastScrollYRef = useRef(0);
  const scrollVelocityRef = useRef(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  }, []);

  useEffect(() => {
    isMountedRef.current = true;
    const container = containerRef.current;
    if (!container) return;

    const disposables: { dispose: () => void }[] = [];

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5.5; // Чуть дальше, чтобы вместить картинки

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Прозрачный фон
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Post-processing
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    // Делаем фон RenderPass прозрачным
    renderPass.clearColor = new THREE.Color(0, 0, 0);
    renderPass.clearAlpha = 0;
    composer.addPass(renderPass);

    const liquidPass = new ShaderPass(LiquidShader);
    composer.addPass(liquidPass);

    // 1. Глобус (сферы и точки)
    const globeGroup = new THREE.Group();

    const sphereGeometry = new THREE.SphereGeometry(2.2, 36, 24);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const sphere = new THREE.Mesh(sphereGeometry, wireframeMaterial);
    globeGroup.add(sphere);

    const innerGeometry = new THREE.SphereGeometry(2.15, 18, 12);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      wireframe: true,
      transparent: true,
      opacity: 0.04,
    });
    const innerSphere = new THREE.Mesh(innerGeometry, innerMaterial);
    globeGroup.add(innerSphere);

    const dotGeometry = new THREE.BufferGeometry();
    const positions = sphereGeometry.attributes.position;
    const dotPositions = new Float32Array(positions.count * 3);
    for (let i = 0; i < positions.count; i++) {
      dotPositions[i * 3] = positions.getX(i);
      dotPositions[i * 3 + 1] = positions.getY(i);
      dotPositions[i * 3 + 2] = positions.getZ(i);
    }
    dotGeometry.setAttribute("position", new THREE.BufferAttribute(dotPositions, 3));
    const dotMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.015,
      transparent: true,
      opacity: 0.3,
    });
    const dots = new THREE.Points(dotGeometry, dotMaterial);
    globeGroup.add(dots);

    scene.add(globeGroup);

    disposables.push(
      sphereGeometry, wireframeMaterial,
      innerGeometry, innerMaterial,
      dotGeometry, dotMaterial
    );

    // 2. Свет
    const ambientLight = new THREE.AmbientLight(0x3b82f6, 0.4);
    scene.add(ambientLight);

    // 3. Плавающие картинки (Textures + Planes)
    const textureLoader = new THREE.TextureLoader();
    const planes: { mesh: THREE.Mesh, baseRot: number, floatSpeed: number }[] = [];

    const planeConfigs = [
      { x: -3.8, y: 1.5, z: 2.0, rotZ: -0.15, w: 1.6, h: 1.2 }, // Ближе к камере (z=2)
      { x: 4.0, y: 1.2, z: -1.0, rotZ: 0.1, w: 1.3, h: 1.7 },   // Дальше (z=-1)
      { x: 3.5, y: -2.0, z: 1.5, rotZ: -0.1, w: 1.8, h: 1.3 },
      { x: -3.2, y: -2.2, z: 0.5, rotZ: 0.2, w: 1.5, h: 1.0 },
    ];

    PHOTOS.forEach((url, i) => {
      textureLoader.load(url, (texture) => {
        if (!isMountedRef.current) {
          texture.dispose();
          return;
        }

        texture.colorSpace = THREE.SRGBColorSpace;
        const config = planeConfigs[i];

        const geometry = new THREE.PlaneGeometry(config.w, config.h);
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          opacity: 0, // Плавное появление
          side: THREE.DoubleSide
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(config.x, config.y, config.z);
        mesh.rotation.z = config.rotZ;

        scene.add(mesh);
        planes.push({
          mesh,
          baseRot: config.rotZ,
          floatSpeed: 0.5 + i * 0.3
        });

        disposables.push(geometry, material, texture);
      });
    });

    window.addEventListener("mousemove", handleMouseMove);
    
    // Оптимизация производительности: слушатель скролла вместо чтения window.scrollY в animate (избегаем layout thrashing)
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Animation loop
    const startTime = performance.now();

    const animate = () => {
      const elapsed = (performance.now() - startTime) / 1000;

      // Автовращение глобуса
      sphere.rotation.y = elapsed * 0.08;
      sphere.rotation.x = Math.sin(elapsed * 0.05) * 0.1;
      innerSphere.rotation.y = -elapsed * 0.05;
      innerSphere.rotation.x = Math.cos(elapsed * 0.03) * 0.08;
      dots.rotation.y = sphere.rotation.y;
      dots.rotation.x = sphere.rotation.x;

      // Скролл (читаем из ref без layout thrashing)
      const scrollY = scrollYRef.current;
      
      // Расчет скорости скролла для эффекта рефракции
      const scrollDelta = scrollY - lastScrollYRef.current;
      lastScrollYRef.current = scrollY;
      
      // Плавное затухание скорости (инерция)
      scrollVelocityRef.current += (scrollDelta * 0.01 - scrollVelocityRef.current) * 0.1;
      
      // Обновляем uniform'ы пост-обработки
      liquidPass.uniforms.uTime.value = elapsed;
      liquidPass.uniforms.uScrollVelocity.value = scrollVelocityRef.current;

      // Глобус прокручивается вперед при скролле
      globeGroup.rotation.x += ((scrollY * 0.002) - globeGroup.rotation.x) * 0.05;

      // Анимация картинок
      planes.forEach((p, i) => {
        if (p.mesh.material instanceof THREE.MeshBasicMaterial && p.mesh.material.opacity < 1) {
          p.mesh.material.opacity += 0.02;
        }

        // Авто-плавание
        p.mesh.position.y += Math.sin(elapsed * p.floatSpeed + i) * 0.0015;
        p.mesh.rotation.z = p.baseRot + Math.cos(elapsed * 0.5 + i) * 0.02;

        // Картинки всегда немного повернуты к центру камеры
        p.mesh.lookAt(camera.position.x, camera.position.y, camera.position.z + 10);
      });

      // Параллакс КАМЕРЫ (двигаем камеру, чтобы вся сцена реагировала одинаково)
      // Наезд камеры при скролле
      const targetCamZ = 5.5 - scrollY * 0.005;

      // Смещение камеры от мыши (движение в противовес)
      const targetCamX = -mouseRef.current.x * 1.5;
      const targetCamY = -mouseRef.current.y * 1.5 - (scrollY * 0.002);

      camera.position.x += (targetCamX - camera.position.x) * 0.05;
      camera.position.y += (targetCamY - camera.position.y) * 0.05;
      camera.position.z += (targetCamZ - camera.position.z) * 0.05;

      // Камера всегда смотрит на глобус
      camera.lookAt(0, 0, 0);

      // Интенсивность свечения и увеличение масштаба зависят от расстояния мыши
      const mouseDistance = Math.sqrt(mouseRef.current.x ** 2 + mouseRef.current.y ** 2);

      // Интенсивность: от 0.4 до 1.0
      const targetIntensity = 0.4 + mouseDistance * 0.6;
      ambientLight.intensity += (targetIntensity - ambientLight.intensity) * 0.05;

      // Масштаб всей сцены: от 1 в центре до ~1.1 по краям
      const targetScale = 1 + mouseDistance * 0.1;
      scene.scale.x += (targetScale - scene.scale.x) * 0.05;
      scene.scale.y += (targetScale - scene.scale.y) * 0.05;
      scene.scale.z += (targetScale - scene.scale.z) * 0.05;

      // Используем composer для пост-обработки вместо renderer.render
      composer.render();
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
      composer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      isMountedRef.current = false;
      cancelAnimationFrame(frameIdRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      
      disposables.forEach(d => {
        if (d && typeof d.dispose === 'function') {
          d.dispose();
        }
      });
      
      renderPass.dispose();
      liquidPass.dispose();
      composer.dispose();
      renderer.dispose();
      
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
