import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/static";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel(),
  integrations: [react(), mdx()]
});