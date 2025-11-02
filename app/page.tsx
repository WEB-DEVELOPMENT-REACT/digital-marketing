"use client";

import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";

import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";
import { IconStarFilled } from "@tabler/icons-react";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Hero from "./hero/page";
import Footer from "@/components/footer";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { navItems } from "@/data";
import { servicesList } from "@/data/services";

const successHighlights = [
  {
    value: "x1.6",
    label: "ROAS medio",
    description: "Promedio reciente en campañas para retail y educación en España y Europa.",
  },
  {
    value: "-42%",
    label: "Coste por lead",
    description: "Reducción media tras implementar automatizaciones y nurturing con IA.",
  },
  {
    value: "8 semanas",
    label: "De briefing a resultados",
    description: "Primer sprint con sitio, campañas operativas y reporting en marcha.",
  },
];

const aiSolutions = [
  {
    title: "Asistentes 24/7",
    description: "Bots multilingües entrenados con tu contenido para captar y cualificar leads sin perder tono de marca.",
  },
  {
    title: "Automatización end-to-end",
    description: "Workflows Make/Zapier que sincronizan formularios, CRM, email, WhatsApp y facturación.",
  },
  {
    title: "Dashboards predictivos",
    description: "GA4 y Looker Studio conectados a ventas para prever demanda y priorizar acciones cada semana.",
  },
];

const faqs = [
  {
    question: "¿Trabajáis solo con empresas de Valencia?",
    answer: "Tenemos HQ en Valencia pero operamos con equipos remotos en España, Portugal, Francia y LATAM."
  },
  {
    question: "¿Qué incluye la auditoría gratuita?",
    answer: "Analizamos tu funnel actual, detectamos quick wins y entregamos un roadmap con sprints, presupuesto y métricas."
  },
  {
    question: "¿Podéis integraros con nuestro stack actual?",
    answer: "Sí. Trabajamos con HubSpot, Pipedrive, Zoho, Holded, Salesforce y soluciones custom via API/Make."
  },
];

export default function Home() {
  return (
    <div className="overflow-clip -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <FloatingNav navItems={navItems} />

      <Hero />

      <Element name="services" id="servicios">
        <section className="mx-6 mt-16 flex flex-col gap-6 md:mx-auto md:w-4/5">
          <h2>
            <WordPullUpDemo />
          </h2>
          <p className="mx-auto max-w-3xl text-center text-lg text-slate-600 md:text-xl">
            Estrategia, creatividad y tecnología para posicionar tu marca, captar demanda y escalar ingresos sin improvisar.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-3">
            {servicesList.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="flex h-full flex-col justify-between space-y-4 rounded-md border border-slate-200 bg-white/80 p-6 text-center shadow-sm transition hover:scale-[1.02] hover:shadow-lg"
              >
                <Image
                  src={service.icon}
                  width={100}
                  height={100}
                  className="mx-auto h-24 w-24 object-contain"
                  alt={service.title}
                />
                <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="text-sm text-slate-600">{service.shortDescription}</p>
                <span className="text-sm font-semibold text-blue-600">Ver detalles →</span>
              </Link>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {successHighlights.map((highlight) => (
              <div key={highlight.label} className="rounded-2xl border border-blue-100 bg-blue-50/70 p-6 text-center shadow-sm">
                <span className="text-4xl font-semibold text-blue-600">{highlight.value}</span>
                <h4 className="mt-2 text-lg font-medium text-slate-900">{highlight.label}</h4>
                <p className="mt-2 text-sm text-slate-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </section>
      </Element>

      <section className="py-20">
        <ScrollBasedVelocityDemo />
      </section>

      <Element name="process">
        <section className="mx-6 flex flex-col gap-6 md:mx-auto md:w-4/5">
          <h2 className="text-center text-2xl font-semibold text-slate-900 md:text-5xl">
            Nuestro proceso en sprints de 4 semanas
          </h2>
          <p className="mx-auto max-w-3xl text-center text-lg text-slate-600">
            Workshops para alinear, construcción de activos y automatizaciones en paralelo, medición constante y backlog priorizado.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm">
              <AnimatedBeamMultipleOutputDemo />
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm">
              <BoxRevealDemo />
            </div>
          </div>
        </section>
      </Element>

      <section className="mx-6 my-16 flex flex-col gap-6 md:mx-auto md:w-4/5 md:flex-row md:items-center md:gap-16">
        <Image
          src="/images/profile.png"
          width={1200}
          height={800}
          className="w-full rounded-2xl object-cover md:w-1/2"
          alt="Equipo Bird trabajando"
        />
        <div className="flex flex-col gap-5 md:w-1/2">
          <h3 className="text-3xl font-semibold text-slate-900">
            Bird es tu equipo híbrido de marketing, data y tecnología con base en Valencia y alcance europeo.
          </h3>
          <p className="text-lg text-slate-600">
            Operamos con pymes, scaleups y organizaciones públicas en España, Portugal, Francia y LATAM. Nos integramos con tus equipos internos o lideramos el proyecto de principio a fin.
          </p>
          <div className="flex items-center gap-2 text-yellow-500">
            <IconStarFilled className="text-3xl" />
            <IconStarFilled className="text-3xl" />
            <IconStarFilled className="text-3xl" />
            <IconStarFilled className="text-3xl" />
            <IconStarFilled className="text-3xl" />
            <span className="text-sm text-slate-600">4.9/5 según clientes y partners</span>
          </div>
          <div className="grid gap-2 text-sm text-slate-600">
            <p>- Equipo senior con experiencia en retail, turismo, educación y proyectos institucionales.</p>
            <p>- Partners oficiales de Meta y Google; especialistas en automatización Make/Zapier.</p>
            <p>- Modelo colaborativo: sprints transparentes, reporting compartido y comunicación directa.</p>
          </div>
          <span className="text-lg font-medium text-slate-900">Muriel &amp; Duver — Co-founders de Bird</span>
        </div>
      </section>

      <Element name="ia" id="ia">
        <section className="mx-6 my-16 rounded-[36px] border border-blue-100 bg-blue-50/70 p-8 shadow-[0_25px_55px_-40px_rgba(30,64,175,0.35)] md:mx-auto md:w-4/5">
          <div className="mx-auto space-y-4 text-center md:w-3/5">
            <p className="text-xs uppercase tracking-[0.35em] text-blue-500">Soluciones IA</p>
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              Automatizamos tu funnel con inteligencia artificial a medida
            </h2>
            <p className="text-base text-slate-600">
              Detectamos casos de uso, conectamos tus herramientas y desplegamos asistentes, workflows y reporting que generan resultados desde el primer sprint.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {aiSolutions.map((solution) => (
              <div key={solution.title} className="rounded-2xl border border-white/60 bg-white/80 p-6 text-left shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{solution.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </section>
      </Element>

      <Element name="guarentees">
        <ShootingStarsAndStarsBackgroundDemo />
      </Element>

      <Element name="faq" id="faq">
        <section className="mx-6 py-16 md:mx-auto md:w-4/5">
          <div className="mx-auto space-y-4 text-center md:w-3/5">
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Preguntas frecuentes</h2>
            <p className="text-lg text-slate-600">
              ¿Dudas específicas? Escríbenos por WhatsApp o agenda una llamada y lo resolvemos en minutos.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:border-blue-200"
              >
                <summary className="cursor-pointer text-lg font-medium text-slate-900">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </Element>

      <section className="my-10 md:py-20 md:mx-auto md:w-4/5">
        <LetsMakeThingsHappenSection />
      </section>

      <Footer />
    </div>
  );
}
