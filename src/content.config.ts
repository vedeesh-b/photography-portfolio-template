import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const gallery = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/gallery" }),
  schema: ({ image }) =>
    z.object({
      url: image(),
      title: z.string(),
      location: z.string(),
      section: z.enum(["nature", "sport", "travel"]),
      alt: z.string(),
    }),
});

export const collections = { gallery };
