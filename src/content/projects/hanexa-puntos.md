---
title: 'Hanexa: puntos y beneficios'
slug: hanexa-puntos
category: Producto propio · Fidelización
summary: Un programa de puntos con experiencia móvil para el cliente y administración para el negocio.
problem: Un programa de fidelidad necesita conectar los consumos, el saldo de puntos y los canjes con reglas que el negocio pueda administrar.
solution: Una aplicación con catálogo de beneficios, activación de canjes e identificación del cliente, junto con herramientas de administración y una base para separar distintos restaurantes.
status: Desarrollo funcional local; sin resultados comerciales atribuidos.
role: Desarrollo integral propio del producto, sus recorridos de cliente y negocio, la API y la implementación local.
disclaimer: Las capturas pertenecen a la demo del recorrido de uso y utilizan el negocio ficticio Café Aurora. Sus puntos, consumos e indicadores son datos de ejemplo; no documentan clientes ni resultados de la versión local.
featured: true
year: '2026'
stack: [React, TypeScript, NestJS, PostgreSQL, Docker]
links:
  demo: https://demo-membresias.pages.dev/
visuals:
  - type: image
    src: /proyectos/hanexa-puntos/catalogo.webp
    alt: Catálogo móvil de premios de Café Aurora con los puntos necesarios para canjear una limonada.
    caption: El cliente explora los beneficios desde el celular. Demo con datos ficticios.
    width: 780
    height: 1800
  - type: image
    src: /proyectos/hanexa-puntos/detalle.webp
    alt: Detalle de un beneficio con condiciones, saldo posterior y botón para activarlo.
    caption: Antes de activar, se muestran las condiciones y los puntos del canje. Demo.
    width: 780
    height: 1800
  - type: image
    src: /proyectos/hanexa-puntos/canje.webp
    alt: Confirmación de beneficio activado con acceso al QR del cliente.
    caption: La activación permite continuar el recorrido en caja. Demo con datos ficticios.
    width: 780
    height: 1800
  - type: image
    src: /proyectos/hanexa-puntos/administracion.webp
    alt: Panel de administración de Café Aurora con navegación a clientes, beneficios, empleados y configuración.
    caption: Vista de administración de la demo. Todos los indicadores son datos de ejemplo.
    width: 1600
    height: 978
---

### Dos recorridos, un mismo programa

El cliente consulta los beneficios disponibles, revisa las condiciones y activa el que quiere utilizar. Puede acceder a su QR para identificarse en el negocio.

Del otro lado, el negocio necesita administrar el programa, registrar consumos y consultar la actividad. El producto contempla distintas responsabilidades para la administración y la operación en caja.

### Qué desarrollé

Definí los recorridos del cliente y del negocio, construí las interfaces y trabajé en la API, la persistencia y la separación entre restaurantes. La evolución local se documenta como Hanexa Órbita y cuenta con servicios propios de web, API y PostgreSQL.

### Decisiones técnicas

- **Reglas en el sistema.** El saldo y los canjes necesitan validación del lado del servidor, además de una interfaz clara.
- **Separación entre negocios.** La versión local está preparada para varios restaurantes en una instalación compartida, con accesos y datos separados.
- **Identidad y permisos.** La autenticación usa sesiones de servidor y roles para distinguir responsabilidades.
- **Validación del recorrido.** El proyecto incluye pruebas de integración y recorridos de navegador para alta de restaurantes, invitaciones y operación.

### Demo y estado de implementación

La demo enlazada sirve para explorar la experiencia con datos ficticios. Es una demostración del recorrido y no equivale a la instalación local con su API y base de datos.

La implementación local sigue en desarrollo. Este caso no atribuye restaurantes activos, retención de clientes ni resultados de ventas.
