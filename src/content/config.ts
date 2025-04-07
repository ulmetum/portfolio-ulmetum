import { file } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const proyects = defineCollection({
  loader: file('src/data/projects.json'),
  schema: z.object({
    id: z.number(),
    featuredImage: z.string(),
    title: z.string(),
    description: z.string(),
    link: z.string(),
    tags: z.array(z.string()),
  }),
})

export const collections = { proyects }
