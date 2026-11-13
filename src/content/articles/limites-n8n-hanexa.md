---
title: 'Dónde termina n8n y empieza la lógica de producto'
slug: limites-n8n-hanexa
excerpt: 'Un borrador sobre las decisiones de separar integraciones, procesamiento y reglas del bot en Hanexa.'
publishedAt: '2026-11-09'
status: draft
tags: [n8n, Arquitectura, Hanexa]
---

## Punto de partida

Hanexa combina un backend con workflows de n8n para procesar las conversaciones del bot. Esta nota va a documentar lo aprendido al repartir responsabilidades entre ambos.

## Preparar antes de publicar

- Elegir un recorrido real y explicar qué hace el backend y qué hace el workflow.
- Mostrar un extracto anonimizado del agrupamiento de mensajes y sus controles.
- Comparar mantener una regla en n8n con compartirla en código.
- Distinguir la arquitectura actual de cualquier migración propuesta.
- Incorporar mediciones únicamente si existen y se pueden verificar.
