"use client";

import { useLocale } from "next-intl";
import { BlogCover } from "./blog-cover";
import { PortableText } from "next-sanity";
import { SingleBlog } from "@/sanity/types";
import { cn, formatDate } from "@/lib/utils";
import { AspectRatio } from "../ui/aspect-ratio";
import { BreadcrumbContext } from "@/context/breadcrumb-context";
import { ComponentProps, useContext, useLayoutEffect } from "react";

export function BlogContent({ blog, className, ...props }: BlogContentProps) {
  const locale = useLocale();
  const { setActiveTitle } = useContext(BreadcrumbContext);

  useLayoutEffect(() => {
    setActiveTitle(blog.title);
    return () => {
      setActiveTitle("");
    };
  }, [blog.title, setActiveTitle]);

  const date = formatDate(blog._createdAt, locale);

  return (
    <article className={cn(className)} {...props}>
      <div className="space-y-6">
        <div className="space-y-1">
          <h1 className="text-xl">{blog.title}</h1>
          <p className="text-muted-foreground italic">{date}</p>
        </div>

        <div className="space-y-2">
          <AspectRatio ratio={16 / 9} className="overflow-hidden rounded">
            <BlogCover
              alt={blog.cover.caption ?? ""}
              className="object-cover"
              imageData={blog.cover}
            />
          </AspectRatio>
          <p className="text-muted-foreground text-end text-sm italic">
            {blog.cover.caption}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <PortableText value={blog.content} />
      </div>
    </article>
  );
}

export type BlogContentProps = ComponentProps<"article"> & {
  blog: SingleBlog;
};
