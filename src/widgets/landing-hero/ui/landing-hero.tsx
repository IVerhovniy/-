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
          style={{ animationDelay: "0.1s", fontFamily: '"Actay Wide", sans-serif' }}
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
        </div>
      </div>
    </section>
  );
}
