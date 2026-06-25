// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // [DÜZENLE] gerçek alan adınızla değiştirin
  site: 'https://www.ornek-danismanlik.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
