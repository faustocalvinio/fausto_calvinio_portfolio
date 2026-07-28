import { getCollection } from 'astro:content';

const siteDescription = 'Portfolio de Fausto Calviño, ingeniero de software especializado en sistemas multiagente, agentes de IA, automatización e integraciones a medida.';

export async function GET({ site }: { site: URL }) {
  const toUrl = (path: string) => new URL(path, site).href;
  const [services, projects, notes] = await Promise.all([
    getCollection('services'),
    getCollection('projects'),
    getCollection('articles'),
  ]);
  const publishedNotes = notes
    .filter((note) => note.data.status !== 'draft' && !note.data.externalUrl)
    .sort((a, b) => b.data.publishedAt.localeCompare(a.data.publishedAt));

  const lines = [
    '# Fausto Calviño',
    '',
    `> ${siteDescription}`,
    '',
    '## Perfil y contacto',
    `- [Inicio](${toUrl('/')}): Presentación, enfoque de trabajo y datos de contacto.`,
    `- [Contacto](${toUrl('/#contacto')}): Escribir a faustocalvino@outlook.com para proyectos de software, IA y automatización.`,
    '',
    '## Servicios',
    ...services.map((service) => `- [${service.data.title}](${toUrl('/#servicios')}): ${service.data.description}`),
    '',
    '## Proyectos',
    ...projects
      .filter((project) => !project.data.hidden)
      .sort((a, b) => Number(b.data.featured) - Number(a.data.featured))
      .map((project) => `- [${project.data.title}](${toUrl(`/proyectos/${project.data.slug}`)}): ${project.data.summary}`),
    '',
    '## Notas y artículos',
    `- [Índice de notas](${toUrl('/notas')}): Archivo completo de artículos sobre ingeniería de software, frontend, backend, automatización y agentes IA.`,
    ...publishedNotes.map((note) => `- [${note.data.title}](${toUrl(`/notas/${note.data.slug}`)}): ${note.data.excerpt}`),
    '',
    '## Datos de uso',
    '- El contenido puede citarse con atribución y enlace a la URL original.',
    '- Para consultas comerciales o colaboraciones, usar el correo de contacto indicado arriba.',
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
