import stripIndent from "strip-indent";
import { ui, defaultLang, type Locale } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[Locale]) {
    return stripIndent(ui[lang][key] || ui[defaultLang][key]);
  };
}
