import { defineCollection, z } from 'astro:content';
import { img } from 'motion/react-client';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		img1: z.string().optional(),
		img2: z.string().optional(),
		img3: z.string().optional(),
		img4: z.string().optional(),
		img5: z.string().optional(),
		img6: z.string().optional(),
	}),
});

export const collections = { blog };
