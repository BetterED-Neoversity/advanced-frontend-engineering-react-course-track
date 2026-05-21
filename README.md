# Заняття 8 — Контрольовані елементи

> Це заняття використовує локальний REST API через `json-server`. Перед початком запусти `npm run server` — API буде доступне на `http://localhost:3001/tasks`.

- Контрольовані елементи
  - Атрибути `value` та `onChange`
- Компоненти `SearchBox` та `SortFilter`
- Відкладений пошук з [use-debounce](https://www.npmjs.com/package/use-debounce)
  - Хук `useDebouncedCallback`
- Інтеграція відкладеного пошуку з `useQuery`
- Власні хуки

## Стартові файли у проєкті

- `src/components/App/App.tsx` — готовий, `SearchBox` закоментований — розкоментувати після підключення
- `src/components/SearchBox/SearchBox.tsx` — порожній input, потребує стану та `onChange`
- `src/components/SortFilter/SortFilter.tsx` — порожній select, потребує стану та `onChange`
- `src/components/TaskList/TaskList.tsx` — готовий з мутаціями з попереднього заняття
- `src/components/TaskForm/TaskForm.tsx` — готовий з мутацією створення
- `src/services/taskService.ts` — готовий, потребує додавання параметрів пошуку та сортування до `getTasks`
- `src/types/task.ts` — готові типи
- `db.json` — локальна база даних з тестовими завданнями

## Послідовність заняття

1. Підключити `value` та `onChange` до `SearchBox` — показати контрольований елемент
2. Розкоментувати `SearchBox` в `App` — передати `value` та `onChange` через пропси
3. Підключити `value` та `onChange` до `SortFilter` — додати в `App`
4. Оновити `getTasks` в сервісі — додати параметри `search` та `sort`
5. Передати параметри в `queryKey` та `queryFn` — показати реактивність запиту
6. Встановити `use-debounce` — підключити `useDebouncedCallback` до `SearchBox`
7. Винести логіку в власний хук
