// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';

const productCategoryCollection = defineCollection({
    loader: glob({
        pattern: '**/[^_]*.{md,mdx}',
        base: './src/content/products'
    }),
    schema: ({image})=>
        z.object({
            title: z.string(),
            description: z.string(),
            banner: image(),
            imgCard: image(),
            imgAlt: z.string().optional(),
            products: z.array(
                z.object({
                    id: z.string(),
                    name: z.string(),
                    description: z.string(),
                    image: image(),
                    btnTitle: z.string(),
                    btnURL: z.string()
                })
            ).optional()
        })
});


export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  categories: productCategoryCollection
};
