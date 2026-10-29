import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    org: z.string().optional(),
    order: z.number(),
    featured: z.boolean().default(false),
    problem: z.string(),
    tags: z.array(z.string()),
    link: z.string().url().optional(),
    linkText: z.string().optional(),
    todo: z.string().optional(),
  }),
});

export const collections = { projects };
