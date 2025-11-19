import { EducationItem } from "@/components/resume/education-item";
import { PrintButton } from "@/components/resume/print-button";
import { SectionItem } from "@/components/resume/section-item";
import { WorkExperienceItem } from "@/components/resume/work-experience-item";
import { getEducation, getWorkExperiences, skills } from "@/data/resume";
import { Link } from "@/i18n/navigation";
import "@/styles/resume.css";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function ResumePage() {
  const t = await getTranslations();
  const workExperiences = await getWorkExperiences();
  const educations = await getEducation();

  return (
    <div className="resume space-y-8 print:space-y-4">
      <section className="flex flex-col gap-4 md:flex-row md:gap-8">
        <div className="relative aspect-square h-28 w-28 shrink-0 overflow-hidden rounded-full">
          <Image
            fill
            alt=""
            src="/images/profile.jpg"
            className="object-cover will-change-auto"
          />
        </div>

        <div className="space-y-1 pt-2">
          <h1 className="font-sans font-medium">Rakotonirina Ony Lovasoa</h1>
          <p>{t("Globals.jobTitle")}</p>

          <p className="flex flex-wrap gap-2 text-sm">
            <Link href="mailto:ony@ony.world">ony@ony.world,</Link>
            <Link href="https://www.linkedin.com/in/ony-boom/">
              in/ony-boom,
            </Link>
            <Link href="https://www.github.com/ony-boom/">
              github/ony-boom,
            </Link>
            <Link href="tel:+261349315782">+261 34 93 157 82</Link>
          </p>
        </div>
      </section>

      <SectionItem title={t("Resume.skills")}>
        <div className="space-y-1">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <p>
                <strong className="capitalize">{category}:</strong>{" "}
                {skillList.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </SectionItem>

      <SectionItem title={t("Resume.workExperience")}>
        <div className="space-y-8 print:space-y-4">
          {workExperiences.map((work, index) => (
            <WorkExperienceItem
              key={index}
              index={index}
              workExperience={work}
            />
          ))}
        </div>
      </SectionItem>

      <SectionItem title={t("Resume.education")}>
        <div className="flex flex-col gap-4 md:flex-row md:gap-12">
          {educations.map((education, index) => (
            <EducationItem key={index} index={index} education={education} />
          ))}
        </div>
      </SectionItem>

      <SectionItem title={t("Resume.languages")}>
        <ul className="p-0 list-disc list-inside">
          <li>Français ({t("Globals.fluent")})</li>
          <li>English ({t("Globals.professional")})</li>
          <li>Malagasy ({t("Globals.native")})</li>
        </ul>
      </SectionItem>

      <PrintButton className="fixed bottom-4 right-4 print:hidden" />
    </div>
  );
}
