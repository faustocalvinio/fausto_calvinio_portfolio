# Portfolio de Fausto Calviño — guía del proyecto

## Propósito y stack

- Portfolio estático en español para software, IA aplicada, sistemas multiagente, automatización e integraciones.
- Framework: Astro 5 con ESM. El sitio canónico es `https://faustocalvinio.com` y el sitemap se genera con `@astrojs/sitemap`.
- No hay backend, base de datos, autenticación ni configuración de hosting de Sites en este repositorio. No crear ni publicar un sitio alternativo sin pedido explícito.

## Comandos y ciclo de trabajo

- Scripts disponibles: `npm run dev`, `npm run build`, `npm run preview` y `npm run og:capture`.
- El usuario normalmente mantiene `npm run dev` activo. Para cambios visuales o de contenido rutinarios, confiar en HMR y **no** ejecutar `npm run build`.
- Ejecutar `npm run build` solo si el usuario lo pide, al preparar una publicación, o ante un cambio estructural/de alto riesgo que necesite validación.
- `npm run og:capture` requiere que `npm run dev` esté activo. Abre `/og-card` con Edge o Chrome en modo headless y regenera `public/og.png` en 1200 × 630 para Open Graph, WhatsApp y otras vistas previas sociales.
- Regenerar `public/og.png` después de cambios relevantes en el hero, el mapa técnico o `src/pages/og-card.astro`, especialmente antes de publicar. La ruta `/og-card` es solo una fuente de captura: permanece con `noindex` y excluida del sitemap.
- `dist/` y `.astro/` son artefactos generados. No editarlos manualmente ni revertirlos para limpiar cambios ajenos.
- Astro Dev Toolbar está desactivada mediante preferencias locales; no reactivarla salvo indicación expresa.

## Estructura principal

- `src/pages/index.astro`: página de inicio; contiene hero, servicios, caso principal, trabajos seleccionados, enfoque, bio, notas y contacto.
- `src/pages/proyectos/[slug].astro`: detalle genérico de proyectos y visuales especiales por slug.
- `src/pages/notas/*`: índice, paginación y detalle de notas.
- `src/pages/llms.txt.ts`: inventario legible por LLM de servicios, proyectos y notas públicas.
- `src/layouts/Layout.astro`: metadatos base, canonical, Open Graph, tipografías, favicon y `ScrollToTop`.
- `src/components/Header.astro` y `Footer.astro`: navegación compartida.
- `src/styles/global.css`: tokens globales, layouts y componentes reutilizables. Es un archivo muy compacto/minificado: aplicar cambios puntuales con cuidado.
- `public/`: imágenes, PDFs, favicons, CV y capturas. Referenciar los assets públicos con rutas absolutas desde `/`.

## Contenido y rutas

- Las colecciones están declaradas en `src/content.config.ts` y cargan Markdown/MDX desde `src/content/`.
- `projects`: requiere `title`, `slug`, `category`, `summary`, `problem`, `solution`, `status`, `year` y `stack`. Admite `featured`, `hidden`, `links` y `visuals`.
- `articles`: usar `status: draft` para que no aparezcan en el inicio ni en el listado publicado.
- `services` y `experience` alimentan sus secciones de inicio desde sus carpetas respectivas.
- Para ocultar un proyecto temporalmente, usar `hidden: true` en su frontmatter. Esto lo excluye del inicio, `llms.txt` y rutas estáticas; no borrar el Markdown.
- `src/content/projects/terrenos-funes.md` está oculto temporalmente con `hidden: true`. Restaurarlo cambiando ese valor a `false`.
- Mantener textos, títulos, CTAs y metadatos en español, salvo nombres propios, tecnología y fragmentos de código.

## Sistema visual y accesibilidad

- Todo cambio visual debe funcionar en light y dark mode desde el inicio: fondos, texto, bordes, controles, hover/focus, sombras, ilustraciones y UI embebida. Es un requisito de aceptación, no una mejora opcional.
- Usar los tokens de `global.css` (`--bg`, `--bg-alt`, `--ink`, `--muted`, `--line`, `--accent`, etc.) siempre que sea posible. Si un componente necesita colores propios, definir sus variables para ambos esquemas con `prefers-color-scheme`.
- Conservar la estética editorial: tipografía display serif, sans técnica, bordes sutiles, espacios amplios y animaciones breves. Evitar interfaces genéricas de dashboard.
- Mantener `:focus-visible`, navegación con teclado y `prefers-reduced-motion`. No depender solo de hover para comunicar una acción.
- No introducir SVGs generados para decoración; preferir CSS, tipografía y componentes existentes. Usar imágenes solo cuando aporten contenido real.

## Componentes de proyecto especiales

- `automatizaciones-n8n` muestra `src/components/N8nWorkflowShowcase.astro`: canvas inspirado en n8n, tres flujos seleccionables, animaciones y soporte light/dark/reduced motion. Mantener los tres casos como ejemplos operativos realistas, sin inventar métricas.
- `plataforma-multi-rubro-agentes` muestra `src/components/PythonCodeExplorer.astro`: editor estilo VS Code con tabs y extractos reales seleccionados del repositorio `E:\PROGRAMACION\PYTHON\practica_agentes_ia`.
- El explorador Python debe seguir mostrando solo extractos representativos y no incluir `.env`, API keys, tokens ni otros secretos. Si se actualizan los ejemplos, conservar rutas y nombres de archivos reales del repositorio fuente.
- Para agregar otro visual especial, importar el componente en `[slug].astro`, activar una condición por slug y sumar ese caso a `hasWideVisual` si necesita ancho completo.

## Inicio: trabajos seleccionados

- La sección usa los primeros cuatro proyectos públicos ordenados por `featured`.
- El enlace `Ver caso` usa `.project-case-link`, una llamada editorial grande con línea inferior neutra que cambia a acento en hover y flecha con micro-movimiento.
- Mantener este patrón sin fondo ni forma de píldora. Sus colores específicos light/dark viven en el `<style>` local de `src/pages/index.astro`.

## Cambios seguros

- Preservar cambios existentes en el árbol de trabajo que no pertenezcan a la tarea actual.
- No eliminar contenido, assets, rutas ni proyectos sin una instrucción clara del usuario.
- Tras editar contenido o UI, verificar el resultado en el servidor de desarrollo activo. No ejecutar una compilación rutinaria.
