export const siteConfig = {
  navigation: [
    { label: 'Servicios', href: '/#servicios' },
    { label: 'Proyectos', href: '/#proyectos' },
    { label: 'Enfoque', href: '/#enfoque' },
    { label: 'Sobre mí', href: '/#sobre-mi' },
    { label: 'Notas', href: '/#notas' },
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
    location: 'Buenos Aires, Argentina',
    workMode: 'Trabajo remoto internacional',
  },
} as const;

export type SiteConfig = typeof siteConfig;
