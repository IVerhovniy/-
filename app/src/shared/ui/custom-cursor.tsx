"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Кастомный курсор в виде руки (pointer), как в unseen studio.
 * Следует за мышью с лёгким сглаживанием.
 * На мобильных устройствах не отображается.
 */
export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Не показывать кастомный курсор на тач-устройствах
    if ("ontouchstart" in window) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Отслеживаем ховер на интерактивных элементах
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor-hover]"
      );
      setIsHovering(!!isInteractive);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousemove", handleElementHover);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Анимация с lerp-сглаживанием
    let animationId: number;
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = () => {
      cursorX = lerp(cursorX, mouseX, 0.15);
      cursorY = lerp(cursorY, mouseY, 0.15);

      cursor.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Скрываем дефолтный курсор
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousemove", handleElementHover);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
      document.body.style.cursor = "";
    };
  }, [isVisible]);

  // Не рендерить на тач-устройствах (SSR-safe)
  return (
    <>
      {/* Внешнее кольцо с задержкой */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.3s" }}
      >
        <div
          className="rounded-full border-2 border-white transition-all duration-200"
          style={{
            width: isHovering ? 56 : 40,
            height: isHovering ? 56 : 40,
            opacity: isHovering ? 0.6 : 0.4,
          }}
        />
      </div>

      {/* Точка (без задержки) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.3s" }}
      >
        <div
          className="rounded-full bg-white transition-all duration-200"
          style={{
            width: isHovering ? 10 : 8,
            height: isHovering ? 10 : 8,
          }}
        />
      </div>
    </>
  );
}
