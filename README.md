# Заняття 6 — Форми з Formik

- Бібліотека [Formik](https://formik.org/)
- Контейнер форми `Formik` та `Form`
  - Пропс `initialValues`
  - Пропс `onSubmit`
- Поля форми `Field`
  - Атрибут `name`
- Стилізація компонентів `Formik`
- Типізація `initialValues`
- Параметри `values` та `actions` у `onSubmit`
- Типи полів через пропс `as`
- Доступ до властивостей `Formik` у JSX через Render Prop
- Валідація з [`Yup`](https://github.com/jquense/yup)
  - Схема валідації
  - Можливі аргументи функції-валідатора
  - Пропс `validationSchema`
- Компонент `ErrorMessage`
  - Пропс `component`

## Стартові файли у проєкті

- `src/components/OrderForm.tsx` — базова форма з полями `username` та `email`, потребує підключення Formik

## Послідовність заняття

1. Підключити `Formik` та `Form` до `OrderForm` — додати `initialValues` та `onSubmit`
2. Замінити `input` на `Field` — пояснити атрибут `name`
3. Типізувати `initialValues`
4. Показати `values` та `actions` у `onSubmit`
5. Додати решту полів форми з повної розмітки — radio, checkbox, select, textarea
6. Показати типи полів через пропс `as`
7. Показати Render Prop для доступу до властивостей Formik у JSX
8. Додати валідацію через `Yup` — схема, `validationSchema`
9. Додати `ErrorMessage` для відображення помилок

## Повна форма

Розмітка всіх полів для копіювання під час заняття:

```tsx
export default function OrderForm() {
  const fieldId = useId();
  return (
    <form className={css.form}>
      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Client Info</legend>
        <label htmlFor={`${fieldId}-username`} className={css.label}>
          Name
        </label>
        <input
          type="text"
          name="username"
          id={`${fieldId}-username`}
          className={css.input}
        />
        <label htmlFor={`${fieldId}-email`} className={css.label}>
          Email
        </label>
        <input
          type="email"
          name="email"
          id={`${fieldId}-email`}
          className={css.input}
        />
      </fieldset>
      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Delivery method</legend>
        <label className={css.option}>
          <input type="radio" name="delivery" value="pickup" />
          Pickup
        </label>
        <label className={css.option}>
          <input type="radio" name="delivery" value="courier" />
          Courier
        </label>
        <label className={css.option}>
          <input type="radio" name="delivery" value="drone" />
          Drone delivery
        </label>
      </fieldset>
      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Dietary restrictions</legend>
        <label className={css.option}>
          <input type="checkbox" name="restrictions" value="vegan" />
          Vegan
        </label>
        <label className={css.option}>
          <input type="checkbox" name="restrictions" value="gluten-free" />
          Gluten-free
        </label>
        <label className={css.option}>
          <input type="checkbox" name="restrictions" value="nut-free" />
          Nut-free
        </label>
      </fieldset>
      <label htmlFor={`${fieldId}-deliveryTime`} className={css.label}>
        Preferred delivery time
      </label>
      <select
        name="deliveryTime"
        id={`${fieldId}-deliveryTime`}
        className={css.input}
      >
        <option value="">-- Choose delivery time --</option>
        <option value="morning">Morning (8:00-12:00)</option>
        <option value="afternoon">Afternoon (12:00-16:00)</option>
        <option value="evening">Evening (16:00-20:00)</option>
      </select>
      <label htmlFor={`${fieldId}-message`} className={css.label}>
        Additional message
      </label>
      <textarea
        name="message"
        rows={4}
        id={`${fieldId}-message`}
        className={css.textarea}
      ></textarea>
      <button type="submit" className={css.button}>
        Place order
      </button>
    </form>
  );
}
```
