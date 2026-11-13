export const seoConfig = {
  site: {
    url: 'https://faustocalvinio.com',
    language: 'es',
    languageTag: 'es-AR',
    locale: 'es_AR',
    name: 'Fausto Calviño',
    shortName: 'Fausto Calviño',
    description:
      'Fausto Calviño: desarrollo de productos web, integraciones, automatizaciones e IA aplicada. Casos de Hanexa CRM, puntos y beneficios, y Hanexa Rural.',
  },
  author: {
    name: 'Fausto Calviño',
    givenName: 'Fausto',
    familyName: 'Calviño',
    jobTitle: 'Desarrollador de software',
    email: 'faustocalvino@outlook.com',
    countryName: 'Argentina',
    countryCode: 'AR',
    profileImage: '/fotos-mias/frente-hero-compressed.webp',
  },
  social: {
    github: {
      label: 'GitHub',
      url: 'https://github.com/faustocalvinio',
    },
    linkedin: {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/faustocalvinio/',
    },
    telegram: {
      label: 'Telegram',
      url: 'https://t.me/faustocalvinio',
    },
  },
  defaults: {
    title: 'Fausto Calviño — Desarrollo de software, productos e IA aplicada',
    titleTemplate: '%s — Fausto Calviño',
    description:
      'Construyo productos web, automatizaciones y soluciones con IA, desde la definición del problema hasta la implementación. Explorá mis proyectos y mi experiencia.',
    image: {
      src: '/og.png',
      alt: 'Fausto Calviño — Software para conectar procesos, equipos y clientes',
      width: 1200,
      height: 630,
      type: 'image/png',
    },
  },
  head: {
    charset: 'UTF-8',
    viewport: 'width=device-width',
    colorScheme: 'light dark',
    themeColor: {
      light: '#1f518f',
      dark: '#70ace1',
    },
    icons: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    ],
  },
  topics: [
    'Ingeniería de software',
    'Inteligencia artificial aplicada',
    'Sistemas multiagente',
    'Agentes de IA',
    'Desarrollo a medida',
    'Desarrollo web',
    'Desarrollo de software a medida',
    'Desarrollo de aplicaciones web',
    'Desarrollo de software personalizado',
    'Automatización con n8n',
    'Integraciones de software',
    'APIs',
  ],
  sitemapExcludedPaths: ['/og-card'],
} as const;

export type SeoConfig = typeof seoConfig;
