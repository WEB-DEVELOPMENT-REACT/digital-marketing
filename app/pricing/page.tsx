"use client";

import Link from "next/link";
import { ArrowUpRight, CalendarIcon, CheckCircle2 } from "lucide-react";

import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { navItems } from "@/data";

const plans = [
  {
    id: "launch",
    title: "Lanzamiento",
    price: "Desde 4.500 €",
    duration: "6 semanas",
    badge: "Para pymes y startups",
    description:
      "Validamos propuesta de valor, activamos captación y dejamos una base tecnológica lista para iterar.",
    includes: [
      "Sitio main + landing de campañas en Next.js con CMS",
      "Setup completo de analítica (GA4, pixel, conversiones) y CRM ligero",
      "Campañas Meta + Google con creatividades y copywriting de arranque",
      "Chatbot FAQ entrenado con tu contenido para captar y calificar leads",
    ],
    automation: [
      "Flujos email/WhatsApp para nuevos leads",
      "Dashboard Looker Studio con métricas clave",
      "Playbook de contenidos para los próximos 60 días",
    ],
    results: [
      "Lead funnel operativo y mensurables desde el primer mes",
      "Mensajes y audiencias validadas para escalar",
      "Roadmap claro de siguientes sprints",
    ],
    ctaLabel: "Reservar diagnóstico",
    ctaLink: "/meeting",
  },
  {
    id: "growth",
    title: "Crecimiento",
    price: "Desde 3.200 €/mes",
    duration: "Sprint continuo (mín. 3 meses)",
    badge: "Más elegido",
    description:
      "Tu equipo extendido para escalar adquisición multicanal, contenidos e ingresos con previsibilidad.",
    includes: [
      "Experiencias web + blog con contenido SEO recurrente",
      "Paid media omnicanal (Meta, Google, LinkedIn, TikTok)",
      "Producción audiovisual mensual y biblioteca de creatividades",
      "IA conversacional conectada a CRM y herramientas de soporte/ventas",
    ],
    automation: [
      "Workflows en Make/Zapier integrando CRM, facturación y soporte",
      "Scoring predictivo y cohortes para priorizar oportunidades",
      "Reporting semanal con backlog priorizado y próximos experiments",
    ],
    results: [
      "Incremento constante de MQL/SQL y ROAS",
      "Playbooks comerciales y de contenidos evolucionando cada sprint",
      "Gobernanza clara entre marketing, ventas y producto",
    ],
    ctaLabel: "Hablar con Bird",
    ctaLink: "/meeting",
  },
  {
    id: "enterprise",
    title: "Enterprise",
    price: "Proyecto a medida",
    duration: "Roadmap anual",
    badge: "Corporaciones y organismos",
    description:
      "Squad estratégico para transformar la experiencia digital end-to-end y desplegar IA a escala internacional.",
    includes: [
      "Discovery multi-país y co-creación de estrategia omnicanal",
      "Arquitectura de datos unificada (DWH + BI + dashboards ejecutivos)",
      "Integraciones a medida con ERP, CRM y apps internas",
      "Programas de formación y adopción IA para equipos internos",
    ],
    automation: [
      "Automatización avanzada de procesos y canales",
      "Modelos predictivos para demanda, pricing y churn",
      "Frameworks de gobernanza IA, compliance y seguridad",
    ],
    results: [
      "Roadmap de transformación con OKRs compartidos",
      "Squads coordinados con SLAs y comunicación data-driven",
      "Expansión internacional alineada con branding y performance",
    ],
    ctaLabel: "Solicitar propuesta",
    ctaLink: "https://wa.me/673685542",
  },
];

const comparison = [
  {
    label: "Equipo dedicado",
    values: ["Digital lead + PM", "Squad multidisciplinar", "Squad + chapter leads"],
  },
  {
    label: "Velocidad",
    values: ["Sprint único", "Sprints mensuales", "Roadmap trimestral"],
  },
  {
    label: "Cobertura",
    values: ["Web + paid + IA básica", "Full funnel + growth ops", "Transformación digital completa"],
  },
  {
    label: "Inversión medios",
    values: ["Hasta 1.5k €/mes", "Hasta 6k €/mes", "A definir"],
  },
];

const process = [
  {
    title: "Kick-off & diagnóstico",
    copy: "Workshops, análisis de métricas, revisión de activos y definición de objetivos SMART.",
  },
  {
    title: "Sprint design & despliegue",
    copy: "Producción de activos, campañas, automatizaciones e IA con QA continuo y entregables semanales.",
  },
  {
    title: "Insights & optimización",
    copy: "Reporting con recomendaciones, experiments priorizados y backlog consensuado para el siguiente sprint.",
  },
];

function PlanCard({ plan }: { plan: (typeof plans)[number] }) {
  return (
    <article className="group flex flex-col gap-6 rounded-[28px] border border-black/5 bg-white/90 p-8 shadow-[0_35px_60px_-35px_rgba(15,23,42,0.38)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_45px_85px_-45px_rgba(37,99,235,0.45)]">
      <header className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-blue-500">{plan.badge}</p>
            <h3 className="text-2xl font-semibold text-slate-900">{plan.title}</h3>
          </div>
          <span className="rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold text-blue-600">
            {plan.duration}
          </span>
        </div>
        <p className="text-3xl font-semibold text-slate-900">{plan.price}</p>
        <p className="text-sm text-slate-600">{plan.description}</p>
      </header>

      <section className="space-y-4">
        <ListBlock title="Incluye" items={plan.includes} />
        <ListBlock title="Automatización & IA" items={plan.automation} />
        <ListBlock title="Resultados esperados" items={plan.results} />
      </section>

      <footer className="flex flex-col gap-3 border-t border-slate-200 pt-6">
        <Link
          href={plan.ctaLink}
          target={plan.ctaLink.startsWith("http") ? "_blank" : undefined}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-black bg-black px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-600"
        >
          {plan.ctaLabel}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
        <p className="text-xs text-slate-400">
          Incluye reuniones semanales, canal compartido y reporting en tiempo real.
        </p>
      </footer>
    </article>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-3 rounded-2xl border border-slate-200/60 bg-white/70 p-4">
      <p className="text-sm font-semibold text-slate-800">{title}</p>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-500" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="overflow-clip bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <FloatingNav navItems={navItems} />

      <section className="mx-6 mt-20 flex flex-col gap-6 rounded-[48px] border border-black/5 bg-white/70 p-10 text-center shadow-[0_35px_70px_-40px_rgba(15,23,42,0.4)] backdrop-blur md:mx-auto md:w-4/5">
        <p className="text-xs uppercase tracking-[0.35em] text-blue-500">Planes y servicios</p>
        <h1 className="text-3xl font-semibold text-slate-900 md:text-5xl">
          Marketing, automatización e IA adaptados a tu etapa de crecimiento
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-slate-600">
          Diseñamos equipos híbridos y sprints con entregables medibles. Cada plan incluye estrategia, ejecución, automatización y reporting para que el crecimiento no dependa de improvisaciones.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500">
          <span className="rounded-full border border-slate-200 px-4 py-2">Kick-off en menos de 10 días</span>
          <span className="rounded-full border border-slate-200 px-4 py-2">Contratos flexibles desde 3 meses</span>
          <span className="rounded-full border border-slate-200 px-4 py-2">Workshops de descubrimiento incluidos</span>
        </div>
        <Link
          href="/meeting"
          className="mx-auto inline-flex items-center gap-2 rounded-xl border border-black bg-black px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-600"
        >
          Agendar diagnóstico gratuito
          <CalendarIcon className="h-4 w-4" />
        </Link>
      </section>

      <section className="mx-6 my-16 grid gap-8 md:mx-auto md:w-4/5 xl:grid-cols-3">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </section>

      <section className="mx-6 mb-16 rounded-[40px] border border-slate-200/70 bg-white/80 p-8 shadow-[0_30px_60px_-45px_rgba(15,23,42,0.3)] md:mx-auto md:w-4/5">
        <h2 className="text-xl font-semibold text-slate-900">Comparativa en un vistazo</h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/70">
          <table className="w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50/80 text-slate-500">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Aspecto</th>
                {plans.map((plan) => (
                  <th key={plan.id} className="px-4 py-3 text-left font-semibold text-slate-700">
                    {plan.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white/80 text-slate-600">
              {comparison.map((row) => (
                <tr key={row.label} className="divide-x divide-slate-200/60">
                  <td className="px-4 py-3 font-medium text-slate-700">{row.label}</td>
                  {row.values.map((value, index) => (
                    <td key={index} className="px-4 py-3">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-6 mb-20 flex flex-col gap-8 rounded-[40px] border border-black/5 bg-white/80 p-10 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.32)] md:mx-auto md:w-4/5">
        <div className="space-y-3 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Cómo trabajamos</p>
          <h2 className="text-2xl font-semibold text-slate-900">Sprints claros, sin sorpresas</h2>
          <p className="text-sm text-slate-600">
            Cada engagement arranca con un diagnóstico detallado y continúa con ciclos de trabajo de cuatro semanas. Documentamos todo, compartimos tableros y medimos resultados en tiempo real.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {process.map((step) => (
            <div key={step.title} className="space-y-3 rounded-2xl border border-slate-200/70 bg-white/70 p-5">
              <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="text-sm text-slate-600">{step.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-6 mb-20 rounded-[36px] border border-emerald-200/70 bg-emerald-50/70 p-8 shadow-[0_30px_60px_-40px_rgba(16,185,129,0.35)] md:mx-auto md:w-4/5">
        <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">Garantía Bird</p>
            <h3 className="text-2xl font-semibold text-emerald-900">Resultados garantizados o te devolvemos tu inversión del primer sprint.</h3>
            <p className="text-sm text-emerald-800/80">
              Si tras el sprint inicial no logramos los entregables y KPIs acordados, reembolsamos el fee del servicio o continuamos sin coste hasta alcanzarlos. Transparencia y riesgo compartido desde el día uno.
            </p>
          </div>
          <Link
            href="/meeting"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-600 bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-500"
          >
            Revisar condiciones
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-6 mb-24 flex flex-col gap-6 rounded-[40px] border border-black/5 bg-white p-10 text-center shadow-[0_35px_60px_-40px_rgba(15,23,42,0.4)] md:mx-auto md:w-4/5">
        <h2 className="text-3xl font-semibold text-slate-900">¿Listo para tu próximo sprint con Bird?</h2>
        <p className="mx-auto max-w-2xl text-base text-slate-600">
          Agenda una sesión estratégica sin compromiso. Revisamos tu funnel actual, priorizamos quick wins y definimos una hoja de ruta con inversiones estimadas y recursos necesarios.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/meeting"
            className="inline-flex items-center gap-2 rounded-xl border border-black bg-black px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-600"
          >
            Ir a la agenda
            <CalendarIcon className="h-4 w-4" />
          </Link>
          <Link
            href="https://wa.me/673685542"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600"
          >
            Hablar por WhatsApp
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
