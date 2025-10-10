import { Link } from "@/i18n/navigation";
import { formatDateLong } from "@/lib/utils";
import { client } from "@/sanity/client";
import { Blog } from "@/sanity/types";
import { getLocale } from "next-intl/server";

type BlogListItem = Pick<
	Blog,
	"_id" | "title" | "slug" | "_createdAt" | "publishedAt"
>;

export async function NormalBlogList({ limit }: { limit?: number }) {
	const locale = await getLocale();
	const blogs = await client.fetch<BlogListItem[]>(
		`*[_type == "blog" && language == $locale] | order(_createdAt asc){
      _id,
      title,
      slug,
      publishedAt,
      _createdAt
    }${limit ? `[0...${limit}]` : ""}`,
		{ locale },
	);

	const isEmpty = blogs.length === 0;

	return (
		<ul className="list-none space-y-2 p-0">
			{isEmpty ? (
				<p className="text-muted-foreground">¯\_(ツ)_/¯</p>
			) : (
				blogs.map((blog, index) => {
					const date = formatDateLong(blog.publishedAt, locale);

					return (
						<li
							className="text-muted-foreground animate-fade-in hover:text-foreground flex items-baseline justify-between gap-12 sm:gap-6 transition-colors duration-300"
							key={blog._id}
							style={{
								animationDuration: "1s",
								animationDelay: `${index * 0.2}s`,
							}}
						>
							<Link
								href={`/blog/${blog.slug}`}
								title={blog.title}
								className="truncate"
							>
								{blog.title}
							</Link>
							<span className="hidden flex-1 border-b border-dashed border-current sm:inline-block"></span>
							<span className="flex-shrink-0 font-serif text-xs">{date}</span>
						</li>
					);
				})
			)}
		</ul>
	);
}
