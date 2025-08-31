"use client";

import {
  ComponentProps,
  CSSProperties,
  MouseEventHandler,
  useState,
} from "react";
import { Project } from "@/sanity/types";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { getTranslationFromTranslatedField } from "@/sanity/utils";
import { Link } from "@/i18n/navigation";
import { ProjectItemLinkPreview } from "./project-item-link-preview";

const OFFSET = 14;

export function ProjectItem({
  project,
  className,
  ...props
}: ProjectItemProps) {
  const locale = useLocale();
  const [popoverPosition, setPopoverPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const name = getTranslationFromTranslatedField(project.name, locale);
  const mainLink = project.links[0];

  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = () => {
    setIsPopoverVisible(true);
  };

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    setIsPopoverVisible(false);
    setPopoverPosition(null);
  };

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    setPopoverPosition({ x: event.clientX, y: event.clientY });
  };

  const getPopoverStyle = (
    pos: { x: number; y: number } | null,
    offset: number,
  ): CSSProperties => {
    if (!pos) return {};
    return {
      top: pos.y + offset,
      left: pos.x + offset,
      animationDuration: ".2s",
    };
  };

  const popoverStyle = getPopoverStyle(popoverPosition, OFFSET);

  return (
    <div
      {...props}
      className={cn(className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ProjectItemLinkPreview
        project={project}
        open={isPopoverVisible}
        style={popoverStyle}
      />

      <Link href={mainLink.url} target="_blank">
        {name}
      </Link>
    </div>
  );
}

export type ProjectItemProps = ComponentProps<"div"> & {
  project: Project;
};
