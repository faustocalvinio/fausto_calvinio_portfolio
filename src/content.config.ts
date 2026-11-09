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
    role: z.string().optional(),
    disclaimer: z.string().optional(),
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
          src: z.string().regex(/^\/(?!\/)/).optional(),
          alt: z.string().min(1).optional(),
          width: z.number().int().positive().optional(),
          height: z.number().int().positive().optional(),
        }).refine((visual) => !visual.src || Boolean(visual.alt?.trim()), {
          message: 'Las capturas con src necesitan un texto alternativo.',
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
    relatedProjects: z.array(z.string()).default([]),
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
