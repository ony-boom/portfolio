import { trads } from "./trads";

export type Locale = "en" | "fr";

export const language: Record<Locale, string> = {
  fr: "Français",
  en: "English",
};

export const defaultLang: Locale = "en";
export const showDefaultLang = false;

export const ui = trads;

export type TranslationKey = keyof (typeof ui)["en"];
