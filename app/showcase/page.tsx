"use client"
import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import Footer from "@/components/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import ShowcaseNavbar from "@/components/showcase-navbar";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import { navItems } from "@/data";

const Showcase = () => {
  return (
    <div
      className="
        overflow-clip 
 inset-0 
 -z-10 h-full w-full bg-[#fafafa]
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
   bg-[size:14px_24px]"
    >
     <FloatingNav navItems={navItems}/>
      <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <div className="flex items-center justify-center relative">
          <WordFadeIn
            className="text-3xl pt-20 lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center   z-20  "
            words="Diseño y Código Que Ayudará Crecer tu Negocio"
          />
        </div>
        <p className="md:text-center text-xl md:text-2xl my-6   md:w-4/5 mx-auto text-gray-500">
          Echale un vistazo a nuestro proyectos recientes
        </p>

        <BlurFadeDemo />

        <LetsMakeThingsHappenSection />


      </section>

      <Footer />
    </div>
  );
};

export default Showcase;
