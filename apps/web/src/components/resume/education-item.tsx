"use client";

import { Link } from "@/i18n/navigation";
import { Education } from "@/types";

export function EducationItem({
  education,
  index,
}: {
  index: number;
  education: Education;
}) {
  return (
    <div id={`education-${index}`}>
      <h3 className="font-sans font-medium">
        {education.schoolUrl ? (
          <Link
            target="_blank"
            className="font-medium"
            href={education.schoolUrl}
          >
            {education.school}
          </Link>
        ) : (
          <span>{education.school}</span>
        )}
      </h3>

      <p className="mt-2">{education.description}</p>
    </div>
  );
}
