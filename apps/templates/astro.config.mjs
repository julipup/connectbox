import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  outDir: '../server/templates/generated',
  integrations: [lit(), tailwind()],
  base: 'static'
});
