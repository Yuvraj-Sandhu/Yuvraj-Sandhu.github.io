import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://yuvraj-sandhu.github.io',
  integrations: [react(), tailwind()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
