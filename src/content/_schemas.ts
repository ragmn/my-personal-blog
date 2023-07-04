import { z } from "astro:content";

export const blogSchema = z
  .object({
    author: z.string().optional(),
    pubDatetime: z.date(),
    title: z.string(),
    postSlug: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
    ogImage: z.string().optional(),
    description: z.string(),
    imgSrc: z.string().optional(),
    imgAlt: z.string().optional(),
    readingTime: z.string().optional().default("3 Mins"),
  })
  .strict();

export type BlogFrontmatter = z.infer<typeof blogSchema>;
