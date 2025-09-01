import { Link } from "@/i18n/navigation";
import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/client";
import { Blog } from "@/sanity/types";
import { getLocale } from "next-intl/server";

type BlogListItem = Pick<Blog, "_id" | "title" | "slug" | "_createdAt">;

export async function NormalBlogList() {
  const locale = await getLocale();
  const blogs = await client.fetch<BlogListItem[]>(
    `*[_type == "blog" && language == $locale] | order(_createdAt desc){
      _id,
      title,
      slug,
      _createdAt
    }`,
    { locale },
  );

  return (
    <ul className="list-none space-y-2 p-0">
      {blogs.map((blog, index) => {
        const date = formatDate(blog._createdAt, locale);

        return (
          <li
            className="text-muted-foreground animate-fade-in hover:text-foreground flex items-baseline gap-6 transition-colors duration-300"
            key={blog._id}
            style={{
              animationDuration: "1s",
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <Link href={`/blog/${blog.slug}`} className="flex-shrink-0">
              {blog.title}
            </Link>
            <span className="flex-1 border-b border-dashed border-current"></span>
            <span className="flex-shrink-0 font-serif text-sm italic">
              {date}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
