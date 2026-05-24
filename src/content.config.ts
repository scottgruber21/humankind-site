import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // 1. Import the new glob loader

const insightsCollection = defineCollection({
  // 2. Add the loader to find markdown files in your insights directory
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.string().default('Clinical Navigation'),
    excerpt: z.string(),
    isFeatured: z.boolean().default(false),
  }),
});

export const collections = {
  'insights': insightsCollection,
};