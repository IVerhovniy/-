/**
 * Конфигурация приложения.
 * Содержит константы, используемые во всём приложении.
 */

export const APP_NAME = "AI Video Studio";

/** Задержки для имитации генерации (мс) */
export const MOCK_DELAYS = {
  /** Генерация сценария из идеи */
  scriptGeneration: 3000,
  /** Генерация одного кадра сториборда */
  storyboardFrame: 1500,
  /** Генерация финального видео */
  videoGeneration: 5000,
  /** Имитация авторизации */
  auth: 1000,
} as const;

/** Начальное количество кредитов для нового пользователя. ЗАГЛУШКА. */
export const INITIAL_CREDITS = 100;

/** Стоимость генерации одного видео в кредитах. ЗАГЛУШКА. */
export const VIDEO_GENERATION_COST = 10;

/** Навигация */
export const NAV_LINKS = [
  { label: "Index", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Studio", href: "/studio" },
  { label: "Contact", href: "/contact" },
] as const;
