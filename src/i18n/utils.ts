import stripIndent from "strip-indent";
import { ui, defaultLang, type Locale, showDefaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[Locale]) {
    return stripIndent(ui[lang][key] || ui[defaultLang][key]);
  };
}
