# Заняття 10 — Маршрутизація та HTTP-запити

## Маршрутизація

- Вкладені маршрути
- Динамічні маршрути
- Динамічні параметри маршруту (`route params`)
- Типізація `params` у серверному компоненті
- Хук `useParams` у клієнтському компоненті
- Програмна навігація з `useRouter`

## HTTP-запити

- Запити в серверних компонентах
- Індикатор завантаження (`loading.tsx`) та помилки (`error.tsx`)
- Гібридні запити з `prefetchQuery`
- Клієнтські запити з React Query

## Практика

- API `https://62584f320c918296a49543e7.mockapi.io/tasks`
- Сервісний файл `lib/task-service.ts` — функції `fetchTasks`, `fetchTaskById`, `deleteTask`
- Сторінка всіх завдань `app/tasks/page.tsx` — серверний запит
- Сторінка окремого завдання `app/tasks/[taskId]/page.tsx` — серверний запит по `taskId`
- Якщо лишається час: створення завдання через форму

## Стартові файли у проєкті

- `lib/task-service.ts` — готовий сервіс з функціями `fetchTasks`, `fetchTaskById`, `deleteTask` та типом `Task`

## Послідовність заняття

1. Створити вкладені маршрути — `app/tasks/page.tsx`
2. Зробити серверний запит через `fetchTasks` — відрендерити список завдань
3. Додати `loading.tsx` та `error.tsx` для `app/tasks/`
4. Створити динамічний маршрут `app/tasks/[taskId]/page.tsx`
5. Отримати `params.taskId` — зробити запит через `fetchTaskById`
6. Показати `useParams` у клієнтському компоненті як альтернативу
7. Показати програмну навігацію з `useRouter`
8. Показати гібридний підхід з `prefetchQuery` та React Query
