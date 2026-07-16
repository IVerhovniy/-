/**
 * Моковые данные для разработки.
 *
 * ЗАГЛУШКА: В продакшене данные приходят с бэкенда.
 * Эндпоинт: GET /api/projects — список проектов пользователя.
 * Эндпоинт: GET /api/user — профиль текущего пользователя.
 */

import type { Project, User, StoryboardFrame } from "@/shared/types";

export const MOCK_USER: User = {
  id: "user-001",
  name: "Alex Designer",
  email: "alex@example.com",
  avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  credits: 100,
};

const mockFrames: StoryboardFrame[] = [
  {
    id: "frame-1",
    order: 1,
    description: "Рассвет над городом. Камера плавно опускается с неба.",
    imageUrl: null,
    duration: 3,
  },
  {
    id: "frame-2",
    order: 2,
    description: "Главный герой выходит из здания, оглядывается.",
    imageUrl: null,
    duration: 4,
  },
  {
    id: "frame-3",
    order: 3,
    description: "Крупный план лица. Решимость во взгляде.",
    imageUrl: null,
    duration: 2,
  },
  {
    id: "frame-4",
    order: 4,
    description: "Широкий план — герой идёт по улице навстречу камере.",
    imageUrl: null,
    duration: 5,
  },
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: "proj-001",
    title: "Рассвет в мегаполисе",
    idea: "Короткое видео о начале нового дня в большом городе",
    script:
      "Камера плавно спускается с высоты птичьего полёта на улицы просыпающегося города...",
    storyboardFrames: mockFrames,
    videoUrl: null,
    status: "completed",
    createdAt: "2026-07-15T10:00:00Z",
  },
  {
    id: "proj-002",
    title: "Подводный мир",
    idea: "Погружение в глубины океана с яркими кораллами",
    script: null,
    storyboardFrames: [],
    videoUrl: null,
    status: "idle",
    createdAt: "2026-07-16T08:30:00Z",
  },
];
