"use client";

import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";

import Image from "next/image";
import { Link as ScrollLink, Element } from "react-scroll";
import { IconStarFilled } from "@tabler/icons-react";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import ShowcaseNavbar from "@/components/showcase-navbar";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/footer";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { navItems } from "@/data";





const videos = [
  {
    thumbnail: "/images/img1.png", // Reemplaza con la miniatura del video
    title: "Video 1: Diseño Web",
    description: "Explorando ideas innovadoras para diseño web.",
    link: "https://www.instagram.com/reels/DEgd7mUN1Tw/?hl=es/", // Enlace al video en Instagram
  },
  {
    thumbnail: "/images/img2.png", // Reemplaza con la miniatura del video
    title: "Video 2: SEO en acción",
    description: "Resultados de campañas de SEO recientes.",
    link: "https://www.instagram.com/reels/DEfebEHMoQM/?hl=es",
  },
  {
    thumbnail: "/images/img2.png", // Reemplaza con la miniatura del video
    title: "Video 3: Creación de Contenido",
    description: "Producción de contenido visual y dinámico.",
    link: "https://www.instagram.com/reels/DEfebEHMoQM/?hl=es",
  },
];

export default function Home() {
  return (
    <div
      className="overflow-clip 
 inset-0 
 -z-10 h-full w-full bg-[#fafafa]
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
              <a
                key={index}
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <h2 className="text-xl font-medium">{video.title}</h2>
                <p className="text-gray-500">{video.description}</p>
              </a>
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
