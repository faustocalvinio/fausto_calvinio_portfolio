export function GET({site}){return new Response(`User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap-index.xml',site)}`)}
