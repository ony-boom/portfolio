import { Suspense } from "react";
import { NormalBlogList } from "./normal-blog-list";
import { LoadingBlogList } from "./loading-blog-list";

function SuspendedBlogList() {
  return (
    <Suspense fallback={<LoadingBlogList />}>
      <NormalBlogList />
    </Suspense>
  );
}

export { SuspendedBlogList as BlogList };
