import { ComponentProps } from "react";
import { Project } from "@/sanity/types";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { getTranslationFromTranslatedField } from "@/sanity/utils";
import { ProjectAsset } from "./project-asset";

export function ProjectItem({
  project,
  className,
  ...props
}: ProjectItemProps) {
  const locale = useLocale();

  const name = getTranslationFromTranslatedField(project.name, locale);
  const asset = project.asset;

  return (
    <div {...props} className={cn(className, "")}>
    </div>
  );
}

export type ProjectItemProps = ComponentProps<"div"> & {
  project: Project;
};
