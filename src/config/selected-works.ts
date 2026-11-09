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
  title: 'Productos, procesos y decisiones',
  description:
    'Una selección de productos propios, software para clientes y exploraciones técnicas. En cada caso, el problema, mi aporte y el estado real.',
  selection: {
    mode: 'manual',
    slugs: [
      'hanexa-crm',
      'hanexa-puntos',
      'carta-digital-alem',
      'plataforma-multi-rubro-agentes',
    ],
  },
  stackLimit: 5,
  ctaLabel: 'Ver caso',
};
