import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://bookmarks.harleylara.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
