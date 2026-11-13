---
title: Hanexa CRM
slug: hanexa-crm
category: Producto propio · CRM e IA
summary: Atención asistida por IA, conversaciones y seguimiento comercial en un mismo espacio de trabajo.
problem: Una consulta puede quedar repartida entre mensajes, contactos y tareas de seguimiento. El equipo necesita conservar el contexto y saber cuándo intervenir.
solution: Un CRM que reúne la bandeja de conversaciones, los contactos y el pipeline comercial, con un bot conectado al catálogo y la posibilidad de continuar la atención de forma humana.
status: Producto funcional con atención por IA e intervención humana.
role: Desarrollo integral propio, desde la definición del producto y los flujos hasta la interfaz, las integraciones y la implementación.
disclaimer: La conversación y el panel son representaciones ilustrativas con datos ficticios. Las respuestas están preparadas para mostrar el recorrido; no se envían mensajes ni se consulta a un modelo en vivo.
featured: true
year: '2026'
stack: [Next.js, TypeScript, PostgreSQL, n8n, WhatsApp Cloud API, Docker]
links: {}
visuals: []
---

### De una consulta al seguimiento

El recorrido empieza con un mensaje de WhatsApp. El sistema conserva la conversación y el contacto, y el bot puede responder con información del catálogo. Desde la bandeja, una persona del equipo puede tomar la atención y continuar con el contexto disponible.

El pipeline organiza las consultas por etapa. Así, la atención y el seguimiento comercial forman parte del mismo recorrido, sin obligar al equipo a reconstruir la historia entre herramientas.

### Qué desarrollé

Me ocupé de definir el producto y sus flujos, construir el dashboard, modelar los datos e integrar WhatsApp con el motor de automatización. El trabajo también incluye la configuración de ejecución con Docker, PostgreSQL y n8n.

### Decisiones de arquitectura

- **Separación por negocio.** Conversaciones, canales y configuración se organizan por tenant para atender distintos negocios desde una misma plataforma.
- **Atención humana e IA.** El equipo puede tomar una conversación; esa transición forma parte de la interfaz y de las reglas del flujo.
- **Mensajes y procesamiento.** La persistencia de las conversaciones vive en el backend y PostgreSQL. Los workflows coordinan el procesamiento del bot.
- **Continuidad de la conversación.** La automatización agrupa mensajes consecutivos e incorpora controles para evitar respuestas desactualizadas.

### Lo que muestra este caso

Un producto que conecta interfaz, datos, canales y automatización para una tarea concreta. Las representaciones permiten seguir el recorrido de atención; no representan una promesa de ventas, ahorro de tiempo o volumen de uso.
