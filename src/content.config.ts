import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/projects',
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.string(),
    summary: z.string(),
    problem: z.string(),
    solution: z.string(),
    status: z.string(),
    featured: z.boolean().default(false),
    hidden: z.boolean().default(false),
    year: z.string(),
    stack: z.array(z.string()),
    links: z
      .object({
        live: z.string().url().optional(),
        github: z.string().url().optional(),
        demo: z.string().url().optional(),
      })
      .default({}),
    visuals: z
      .array(
        z.object({
          type: z.string(),
          caption: z.string(),
        }),
      )
      .default([]),
  }),
});

const articles = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/articles',
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    excerpt: z.string(),
    publishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    status: z.enum(['draft', 'published', 'placeholder']),
    tags: z.array(z.string()),
    cover: z.string().nullable().default(null),
    externalUrl: z.string().url().optional(),
  }),
});

const services = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/services',
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    shortDescription: z.string(),
    description: z.string(),
    deliverables: z.array(z.string()),
    technologies: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/experience',
  }),
  schema: z.object({
    title: z.string(),
    period: z.string(),
    description: z.string(),
    link: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = {
  projects,
  articles,
  services,
  experience,
};
