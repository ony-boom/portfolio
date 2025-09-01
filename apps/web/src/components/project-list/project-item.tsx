"use client";

import { ComponentProps } from "react";
import { Project } from "@/sanity/types";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { getTranslationFromTranslatedField } from "@/sanity/utils";
import { Link } from "@/i18n/navigation";
import { PortableText } from "next-sanity";

export function ProjectItem({
  project,
  className,
  ...props
}: ProjectItemProps) {
  const locale = useLocale();
  const mainLink = project.links[0];
  const name = getTranslationFromTranslatedField(project.name, locale);
  const description = getTranslationFromTranslatedField(
    project.description,
    locale,
  );

  return (
    <div {...props} className={cn(className)}>
      <Link href={mainLink.url} target="_blank">
        {name}
      </Link>

      <div className="text-muted-foreground mt-2">
        <PortableText value={description} />
      </div>
    </div>
  );
}

export type ProjectItemProps = ComponentProps<"div"> & {
  project: Project;
};
