// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx(),
    sitemap(),
    react(),
    sanity({
      projectId: "3bimsx99", // Replace this with your actual Sanity project ID
      dataset: "production", // This is the default dataset name
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
