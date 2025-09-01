import { clsx, type ClassValue } from "clsx";
import { Locale } from "next-intl";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string, locale: Locale = "en") {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "long",
    timeStyle: undefined,
  }).format(date);
}
