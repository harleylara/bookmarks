// src/content.config.ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const bookmarks = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/bookmarks',
  }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { bookmarks };
