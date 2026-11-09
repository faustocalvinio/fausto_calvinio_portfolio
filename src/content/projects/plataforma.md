---
title: Plataforma Multi-Rubro de Agentes IA
slug: plataforma-multi-rubro-agentes
category: Laboratorio técnico · IA aplicada
summary: MVP funcional para coordinar agentes especializados en tareas de distintos rubros, con datos de prueba y salidas de muestra.
problem: Explorar problemas de distintos rubros requiere conocimiento especializado, herramientas y flujos que no caben en un único agente.
solution: Una plataforma CrewAI con crews contables, legales, inmobiliarios, de salud, RRHH, marketing, tecnología y educación, ejecutable con seed data y outputs de muestra.
status: MVP funcional; crews principales estables y especializadas en progreso.
role: Diseño y desarrollo del laboratorio, la organización de crews, sus herramientas y los recorridos de ejecución con datos de prueba.
disclaimer: Laboratorio técnico con datos de prueba y salidas de muestra. Los dominios sensibles se exploran como sistemas de apoyo; no sustituyen asesoramiento profesional.
featured: true
year: '2026'
stack: [CrewAI, Python, OpenCode LLM, Firecrawl Search, Streamlit]
links: {}
visuals: [{type: placeholder, caption: 'Diagrama de arquitectura multi-rubro'}]
---

### Una arquitectura para aprender

Cada dominio agrupa crews con roles especializados, tareas coordinadas y herramientas seleccionadas. La siguiente iteración suma tests, más seed data y un frontend unificado.

### Qué exploro y cómo se ejecuta

El trabajo consiste en separar una tarea en responsabilidades, definir qué información y herramientas necesita cada crew y coordinar sus entradas y salidas. El recorrido parte de datos de prueba y permite revisar las salidas de muestra.

El explorador de esta página muestra extractos representativos de archivos reales del proyecto. Sirve para inspeccionar cómo se expresan las responsabilidades y las herramientas en código.

### Decisiones y límites

La organización por dominios permite explorar problemas distintos sin concentrarlos en un único agente. Eso también abre preguntas sobre evaluación, mantenimiento y cuándo conviene un flujo más simple. El objetivo del laboratorio es investigar esas decisiones y revisar las salidas, antes de atribuirle resultados operativos.

### Dimensión del laboratorio

La arquitectura reúne 55 crews y aproximadamente 270 agentes en ocho dominios. Estas cifras describen la organización del MVP, no resultados de uso en producción.

### Dominios

Contable, Legal, Inmobiliario, Salud, RRHH, Marketing, Tecnología y Educación. Se documentan como prototipos técnicos y sistemas de apoyo, no como asesoramiento profesional.
