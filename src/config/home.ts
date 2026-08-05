interface TechnologyMarqueeConfig {
  label: string;
  durationSeconds: number;
  items: readonly string[];
}

interface HeroSystemClusterConfig {
  label: string;
  tools: readonly string[];
}

interface HeroSystemVisualConfig {
  eyebrow: string;
  statusLabel: string;
  ariaLabel: string;
  core: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  clusters: {
    ai: HeroSystemClusterConfig;
    automation: HeroSystemClusterConfig;
    software: HeroSystemClusterConfig;
    data: HeroSystemClusterConfig;
    web: HeroSystemClusterConfig;
  };
  stages: readonly string[];
}

interface HomeConfig {
  heroSystemVisual: HeroSystemVisualConfig;
  technologyMarquee: TechnologyMarqueeConfig;
}

export const homeConfig = {
  // Textos del canvas del hero. Se pueden editar sin tocar el componente visual.
  heroSystemVisual: {
    eyebrow: 'Ecosistema técnico',
    statusLabel: 'Conexiones activas',
    ariaLabel: 'Mapa del ecosistema técnico conectado por una arquitectura central de sistemas',
    core: {
      eyebrow: 'Arquitectura',
      title: 'Sistemas',
      subtitle: 'IA + software',
    },
    clusters: {
      ai: {
        label: 'IA aplicada',
        tools: ['CrewAI', 'LLMs', 'RAG', 'MCP', 'Firecrawl', 'OpenCode'],
      },
      automation: {
        label: 'Automatización',
        tools: ['n8n', 'Webhooks', 'REST APIs', 'ETL', 'Google Workspace', 'Notion'],
      },
      software: {
        label: 'Software',
        tools: ['Python', 'TypeScript', 'React', 'Node.js', 'Astro', 'Express', 'JWT'],
      },
      data: {
        label: 'Datos',
        tools: ['PostgreSQL', 'MongoDB', 'Streamlit', 'httpx', 'BeautifulSoup'],
      },
      web: {
        label: 'Productos web',
        tools: ['WordPress', 'WooCommerce', 'Elementor', 'PayPal', 'Tailwind', 'Markdown', 'YoastSEO', 'LiteSpeed'],
      },
    },
    stages: ['Investigar', 'Conectar', 'Construir', 'Operar'],
  },
  technologyMarquee: {
    label: 'Tecnologías',
    durationSeconds: 45,

    "items": [
      "Python",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "React",
      "Next.js",
      "Astro",
      "Node.js",
      "FastAPI",
      "WordPress",
      "n8n",
      "Agentes IA",
      "RAG",
      "MCP",
      "APIs REST",
      "Webhooks",
      "PostgreSQL",
      "Docker",
      "Git",
      "GitHub",
      "Linux",
      "Nginx",
      "Cloudflare",
      "OpenAI",
      "Ollama",
      "OpenCode",
      "Hermes Agent",
      "Google Workspace",
      "Notion"
    ]
  },
} as const satisfies HomeConfig;
