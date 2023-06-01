import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/hybrid";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel(),
  integrations: [react(), mdx()],
  experimental: {
    hybridOutput: true,
  },
});