"use client"
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import { PiCheckBold } from "react-icons/pi";
import Link from "next/link";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { navItems } from "@/data";



const Hero = () => {
    return (
<main className="md:pb-10">
<div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
  <AnimatedShinyTextDemo />
  <h1>
    <CoverDemo />
  </h1>
  <p
    className="md:text-center
   text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500"
  >
   Programe una llamada con nosotros para analizar su proyecto y obtener una cotización en
   minutos
  </p>

  <div
    className="
         flex 
          md:justify-center 
          items-center 
          gap-x-4
           "
  >
    <Link
      href="/videos"
      className="py-3 
    px-10
    md:px-16
md:text-xl
hover:bg-[#abcbff] 
rounded-[6px]
border-2 
border-black 
dark:border-white 
bg-[#121212] 
text-white 
transition 
duration-200 
hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
    >
     Proceso
    </Link>
    <Link
      href={"/showcase"}
      className="
      bg-white
py-3 
px-10
md:px-16
md:text-xl
border-4
border-black
rounded-[6px]
hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
    >
      Proyectos
    </Link>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
    <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
      <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
        <PiCheckBold className="text-xl text-blue-500" />
        <Link href={"/videos"}>Videos</Link>
      </p>
    </BoxReveal>
    <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
      <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
        <PiCheckBold className="text-xl text-blue-500" />
        <Link href={"https://duverxmobiledev.es"} passHref target="_blank" >
        Aplicaciones
        </Link>
      </p>
    </BoxReveal>
    <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
      <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
        <PiCheckBold className="text-xl text-blue-500" />
        Marketing
      </p>
    </BoxReveal>
    <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
      <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
        <PiCheckBold className="text-xl text-blue-500" />
        Estrategia
      </p>
    </BoxReveal>
  </div>

  <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
    <div className="md:w-2/5">
      <h1 className="text-2xl font-medium text-gray-600 w-4/5">
      Con la confianza de marcas de rápido crecimiento en todo el mundo
      </h1>

      <div className="flex my-6 gap-x-5 w-full">
        <div>
          <h1 className="text-blue-500 text-3xl md:text-5xl">
            <NumberTicker value={670} /> +
            <p className="text-gray-500 text-sm md:text-md">
              Videos Completados
            </p>
          </h1>
        </div>

        <div className="w-px bg-gray-300 self-stretch"></div>

        <div className="flex-1 min-w-0">
          <h1 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
            <NumberTicker value={100} /> %
            <p className="text-gray-500 text-sm md:text-md">
              Projectos 
            </p>
          </h1>
        </div>
      </div>
    </div>

    <section className="overflow-hidden mt-10 md:w-4/5">
      <InfiniteMovingLogos
        speed="slow"
        direction="left"
        items={[
          {
            logo: "/logo/logo.webp",
            name: "Logo",
          },
          {
            logo: "/logo/logo.webp",
            name: "Logo",
          },
        ]}
      />
    </section>
  </div>
</div>
</main>
  );
};

export default Hero;