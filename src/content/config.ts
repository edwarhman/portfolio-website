// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

const companySchema = z.object({
  name: z.string(),
  url: z.string().url()
})
// 2. Define a `type` and `schema` for each collection
const experienceCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    details: z.string(),
    position: z.string(),
    companyName: z.string(),
    companyUrl: z.string().url(),
    startDate: z.string().date(),
    endDate: z.string().date(),
  }),
});


// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'experience': experienceCollection,
};
