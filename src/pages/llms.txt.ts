import { getCollection } from 'astro:content';
import { seoConfig } from '../config/seo';
import { selectedWorksConfig } from '../config/selected-works';

export async function GET({ site }: { site?: URL }) {
  const siteUrl = site ?? new URL(seoConfig.site.url);
  const toUrl = (path: string) => new URL(path, siteUrl).href;
  const link = (title: string, url: string) => '[' + title + '](' + url + ')';
  const [services, projects, notes] = await Promise.all([
    getCollection('services'), getCollection('projects'), getCollection('articles'),
  ]);
  const publishedNotes = notes.filter((note) => note.data.status !== 'draft')
    .sort((a, b) => b.data.publishedAt.localeCompare(a.data.publishedAt));
  const selectedSlugs = selectedWorksConfig.selection.mode === 'manual' ? selectedWorksConfig.selection.slugs : [];
  const projectOrder = (slug: string) => {
    const index = selectedSlugs.indexOf(slug);
    return index === -1 ? selectedSlugs.length : index;
  };

  const lines = [
    '# ' + seoConfig.site.name,
    '',
    '> ' + seoConfig.site.description,
    '',
    '## Perfil y contacto',
    '- ' + link('Inicio', toUrl('/')) + ': Desarrollo de productos web, integraciones e IA aplicada, desde el problema hasta la implementación.',
    '- Perfil: desarrollo integral propio de productos, software para clientes e investigación técnica. Disponible para proyectos y oportunidades remotas.',
    '- ' + link('Contacto', toUrl('/#contacto')) + ': Escribir a ' + seoConfig.author.email + ' para proyectos, colaboraciones y oportunidades de trabajo.',
    '',
    '## Servicios',
    ...services.map((service) => '- ' + link(service.data.title, toUrl('/#servicios')) + ': ' + service.data.description),
    '',
    '## Proyectos',
    ...projects.filter((project) => !project.data.hidden)
      .sort((a, b) => projectOrder(a.data.slug) - projectOrder(b.data.slug) || Number(b.data.featured) - Number(a.data.featured))
      .map((project) => '- ' + link(project.data.title, toUrl('/proyectos/' + project.data.slug + '/')) + ': ' + project.data.summary
        + ' Estado: ' + project.data.status
        + (project.data.role ? ' Aporte: ' + project.data.role : '')
        + (project.data.disclaimer ? ' Aclaración: ' + project.data.disclaimer : '')),
    '',
    '## Notas propias',
    '- ' + link('Archivo de notas y lecturas', toUrl('/notas/')) + ': Apuntes propios y referencias externas identificadas con su fuente.',
    ...publishedNotes.filter((note) => !note.data.externalUrl).map((note) => '- ' + link(note.data.title, toUrl('/notas/' + note.data.slug + '/')) + ': ' + note.data.excerpt),
    '',
    '## Lecturas externas',
    ...publishedNotes.filter((note) => note.data.externalUrl).map((note) => '- ' + link(note.data.title, note.data.externalUrl!) + ': Referencia externa; el enlace lleva a su fuente original.'),
    '',
    '## Datos de uso',
    '- El contenido puede citarse con atribución y enlace a la URL original.',
    '- Para consultas comerciales o colaboraciones, usar el correo de contacto indicado arriba.',
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  });
}
