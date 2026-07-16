"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/shared/lib";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  /** Иконка слева */
  leftIcon?: ReactNode;
  /** Иконка справа */
  rightIcon?: ReactNode;
  /** Состояние загрузки */
  isLoading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white shadow-lg hover:shadow-[var(--color-accent-glow)]",
  secondary:
    "glass glass-hover text-[var(--color-text-primary)]",
  ghost:
    "bg-transparent hover:bg-white/5 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]",
  outline:
    "bg-transparent border border-[var(--color-surface-border)] hover:border-[var(--color-accent)] text-[var(--color-text-primary)] hover:text-[var(--color-accent)]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm rounded-lg gap-1.5",
  md: "px-5 py-2.5 text-sm rounded-xl gap-2",
  lg: "px-7 py-3.5 text-base rounded-xl gap-2.5",
};

/**
 * Базовая кнопка.
 * Варианты: primary (акцентная), secondary (glass), ghost (прозрачная), outline (обводка).
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      children,
      leftIcon,
      rightIcon,
      isLoading = false,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
          "active:scale-[0.97]",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        ) : (
          leftIcon
        )}
        {children}
        {rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
