/**
 * Утилита для объединения CSS-классов.
 * Используется вместо clsx/classnames для минимизации зависимостей.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Форматирует число кредитов с разделителем тысяч.
 */
export function formatCredits(credits: number): string {
  return new Intl.NumberFormat("ru-RU").format(credits);
}

/**
 * Генерирует уникальный ID (для моков, не для продакшена).
 */
export function generateId(): string {
  return `id-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

/**
 * Имитация асинхронной задержки.
 * ЗАГЛУШКА: используется вместо реальных API-вызовов.
 */
export function mockDelay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
