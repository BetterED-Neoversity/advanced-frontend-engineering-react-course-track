# Заняття 9 — Знайомство з Next.js

## Що нам дає Next.js

- SEO та швидкість завантаження завдяки SSR
- Вбудована маршрутизація без react-router
- Серверний і клієнтський рендеринг
- Файлова маршрутизація
- Оптимізація зображень

## Структура файлів і папок

- `app/layout.tsx` — кореневий layout, обгортає всі сторінки
- `app/page.tsx` — головна сторінка
- `app/globals.css` — глобальні стилі
- `public/` — статичні файли
- `components/` — компоненти додатка
- `next.config.ts` — конфігурація Next.js
- `tsconfig.json` — аліас `@/` для імпортів

## Layout і сторінки

- Що таке `layout.tsx` і як він працює
- Пропс `children` у layout
- Метадані через `export const metadata`
- Навігація з `next/link` у компоненті `AppHeader`

```text
localhost:3000         > app/page.tsx
localhost:3000/about   > app/about/page.tsx
localhost:3000/profile > app/profile/page.tsx
```

## SSR vs CSR

- Серверні компоненти — рендеринг на сервері за замовчуванням
- Клієнтські компоненти — директива `"use client"`
- Коли використовувати `"use client"`: події, хуки, браузерні API
- `console.log` в серверному компоненті виводиться в термінал, а не в браузері
- Серверний компонент не може використовувати `useState`, `useEffect`, обробники подій

## Стартові файли у проєкті

Стандартний Next.js проєкт після ініціалізації (`create-next-app`). Викладач видаляє зайвий контент і будує структуру з нуля під час заняття.

## Послідовність заняття

1. Розібрати структуру папок та файлів після `create-next-app`
2. Очистити стартовий контент — спростити `app/page.tsx` та `app/globals.css`
3. Розібрати `app/layout.tsx` — `children`, `metadata`
4. Створити `components/AppHeader.tsx` з навігацією через `next/link`
5. Підключити `AppHeader` у `layout.tsx`
6. Створити сторінки `app/about/page.tsx` та `app/profile/page.tsx`
7. Показати різницю серверного та клієнтського компонента — додати `"use client"` до `app/about/page.tsx`
8. Показати що `console.log` серверного компонента виводиться в термінал
