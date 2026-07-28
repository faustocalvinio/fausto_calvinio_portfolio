Basándome en el historial y el contexto que tengo disponible, estas son **prácticamente todas las áreas de desarrollo de software sobre las que me consultaste**. No son solamente preguntas de programación: también aparecen arquitectura, despliegue, seguridad, automatización e infraestructura.

## 1. Desarrollo web frontend

Consultaste sobre:

* **React**
* **Next.js**

  * App Router.
  * Server Components y Client Components.
  * SSR, SSG, ISR y CSR.
  * Estructura adecuada de proyectos.
  * Consumo de una API creada con FastAPI.
  * Implementación de filtros.
  * Persistencia de filtros en la URL.
  * Paginación.
  * Caché.
  * Preparación técnica para entrevistas de Next.js.
* **Astro**

  * Cuándo usar Astro para una landing o blog.
  * Astro en hosting compartido de GoDaddy.
  * Astro estático frente a Astro dinámico o SSR.
  * API routes.
  * Regeneración diaria de páginas.
  * Publicación automática de artículos Markdown.
  * Despliegue en Cloudflare Pages y Netlify.
  * Autenticación para que solo usuarios registrados creen artículos.
  * Formularios de contacto.
* **TypeScript y JavaScript**
* **Tailwind CSS**
* Diseño y organización de sitios corporativos.
* Estructura de páginas y secciones.
* Implementación de blogs y portales de noticias.
* Creación de paneles administrativos.
* Diseño responsive.
* Progressive Web Apps.
* Personalización de nombre, logo e identidad de una PWA.

También preguntaste qué modelo de IA usar para tareas de frontend simples, comparando **Luna, Terra y Sol**.

---

## 2. Backend y APIs

Trabajaste o preguntaste sobre:

* **Node.js**
* **NestJS**
* **FastAPI**
* Diseño de APIs REST.
* Comunicación entre Next.js y FastAPI.
* Endpoints para aplicaciones inmobiliarias.
* API routes de Astro y Next.js.
* Webhooks.
* Autenticación de APIs.
* Header Auth.
* JWT.
* OAuth2.
* Rate limiting.
* CORS.
* Manejo de errores.
* Integración de servicios externos.
* Arquitectura de backends para sistemas de agentes.
* Backend para formularios de contacto.
* Backends para paneles de publicación de artículos.
* APIs de WooCommerce para consultar o actualizar stock.
* APIs de Google, Telegram, WhatsApp, Notion y modelos de IA.

---

## 3. Bases de datos

Tus consultas incluyeron:

### PostgreSQL

* PostgreSQL en Docker.
* PostgreSQL 16.
* PostgreSQL en Neon.
* Conexiones SSL.
* Diseño de tablas.
* Índices.
* Registro de ejecuciones de workflows.
* Uso de Postgres como inventario.
* Stored procedures frente a varios pasos en n8n.
* Full-text search con `tsvector`.
* Posible uso de PostGIS para información inmobiliaria.
* Integración con Next.js, FastAPI y n8n.
* Acceso a PostgreSQL desde agentes o herramientas de IA.

Aclaraste que **PostgreSQL ya lo conocés bien** y no querías incluirlo en ciertos recorridos introductorios.

### Redis

* Qué es Redis.
* Para qué sirve.
* Si Redis es gratuito.
* Uso como caché o memoria.
* Redis dentro de arquitecturas con NestJS, agentes y aplicaciones cloud-native.

### Bases vectoriales y RAG

* Simple Vector Store.
* Qdrant.
* HNSW.
* Embeddings.
* Almacenamiento de documentos para RAG.
* Uso de embeddings locales con Ollama.
* Modelos como:

  * `qwen3-embedding:0.6b`
  * `all-MiniLM-L6-v2`
  * `bge-micro-v2`
* Integración de Open WebUI con bases vectoriales.

---

## 4. n8n y automatización

Esta es una de las áreas sobre las que más consultaste.

### Instalación y despliegue

* n8n en Docker.
* Docker Compose para n8n.
* PostgreSQL como base de datos.
* Redes externas de Docker.
* Variables de entorno.
* Ejecución en producción.
* Diferencias entre modo principal y workers.
* Queue mode.
* Habilitación del nodo **Execute Command**.
* Publicación correcta de workflows.
* Uso de subworkflows.

### Nodos y lógica

Consultaste sobre:

* AI Agent.
* Google Calendar.
* Gmail.
* Telegram Trigger.
* Telegram Send Message.
* Callback Query.
* Webhook Trigger.
* Respond to Webhook.
* HTTP Request.
* PostgreSQL.
* Code.
* Set / Edit Fields.
* IF.
* Loop Over Items.
* Wait.
* Simple Memory.
* Always Output Data.
* Manejo de errores.
* Expresiones.
* Datos binarios.
* `resumeUrl`.

### Workflows concretos

Preguntaste o construiste automatizaciones para:

* Captura de leads.
* Envío de emails.
* CRM.
* WhatsApp.
* Telegram.
* Scraping.
* Generación de contenido.
* RAG.
* Webhooks.
* Inventario con Google Sheets y PostgreSQL.
* Creación de tareas en Notion.
* Listado y eliminación de tareas desde Telegram.
* Bot de Google Calendar.
* Consultar disponibilidad.
* Crear, editar y eliminar eventos.
* Evitar reuniones fuera del horario laboral.
* Respuestas con botones inline.
* Procesamiento de audios.
* Descargar audio desde Telegram.
* Transcribir audio con Whisper o Groq.
* Guardar transcripciones en Notion.
* Logger centralizado de workflows.
* Notificación de errores por Telegram.
* Ejecuciones programadas mediante cron.
* Reportes semanales de Google Analytics.
* Publicación automática en Instagram.
* Bots de atención y automatización comercial.

También hiciste varias preguntas tipo examen o certificación sobre buenas prácticas de n8n.

---

## 5. Inteligencia artificial y agentes

Consultaste bastante sobre IA aplicada al desarrollo:

* Sistemas de agentes.
* Orquestación de agentes con **CrewAI**.
* Qué modelo utilizar para CrewAI.
* Modelos económicos para orquestación.
* OpenCode Go.
* OpenCode Desktop y CLI.
* Archivos Markdown con agentes personalizados para OpenCode.
* Agentes para:

  * planificación;
  * construcción;
  * debugging;
  * revisión de código;
  * arquitectura;
  * testing.
* Hermes Agent.
* Hermes Gateway.
* Flowise.
* Open WebUI.
* AnythingLLM.
* LibreChat.
* Ollama.
* OpenRouter.
* Gemini.
* Anthropic.
* Groq.
* Mistral.
* Modelos chinos que pueden correr en una NVIDIA A100.
* Modelos locales adecuados para una GTX 1070 de 8 GB.
* RAG.
* Embeddings.
* Herramientas para agentes.
* Memoria simple.
* Integración con GitHub, Slack, Google Calendar, Drive y Notion.
* Diseño de un sistema cloud-native de agentes.
* Observabilidad de agentes.
* Seguridad en sistemas de agentes.
* Interfaces para agentes desarrolladas con Next.js.

---

## 6. Procesamiento de audio y Whisper

Trabajaste sobre un sistema de speech-to-text:

* Python 3.11.
* `faster-whisper`.
* `ctranslate2`.
* Conversión de archivos OGG.
* Transcripción a texto.
* Uso de GPU.
* Error de `float16` no soportado.
* Cambio a `compute_type="int8"`.
* Problemas con `cublas64_12.dll`.
* Instalación de CUDA, cuBLAS y cuDNN.
* Configuración del PATH.
* Validación con `nvidia-smi`.
* Escritura de la transcripción en un archivo `.txt`.
* Integración futura con Telegram y n8n.

---

## 7. Docker y contenedores

Otra de tus áreas recurrentes.

Preguntaste sobre:

* Instalación y uso de Docker.
* Docker Desktop en Windows.
* Docker con WSL2.
* Docker Compose.
* Volúmenes.
* Redes.
* Puertos.
* Logs.
* Reinicio de servicios.
* Variables de entorno.
* Organización de servicios en:

  * `/opt/`
  * `/opt/docker/`
  * `/opt/open-webui/`
  * `/opt/flowise/`
* Limpieza del disco utilizado por Docker.
* Archivos VHDX de Docker y WSL.
* Contenedores que consumen demasiada RAM.
* Ejecución de múltiples servicios en un VPS de 4 GB.
* Cómo investigar errores viendo `docker logs`.
* Separación de aplicaciones por dominios y subdominios.

También preguntaste qué aplicaciones valía la pena desplegar en Docker, entre ellas:

* Open WebUI.
* Flowise.
* AnythingLLM.
* Supabase.
* PostgreSQL.
* Qdrant.
* SearXNG.
* Vaultwarden.
* Authentik.
* Uptime Kuma.
* Beszel.
* Homepage.
* Excalidraw.
* Draw.io.
* CyberChef.
* IT-Tools.
* Wiki.js.
* BookStack.
* Immich.
* Jellyfin.
* Mailpit.
* Mailcow.
* Home Assistant.
* Hoppscotch.
* Meilisearch.
* Crawl4AI.
* Browser Use.
* Paperless-ngx.
* Stirling PDF.
* Readeck.
* Karakeep.
* Filebrowser.
* Affine.

---

## 8. VPS, Linux y administración de servidores

Consultaste sobre el manejo de tu VPS de OVHcloud:

* Ubuntu.
* Administración remota.
* SSH.
* Cambio de puerto SSH.
* Uso de claves públicas.
* Desactivación del acceso por contraseña.
* `PasswordAuthentication`.
* `PubkeyAuthentication`.
* `PermitRootLogin`.
* Archivos de configuración:

  * `/etc/ssh/sshd_config`
  * `/etc/ssh/sshd_config.d/`
* Conflictos con Cloud-Init.
* Archivo `50-cloud-init.conf`.
* Archivo `60-cloudimg-settings.conf`.
* Verificación con `sshd -T`.
* Reinicio seguro del servicio SSH.
* Problemas para volver a conectarte después de cambiar el puerto.
* Configuración de UFW.
* Instalación de paquetes.
* Error de `dpkg was interrupted`.
* Uso de `sudo dpkg --configure -a`.
* Organización de servicios en el servidor.
* Diagnóstico de memoria y CPU.
* Procesos con alto consumo.
* Swap.
* `kswapd0`.
* Servicios systemd.
* Creación de `hermes.service`.
* Logs del sistema.
* Puertos internos y exposición mediante Nginx.

---

## 9. Seguridad del servidor

Tus consultas incluyeron:

* Desactivar login SSH por contraseña.
* Acceso exclusivamente mediante clave.
* Cambiar el puerto SSH.
* Fail2ban.
* Configuración de jails:

  * `sshd`
  * `nginx-bad-request`
  * `nginx-botsearch`
  * `nginx-http-auth`
* Interpretación del estado de Fail2ban.
* UFW.
* Protección de Nginx.
* TLS.
* Certbot.
* Autenticación centralizada.
* Authentik.
* Vaultwarden.
* CrowdSec.
* Seguridad de aplicaciones con JWT y OAuth2.
* Secretos y variables de entorno.
* Restricción de servicios para que no queden expuestos directamente.
* Uso de `127.0.0.1` para servicios detrás de proxy.
* Separación de dominios y aplicaciones.

---

## 10. Nginx, dominios y HTTPS

Preguntaste sobre:

* Reverse proxy.
* Configuración de `server_name`.
* Proxy hacia contenedores.
* Headers `Upgrade` y `Connection`.
* WebSockets.
* `client_max_body_size`.
* Certificados HTTPS con Certbot.
* DNS.
* Registros A.
* Subdominios.
* Conectar dominios al VPS.
* Mantener n8n intacto mientras se configura otra aplicación.
* Servir Open WebUI en `fausto.gay`.
* Subdominios para:

  * Hermes.
  * Filebrowser.
  * Readeck.
  * Instagram automation.
  * Excalidraw.
  * dashboards.
* Redirecciones.
* Uso de `www`.
* Canonicalización de dominios.
* Organización de varios virtual hosts.

---

## 11. Cloud y despliegues

Comparaste o consultaste:

* Cloudflare Pages.
* Cloudflare Workers.
* Netlify.
* Vercel.
* GoDaddy.
* Hostinger.
* OVHcloud.
* AWS.
* Hosting compartido frente a VPS.
* Serverless frente a servidor propio.
* Cloudflare Free para:

  * landing pages;
  * blogs;
  * formularios;
  * autenticación;
  * publicación periódica.
* Límites de planes gratuitos.
* Despliegues automáticos.
* CI/CD.
* GitHub como fuente de despliegue.
* Uso de Docker en producción.
* Kubernetes como parte de una arquitectura cloud-native.
* Despliegue de Next.js, Astro y APIs.

---

## 12. WordPress y WooCommerce

También realizaste muchas consultas relacionadas con desarrollo y mantenimiento WordPress:

* WordPress.
* Elementor.
* Divi.
* WooCommerce.
* Yoast SEO.
* LiteSpeed Cache.
* Site Kit.
* Google Analytics 4.
* Google Tag Manager.
* API REST de WooCommerce.
* Consulta de stock.
* Sitemaps.
* Canonicals.
* `robots.txt`.
* Open Graph.
* Imágenes para WhatsApp.
* Errores 503.
* Errores fatales de WordPress.
* Archivos faltantes en `wp-includes`.
* Problemas con autoload.
* Backups con Installatron.
* Restauración de sitios.
* Migraciones.
* cPanel.
* WP Mail SMTP.
* Conexión con Gmail.
* Eventos personalizados de GA4.
* Variables de categoría de artículos en GTM.
* Reportes automáticos mediante n8n.

---

## 13. Scraping y navegadores headless

Preguntaste sobre:

* Alternativas a Firecrawl.
* Navegadores headless para un VPS.
* Puppeteer.
* Playwright.
* Crawl4AI.
* Browser Use.
* Evitar gastar créditos en servicios de scraping.
* Manejo de bloqueos.
* Automatización de navegación.
* Publicación en Instagram mediante Puppeteer.
* Servicios Node.js para automatización.
* Ejecución en un puerto interno detrás de Nginx.

---

## 14. Telegram, WhatsApp e Instagram APIs

### Telegram

* Creación de bots.
* Trigger de mensajes.
* Envío de mensajes.
* Inline keyboards.
* Callback queries.
* `callback_data`.
* Borrado de tareas.
* MarkdownV2.
* HTML.
* Errores `can't parse entities`.
* Chats y grupos.
* Archivos de audio.
* Descarga de archivos.
* Integración con n8n.

### WhatsApp Business API

* Número de prueba.
* Phone Number ID.
* WABA ID.
* Webhooks.
* WhatsApp Trigger.
* Recepción y respuesta de mensajes.
* Integración con Meta.
* Flujos automáticos desde n8n.

### Instagram

* Instagram Webhooks.
* Meta Developers.
* Error `Insufficient Developer Role`.
* Roles de evaluador.
* App Secret.
* Automatización de publicaciones.
* Puppeteer.
* Responder mensajes o comentarios.
* Enviar información por mensaje directo.

---

## 15. Google Workspace y Notion

Consultaste sobre integraciones con:

### Google Calendar

* Consultar eventos.
* Crear eventos.
* Editar eventos.
* Eliminar eventos.
* Verificar disponibilidad antes de agendar.
* Horarios laborales.
* Campos decididos por un agente de IA.
* Bots conversacionales para administrar calendario.

### Gmail

* Envío de correos desde n8n.
* Creación de borradores.
* Integración con agentes.
* Credenciales.
* Problemas de desconexión de Gmail en WordPress.

### Google Drive

* Integración con Open WebUI.
* Uso como fuente de documentos.
* RAG con archivos de Drive.

### Notion

* Base de datos de tareas.
* Propiedades:

  * Task name.
  * Status.
  * Due.
  * Responsable.
  * Tags.
* Crear tareas.
* Listarlas.
* Eliminarlas.
* Agregar contenido.
* Usar el MCP oficial de Notion.
* Bot de Telegram conectado a Notion.

---

## 16. Git, GitHub y herramientas de desarrollo

Tus preguntas o proyectos involucraron:

* GitHub.
* Integración de GitHub con agentes.
* Deploy desde repositorios.
* GitHub como fuente para Cloudflare o Netlify.
* Organización de proyectos.
* Estructuras de carpetas.
* OpenCode CLI.
* OpenCode Desktop.
* Problemas al renombrar carpetas en OpenCode Desktop.
* Rutas de instalación en Windows.
* VS Code.
* Copilot con BYOK.
* Endpoints personalizados para modelos.
* Windows Terminal.
* Configuración de `settings.json`.
* PowerShell.
* WSL.
* Scripts Bash.
* `npm run dev`.
* Ejecutar procesos Node en segundo plano.

---

## 17. Arquitectura de software

Consultaste explícita o implícitamente sobre:

* Arquitectura frontend/backend.
* Separación de responsabilidades.
* Aplicaciones monolíticas frente a servicios separados.
* Sistemas cloud-native.
* Microservicios.
* Docker y Kubernetes.
* Arquitectura de agentes.
* Diseño de APIs.
* Autenticación.
* Persistencia.
* Caché.
* Colas.
* Webhooks.
* Integraciones.
* Escalabilidad.
* Observabilidad.
* Seguridad.
* Logging.
* Manejo de errores.
* Elección de hosting.
* Costos de infraestructura.
* Decidir entre servicios administrados y self-hosted.
* Separar ambientes.
* Proxies.
* Dominios.
* Dependencias entre servicios.
* Arquitectura para portales de noticias.
* Arquitectura para aplicaciones inmobiliarias.
* Arquitectura para automatizaciones empresariales.

---

## 18. Testing, observabilidad y calidad

Aunque aparecieron menos que otros temas, también consultaste o consideraste:

* Playwright.
* Testing de aplicaciones Next.js.
* Logging centralizado.
* Registro de ejecuciones de n8n.
* Sentry.
* Observabilidad de agentes.
* Manejo de errores.
* Health checks.
* Uptime Kuma.
* Beszel.
* Notificaciones de fallos.
* Revisión de código mediante agentes.
* Agentes especializados en debugging.
* Buenas prácticas de workflows.
* Validación de configuraciones antes de reiniciar SSH o Nginx.

---

## 19. Proyectos concretos relacionados con software

Entre los sistemas que planteaste o desarrollaste aparecen:

1. **Portal de noticias con Astro**

   * Landing.
   * Blog.
   * Markdown.
   * Generación diaria.
   * Panel de usuarios.
   * Autenticación.
   * Formulario de contacto.

2. **Aplicación inmobiliaria**

   * Next.js.
   * FastAPI.
   * Filtros.
   * Datos provenientes de una API.
   * Posible uso de PostGIS.

3. **Sistema de orquestación de agentes**

   * Next.js.
   * React.
   * TypeScript.
   * Tailwind.
   * NestJS.
   * PostgreSQL.
   * Redis.
   * Docker.
   * Kubernetes.
   * AWS.
   * OpenAI.
   * GitHub.
   * Slack.
   * Google Calendar.
   * JWT/OAuth2.
   * Observabilidad.

4. **Bot de tareas con Telegram, Notion y n8n**

5. **Bot de Google Calendar con IA**

6. **Sistema de transcripción de audio**

   * Telegram.
   * Whisper.
   * Python.
   * Notion.

7. **Infraestructura de IA self-hosted**

   * Open WebUI.
   * Hermes.
   * Ollama.
   * Flowise.
   * RAG.
   * Bases vectoriales.

8. **Automatización de Instagram**

   * Puppeteer.
   * Node.js.
   * Nginx.
   * VPS.

9. **Sistema de inventario**

   * Google Sheets.
   * PostgreSQL.
   * n8n.

10. **Logger y monitor de errores de workflows**

11. **Sitios WordPress empresariales y de noticias**

12. **Automatización de reportes GA4/GTM mediante n8n**

---

## Síntesis de tu perfil técnico

Tus consultas se concentran principalmente en cinco ejes:

1. **Desarrollo web full stack**
2. **Automatización e integración de APIs**
3. **Infraestructura cloud y self-hosting**
4. **Inteligencia artificial, agentes y RAG**
5. **Administración y seguridad de servidores**

No tenés un perfil limitado a “hacer páginas web”. Tus preguntas muestran que trabajás sobre **sistemas completos**: frontend, backend, datos, despliegue, dominios, seguridad, automatización, monitoreo e integración con servicios externos.

Por eso, tu descripción de LinkedIn:

> **Ingeniero de Software | Desarrollador Web Full Stack | Automatización con IA, n8n e Infraestructura Cloud**

es coherente con el tipo de problemas técnicos que venís resolviendo.
