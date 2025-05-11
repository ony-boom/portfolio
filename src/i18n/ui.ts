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
    "portfolio.nasa-gallery.title": "Nasa's gallery",
    "portfolio.nasa-gallery.description": `
      I built this project for both fun and practical purposes—my brother needed a website to access NASA's resources.
      It turned out to be quite useful and effective for that purpose.
    `,
    "links.title": "Links",
    "links.subtitle": "List of my social media and other links",
    "portfolio.mms.description": `
      I've always had a passion for music players,
      so I set out to build one myself—a custom app that combines functionality with my love for music and design.
    `,
    // New resume translations
    "resume.about.description":
      "I'm a web developer with 2 years of experience in building web applications. I'm passionate about creating user-friendly, responsive web applications that provide value to users. I'm always eager to learn new technologies and improve my skills.",
    "resume.experiences.title": "Experiences",
    "resume.experience.bocasay.developer.title": "Web developer",
    "resume.experience.bocasay.developer.description":
      "Developed a large-scale web application for SDS and cosmetic regulation. Redesigned the responsive, user-friendly interface and collaborated with the team to deliver high-performance web solutions.",
    "resume.experience.bocasay.intern.title": "Internship",
    "resume.experience.bocasay.intern.description":
      "Built a VS Code plugin that simplifies i18n management across projects.",
    "resume.experience.freelance.title": "Frontend developer",
    "resume.experience.freelance.description":
      "Developed high-performance, responsive web applications, like online learning platforms and ERP systems. Proactively managed project timelines and maintained effective client communication, consistently ensuring timely project delivery.",
    "resume.studies.title": "Studies",
    "resume.studies.sayna.title": "Certificate in web development",
    "resume.studies.sayna.description":
      "Completed an intensive web development program, focusing on full-stack development with JavaScript, React, Node.js and SQL.",
    "resume.studies.sayna.certificate": "View Certificate",
    "resume.languages.title": "Languages",
    "resume.languages.malagasy": "Malagasy (native)",
    "resume.languages.french": "French (fluent)",
    "resume.languages.english": "English (technical proficiency)",
    "resume.links.title": "Links",
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
    "portfolio.nasa-gallery.title": "Nasa's gallery",
    "portfolio.nasa-gallery.description": `
      J'ai créé ce projet à la fois par plaisir et pour des raisons pratiques—mon frère avait besoin d'un site web pour accéder aux ressources de la NASA.
      Il s'est avéré être vraiment utile et efficace pour cet objectif.
    `,
    "portfolio.mms.title": "Mon lecteur de musique",
    "portfolio.mms.description": `
      J'ai toujours été passionné par les lecteurs de musique,
      alors j'ai décidé d'en créer un moi-même—une application personnalisée
      et fonctionnelle qui reflète mon amour pour la musique et le design.
    `,
    // New resume translations
    "resume.about.description":
      "Je suis un développeur web avec 2 ans d'expérience dans la création d'applications web. Je suis passionné par la création d'applications web conviviales et réactives qui apportent de la valeur aux utilisateurs. Je suis toujours désireux d'apprendre de nouvelles technologies et d'améliorer mes compétences.",
    "resume.experiences.title": "Expériences",
    "resume.experience.bocasay.developer.title": "Développeur web",
    "resume.experience.bocasay.developer.description":
      "Développement d'une application web à grande échelle pour la réglementation SDS et cosmétique. Refonte de l'interface responsive et conviviale et collaboration avec l'équipe pour fournir des solutions web performantes.",
    "resume.experience.bocasay.intern.title": "Stage",
    "resume.experience.bocasay.intern.description":
      "Création d'un plugin VS Code qui simplifie la gestion de l'i18n entre les projets.",
    "resume.experience.freelance.title": "Développeur frontend",
    "resume.experience.freelance.description":
      "Développement d'applications web performantes et réactives, comme des plateformes d'apprentissage en ligne et des systèmes ERP. Gestion proactive des délais de projet et maintien d'une communication efficace avec les clients, assurant systématiquement la livraison des projets dans les délais.",
    "resume.studies.title": "Études",
    "resume.studies.sayna.title": "Certificat en développement web",
    "resume.studies.sayna.description":
      "Suivi d'un programme intensif de développement web, axé sur le développement full-stack avec JavaScript, React, Node.js et SQL.",
    "resume.studies.sayna.certificate": "Voir le certificat",
    "resume.languages.title": "Langues",
    "resume.languages.malagasy": "Malgache (langue maternelle)",
    "resume.languages.french": "Français (courant)",
    "resume.languages.english": "Anglais (compétence technique)",
    "resume.links.title": "Liens",
  },
} as const;

export type TranslationKey = keyof (typeof ui)["en"];
