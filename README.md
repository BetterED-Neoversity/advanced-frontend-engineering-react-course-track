# Заняття 13 — SEO та оптимізація

## SEO та мета-теги

- Глобальні мета-теги в `layout.tsx`
  - `title`
  - `description`
- Мета-теги для окремих сторінок
- Динамічні мета-теги з `generateMetadata`

## Open Graph та Twitter мета-теги

- Перевірка з [socialsharepreview.com](https://socialsharepreview.com/)
- `title`, `description`, `type`, `url`, `siteName`
- [opengraph-image](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image)

## Sitemap та robots

- [`sitemap.ts`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)
- [`robots.ts`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots)

## Оптимізація ресурсів

- Шрифти через `next/font`
- Зображення з `next/image`
- Lighthouse — перевірка результату

## Стартові файли у проєкті

Стандартний Next.js проєкт. Викладач додає мета-теги, оптимізацію та SEO під час заняття.

## Послідовність заняття

1. Додати глобальні мета-теги `title` та `description` у `app/layout.tsx`
2. Додати мета-теги для окремої сторінки — перезаписати глобальні
3. Показати `generateMetadata` для динамічних сторінок
4. Додати Open Graph теги — перевірити результат на [socialsharepreview.com](https://socialsharepreview.com/)
5. Додати `opengraph-image`
6. Створити `sitemap.ts`
7. Створити `robots.ts`
8. Підключити шрифт через `next/font`
9. Замінити `<img>` на `next/image` — показати оптимізацію
10. Перевірити результат через Lighthouse
