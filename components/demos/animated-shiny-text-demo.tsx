'use client'
import { cn } from "@/lib/utils";
import AnimatedShinyText from "../magicui/animated-shiny-text";
export function AnimatedShinyTextDemo() {
  return (
    <div className="z-10 flex items-center md:justify-center">
      <div
        className={cn(
          "group rounded-full text-base text-white transition-all ease-in",
        )}
      >
        <AnimatedShinyText className=" 
        items-center 
        justify-center 
         py-1 transition ease-out
          hover:text-neutral-600 
          hover:duration-300
           hover:dark:text-neutral-400">
          <div className="md:flex md:flex-row flex-col md:items-center md:justify-center gap-4 text-gray-700">
            <span className="text-sm uppercase tracking-[0.3em] text-blue-600">
              Agencia IA-first
            </span>
            <span className="text-sm text-gray-600">
              Valencia HQ · Proyectos en España y Europa · Equipo híbrido marketing + data
            </span>
          </div>
        </AnimatedShinyText>
      </div>
    </div>
  );
}
