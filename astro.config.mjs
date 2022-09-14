import react from '@astrojs/react';
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  adapter: vercel(),
});