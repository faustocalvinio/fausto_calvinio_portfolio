import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const API_ROOT = '/__dev/article-editor';
const MAX_REQUEST_BYTES = 1_500_000;
const VALID_STATUSES = new Set(['draft', 'published', 'placeholder']);
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const SOURCE_FILE_PATTERN = /^[A-Za-z0-9._-]+\.md$/;

class RequestError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

const sendJson = (response, status, payload) => {
  response.statusCode = status;
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  response.setHeader('Cache-Control', 'no-store');
  response.end(JSON.stringify(payload));
};

const readJson = async (request) => {
  const contentType = request.headers['content-type']?.split(';', 1)[0];
  if (contentType !== 'application/json') {
    throw new RequestError(415, 'La solicitud debe usar application/json.');
  }

  const chunks = [];
  let size = 0;

  for await (const chunk of request) {
    size += chunk.length;
    if (size > MAX_REQUEST_BYTES) {
      throw new RequestError(413, 'El artículo supera el tamaño permitido.');
    }
    chunks.push(chunk);
  }

  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    throw new RequestError(400, 'El contenido enviado no es JSON válido.');
  }
};

const requireText = (value, label, maxLength) => {
  if (typeof value !== 'string' || !value.trim()) {
    throw new RequestError(400, `${label} es obligatorio.`);
  }
  const normalized = value.trim();
  if (normalized.length > maxLength) {
    throw new RequestError(400, `${label} no puede superar ${maxLength} caracteres.`);
  }
  return normalized;
};

const normalizeOptionalUrl = (value, label) => {
  if (value == null || value === '') return undefined;
  if (typeof value !== 'string' || value.length > 500) {
    throw new RequestError(400, `${label} no es válida.`);
  }

  try {
    const url = new URL(value);
    if (!['http:', 'https:'].includes(url.protocol)) throw new Error();
    return url.href;
  } catch {
    throw new RequestError(400, `${label} debe ser una URL http o https válida.`);
  }
};

const normalizeArticle = (value) => {
  if (!value || typeof value !== 'object') {
    throw new RequestError(400, 'Faltan los datos del artículo.');
  }

  const title = requireText(value.title, 'El título', 180);
  const excerpt = requireText(value.excerpt, 'El resumen', 420);
  const slug = requireText(value.slug, 'El slug', 120);
  if (!SLUG_PATTERN.test(slug)) {
    throw new RequestError(
      400,
      'El slug solo puede contener minúsculas, números y guiones simples.',
    );
  }

  const publishedAt = requireText(value.publishedAt, 'La fecha', 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(publishedAt)) {
    throw new RequestError(400, 'La fecha debe usar el formato AAAA-MM-DD.');
  }
  const parsedDate = new Date(`${publishedAt}T00:00:00.000Z`);
  if (
    Number.isNaN(parsedDate.valueOf()) ||
    parsedDate.toISOString().slice(0, 10) !== publishedAt
  ) {
    throw new RequestError(400, 'La fecha indicada no existe.');
  }

  if (typeof value.status !== 'string' || !VALID_STATUSES.has(value.status)) {
    throw new RequestError(400, 'El estado seleccionado no es válido.');
  }

  if (!Array.isArray(value.tags) || value.tags.length > 20) {
    throw new RequestError(400, 'Las etiquetas deben ser una lista de hasta 20 elementos.');
  }
  const tags = [];
  const seenTags = new Set();
  for (const tagValue of value.tags) {
    const tag = requireText(tagValue, 'Cada etiqueta', 50);
    const tagKey = tag.toLocaleLowerCase('es');
    if (!seenTags.has(tagKey)) {
      tags.push(tag);
      seenTags.add(tagKey);
    }
  }

  let cover = null;
  if (value.cover != null && value.cover !== '') {
    if (typeof value.cover !== 'string' || value.cover.length > 500) {
      throw new RequestError(400, 'La portada no es válida.');
    }
    const candidate = value.cover.trim();
    if (!candidate.startsWith('/')) {
      cover = normalizeOptionalUrl(candidate, 'La portada');
    } else if (candidate.startsWith('//')) {
      throw new RequestError(400, 'La portada debe ser una ruta pública o una URL válida.');
    } else {
      cover = candidate;
    }
  }

  const externalUrl = normalizeOptionalUrl(value.externalUrl, 'El enlace externo');
  if (typeof value.body !== 'string') {
    throw new RequestError(400, 'El cuerpo del artículo no es válido.');
  }
  const body = value.body.replace(/\r\n?/g, '\n').trimEnd();
  if (!externalUrl && !body.trim()) {
    throw new RequestError(
      400,
      'El cuerpo es obligatorio cuando la nota no apunta a un enlace externo.',
    );
  }

  return {
    title,
    slug,
    excerpt,
    publishedAt,
    status: value.status,
    tags,
    cover,
    externalUrl,
    body,
  };
};

const quoteYaml = (value) => JSON.stringify(value);

const serializeArticle = (article) => {
  const frontmatter = [
    '---',
    `title: ${quoteYaml(article.title)}`,
    `slug: ${article.slug}`,
    `excerpt: ${quoteYaml(article.excerpt)}`,
    `publishedAt: ${quoteYaml(article.publishedAt)}`,
    `status: ${article.status}`,
    `tags: [${article.tags.map(quoteYaml).join(', ')}]`,
    `cover: ${article.cover ? quoteYaml(article.cover) : 'null'}`,
    ...(article.externalUrl
      ? [`externalUrl: ${quoteYaml(article.externalUrl)}`]
      : []),
    '---',
    '',
  ].join('\n');

  return `${frontmatter}${article.body}${article.body ? '\n' : ''}`;
};

const assertSameOrigin = (request) => {
  const origin = request.headers.origin;
  const host = request.headers.host;
  if (!origin || !host) return;

  try {
    if (new URL(origin).host !== host) {
      throw new RequestError(403, 'La solicitud debe originarse en este servidor.');
    }
  } catch (error) {
    if (error instanceof RequestError) throw error;
    throw new RequestError(403, 'El origen de la solicitud no es válido.');
  }
};

const findArticleBySlug = async (articlesDirectory, slug, parseFrontmatter) => {
  const entries = await fs.readdir(articlesDirectory, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isFile() || !/\.mdx?$/i.test(entry.name)) continue;
    const source = await fs.readFile(path.join(articlesDirectory, entry.name), 'utf8');
    if (parseFrontmatter(source).frontmatter.slug === slug) return entry.name;
  }

  return null;
};

export default function articleEditorIntegration() {
  let projectRoot;
  let markdownOptions;

  return {
    name: 'fausto-article-editor',
    hooks: {
      'astro:config:setup': ({ command, injectRoute }) => {
        if (command !== 'dev') return;
        injectRoute({
          pattern: '/dev/articulos',
          entrypoint: new URL('../dev/article-editor.astro', import.meta.url),
        });
      },
      'astro:config:done': ({ config }) => {
        projectRoot = fileURLToPath(config.root);
        markdownOptions = config.markdown;
      },
      'astro:server:setup': async ({ server, logger }) => {
        const { createMarkdownProcessor, parseFrontmatter } =
          await import('@astrojs/markdown-remark');
        const markdownProcessor = await createMarkdownProcessor(markdownOptions);
        const articlesDirectory = path.resolve(
          projectRoot,
          'src',
          'content',
          'articles',
        );

        server.middlewares.use(async (request, response, next) => {
          const requestUrl = new URL(request.url ?? '/', 'http://localhost');
          if (!requestUrl.pathname.startsWith(API_ROOT)) {
            next();
            return;
          }

          try {
            assertSameOrigin(request);
            if (request.method !== 'POST') {
              throw new RequestError(405, 'Esta operación solo acepta POST.');
            }

            const payload = await readJson(request);

            if (requestUrl.pathname === `${API_ROOT}/preview`) {
              if (typeof payload.body !== 'string') {
                throw new RequestError(400, 'El cuerpo para previsualizar no es válido.');
              }
              if (Buffer.byteLength(payload.body, 'utf8') > MAX_REQUEST_BYTES) {
                throw new RequestError(413, 'El artículo supera el tamaño permitido.');
              }

              const rendered = await markdownProcessor.render(payload.body, {
                fileURL: pathToFileURL(
                  path.join(articlesDirectory, '__article-preview__.md'),
                ),
              });
              sendJson(response, 200, { html: rendered.code });
              return;
            }

            if (requestUrl.pathname !== `${API_ROOT}/save`) {
              throw new RequestError(404, 'Operación de desarrollo desconocida.');
            }

            if (!['create', 'update'].includes(payload.mode)) {
              throw new RequestError(400, 'El modo de guardado no es válido.');
            }

            const article = normalizeArticle(payload.article);
            const serialized = serializeArticle(article);
            let targetPath;

            if (payload.mode === 'create') {
              const conflictingFile = await findArticleBySlug(
                articlesDirectory,
                article.slug,
                parseFrontmatter,
              );
              if (conflictingFile) {
                throw new RequestError(
                  409,
                  `El slug “${article.slug}” ya pertenece a ${conflictingFile}.`,
                );
              }

              targetPath = path.resolve(articlesDirectory, `${article.slug}.md`);
              if (path.dirname(targetPath) !== articlesDirectory) {
                throw new RequestError(400, 'La ruta del artículo no es segura.');
              }

              try {
                await fs.writeFile(targetPath, serialized, {
                  encoding: 'utf8',
                  flag: 'wx',
                });
              } catch (error) {
                if (error?.code === 'EEXIST') {
                  throw new RequestError(
                    409,
                    `Ya existe un archivo para el slug “${article.slug}”.`,
                  );
                }
                throw error;
              }
            } else {
              if (
                typeof payload.sourceFile !== 'string' ||
                !SOURCE_FILE_PATTERN.test(payload.sourceFile)
              ) {
                throw new RequestError(400, 'El archivo de origen no es válido.');
              }
              if (
                typeof payload.expectedMtimeMs !== 'number' ||
                !Number.isFinite(payload.expectedMtimeMs)
              ) {
                throw new RequestError(400, 'Falta la versión esperada del borrador.');
              }

              targetPath = path.resolve(articlesDirectory, payload.sourceFile);
              if (path.dirname(targetPath) !== articlesDirectory) {
                throw new RequestError(400, 'La ruta del borrador no es segura.');
              }

              let currentStat;
              let currentSource;
              try {
                [currentStat, currentSource] = await Promise.all([
                  fs.stat(targetPath),
                  fs.readFile(targetPath, 'utf8'),
                ]);
              } catch (error) {
                if (error?.code === 'ENOENT') {
                  throw new RequestError(409, 'El borrador ya no existe en el disco.');
                }
                throw error;
              }

              if (Math.abs(currentStat.mtimeMs - payload.expectedMtimeMs) > 0.5) {
                throw new RequestError(
                  409,
                  'El borrador cambió fuera del editor. Recargá la página antes de guardar.',
                );
              }

              const currentFrontmatter = parseFrontmatter(currentSource).frontmatter;
              if (currentFrontmatter.status !== 'draft') {
                throw new RequestError(
                  409,
                  'Solo se pueden actualizar archivos que todavía sean borradores.',
                );
              }
              if (currentFrontmatter.slug !== article.slug) {
                throw new RequestError(
                  409,
                  'El slug del borrador cambió fuera del editor.',
                );
              }

              await fs.writeFile(targetPath, serialized, 'utf8');
            }

            const updatedStat = await fs.stat(targetPath);
            logger.info(
              `${payload.mode === 'create' ? 'Artículo creado' : 'Borrador actualizado'}: ${path.basename(targetPath)}`,
            );
            sendJson(response, 200, {
              slug: article.slug,
              fileName: path.basename(targetPath),
              mtimeMs: updatedStat.mtimeMs,
              route: article.externalUrl ? null : `/notas/${article.slug}/`,
            });
          } catch (error) {
            if (error instanceof RequestError) {
              sendJson(response, error.status, { error: error.message });
              return;
            }

            logger.error(`Article editor: ${error.stack ?? error.message}`);
            sendJson(response, 500, {
              error: 'No se pudo completar la operación. Revisá la terminal de desarrollo.',
            });
          }
        });
      },
    },
  };
}
