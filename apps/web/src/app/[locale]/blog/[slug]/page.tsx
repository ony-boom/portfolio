import { client } from "@/sanity/client";
import { SingleBlog } from "@/sanity/types";
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { BlogContent } from "@/components/blog/blog-content";

export default async function BlogPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const locale = await getLocale();
  const { slug } = await props.params;

  const blog = await client.fetch<SingleBlog>(
    `*[_type == "blog" && slug == $slug && language == $locale][0]{
      title,
      _createdAt,
      cover{
        caption,
        asset->{
          ...,
          metadata
        }
      },
      content
    }`,
    { locale, slug },
  );

  if (!blog) {
    notFound();
  }

  return <BlogContent blog={blog} />;
}
