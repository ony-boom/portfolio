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
      <div className="flex items-center justify-between">
        <h3 className="font-sans font-medium">
          {workExperience.title}
          {workExperience.company && (
            <>
              {" "}
              <span className="font-light">-</span>{" "}
              {workExperience.companyUrl ? (
                <Link target="_blank" href={workExperience.companyUrl}>
                  {workExperience.company}
                </Link>
              ) : (
                <span className="font-light">{workExperience.company}</span>
              )}
            </>
          )}
        </h3>

        <p className="text-muted-foreground flex gap-2 text-sm">
          <span className="capitalize">
            {formatMonthYear(workExperience.dates.from, locale)}{" "}
          </span>{" "}
          -{" "}
          <span className="capitalize">
            {formatMonthYear(workExperience.dates.to, locale)}
          </span>
        </p>
      </div>

      <p className="mt-2">{workExperience.description}</p>
    </div>
  );
}
