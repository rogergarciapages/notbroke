import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://notbroke.us',
  markdown: { remarkPlugins: [] },
  integrations: [icon()],
  vite: {
    resolve: {
      alias: {
        'astrowind:config': '/src/config.ts',
      },
    },
  },
});
