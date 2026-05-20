# Заняття 5 — TanStack Query

- Серверні дані та кешування
- Інсталяція [TanStack Query](https://tanstack.com/query/latest)
- Налаштування `QueryClient`
- Налаштування `ReactQueryDevtools`
- Хук `useQuery` та запити при монтуванні компонента
  - `https://swapi.info/api/people/1`
  - Ключі запиту (`queryKey`)
- Залежні запити з `enabled`
- Пагінація запитів
  - `placeholderData` та `keepPreviousData`
  - Бібліотека [React Paginate](https://www.npmjs.com/package/react-paginate)

## Стартові файли у проєкті

- `src/components/SearchForm.tsx` — форма пошуку, передає topic через пропс `onSubmit`
- `src/components/ArticleList.tsx` — список статей, отримує типізований масив `items`
- `src/services/swapi-service.ts` — сервіс для запиту до SWAPI, використовується для демонстрації `useQuery`
- `src/services/article-service.ts` — сервіс для пошуку статей з пагінацією
- `src/types/article.ts` — тип `Article`

## Послідовність заняття

1. Пояснити різницю серверних даних від клієнтського стану — навіщо TanStack Query
2. Налаштувати `QueryClient` та `ReactQueryDevtools` у `main.tsx`
3. Зробити перший запит через `useQuery` до `https://swapi.info/api/people/1`
4. Показати кешування — повторний запит не іде на сервер
5. Підключити `SearchForm` та `ArticleList` — пошук статей через `useQuery`
6. Показати залежні запити з `enabled`
7. Додати пагінацію через `React Paginate` та `placeholderData`
