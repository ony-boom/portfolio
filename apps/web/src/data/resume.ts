import { Education, WorkExperience } from "@/types";
import { getTranslations } from "next-intl/server";

export const skills = {
  frontend: [
    "TypeScript",
    "JavaScript",
    "Next.js",
    "React/React Native",
    "Angular",
  ],
  backend: ["Node.js", "Go (Golang)", "Python", "GraphQL"],
  infrastructure: ["Docker", "PostgreSQL", "Nix/NixOS"],
};

export const getWorkExperiences = async (): Promise<WorkExperience[]> => {
  const t = await getTranslations("Resume");

  return [
    {
      dates: {
        from: new Date(2023, 3), // April 2023
        to: new Date(2025, 6), // July 2025
      },
      company: "BOCASAY",
      companyUrl: "https://www.bocasay.com/",
      title: t("works.bocasay.title"),
      description: t("works.bocasay.description"),
    },

    {
      dates: {
        from: new Date(2022, 11), // November 2022
        to: new Date(2023, 3), // April 2023
      },

      company: "BOCASAY",
      companyUrl: "https://www.bocasay.com/",
      title: t("works.internship.title"),
      description: t("works.internship.description"),
    },

    {
      dates: {
        from: new Date(2021, 6), // June 2021
        to: new Date(2022, 9), // October 2022
      },
      title: t("works.freelance.title"),
      description: t("works.freelance.description"),
    },
  ];
};

export const getEducation = async (): Promise<Education[]> => {
  const t = await getTranslations("Resume");

  return [
    {
      school: "SAYNA",
      schoolUrl: "https://www.sayna.io/",
      description: t("educations.sayna.description"),
    },

    {
      school: "E-Media",
      schoolUrl: "https://e-mediauniversity.io/",
      description: t("educations.emedia.description"),
    },
  ];
};
