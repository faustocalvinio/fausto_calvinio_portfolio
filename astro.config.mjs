import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { siteConfig } from './src/config/site.ts';
import articleEditorIntegration from './src/integrations/article-editor.mjs';

export default defineConfig({
  site: siteConfig.url,
  integrations: [
    articleEditorIntegration(),
    sitemap({
      filter: (page) => {
        const { pathname } = new URL(page, siteConfig.url);
        const normalizedPath = pathname.replace(/\/+$/, '') || '/';
        return !siteConfig.seo.sitemapExcludedPaths.includes(normalizedPath);
      },
    }),
  ],
});
