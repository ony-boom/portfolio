import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

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
});

export type TPortfolioItem = z.infer<typeof portfolioSchema>;

const portfolio = defineCollection({
  loader: file("./src/data/portfolio.json"),
  schema: portfolioSchema,
});

export const collections = { portfolio };
