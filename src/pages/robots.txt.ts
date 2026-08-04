import type { APIRoute } from 'astro';
import { seoConfig } from '../config/seo';

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site ?? new URL(seoConfig.site.url);
  const body = [
    'User-agent: *',
    'Allow: /',
    `Sitemap: ${new URL('/sitemap-index.xml', siteUrl).href}`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
