import { client } from "@/sanity/client";
import type { Project } from "@/sanity/types";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { ProjectItem } from "@/components/project-list/project-item";

export async function NormalProjectList({
  className,
  limit = -1,
  ...props
}: ProjectListProps) {
  const projects = await client.fetch<Project[]>(`*[_type == "project"]{
  _id,
  name,
  links,
  description,
  "asset": {
    "type": asset.asset->mimeType,
    "url": asset.asset->url
  }
}[0..${limit}]`);

  return (
    <ul {...props} className={cn(className, "")}>
      {projects.map((project) => (
        <li key={project._id}>
          <ProjectItem project={project} />
        </li>
      ))}
    </ul>
  );
}

export type ProjectListProps = ComponentProps<"ul"> & {
  limit?: number;
};
