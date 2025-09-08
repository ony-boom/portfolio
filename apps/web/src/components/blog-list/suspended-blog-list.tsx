import { ComponentProps, Suspense } from "react";
import { NormalBlogList } from "./normal-blog-list";
import { LoadingBlogList } from "./loading-blog-list";

function SuspendedBlogList(props: ComponentProps<typeof NormalBlogList>) {
  return (
    <Suspense fallback={<LoadingBlogList />}>
      <NormalBlogList {...props} />
    </Suspense>
  );
}

export { SuspendedBlogList as BlogList };
