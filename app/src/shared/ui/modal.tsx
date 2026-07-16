"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/shared/lib";

interface ModalProps {
  /** Открыто/закрыто */
  isOpen: boolean;
  /** Обработчик закрытия */
  onClose: () => void;
  /** Заголовок модального окна */
  title?: string;
  /** Содержимое */
  children: ReactNode;
  /** Дополнительные классы для контейнера */
  className?: string;
  /** Размер модального окна */
  size?: "sm" | "md" | "lg";
}

const sizeStyles = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
};

/**
 * Модальное окно с glass-морфизмом и анимацией.
 * Закрывается по Escape, клику на оверлей.
 */
export function Modal({
  isOpen,
  onClose,
  title,
  children,
  className,
  size = "md",
}: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      {/* Оверлей */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in-up" />

      {/* Контент */}
      <div
        className={cn(
          "relative w-full glass rounded-2xl shadow-2xl animate-fade-in-up",
          sizeStyles[size],
          className
        )}
      >
        {/* Хедер */}
        {title && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-surface-border)]">
            <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-white/10 transition-colors text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              aria-label="Закрыть"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M15 5L5 15M5 5l10 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Тело */}
        <div className="px-6 py-5">{children}</div>
      </div>
    </div>
  );
}
