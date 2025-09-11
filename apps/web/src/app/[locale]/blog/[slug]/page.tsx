import { cache } from "react";
import { client } from "@/sanity/client";
import { SingleBlog } from "@/sanity/types";
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { BlogContent } from "@/components/blog/blog-content";
import { Metadata } from "next";

const getSingleBlog = cache((slug: string, locale: string) => {
  return client.fetch<SingleBlog>(
    `*[_type == "blog" && slug == $slug && language == $locale][0]{
      title,
      description,
      _createdAt,
      publishedAt,
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
});

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLocale();
  const { slug } = await params;
  const blog = await getSingleBlog(slug, locale);

  if (!blog) {
    return {};
  }

  return {
    title: `Ony | ${blog.title}`,
    description: blog.description,
  };
}

export default async function BlogPage(props: Props) {
  const locale = await getLocale();
  const { slug } = await props.params;

  const blog = await getSingleBlog(slug, locale);
  if (!blog) {
    notFound();
  }

  return <BlogContent blog={blog} />;
}
