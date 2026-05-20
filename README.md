# Заняття 11 — Розширена маршрутизація

## Неіснуючі маршрути

- Дефолтна сторінка 404
- Глобальний `not-found.tsx`
- Локальний `not-found.tsx` та функція `notFound` з `next/navigation`

## Вкладені layout для секцій додатка

- `app/auth/layout.tsx` — окремий layout для сторінок авторизації
- Сторінки `app/auth/login/page.tsx` та `app/auth/register/page.tsx`

```text
/auth/login    > app/auth/layout.tsx + app/auth/login/page.tsx
/auth/register > app/auth/layout.tsx + app/auth/register/page.tsx
```

## Програмна навігація з `useRouter`

- Сторінка `app/auth/login/page.tsx` з формою логіну
- Фейкова авторизація — перевірка email та пароля
- Редірект на `/profile` після успішного логіну

## Універсальні маршрути (catch-all routes)

- Сторінка `app/shop/[...categories]/page.tsx`
- Відображення хлібних крихт (breadcrumbs) з масиву `categories`

```text
/shop/electronics
/shop/electronics/phones
/shop/electronics/phones/apple
```

## Стартові файли у проєкті

- `components/AppHeader.tsx` — навігація з посиланнями на `/profile`, `/auth/login`, `/auth/register`, `/shop`
- `app/profile/page.tsx` — сторінка профілю, куди редіректить після логіну
- `app/auth/login/page.tsx` — базова форма логіну без логіки
- `app/auth/register/page.tsx` — базова форма реєстрації без логіки

## Послідовність заняття

1. Показати дефолтну 404 сторінку Next.js — перейти на неіснуючий маршрут
2. Створити глобальний `app/not-found.tsx`
3. Створити локальний `not-found.tsx` і викликати `notFound()` з `next/navigation`
4. Створити `app/auth/layout.tsx` — вкладений layout для auth сторінок
5. Підключити `"use client"` до `app/auth/login/page.tsx` — додати `useRouter`
6. Реалізувати фейкову авторизацію — редірект на `/profile` після логіну
7. Створити `app/shop/[...categories]/page.tsx` — відобразити breadcrumbs з масиву `categories`
