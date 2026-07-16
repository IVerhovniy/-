"use client";

import { useState } from "react";
import { Button } from "@/shared/ui";
import { WireframeGlobe } from "./wireframe-globe";

/**
 * Главный hero-блок лендинга.
 * Содержит 3D-глобус на фоне, заголовок, подзаголовок и CTA-кнопки.
 * Визуально вдохновлён unseen studio (глобус + карточки),
 * адаптирован под AI Video Studio.
 */
export function LandingHero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 3D Глобус на фоне */}
      <WireframeGlobe />

      {/* Контент поверх глобуса */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl">
        {/* Бейдж */}
        <div className="glass rounded-full px-4 py-1.5 mb-8 animate-fade-in-up">
          <span className="text-xs font-medium tracking-wider uppercase text-[var(--color-text-secondary)]">
            AI-powered video generation
          </span>
        </div>

        {/* Заголовок */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="block text-white">Создавайте</span>
          <span
            className="block mt-2 bg-gradient-to-r from-blue-300 via-white to-blue-300 bg-clip-text text-transparent"
          >
            видео из идей
          </span>
        </h1>

        {/* Подзаголовок */}
        <p
          className="mt-6 text-lg md:text-xl max-w-xl animate-fade-in-up"
          style={{
            color: "var(--color-text-secondary)",
            animationDelay: "0.2s",
          }}
        >
          Опишите идею — получите сценарий, сториборд и готовое видео.
          Всё на базе искусственного интеллекта.
        </p>

        {/* CTA кнопки */}
        <div
          className="flex flex-wrap gap-4 mt-10 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Button
            size="lg"
            variant="primary"
            className="glow"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-cursor-hover
          >
            Начать создавать
          </Button>
          <Button size="lg" variant="outline" data-cursor-hover>
            Смотреть примеры
          </Button>
        </div>

        {/* Подсказка прокрутки */}
        <div
          className="mt-16 animate-fade-in-up flex flex-col items-center gap-2"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="text-xs text-[var(--color-text-disabled)] uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>

      {/* Декоративные плавающие карточки (вдохновлены unseen studio) */}
      <FloatingCards />
    </section>
  );
}

/**
 * Декоративные карточки-превью, парящие по бокам от глобуса.
 * Имитируют карточки проектов из unseen studio.
 * Используют CSS-анимацию вместо Three.js для простоты.
 */
function FloatingCards() {
  const cards = [
    {
      id: 1,
      gradient: "from-amber-500/20 to-orange-600/20",
      rotation: "-6deg",
      position: "left-[3%] top-[25%]",
      delay: "0s",
      label: "Cinematic",
    },
    {
      id: 2,
      gradient: "from-purple-500/20 to-indigo-600/20",
      rotation: "4deg",
      position: "right-[3%] top-[20%]",
      delay: "1s",
      label: "Anime",
    },
    {
      id: 3,
      gradient: "from-emerald-500/20 to-teal-600/20",
      rotation: "-3deg",
      position: "left-[8%] bottom-[20%]",
      delay: "2s",
      label: "Watercolor",
    },
    {
      id: 4,
      gradient: "from-rose-500/20 to-pink-600/20",
      rotation: "5deg",
      position: "right-[6%] bottom-[18%]",
      delay: "0.5s",
      label: "Pixel Art",
    },
  ];

  return (
    <>
      {cards.map((card) => (
        <div
          key={card.id}
          className={`absolute ${card.position} hidden lg:block`}
          style={{
            animation: `floating 6s ease-in-out infinite`,
            animationDelay: card.delay,
          }}
        >
          <div
            className={`w-40 h-28 rounded-xl bg-gradient-to-br ${card.gradient} glass border border-white/5`}
            style={{ transform: `rotate(${card.rotation})` }}
          >
            <div className="flex items-end justify-start h-full p-3">
              <span className="text-xs font-medium text-white/50">
                {card.label}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
