/**
 * Базовые типы моковых данных для AI Video Studio.
 *
 * ЗАГЛУШКА: Все данные генерируются локально.
 * В продакшене типы будут соответствовать API-контрактам бэкенда.
 */

/** Статус генерации видео */
export type GenerationStatus =
  | "idle"
  | "generating_script"
  | "generating_storyboard"
  | "generating_video"
  | "completed"
  | "error";

/** Проект (сценарий + сториборд + видео) */
export interface Project {
  id: string;
  title: string;
  idea: string;
  script: string | null;
  storyboardFrames: StoryboardFrame[];
  videoUrl: string | null;
  status: GenerationStatus;
  createdAt: string;
}

/** Кадр сториборда */
export interface StoryboardFrame {
  id: string;
  order: number;
  description: string;
  /** URL сгенерированного изображения (заглушка — статичное изображение) */
  imageUrl: string | null;
  duration: number; // секунды
}

/** Пользователь */
export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  /** Кредиты для генерации. ЗАГЛУШКА: не связана с биллингом. */
  credits: number;
}

/** Настройки генерации (режиссура) */
export interface GenerationSettings {
  style: VideoStyle;
  characters: Character[];
  aspectRatio: "9:16" | "16:9" | "1:1";
  duration: number; // секунды
}

/** Стиль видео */
export type VideoStyle =
  | "cinematic"
  | "anime"
  | "watercolor"
  | "pixel_art"
  | "realistic"
  | "comic";

/** Персонаж */
export interface Character {
  id: string;
  name: string;
  description: string;
  referenceImageUrl: string | null;
}
