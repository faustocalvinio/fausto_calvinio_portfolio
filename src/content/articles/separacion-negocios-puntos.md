---
title: 'Separar los datos de distintos negocios en un producto compartido'
slug: separacion-negocios-puntos
excerpt: 'Un borrador sobre accesos, responsabilidades y validación de separación entre restaurantes.'
publishedAt: '2026-11-09'
status: draft
tags: [PostgreSQL, Arquitectura, Hanexa]
---

## Punto de partida

La evolución local de Hanexa puntos y beneficios contempla varios restaurantes en una instalación compartida. Esta nota va a explicar cómo se aborda la separación entre negocios.

## Preparar antes de publicar

- Presentar dos restaurantes ficticios con sus propios usuarios y programas.
- Elegir una consulta de datos y mostrar dónde se aplica el contexto del negocio.
- Diferenciar permisos de plataforma, administración del restaurante y caja.
- Documentar un caso de prueba que intente cruzar los datos entre restaurantes.
- Precisar qué está validado localmente y qué falta evaluar antes de producción.
