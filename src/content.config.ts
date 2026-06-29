import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    pubDate: z.date(),
    readingTime: z.string(),
    category: z.string(),
    authorName: z.string().default('Psikolojik Danışman Selcan Sarılmış'),
    authorTitle: z.string().default('Psikolojik Danışman, PDR'),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const alanlar = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/alanlar' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    order: z.number().default(0),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    forWho: z.array(z.string()),
    process: z.array(z.string()),
    whyOnline: z.array(z.object({ title: z.string(), text: z.string() })).optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })),
  }),
});

export const collections = { blog, alanlar };
