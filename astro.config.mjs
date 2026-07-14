import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import lit from "@astrojs/lit";
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://phpixel.gr',
  sitemap: true,
  redirects: {
    '/ecommerce': { status: 301, destination: '/kataskevi-eshop' },
    '/istoselides-landingpage': { status: 301, destination: '/kataskevi-istoselidon' },
    '/social-media-marketing': { status: 301, destination: '/diafimisi' },
    '/hosting': { status: 301, destination: '/services' },
  },
  integrations: [sitemap(), mdx(), lit(), icon()],
  output: 'server',
  adapter: vercel(),
  build: {
    inlineStylesheets: 'always', // Remove the extra 'build' nesting here
  },
});