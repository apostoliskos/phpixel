import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import lit from "@astrojs/lit";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://phpixel.gr',
  sitemap: true,
  integrations: [sitemap(), mdx(), lit(), icon()],
  output: 'server',
  adapter: vercel(),
  build: {
    inlineStylesheets: 'always', // Remove the extra 'build' nesting here
  },
});