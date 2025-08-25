import { Suspense } from "react";
import { ProjectListLoading } from "./list-loading";
import { NormalProjectList, ProjectListProps } from "./project-list";

function SuspendedProjectList(props: ProjectListProps) {
  return (
    <Suspense fallback={<ProjectListLoading />}>
      <NormalProjectList {...props} />
    </Suspense>
  );
}

export { SuspendedProjectList as ProjectList };
