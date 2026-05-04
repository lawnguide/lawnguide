import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum([
      'lawn-care',
      'lawn-renovation',
      'product-reviews',
      'seasonal',
      'problems-fixes',
    ]),
    heroImage: z.string().optional(),
    author: z.string().default('James Harrower'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };