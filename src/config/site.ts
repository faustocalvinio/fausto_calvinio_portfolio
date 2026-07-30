export const siteConfig = {
  url: 'https://faustocalvinio.com',
  language: 'es',
  languageTag: 'es-AR',
  locale: 'es_AR',
  name: 'Fausto Calviño',
  shortName: 'Fausto Calviño',
  description:
    'Portfolio de Fausto Calviño, ingeniero de software especializado en sistemas multiagente, agentes de IA, automatización e integraciones a medida.',
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
  navigation: [
    { label: 'Servicios', href: '/#servicios' },
    { label: 'Enfoque', href: '/#enfoque' },
    { label: 'Proyectos', href: '/#proyectos' },
    { label: 'Notas', href: '/#notas' },
    { label: 'Sobre mí', href: '/#sobre-mi' },
  ],
  contact: {
    projectEmailSubject: 'Quiero hablar sobre un proyecto',
    cvPath: '/CV_Fausto_Calvino.pdf',
    availability: 'Disponible para trabajo remoto · Argentina · Internacional',
  },
  content: {
    homeNotesLimit: 6,
    notesPerPage: 10,
  },
  footer: {
    tagline: 'Sistemas claros para problemas complejos.',
    specialty: 'Software, IA aplicada y automatización.',
    availability: 'Disponible para nuevos proyectos',
    startYear: 2026,
    location: 'Argentina',
    workMode: 'Trabajo remoto internacional',
  },
  seo: {
    defaultTitle: 'Fausto Calviño — Software, IA y automatización',
    titleTemplate: '%s — Fausto Calviño',
    defaultDescription:
      'Ingeniero de software especializado en sistemas multiagente, agentes IA, automatización n8n e integraciones a medida.',
    defaultImage: {
      src: '/og.png',
      alt: 'Fausto Calviño — Sistemas de IA, automatización y software',
      width: 1200,
      height: 630,
      type: 'image/png',
    },
    themeColor: {
      light: '#1f518f',
      dark: '#70ace1',
    },
    topics: [
      'Ingeniería de software',
      'Inteligencia artificial aplicada',
      'Sistemas multiagente',
      'Agentes de IA',
      'Automatización con n8n',
      'Integraciones de software',
      'APIs',
    ],
    sitemapExcludedPaths: ['/og-card'],
  },
} as const;

export type SiteConfig = typeof siteConfig;
