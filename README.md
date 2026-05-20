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
