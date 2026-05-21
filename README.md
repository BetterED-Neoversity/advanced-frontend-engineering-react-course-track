# Заняття 7 — Мутації з TanStack Query

> Це заняття використовує локальний REST API через `json-server`. Перед початком запусти `npm run server` — API буде доступне на `http://localhost:3001/tasks`.

## CRUD

- CRUD — Create, Read, Update, Delete
- Більшість додатків зводяться до цих чотирьох операцій над даними
- Демонстрація через Postman — `http://localhost:3001/tasks`
  - GET `/tasks` — отримати всі завдання
  - POST `/tasks` — створити завдання
  - PUT `/tasks/:id` — оновити завдання
  - DELETE `/tasks/:id` — видалити завдання

## Мутації

- Видалення завдання
- Хук `useMutation`
  - `mutationFn`
  - `onSuccess`
  - `onError`
- Функція `mutate`

## Інвалідація кешу

- Хук `useQueryClient`
- Метод `invalidateQueries`

## Практика

- Створення завдання через форму в модальному вікні
- Редагування завдання. Зміна стану `completed` через чекбокс

## Стартові файли у проєкті

- `src/components/App/App.tsx` — готовий, рендерить список, модалку та кнопку створення
- `src/components/Modal/Modal.tsx` — готовий, використовує портал
- `src/components/TaskList/TaskList.tsx` — кнопка Delete та чекбокс без логіки, потребує підключення мутацій
- `src/components/TaskForm/TaskForm.tsx` — логує дані в консоль, потребує підключення мутації створення
- `src/services/taskService.ts` — є тільки `getTasks`, потребує додавання `createTask`, `deleteTask`, `updateTask`
- `src/types/task.ts` — тип `Task`
- `db.json` — локальна база даних з тестовими завданнями

## Послідовність заняття

1. Показати API через Postman — GET, POST, DELETE, PUT запити до `http://localhost:3001/tasks`
2. Додати `deleteTask` до сервісу
3. Підключити `useMutation` до `TaskList` — видалення завдання з `onSuccess` та інвалідацією кешу
4. Додати `createTask` до сервісу
5. Підключити `useMutation` до `TaskForm` — створення завдання, закрити модалку в `onSuccess`
6. Додати `updateTask` до сервісу
7. Підключити мутацію до чекбокса в `TaskList` — зміна `completed`
