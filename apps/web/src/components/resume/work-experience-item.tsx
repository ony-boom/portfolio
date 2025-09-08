"use client";

import { Link } from "@/i18n/navigation";
import { formatMonthYear } from "@/lib/utils";
import { WorkExperience } from "@/types";
import { useLocale } from "next-intl";

export function WorkExperienceItem({
  index,
  workExperience,
}: {
  index: number;
  workExperience: WorkExperience;
}) {
  const locale = useLocale();

  return (
    <div id={`work-${index}`}>
      <div className="text-muted-foreground flex justify-between text-sm">
        <p>
          <span className="capitalize">
            {formatMonthYear(workExperience.dates.from, locale)}{" "}
          </span>{" "}
          -{" "}
          <span className="capitalize">
            {formatMonthYear(workExperience.dates.to, locale)}
          </span>
        </p>
      </div>
      <h3 className="mt-2 font-sans font-medium">
        {workExperience.title} <span className="font-light">-</span>{" "}
        {workExperience.companyUrl ? (
          <Link target="_blank" href={workExperience.companyUrl}>
            {workExperience.company}
          </Link>
        ) : (
          <span className="font-light">{workExperience.company}</span>
        )}
      </h3>

      <p className="mt-2">{workExperience.description}</p>
    </div>
  );
}
