"use client";

import Link from "next/link";
import { notFound } from "next/navigation";

import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { navItems } from "@/data";
import { servicesList } from "@/data/services";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Footer from "@/components/footer";

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = servicesList.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="overflow-clip -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <FloatingNav navItems={navItems} />

      <header className="mx-6 mt-16 flex flex-col gap-6 rounded-[40px] border border-black/5 bg-white/80 p-10 shadow-[0_35px_70px_-40px_rgba(15,23,42,0.35)] backdrop-blur md:mx-auto md:w-4/5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl space-y-3 text-left">
            <p className="text-xs uppercase tracking-[0.35em] text-blue-500">Servicio 360º</p>
            <h1 className="text-3xl font-semibold text-slate-900 md:text-5xl">{service.title}</h1>
            <p className="text-base text-slate-600 md:text-lg">{service.longDescription}</p>
          </div>
          <Link
            href="/meeting"
            className="inline-flex items-center gap-2 rounded-xl border border-black bg-black px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-600"
          >
            Agendar diagnóstico
          </Link>
        </div>
      </header>

      <main className="mx-6 my-16 flex flex-col gap-10 md:mx-auto md:w-4/5">
        <section className="grid gap-6 md:grid-cols-2">
          <Card title="Entregables clave" items={service.deliverables} />
          <Card title="Automatización & IA" items={service.automations} />
        </section>

        <section className="rounded-[32px] border border-slate-200/70 bg-white/80 p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Proceso de trabajo</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {service.process.map((step) => (
              <div key={step.title} className="space-y-3 rounded-2xl border border-slate-200/70 bg-white p-5 text-sm text-slate-600">
                <p className="text-sm font-semibold text-slate-900">{step.title}</p>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <Card title="Herramientas habituales" items={service.tools} />
          <Card title="Resultados que perseguimos" items={service.outcomes} />
        </section>
      </main>

      <section className="mx-6 mb-20 rounded-[36px] border border-blue-100 bg-blue-50/70 p-8 text-center shadow-[0_25px_55px_-40px_rgba(30,64,175,0.35)] md:mx-auto md:w-4/5 md:text-left">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2 md:max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-500">Siguiente paso</p>
            <h2 className="text-2xl font-semibold text-slate-900">Agenda una sesión y definimos tu primer sprint</h2>
            <p className="text-sm text-slate-600">
              Revisamos tu funnel, priorizamos entregables y estimamos recursos y presupuesto para comenzar en menos de 10 días.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/meeting"
              className="inline-flex items-center gap-2 rounded-xl border border-black bg-black px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-600"
            >
              Reservar diagnóstico
            </Link>
            <Link
              href="https://wa.me/673685542"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600"
            >
              Hablar por WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-6 mb-20 md:mx-auto md:w-4/5">
        <LetsMakeThingsHappenSection />
      </section>

      <Footer />
    </div>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="h-full rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm">
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
