interface TechnologyMarqueeConfig {
  label: string;
  durationSeconds: number;
  items: readonly string[];
}

interface HomeConfig {
  technologyMarquee: TechnologyMarqueeConfig;
}

export const homeConfig = {
  technologyMarquee: {
    label: 'Tecnologías',
    durationSeconds: 34,
    items: [
      'CrewAI',
      'Python',
      'n8n',
      'Agentes IA',
      'RAG',
      'MCP',
      'APIs REST',
      'ETL',
      'PostgreSQL',
      'Google Workspace',
      'Notion',
      'Webhooks',
    ],
  },
} as const satisfies HomeConfig;
