"use client";

import Link from "next/link";

import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { navItems } from "@/data";
import { servicesList } from "@/data/services";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Footer from "@/components/footer";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="overflow-clip -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <FloatingNav navItems={navItems} />

      <section className="mx-6 mt-16 flex flex-col gap-6 rounded-[40px] border border-black/5 bg-white/70 p-10 text-center shadow-[0_35px_70px_-40px_rgba(15,23,42,0.35)] backdrop-blur md:mx-auto md:w-4/5">
        <p className="text-xs uppercase tracking-[0.35em] text-blue-500">Servicios 360º</p>
        <h1 className="text-3xl font-semibold text-slate-900 md:text-5xl">
          Sprints, equipos y automatizaciones a medida de tu etapa de crecimiento
        </h1>
        <p className="mx-auto max-w-3xl text-base text-slate-600 md:text-lg">
          Elige el servicio que necesitas ahora. Podemos integrarnos con tu equipo interno o liderar el proyecto completo: estrategia, ejecución, IA, datos y reporting en ciclos de 4 semanas.
        </p>
      </section>

      <section className="mx-6 my-16 grid gap-10 md:mx-auto md:w-4/5 md:grid-cols-2 xl:grid-cols-3">
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
              alt={service.title}
              className="mx-auto h-24 w-24 object-contain"
            />
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-slate-900">{service.title}</h2>
              <p className="text-sm text-slate-600">{service.shortDescription}</p>
            </div>
            <span className="text-sm font-semibold text-blue-600">Ver detalles →</span>
          </Link>
        ))}
      </section>

      <section className="mx-6 mb-20 rounded-[36px] border border-blue-100 bg-blue-50/70 p-8 text-center shadow-[0_25px_55px_-40px_rgba(30,64,175,0.35)] md:mx-auto md:w-4/5 md:text-left">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2 md:max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-500">¿No sabes por dónde empezar?</p>
            <h2 className="text-2xl font-semibold text-slate-900">Agenda un diagnóstico y diseñamos el primer sprint juntos.</h2>
            <p className="text-sm text-slate-600">
              Revisamos tu funnel actual, priorizamos quick wins y te presentamos una hoja de ruta con entregables, presupuesto y métricas estimadas.
            </p>
          </div>
          <Link
            href="/meeting"
            className="inline-flex items-center gap-2 rounded-xl border border-black bg-black px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-600"
          >
            Reservar diagnóstico
          </Link>
        </div>
      </section>

      <section className="mx-6 mb-20 md:mx-auto md:w-4/5">
        <LetsMakeThingsHappenSection />
      </section>

      <Footer />
    </div>
  );
}
