import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { seoConfig } from './src/config/seo.ts';
import articleEditorIntegration from './src/integrations/article-editor.mjs';

export default defineConfig({
  site: seoConfig.site.url,
  integrations: [
    articleEditorIntegration(),
    sitemap({
      filter: (page) => {
        const { pathname } = new URL(page, seoConfig.site.url);
        const normalizedPath = pathname.replace(/\/+$/, '') || '/';
        return !seoConfig.sitemapExcludedPaths.includes(normalizedPath);
      },
    }),
  ],
});
