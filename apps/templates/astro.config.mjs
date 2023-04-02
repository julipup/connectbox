import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit';
import tailwind from '@astrojs/tailwind';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
  outDir: '../server/templates/generated',
  integrations: [lit(), tailwind()],
  build: {
    assets: 'static'
  },
  vite: {
    plugins: [
      Icons({
        compiler: 'astro',
      }),
    ],
  },
});
