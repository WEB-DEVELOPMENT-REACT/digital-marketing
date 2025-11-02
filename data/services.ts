export type ServiceDetail = {
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  longDescription: string;
  deliverables: string[];
  automations: string[];
  process: { title: string; description: string }[];
  tools: string[];
  outcomes: string[];
};

export const servicesList: ServiceDetail[] = [
  {
    slug: "web-design",
    title: "Web Design + Development",
    icon: "/images/s_6.png",
    shortDescription:
      "Sitios y landing pages en Next.js optimizados para SEO, velocidad y conversión.",
    longDescription:
      "Concebimos experiencias digitales a medida: arquitectura UX, diseño UI, desarrollo Next.js/Tailwind, integraciones de CMS y analítica para lanzar o rediseñar tu sitio con foco en conversión y posicionamiento.",
    deliverables: [
      "UX research, wireframes y diseño responsive",
      "Desarrollo en Next.js + Tailwind con CMS headless opcional",
      "Optimización SEO on-page, schema y Core Web Vitals",
      "Biblioteca de componentes reutilizables y documentación"
    ],
    automations: [
      "Integración con CRM (HubSpot, Pipedrive, Zoho)",
      "Formularios automatizados con flujos de nurturing",
      "Conexión con analítica avanzada (GA4, Hotjar, Pixel)",
      "Webhooks y tareas en herramientas de proyecto"
    ],
    process: [
      {
        title: "Descubrimiento",
        description:
          "Auditoría del sitio actual, benchmark competitivo, definición de objetivos y buyer personas."
      },
      {
        title: "Diseño y prototipado",
        description:
          "Sprints de UX/UI con iteraciones validadas antes del desarrollo."
      },
      {
        title: "Desarrollo y QA",
        description:
          "Implementación en Next.js, performance tuning, pruebas multi-dispositivo y despliegue."
      }
    ],
    tools: ["Figma", "Next.js", "Vercel", "Contentful", "Sanity", "GA4"],
    outcomes: [
      "Incremento en velocidad y Core Web Vitals",
      "Mejores tasas de conversión y SEO on-page",
      "Base tecnológica preparada para futuros sprints"
    ]
  },
  {
    slug: "seo",
    title: "Search Engine Optimization",
    icon: "/images/s_1.png",
    shortDescription:
      "Estrategia SEO técnica y de contenidos para destacar en búsquedas locales e internacionales.",
    longDescription:
      "Posicionamos tu marca en los mercados clave. Investigación de palabras clave, contenidos multilingües, optimización técnica y link building coordinado con tu plan editorial y paid media.",
    deliverables: [
      "Keyword research y mapa de contenidos",
      "Auditoría técnica (crawling, indexación, performance)",
      "Plan editorial multiformato (blog, recursos, rich snippets)",
      "Reportes mensuales con evolución y oportunidades"
    ],
    automations: [
      "Alertas de ranking y health en Looker Studio",
      "Workflows para briefing y publicación de contenidos",
      "Integración con CRM para medir leads orgánicos",
      "Monitorización de backlinks y menciones"
    ],
    process: [
      {
        title: "Análisis inicial",
        description:
          "Revisión técnica, estudios de intención de búsqueda y mapeo de competidores."
      },
      {
        title: "Plan de contenidos",
        description:
          "Calendario optimizado por buyer persona, canal y etapa del funnel."
      },
      {
        title: "Medición y optimización",
        description:
          "KPIs SEO, experimentos A/B y backlog priorizado."
      }
    ],
    tools: ["Ahrefs", "Semrush", "Screaming Frog", "Search Console", "Looker Studio"],
    outcomes: [
      "Incremento sostenido del tráfico cualificado",
      "Generación de leads y ventas atribuidas al canal orgánico",
      "Contenidos evergreen listos para paid y nurturing"
    ]
  },
  {
    slug: "content",
    title: "Content Creation",
    icon: "/images/s_5.png",
    shortDescription:
      "Producción audiovisual y copywriting estratégico para cada punto del funnel.",
    longDescription:
      "Creamos activos listos para paid media, social y nurturing: vídeo, foto, motion, artículos y piezas descargables adaptadas a tus buyer personas y mercados.",
    deliverables: [
      "Calendario editorial por canal y etapa del customer journey",
      "Producción de vídeo, fotografía, motion y piezas descargables",
      "Copywriting multicanal (ads, email, landing, scripts)",
      "Guías de estilo y repositorio organizado de activos"
    ],
    automations: [
      "Workflows de aprobación y publicación",
      "Repositorios en Notion/Drive con versionado",
      "Integración con herramientas de social scheduling",
      "Reportes de performance por formato"
    ],
    process: [
      {
        title: "Kick-off creativo",
        description:
          "Workshops para entender tono, audiencias, formatos y objetivos de negocio."
      },
      {
        title: "Producción",
        description:
          "Sprints de contenido con entregables semanales y revisiones."
      },
      {
        title: "Activación",
        description:
          "Entrega a paid/social/email con guidelines y KPIs asociados."
      }
    ],
    tools: ["Notion", "Adobe CC", "CapCut", "Canva", "Later"],
    outcomes: [
      "Biblioteca de creatividades para paid y orgánico",
      "Mensajes consistentes en todos los puntos de contacto",
      "Contenido reutilizable para nutrición y retención"
    ]
  },
  {
    slug: "social-media",
    title: "Social Media Marketing",
    icon: "/images/s_3.png",
    shortDescription:
      "Gestión integral de redes con foco en comunidad, performance y reputación.",
    longDescription:
      "Desde estrategia y producción de contenido hasta community management, social listening y campañas sociales paid para construir comunidades activas y rentables.",
    deliverables: [
      "Estrategia de canales y tono de voz",
      "Producción y programación de contenido always-on",
      "Gestión de comunidad y social listening",
      "Campañas paid social con reporting unificado"
    ],
    automations: [
      "Flujos de respuesta con asistentes IA",
      "Alertas de reputación y menciones clave",
      "Dashboards de engagement y growth",
      "Integración con CRM para conversión social"
    ],
    process: [
      {
        title: "Estrategia",
        description:
          "Definimos objetivos, audiencias y canales prioritarios."
      },
      {
        title: "Producción + gestión",
        description:
          "Calendarios quincenales, atención a comunidad y coordinación con paid."
      },
      {
        title: "Optimización",
        description:
          "Revisión de métricas, test A/B y acciones con influencers/embajadores."
      }
    ],
    tools: ["Hootsuite", "Later", "Metricool", "Brandwatch", "Make"],
    outcomes: [
      "Incremento de comunidad y engagement",
      "Conversaciones y leads atribuidos al canal social",
      "Reputación y servicio al cliente centralizados"
    ]
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    icon: "/images/s_4.png",
    shortDescription:
      "Flujos multicanal para nutrir, convertir y fidelizar clientes con datos en tiempo real.",
    longDescription:
      "Diseñamos journeys personalizados, campañas y automatizaciones cross-channel (email, WhatsApp, SMS) conectadas a tu CRM para incrementar LTV y reducir churn.",
    deliverables: [
      "Estrategia de segmentos y journeys",
      "Flujos automatizados (welcome, nurturing, winback)",
      "Campañas one-shot con testing de asuntos y layouts",
      "Reportes de revenue atribuido y health de base de datos"
    ],
    automations: [
      "Integración directa con CRM y ecommerce",
      "Sincronización con WhatsApp/SMS y bots IA",
      "Alertas de comportamiento (abandono, upsell)",
      "Personalización dinámica con IA generativa"
    ],
    process: [
      {
        title: "Mapeo del funnel",
        description:
          "Analizamos bases de datos, scoring y puntos de contacto actuales."
      },
      {
        title: "Diseño de journeys",
        description:
          "Definimos triggers, contenidos y creatividad por etapa."
      },
      {
        title: "Optimización",
        description:
          "Test A/B constantes y reporting orientado a revenue y retención."
      }
    ],
    tools: ["Klaviyo", "Mailchimp", "HubSpot", "Customer.io", "Make"],
    outcomes: [
      "Incremento de conversiones y ticket medio",
      "Recuperación de clientes inactivos",
      "Visibilidad total del rendimiento del canal"
    ]
  },
  {
    slug: "ppc",
    title: "Pay-Per-Click Advertising",
    icon: "/images/s_2.png",
    shortDescription:
      "Campañas de performance en Google, Meta y TikTok con atribución clara y creatividades iterativas.",
    longDescription:
      "Planificamos, ejecutamos y optimizamos campañas PPC full funnel: desde la captación hasta remarketing y retención, con dashboards compartidos y automatizaciones que escalan.",
    deliverables: [
      "Estrategia de cuentas y estructura de campañas",
      "Setup de conversiones y medición avanzado",
      "Creatividades y copywriting iterativo",
      "Informes semanales con insights accionables"
    ],
    automations: [
      "Scripts y reglas automáticas para optimizar presupuesto",
      "Reportes diarios en Slack/Email",
      "Sincronización con CRM para medir leads y ventas",
      "Integración con IA para generar variaciones de anuncios"
    ],
    process: [
      {
        title: "Descubrimiento",
        description:
          "Análisis de audiencias, benchmark y definición de KPIs."
      },
      {
        title: "Lanzamiento",
        description:
          "Configuración, QA y activación de campañas con creatividades iniciales."
      },
      {
        title: "Optimización",
        description:
          "Iteraciones, test A/B y scaling según resultados y presupuesto."
      }
    ],
    tools: ["Google Ads", "Meta Ads", "TikTok Ads", "Supermetrics", "Looker Studio"],
    outcomes: [
      "ROAS positivo y escalable",
      "Visibilidad integral del customer journey",
      "Aprendizajes continuos para producto y ventas"
    ]
  },
];
