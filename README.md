# Portfolio de Fausto Calviño

Sitio web personal de **Fausto Calviño**, software engineer especializado en sistemas multiagente, automatización e integraciones a medida.

Está construido con [Astro](https://astro.build/) y genera un sitio estático rápido, con SEO básico, sitemap y contenido administrado desde archivos Markdown.

## Tecnologías

- Astro 5
- TypeScript
- CSS nativo
- Astro Content Collections
- `@astrojs/sitemap`

## Requisitos

- Node.js 18.20 o superior (se recomienda una versión LTS actual)
- npm

## Primeros pasos

Instalá las dependencias y levantá el servidor local:

```bash
npm install
npm run dev
```

El sitio estará disponible normalmente en `http://localhost:4321`.

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el entorno de desarrollo con recarga automática. |
| `npm run build` | Genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve localmente la versión compilada. |

Antes de publicar cambios, verificá la compilación:

```bash
npm run build
```

## Estructura del proyecto

```text
src/
├── components/          # Componentes compartidos: encabezado y pie
├── content/             # Contenido editorial en Markdown
│   ├── articles/        # Notas y artículos
│   ├── experience/      # Experiencia profesional
│   ├── projects/        # Casos de proyecto
│   └── services/        # Servicios ofrecidos
├── layouts/             # Layout global, metadatos y SEO
├── pages/               # Rutas y páginas de Astro
│   ├── index.astro      # Página principal
│   ├── notas/[slug].astro
│   └── proyectos/[slug].astro
├── styles/              # Estilos globales
└── content.config.ts    # Esquemas y colecciones de contenido
```

## Editar contenido

Los proyectos, artículos, servicios y experiencia se cargan desde los archivos Markdown de `src/content/`. Cada colección tiene un esquema validado en `src/content.config.ts`.

Para agregar un proyecto, creá un archivo `.md` dentro de `src/content/projects/` con un frontmatter similar a este:

```md
---
title: Nombre del proyecto
slug: nombre-del-proyecto
category: Automatización
summary: Resumen breve del proyecto.
problem: Problema que resuelve.
solution: Solución implementada.
status: Completado
featured: false
year: "2026"
stack: [Astro, TypeScript]
links:
  live: https://ejemplo.com
visuals: []
---

Descripción ampliada del caso.
```

El `slug` se usa para generar la URL del caso: `/proyectos/nombre-del-proyecto`.

## Configuración del sitio

La URL canónica del sitio está configurada en `astro.config.mjs`:

```js
site: 'https://faustocalvinio.com'
```

Actualizala si el dominio de despliegue cambia. El sitemap se genera automáticamente durante `npm run build` y `src/pages/robots.txt.ts` lo declara para los buscadores.

## Despliegue

El resultado de `npm run build` es estático y queda en `dist/`, por lo que puede publicarse en cualquier hosting de sitios estáticos. Configurá el proveedor para ejecutar:

```bash
npm run build
```

y publicar el directorio `dist/`.

## Licencia

Contenido y diseño reservados. Consultá antes de reutilizar material del portfolio.
