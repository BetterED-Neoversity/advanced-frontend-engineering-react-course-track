"use client";

export type AppLang = "en" | "uk" | "pl";

export default function LangSwitcher() {
  const lang = "en"; // TODO: підключити до стора
  const changeLang = (nextLang: AppLang) => {}; // TODO: підключити до стора

  return (
    <select
      value={lang}
      onChange={(event) => changeLang(event.target.value as AppLang)}
    >
      <option value="en">EN</option>
      <option value="uk">UK</option>
      <option value="pl">PL</option>
    </select>
  );
}
