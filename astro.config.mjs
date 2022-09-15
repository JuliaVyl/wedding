import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), image()],
  output: 'server',
  adapter: vercel(),
  define: {
    'process.env': {},
  },
});
