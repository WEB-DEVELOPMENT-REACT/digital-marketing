import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const features = [
  {
    icon: "/icons/fast.svg",
    title: "Sprints cada 4 semanas",
    description: "Planificamos, ejecutamos y entregamos mejoras mensuales con objetivos y métricas claras.",
  },
  {
    icon: "/icons/design.svg",
    title: "Stack a medida",
    description: "Seleccionamos tecnología y herramientas IA según tu equipo, presupuesto y sector.",
  },
  {
    icon: "/icons/analytics.svg",
    title: "Data & reporting",
    description: "Dashboards en Looker Studio, seguimiento GA4 y alertas con los datos que importan.",
  },
  {
    icon: "/icons/safe.svg",
    title: "Gobernanza de IA",
    description: "Modelos alineados a tu tono, políticas de privacidad y cumplimiento normativo europeo.",
  },
  {
    icon: "/icons/team.svg",
    title: "Equipo senior",
    description: "Estrategas, creativos y desarrolladores con experiencia en pymes y scaleups valencianas.",
  },
  {
    icon: "/icons/support.svg",
    title: "Acompañamiento continuo",
    description: "Capacitamos a tu equipo, documentamos procesos y estamos disponibles para iterar juntos.",
  },
];

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="mt-20 py-10 md:py-20 rounded-[40px] bg-neutral-900 flex flex-col items-center justify-center relative w-full px-6 md:px-0">
      <h2 className="relative flex-col  z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white flex items-center gap-2 ">
        Garantías para trabajar juntos con confianza
        <p className="md:text-center   mx-auto  text-xl md:text-2xl text-gray-200">
        Comprometidos con resultados, transparencia y adopción tecnológica responsable.
        </p>
      </h2>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 z-40 xl:w-4/5 2xl:w-[68%] mx-auto ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col   p-10 bg-neutral-800 rounded-xl cursor-pointer"
          >
            <button
              className="
                     w-16 p-4 
                     animate-shine flex items-center justify-center rounded-md  bg-gradient-to-br  
                        from-neutral-700 to-neutral-800 
                    font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <Image
                src={feature.icon}
                width={10000}
                height={10000}
                alt="icon"
                className="w-8 h-8"
              />
            </button>

            <h3 className="text-xl font-bold mt-4 text-white">
              {feature.title}
            </h3>
            <p className=" text-gray-200">{feature.description}</p>
          </div>
        ))}
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
