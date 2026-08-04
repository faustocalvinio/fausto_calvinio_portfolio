interface ManualSelection {
  mode: 'manual';
  slugs: readonly string[];
}

interface FeaturedSelection {
  mode: 'featured';
  limit: number;
}

interface SelectedWorksConfig {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  selection: ManualSelection | FeaturedSelection;
  stackLimit: number;
  ctaLabel: string;
}

export const selectedWorksConfig: SelectedWorksConfig = {
  id: 'proyectos',
  eyebrow: 'Trabajos seleccionados',
  title: 'De la idea al flujo que opera',
  description:
    'Una selección de sistemas multiagente, automatizaciones, productos full-stack y sitios entregados.',
  selection: {
    mode: 'manual',
    slugs: [
      'plataforma-multi-rubro-agentes',
      'automatizaciones-n8n',
      'qr-ticketing',
    ],
  },
  stackLimit: 5,
  ctaLabel: 'Ver caso',
};
