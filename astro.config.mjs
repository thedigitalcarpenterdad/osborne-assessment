import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// In CI / production builds we set BASE_PATH to apply a sub-path (e.g. for GitHub Pages).
// Locally and on platforms like Cloudflare Pages it stays root.
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  base,
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: '0.0.0.0',
      allowedHosts: [
        'localhost',
        '.ts.net', // any tailscale host
        '.taild46ac1.ts.net',
        'nicheclaws-mac-mini.taild46ac1.ts.net',
        '192.168.1.222',
        '100.105.205.127',
      ],
    },
  },
  build: { inlineStylesheets: 'auto' },
});
