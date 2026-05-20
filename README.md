# Заняття 12 — Розширена маршрутизація

- Групування маршрутів `(group)`
  - Організація файлів без впливу на URL
  - Наприклад `app/(auth)/login/page.tsx` — URL залишається `/login`
  - Дозволяє мати спільний layout для групи сторінок без додаткового сегменту в URL
- Паралельні маршрути
  - Слот `@sidebar` — відображення сайдбара поряд з основним контентом у `/dashboard`
  - Викладач додає `app/dashboard/@sidebar/page.tsx` та підключає слот у `app/dashboard/layout.tsx`
- Перехоплення маршрутів
  - Викладач створює `app/@modal/(.)auth/login/page.tsx` і імпортує `components/LoginModal.tsx`
  - Викладач створює `app/@modal/(.)gallery/[imageId]/page.tsx` і імпортує `components/ImageModal.tsx`
  - Слот `@modal` підключається у кореневому `app/layout.tsx`
  - Клік на Login → модалка поверх поточної сторінки
  - Клік на зображення в галереї → модалка поверх галереї
  - Пряме відкриття `/auth/login` або `/gallery/[imageId]` → повна сторінка

## Структура файлів які створює викладач

```text
app/dashboard/@sidebar/page.tsx
app/@modal/(.)auth/login/page.tsx
app/@modal/(.)gallery/[imageId]/page.tsx
```

## Стартові файли у проєкті

- `components/ImageModal.tsx` — базова модалка для галереї
- `components/LoginModal.tsx` — базова модалка для логіну
- `app/dashboard/layout.tsx` — layout з місцем для `@sidebar`
- `app/dashboard/page.tsx` — сторінка dashboard з контентом
- `app/gallery/page.tsx` — список зображень з Pixabay
- `app/gallery/[imageId]/page.tsx` — повна сторінка зображення

## Послідовність заняття

1. Показати групування маршрутів `(group)` — пояснити що не впливає на URL
2. Створити `app/dashboard/@sidebar/page.tsx` — показати паралельні маршрути
3. Підключити слот `@sidebar` у `app/dashboard/layout.tsx`
4. Пояснити концепцію перехоплення маршрутів — коли і навіщо
5. Підключити слот `@modal` у кореневому `app/layout.tsx`
6. Створити `app/@modal/(.)auth/login/page.tsx` — імпортувати `LoginModal`
7. Показати що прямий перехід на `/auth/login` відкриває повну сторінку
8. Створити `app/@modal/(.)gallery/[imageId]/page.tsx` — імпортувати `ImageModal`
9. Показати що прямий перехід на `/gallery/[imageId]` відкриває повну сторінку
