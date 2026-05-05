import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const REPO = 'osborne-assessment';
const USER = 'thedigitalcarpenterdad';

export default defineConfig({
  site: `https://${USER}.github.io`,
  base: `/${REPO}`,
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: 'auto' },
});
