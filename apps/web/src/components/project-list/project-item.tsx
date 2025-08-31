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
import { PortableText } from "next-sanity";
import dynamic from "next/dynamic";

const OFFSET = 12;

const ProjectItemLinkPreview = dynamic(
  () => import("./project-item-link-preview"),
  { ssr: false },
);

export function ProjectItem({
  project,
  className,
  ...props
}: ProjectItemProps) {
  const [popoverPosition, setPopoverPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const locale = useLocale();
  const mainLink = project.links[0];
  const name = getTranslationFromTranslatedField(project.name, locale);
  const description = getTranslationFromTranslatedField(
    project.description,
    locale,
  );

  const handleMouseEnter: MouseEventHandler<HTMLAnchorElement> = () => {
    setTimeout(() => {
      setIsPopoverVisible(true);
    }, 200);
  };

  const handleMouseLeave: MouseEventHandler<HTMLAnchorElement> = () => {
    setIsPopoverVisible(false);
    setPopoverPosition(null);
  };

  const handleMouseMove: MouseEventHandler<HTMLAnchorElement> = (event) => {
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
      animationDuration: ".3s",
    };
  };

  const popoverStyle = getPopoverStyle(popoverPosition, OFFSET);

  return (
    <div {...props} className={cn(className)}>
      <ProjectItemLinkPreview
        project={project}
        open={isPopoverVisible}
        style={popoverStyle}
      />

      <Link
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        href={mainLink.url}
        target="_blank"
      >
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
