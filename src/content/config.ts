import { defineCollection, z } from 'astro:content';

const certificates = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    title_es: z.string().optional(),
    issuer: z.string(),
    issuer_es: z.string().optional(),
    date: z.string(),
    category: z.string(),
    category_es: z.string().optional(),
    type: z.enum(['certification', 'degree', 'professional-certificate']),
    type_es: z.string().optional(),
    credential_id: z.string().optional(),
    credential_url: z.string().optional(),
    pdf_url: z.string().optional(),
    image: z.string(),
    description: z.string(),
    description_es: z.string().optional(),
    skills: z.array(z.string()),
    featured: z.boolean().optional().default(false),
    duration: z.string().optional(),
    duration_es: z.string().optional(),
    study_hours: z.string().optional(),
    study_hours_es: z.string().optional(),
    content_covered: z.array(z.string()).optional(),
    content_covered_es: z.array(z.string()).optional(),
    learning_outcomes: z.array(z.string()).optional(),
    learning_outcomes_es: z.array(z.string()).optional(),
  }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    current: z.boolean().optional().default(false),
    description: z.string(),
    achievements: z.array(z.string()),
    technologies: z.array(z.string()),
    logo: z.string().optional(),
    type: z.enum(['work', 'education']).default('work'),
  }),
});

const works = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    title_es: z.string().optional(),
    description: z.string(),
    description_es: z.string().optional(),
    image: z.string(),
    technologies: z.array(z.string()),
    link: z.string().optional(),
    github: z.string().optional(),
    completed: z.string(),
    featured: z.boolean().optional().default(false),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  certificates,
  experience,
  works,
  blog,
};