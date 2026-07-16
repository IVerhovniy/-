"use client";

import { useEffect, useRef } from "react";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop", // abstract 3d
    left: "10%",
    top: "20%",
    width: "240px",
    rotation: -10,
    depth: 0.8, // ближе к камере, двигается сильнее
    isPolaroid: true,
  },
  {
    src: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=600&auto=format&fit=crop", // space/stars
    left: "75%",
    top: "15%",
    width: "200px",
    rotation: 12,
    depth: 0.4, // дальше от камеры
    isPolaroid: false,
  },
  {
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop", // retro tech
    left: "80%",
    top: "65%",
    width: "260px",
    rotation: -6,
    depth: 0.9,
    isPolaroid: true,
  },
  {
    src: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=600&auto=format&fit=crop", // liquid gradient
    left: "12%",
    top: "65%",
    width: "220px",
    rotation: 8,
    depth: 0.5,
    isPolaroid: false,
  }
];

/**
 * Плавающие фотографии с 3D-перспективой и оптимизированным параллаксом.
 * Использует requestAnimationFrame и прямое изменение DOM (без React state) для максимальной производительности (60fps).
 */
export function FloatingPhotos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let scrollY = window.scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      // Нормализуем от -1 до 1
      targetX = (e.clientX / window.innerWidth) * 2 - 1;
      targetY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    const animate = () => {
      // Lerp для плавности
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      
      const time = performance.now() / 1000;

      imagesRef.current.forEach((el, index) => {
        if (!el) return;
        const photo = PHOTOS[index];
        
        // Смещение от мыши (более плавное и естественное)
        const moveX = currentX * photo.depth * 100; 
        const moveY = currentY * photo.depth * 100;
        
        // В unseen studio скролл — это движение ВГЛУБЬ (Z-ось) и немного вверх (Y-ось)
        // Картинки летят НА нас
        const scrollZ = scrollY * photo.depth * 1.5; 
        const scrollYOffset = -scrollY * photo.depth * 0.3;

        // Легкое автоматическое перемещение (плавание)
        const autoFloatY = Math.sin(time * 0.8 + index * 2) * 15;
        const autoFloatX = Math.cos(time * 0.6 + index * 2) * 15;

        // 3D-вращение (комбинация мыши и авто-плавания)
        const rotateX = -currentY * photo.depth * 25 + Math.sin(time * 0.5 + index) * 5;
        const rotateY = currentX * photo.depth * 25 + Math.cos(time * 0.5 + index) * 5;

        // Прямое обновление DOM: translate3d теперь включает Z для эффекта наезда
        el.style.transform = `
          translate3d(calc(${moveX}px + ${autoFloatX}px), calc(${moveY}px + ${scrollYOffset}px + ${autoFloatY}px), ${scrollZ}px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          rotateZ(${photo.rotation}deg)
        `;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      style={{ perspective: "1000px" }}
    >
      {PHOTOS.map((photo, i) => (
        <div
          key={i}
          ref={(el) => {
            imagesRef.current[i] = el;
          }}
          className={`absolute animate-fade-in-up ${
            photo.isPolaroid 
              ? "p-3 pb-12 bg-white/95 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20" 
              : "rounded-lg overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
          }`}
          style={{
            left: photo.left,
            top: photo.top,
            width: photo.width,
            transformOrigin: "center center",
            willChange: "transform",
            animationDelay: `${0.2 + i * 0.1}s`,
            opacity: 0,
            transformStyle: "preserve-3d"
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.src}
            alt=""
            className={`w-full h-auto object-cover pointer-events-none ${photo.isPolaroid ? "rounded-sm" : ""}`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
