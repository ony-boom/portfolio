"use client";

import { Project } from "@/sanity/types";
import { createPortal } from "react-dom";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { ProjectAsset } from "@/components/project-list/project-asset";
import { PortableText } from "next-sanity";
import { getTranslationFromTranslatedField } from "@/sanity/utils";
import { useLocale } from "next-intl";

export function ProjectItemLinkPreview({
  project,
  open,
  ...props
}: ProjectItemLinkProps) {
  const locale = useLocale();
  const hasAsset = project.asset.type;

  if (!hasAsset) return null;

  const description = getTranslationFromTranslatedField(
    project.description,
    locale,
  );

  return createPortal(
    <div
      {...props}
      className={cn(
        props.className,
        "with-noise bg-background animate-fade-in border-border fixed hidden aspect-video w-80 rounded-md border p-2",
        {
          block: open,
        },
      )}
    >
      <ProjectAsset asset={project.asset} className="rounded" />

      <div className="mt-2 text-sm">
        <PortableText value={description} />
      </div>
    </div>,
    document.body,
  );
}

export type ProjectItemLinkProps = ComponentProps<"div"> & {
  project: Project;
  open: boolean;
};
