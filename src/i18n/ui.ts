export type Locale = "en" | "fr";

export const language: Record<Locale, string> = {
  fr: "Français",
  en: "English",
};

export const defaultLang: Locale = "en";
export const showDefaultLang = false;

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
    "home.portfolio.cta": "Show all",
    "resume.about": "About me",
    "portfolio.mms.title": "My music App",
    "links.title": "Links",
    "links.subtitle": "List of my social media and other links",
    "portfolio.mms.description": `
      I've always had a passion for music players,
      so I set out to build one myself—a custom app that combines functionality with my love for music and design.
    `,
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
    "home.portfolio.cta": "Montrer tout",
    "resume.about": "À propos de moi",
    "links.title": "Liens",
    "links.subtitle": "Liste de mes réseaux sociaux et autres liens",
    "portfolio.mms.title": "Mon lecteur de musique",
    "portfolio.mms.description": `
      J’ai toujours été passionné par les lecteurs de musique,
      alors j’ai décidé d’en créer un moi-même—une application personnalisée
      et fonctionnelle qui reflète mon amour pour la musique et le design.
    `,
  },
} as const;

export type TranslationKey = keyof typeof ui['en'];
