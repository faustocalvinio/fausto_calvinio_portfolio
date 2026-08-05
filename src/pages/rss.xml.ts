import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { seoConfig } from '../config/seo';

export async function GET(context: APIContext) {
  const notes = (await getCollection('articles'))
    .filter(
      (note) =>
        note.data.status !== 'draft' &&
        note.data.status !== 'placeholder' &&
        !note.data.externalUrl,
    )
    .sort((a, b) => b.data.publishedAt.localeCompare(a.data.publishedAt));

  return rss({
    title: `${seoConfig.site.name} — Notas`,
    description: 'Notas y artículos sobre ingeniería de software, IA aplicada, automatización y sistemas multiagente.',
    site: context.site?.href ?? seoConfig.site.url,
    items: notes.map((note) => ({
      title: note.data.title,
      description: note.data.excerpt,
      pubDate: new Date(note.data.publishedAt),
      link: `/notas/${note.data.slug}/`,
      categories: note.data.tags,
    })),
    customData: `<language>${seoConfig.site.language}</language><ttl>60</ttl>`,
  });
}
