"use client";

import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { Element } from "react-scroll";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Footer from "@/components/footer";
import { navItems } from "@/data";

const videos = [
  {
    source: "/images/carrs.mp4", // Ruta del archivo de video
    title: "Paso 1: Diseño Web",
    description: "Explorando ideas innovadoras para diseño web.",
  },
  {
      source:"/images/car.mp4", // Ruta del archivo de video
      title: "Paso 2: Creación de Contenido",
      description: "Producción de contenido visual y dinámico.",
    },
    {
      source:"/images/mark.mp4", // Ruta del archivo de video
      title: "Paso 3: SEO en acción",
      description: "Resultados de campañas de SEO recientes.",
    },
];

export default function Home() {
  return (
    <div
      className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] 
      bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
      bg-[size:14px_24px]"
    >
      <FloatingNav navItems={navItems} />

      <Element name="videos">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
          <h1 className="text-center text-3xl font-bold py-4">Nuestros Videos</h1>
          <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
            Descubre cómo ayudamos a nuestros clientes con proyectos visuales.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {videos.map((video, index) => (
              <div
                key={index}
                className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 hover:scale-105 transition-transform rounded-md"
              >
                <div className="relative w-full h-96 overflow-hidden rounded-md">
                  <video
                    src={video.source}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-medium">{video.title}</h2>
                <p className="text-gray-500">{video.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Element>

      <section className="py-20">
        <LetsMakeThingsHappenSection />
      </section>

      <Footer />
    </div>
  );
}
