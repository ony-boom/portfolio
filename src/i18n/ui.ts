export type Locale = "en" | "fr";

export const language: Record<Locale, string> = {
  fr: "Français",
  en: "English",
};

export const defaultLang: Locale = "en";

export const ui = {
  en: {
    "home.hero.text": "Hi I'm Ony, and I build apps.",
    "home.hero.leadText": `
        Welcome to my digital garden, where I share<span
          class="text-neutral-500 italic">(I will)</span
        >, about almost everything, but mostly programming/software stuff. Hope
        you'll find something interesting here.
    `,
    "home.portfolio.title": "Portfolio",
    "home.portfolio.description": "The forever WIP",
    "resume.jobTitle": "Web Developer",
  },
  fr: {
    "home.hero.text":
      "Bonjour, je m'appelle Ony et je développe des applications.",
    "home.hero.leadText": `
        Bienvenue dans mon jardin numérique, où je partage<span
        class="text-neutral-500 italic">(partagerai)</span
        >, sur presque tout, mais principalement sur la programmation et les logiciels. J'espère
        que vous trouverez quelque chose d'intéressant ici.
    `,
    "home.portfolio.title": "Portfolio",
    "home.portfolio.description": "L'en cours éternel",
    "resume.jobTitle": "Développeur Web",
  },
} as const;
