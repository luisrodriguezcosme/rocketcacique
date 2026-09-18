import { defineConfig, passthroughImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rocketcacique.com',
  integrations: [sitemap()],
  image: { service: passthroughImageService() },
});
