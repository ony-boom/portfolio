"use client";

import { Project } from "@/sanity/types";
import { createPortal } from "react-dom";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { ProjectAsset } from "@/components/project-list/project-asset";

export default function ProjectItemLinkPreview({
  project,
  open,
  ...props
}: ProjectItemLinkProps) {
  const hasAsset = project.asset.type;

  if (!hasAsset) return null;

  return createPortal(
    <div
      {...props}
      className={cn(
        props.className,
        "bg-background animate-fade-in border-border fixed hidden aspect-video w-80 rounded-md border p-1",
        {
          "sm:block": open,
        },
      )}
    >
      <ProjectAsset asset={project.asset} className="rounded" />
    </div>,
    document.body,
  );
}

export type ProjectItemLinkProps = ComponentProps<"div"> & {
  project: Project;
  open: boolean;
};
