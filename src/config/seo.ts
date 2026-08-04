export const seoConfig = {
  site: {
    url: 'https://faustocalvinio.com',
    language: 'es',
    languageTag: 'es-AR',
    locale: 'es_AR',
    name: 'Fausto Calviño',
    shortName: 'Fausto Calviño',
    description:
      'Portfolio de Fausto Calviño, ingeniero de software especializado en sistemas multiagente, agentes de IA, automatización y desarrollo a medida.',
  },
  author: {
    name: 'Fausto Calviño',
    givenName: 'Fausto',
    familyName: 'Calviño',
    jobTitle: 'Ingeniero de software',
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
    title: 'Fausto Calviño — Software, IA y automatización de procesos',
    titleTemplate: '%s — Fausto Calviño',
    description:
      'Ingeniero de software especializado en sistemas multiagente, agentes IA, automatización n8n y desarrollos a medida.',
    image: {
      src: '/og.png',
      alt: 'Fausto Calviño — Sistemas de IA, automatización y software',
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
