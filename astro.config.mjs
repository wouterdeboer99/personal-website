// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: process.env.RENDER_EXTERNAL_URL || 'http://localhost:4321',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl', 'fy'],
    routing: { prefixDefaultLocale: false },
  },
});
