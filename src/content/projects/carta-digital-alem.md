---
title: Carta Digital ALEM
slug: carta-digital-alem
category: Software para clientes · Gastronomía
summary: Carta móvil publicada y panel propio para mantener productos, precios, fotos y disponibilidad.
problem: El restaurante necesita una carta fácil de consultar desde el celular y una forma directa de actualizar el contenido que ven sus clientes.
solution: Una carta pública organizada por categorías y un panel de administración que permite editar el catálogo y publicar los cambios al guardar.
status: Publicado, con carta pública y administración propia.
role: Desarrollo integral de la carta, el panel de administración, la persistencia y la implementación en VPS.
featured: true
year: '2026'
stack: [Astro, TypeScript, Node.js, PostgreSQL, Docker, Nginx]
links:
  live: https://carta.alemesquinadefuegos.com/
visuals:
  - type: image
    src: /proyectos/carta-digital-alem/carta.webp
    alt: Portada móvil de la carta ALEM con accesos a Entradas, Principales, Bebidas y Postres.
    caption: Portada de la carta publicada, pensada para la consulta desde el celular.
    width: 390
    height: 1084
  - type: image
    src: /proyectos/carta-digital-alem/administracion.webp
    alt: Panel de pruebas de ALEM con búsqueda de productos, filtros y acciones de edición.
    caption: Panel de administración en un entorno de pruebas. La edición del catálogo se realiza desde esta interfaz.
    width: 1280
    height: 850
---

### Del celular a la carta

La portada organiza el acceso a las categorías principales. Dentro de cada una, las selecciones agrupan los productos con sus descripciones, precios y fotos. La experiencia permite consultar la propuesta del restaurante sin instalar una aplicación.

### Qué desarrollé

Construí la carta pública, el panel de administración y la persistencia del catálogo. También trabajé en la implementación con Node.js, PostgreSQL y Docker en un VPS, y en el mantenimiento del contenido y las rutas existentes.

### Administración para el trabajo cotidiano

El panel permite buscar productos y modificar precios, fotos, disponibilidad y orden. También administra categorías, subcategorías, bodegas y apariencia. Los cambios se publican al guardar.

La carta y la administración comparten el catálogo, de modo que el negocio tiene una herramienta específica para mantener lo que se muestra al público.

### Decisiones técnicas

- **Consulta pública y edición separadas.** La carta es accesible sin autenticación; las acciones de administración requieren una sesión.
- **Publicación con historial.** El catálogo conserva versiones y controles de concurrencia para evitar sobrescribir una edición más reciente.
- **Infraestructura propia.** La aplicación y su base de datos se ejecutan con Docker, con procedimientos de respaldo y actualización.
- **Continuidad de navegación.** La reorganización de categorías conserva rutas anteriores para mantener los accesos existentes.

### Evidencia disponible

La carta pública se puede recorrer desde el enlace al proyecto. Las capturas muestran la experiencia móvil publicada y el panel en un entorno de pruebas, sin exponer accesos de administración.
