export const siteConfig = {
  navigation: [
    { label: 'Proyectos', href: '/#proyectos' },
    { label: 'Servicios', href: '/#servicios' },
    { label: 'Enfoque', href: '/#enfoque' },
    { label: 'Sobre mí', href: '/#sobre-mi' },
    { label: 'Notas', href: '/#notas' },
  ],
  contact: {
    projectEmailSubject: 'Quiero hablar sobre un proyecto',
    cvPath: '/CV_Fausto_Calvino.pdf',
    availability: 'Disponible para proyectos y oportunidades remotas',
  },
  content: {
    homeNotesLimit: 3,
    notesPerPage: 10,
  },
  footer: {
    tagline: 'Sistemas claros para problemas complejos.',
    specialty: 'Productos web, integraciones e IA aplicada.',
    availability: 'Disponible para nuevos proyectos',
    startYear: 2026,
    location: 'Buenos Aires, Argentina'
  },
} as const;

export type SiteConfig = typeof siteConfig;
