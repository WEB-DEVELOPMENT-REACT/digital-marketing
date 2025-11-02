"use client"
import Footer from "@/components/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import { navItems } from "@/data";

const pillars = [
  {
    title: "Automatizar",
    description:
      "Orquestamos flujos multi-herramienta que eliminan tareas manuales y conectan tus fuentes de datos en tiempo real.",
    bullets: [
      "Implementaciones en Zapier, Make y n8n con foco en gobernanza",
      "Sincronización de CRM, anuncios y analítica",
      "Alertas y reporting operativo en tiempo real",
    ],
  },
  {
    title: "Crear",
    description:
      "Diseñamos experiencias personalizadas con IA generativa para marketing, ventas y atención al cliente.",
    bullets: [
      "Copys y journeys personalizados",
      "Playbooks de contenido con asistentes internos",
      "Landing pages y assets listos para testear",
    ],
  },
  {
    title: "Mejorar",
    description:
      "Medimos de extremo a extremo y optimizamos cada sprint con experimentación continua.",
    bullets: [
      "Dashboards a medida conectados al negocio",
      "Modelos de atribución y predicción",
      "Test A/B automatizados con feedback IA",
    ],
  },
];

const results = [
  {
    metric: "50%",
    label: "menor tiempo de lanzamiento de campañas",
  },
  {
    metric: "3x",
    label: "más leads cualificados gracias a journeys dinámicos",
  },
  {
    metric: "0→1",
    label: "implementación de reporting operativo centralizado",
  },
];

const workflows = [
  {
    title: "Activación automática de campañas",
    description:
      "Sincronizamos CRM, anuncios y presupuestos para activar, pausar y escalar campañas según señal de negocio.",
  },
  {
    title: "Nurturing y ventas asistidas",
    description:
      "Diseñamos secuencias omnicanal con IA que clasifican leads, generan respuestas y notifican a comerciales legítimos.",
  },
  {
    title: "Inteligencia de contenidos",
    description:
      "Creamos sistemas que generan, evalúan y publican contenido en función del performance en tiempo real.",
  },
  {
    title: "Control de calidad y reporting",
    description:
      "Centralizamos datos en dashboards accionables y enviamos alertas cuando detectamos desviaciones críticas.",
  },
];

const stack = [
  "HubSpot",
  "ActiveCampaign",
  "Meta Ads",
  "Google Ads",
  "LinkedIn Ads",
  "GA4",
  "Looker Studio",
  "Power BI",
  "BigQuery",
  "Snowflake",
  "Zapier",
  "Make",
  "n8n",
  "LangChain",
  "OpenAI",
  "Vertex AI",
];

const Showcase = () => {
  return (
    <div
      className="
        overflow-clip 
 inset-0 
 -z-10 h-full w-full bg-[#fafafa]
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
   bg-[size:14px_24px]"
    >
      <FloatingNav navItems={navItems} />
      <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <div className="flex items-center justify-center relative">
          <WordFadeIn
            className="text-3xl pt-20 lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center   z-20  "
            words="Automatizamos, creamos y mejoramos tu operación de marketing con IA"
          />
        </div>
        <p className="md:text-center text-xl md:text-2xl my-6   md:w-4/5 mx-auto text-gray-500">
          Conectamos tus herramientas, diseñamos workflows inteligentes y medimos con rigor para que cada sprint tenga impacto claro en negocio.
        </p>
        <section className="grid gap-6 lg:grid-cols-3 mt-16">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm"
            >
              <h2 className="text-2xl font-semibold">{pillar.title}</h2>
              <p className="mt-4 text-base text-gray-600">{pillar.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {pillar.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-black" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="mt-20 rounded-3xl bg-[#121212] py-12 text-white">
          <div className="mx-6 md:mx-16">
            <p className="text-sm uppercase tracking-wider text-white/60">
              Resultados recurrentes
            </p>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {results.map((result) => (
                <div key={result.metric} className="space-y-3">
                  <p className="text-4xl font-semibold">{result.metric}</p>
                  <p className="text-base text-white/80">{result.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-semibold">Workflows que desplegamos</h2>
          <p className="mt-4 text-lg text-gray-600 md:w-3/4">
            Cada proyecto parte de un discovery guiado donde mapeamos procesos, datos y equipos. A partir de ahí, configuramos y medimos sprints que priorizan impacto sobre documentación eterna.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {workflows.map((workflow) => (
              <article
                key={workflow.title}
                className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{workflow.title}</h3>
                <p className="mt-3 text-base text-gray-600">
                  {workflow.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="rounded-3xl border border-black/5 bg-white p-10">
            <h2 className="text-3xl font-semibold">Stack con el que trabajamos</h2>
            <p className="mt-4 text-lg text-gray-600 md:w-3/4">
              Integramos tus herramientas actuales y recomendamos nuevas solo cuando aportan valor directo. También formamos a tu equipo para que no dependa de nosotros en el día a día.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {stack.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-black/10 px-4 py-2 text-sm text-gray-800"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        <LetsMakeThingsHappenSection />
      </section>

      <Footer />
    </div>
  );
};

export default Showcase;
