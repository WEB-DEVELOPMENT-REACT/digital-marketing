"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CalendarIcon, CheckCircle2 } from "lucide-react";

import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { navItems } from "@/data";

const plans = [
  {
    id: "web-dev",
    category: "Web / Desarrollo",
    product: "Web Estratégica + Desarrollo",
    badge: "Producto mínimo viable",
    price: "1.500 – 3.000 €",
    description:
      "Proyecto llave en mano para lanzar o renovar tu sitio con foco en conversión, velocidad y tracking.",
    includes: [
      "Web enfocada en conversión y performance",
      "Arquitectura estratégica y UX orientada a negocio",
      "Optimización móvil + velocidad",
      "Copywriting persuasivo alineado a la propuesta de valor",
      "Pixel + eventos y SMS conectados",
      "SEO técnico inicial",
      "Integración con WhatsApp API para captación y soporte",
    ],
    note: "Rango según número de secciones, integraciones y CMS.",
    ctaLabel: "Solicitar propuesta",
    ctaLink: "/meeting",
  },
  {
    id: "paid-media",
    category: "Paid Media",
    product: "Meta Ads + Google Ads + TikTok Ads",
    badge: "Gestión mensual",
    price: "500 €/mes de gestión + inversión ads",
    description:
      "Planificación, activación y optimización multicanal orientada a leads, ventas o tráfico cualificado.",
    includes: [
      "Definición de objetivos y KPIs (tráfico, leads, conversiones, mensajes)",
      "Investigación estratégica de públicos y segmentaciones",
      "Estructuración de campañas en Meta, TikTok y Google (Search/Display)",
      "Configuración de conjuntos de anuncios y variaciones creativas",
      "Copies publicitarios orientados a conversión",
      "Uso estratégico y adaptación básica de creativos entregados por el cliente",
      "Creación de hasta 2 piezas gráficas simples por campaña con assets del cliente",
      "Optimización básica durante la campaña y recomendaciones continuas",
      "Lectura de métricas clave (CTR, CPC, CPA, conversiones)",
    ],
    note: "Fee fijo de gestión; inversión publicitaria se paga por separado.",
    ctaLabel: "Agendar diagnóstico",
    ctaLink: "/meeting",
  },
  {
    id: "social",
    category: "Gestión de redes sociales",
    product: "Contenido Estratégico + UGC Premium",
    badge: "Community manager",
    price: "200 €/mes",
    description:
      "Gestión y contenido listos para publicar con enfoque en comunidad, autoridad y conversión.",
    includes: [
      "Gestión y administración diaria de las redes de la marca",
      "Planificación mensual de contenido alineada a objetivos",
      "Definición de pilares: educativo, autoridad, confianza y conversión",
      "Lineamientos creativos para campañas y contenidos",
      "Creación de 10 guiones y briefs para que el cliente grabe",
      "Copies estratégicos y llamados a la acción",
      "Ideas UGC adaptadas a performance (sin grabación en agencia)",
      "Programación y organización del contenido en plataformas",
      "Supervisión de coherencia visual y narrativa",
      "Seguimiento básico de desempeño (alcance, interacción)",
    ],
    note: "Ideal para mantener cadencia constante con apoyo creativo.",
    ctaLabel: "Hablar por WhatsApp",
    ctaLink: "https://wa.me/673685542",
  },
];

const comparison = [
  {
    label: "Objetivo principal",
    values: [
      "Lanzar o renovar web orientada a conversión",
      "Escalar captación con campañas de pago",
      "Construir comunidad y contenido constante",
    ],
  },
  {
    label: "Alcance",
    values: [
      "Arquitectura UX, copy y medición integrados",
      "Meta, TikTok y Google Ads con optimización semanal",
      "Planificación, copies y calendario mensual + UGC",
    ],
  },
  {
    label: "Entrega típica",
    values: ["Proyecto cerrado en 4–6 semanas", "Gestión mensual con reporting continuo", "Calendario mensual con ajustes quincenales"],
  },
  {
    label: "Precio base",
    values: ["1.500 – 3.000 €", "500 €/mes + inversión", "200 €/mes"],
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
    <article className="group flex flex-col gap-5 rounded-[24px] border border-black/5 bg-white/90 p-6 shadow-[0_30px_55px_-35px_rgba(15,23,42,0.36)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_40px_80px_-45px_rgba(37,99,235,0.4)]">
      <header className="space-y-2.5">
        <div className="flex items-center justify-between">
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">{plan.category}</p>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-600">
            {plan.badge}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-slate-900">{plan.product}</h3>
        <p className="text-2xl font-semibold text-slate-900">{plan.price}</p>
        <p className="text-sm text-slate-600">{plan.description}</p>
      </header>

      <section className="space-y-4">
        <ListBlock title="Incluye" items={plan.includes} />
        {plan.note ? <p className="text-xs text-slate-500">{plan.note}</p> : null}
      </section>

      <footer className="flex flex-col gap-3 border-t border-slate-200 pt-4">
        <Link
          href={plan.ctaLink}
          target={plan.ctaLink.startsWith("http") ? "_blank" : undefined}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-black bg-black px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-600"
        >
          {plan.ctaLabel}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </footer>
    </article>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? items : items.slice(0, 4);

  return (
    <div className="space-y-3 rounded-2xl border border-slate-200/70 bg-white/80 p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-800">{title}</p>
        {items.length > 4 ? (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="text-xs font-semibold text-blue-600 underline-offset-4 hover:underline"
          >
            {expanded ? "Ver menos" : `+${items.length - 4} más`}
          </button>
        ) : null}
      </div>
      <div className="space-y-2">
        {visibleItems.map((item) => (
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

      <section className="mx-6 mt-12 flex flex-col gap-4 rounded-[36px] border border-black/5 bg-white/75 p-8 text-center shadow-[0_30px_60px_-40px_rgba(15,23,42,0.38)] backdrop-blur md:mx-auto md:max-w-6xl">
        <p className="text-[11px] uppercase tracking-[0.35em] text-blue-500">Planes y servicios</p>
        <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
          Web, paid media y redes sin scroll infinito
        </h1>
        <p className="mx-auto max-w-3xl text-base text-slate-600">
          Todo lo esencial en una sola vista. Elige el plan que mejor encaja y abre detalles solo cuando lo necesites.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-500">
          <span className="rounded-full border border-slate-200 px-3 py-1.5">Kick-off rápido</span>
          <span className="rounded-full border border-slate-200 px-3 py-1.5">Precios base claros</span>
          <span className="rounded-full border border-slate-200 px-3 py-1.5">Entregables accionables</span>
        </div>
        <Link
          href="/meeting"
          className="mx-auto inline-flex items-center gap-2 rounded-xl border border-black bg-black px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-600"
        >
          Agendar diagnóstico gratuito
          <CalendarIcon className="h-4 w-4" />
        </Link>
      </section>

      <section className="mx-6 my-10 grid gap-6 md:mx-auto md:max-w-6xl md:grid-cols-3">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </section>

      <section className="mx-6 mb-12 space-y-3 md:mx-auto md:max-w-5xl">
        <details className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 shadow-[0_20px_40px_-35px_rgba(15,23,42,0.35)]">
          <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-semibold text-slate-800">
            Comparativa rápida
            <span className="text-xs text-slate-500">Opcional</span>
          </summary>
          <div className="overflow-x-auto border-t border-slate-100">
            <table className="w-full min-w-[720px] divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50/80 text-slate-500">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Aspecto</th>
                  {plans.map((plan) => (
                    <th key={plan.id} className="px-4 py-3 text-left font-semibold text-slate-700">
                      {plan.product}
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
        </details>

        <details className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 shadow-[0_20px_40px_-35px_rgba(15,23,42,0.35)]">
          <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-semibold text-slate-800">
            Cómo trabajamos
            <span className="text-xs text-slate-500">Pasos en 20 segundos</span>
          </summary>
          <div className="grid gap-4 border-t border-slate-100 p-4 md:grid-cols-3">
            {process.map((step) => (
              <div key={step.title} className="space-y-2 rounded-xl border border-slate-200/70 bg-white/70 p-4">
                <h3 className="text-sm font-semibold text-slate-900">{step.title}</h3>
                <p className="text-xs text-slate-600">{step.copy}</p>
              </div>
            ))}
          </div>
        </details>
      </section>
    </div>
  );
}
