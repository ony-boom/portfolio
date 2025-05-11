import { Globe } from "lucide-react";
import { language, type Locale } from "../i18n/ui";
import { useState, useEffect } from "react";

export function LanguagePicker({ defaultLanguage }: LanguagePickerProps) {
  const [open, setOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] =
    useState<Locale>(defaultLanguage);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".language-picker-container")) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  const handleLanguageChange = (locale: Locale) => {
    setCurrentLanguage(locale);

    const currentPath = window.location.pathname;

    let newPath: string;

    const pathWithoutLang = currentPath.replace(/^\/(fr)\//, "/");

    if (locale === "en") {
      newPath = pathWithoutLang;
    } else {
      if (pathWithoutLang === "/" || pathWithoutLang === "") {
        newPath = `/${locale}`;
      } else {
        const cleanPath = pathWithoutLang.startsWith("/")
          ? pathWithoutLang.substring(1)
          : pathWithoutLang;
        newPath = `/${locale}/${cleanPath}`;
      }
    }

    const queryString = window.location.search;
    const hashString = window.location.hash;

    window.location.href = `${newPath}${queryString}${hashString}`;
  };

  return (
    <div className="language-picker-container fixed right-4 bottom-4 z-50">
      {open && (
        <div className="fixed right-4 bottom-16 flex flex-col overflow-hidden rounded-xl bg-neutral-900 text-neutral-100 shadow-lg">
          {Object.entries(language).map(([locale]) => {
            const isCurrent = currentLanguage === locale;
            return (
              <button
                className={`${
                  isCurrent ? "font-semibold" : ""
                } px-4 py-2 text-left uppercase transition-colors hover:bg-neutral-800`}
                onClick={() => {
                  if (!isCurrent) {
                    handleLanguageChange(locale as Locale);
                  }
                }}
                key={locale}
              >
                {locale}
              </button>
            );
          })}
        </div>
      )}
      <button
        onClick={handleToggle}
        className="flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-neutral-100 shadow-md transition-colors hover:bg-neutral-800"
        aria-label="Select language"
        aria-expanded={open}
      >
        <Globe size={18} />
        <span className="uppercase">{currentLanguage}</span>
      </button>
    </div>
  );
}

export type LanguagePickerProps = {
  defaultLanguage: Locale;
};
