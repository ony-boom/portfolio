import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

const portfolioSchema = z.object({
  name: z.string(),
  description: z.string(),
  links: z.array(
    z.object({
      type: z.enum(["source", "live"]),
      url: z.string().url(),
    }),
  ),
  thumbnails: z.object({
    type: z.enum(["video", "image"]),
    src: z.string(),
    alt: z.optional(z.string()),
  }),
  hideInPortfolio: z.optional(z.boolean()),
  techStack: z.array(z.string()).optional(),
});

const blogSchema = z.object({
  title: z.string(),
  published: z.boolean(),
  description: z.string(),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()).optional(),
  updatedDate: z.coerce.date().optional(),
});

const portfolio = defineCollection({
  loader: file("./src/data/portfolio.json"),
  schema: portfolioSchema,
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: blogSchema,
});

export const collections = { portfolio, blog };
export type TPortfolioItem = z.infer<typeof portfolioSchema>;
