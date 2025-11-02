"use client";


import { PiCheckCircle } from "react-icons/pi";
import { motion } from "framer-motion";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { navItems } from "@/data";
import ScheduleWidget from "./schedule-widget";

const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Meeting = () => {



  return (
    <div className="
    
    flex flex-col  w-full  

     overflow-clip inset-0 -z-10 
  bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]
    
    ">
      <FloatingNav navItems={navItems}/>
      <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] justify-between md:mt-14 md:flex mx-auto  ">
        <div className="md:w-2/5">
          <h1 className="text-4xl font-semibold pt-10">Agenda una sesión estratégica</h1>
          <p className="text-lg text-gray-500 py-4">
            Operamos desde Valencia con equipos distribuidos por Europa. En 30 minutos analizamos tu funnel, detectamos quick wins y diseñamos el siguiente sprint.
          </p>

          {[
                {
                  title: "Auditoría IA personalizada",
                  description:
                    "Identificamos casos de uso reales para tu negocio y las herramientas adecuadas para implementarlos.",
                },

                {
                  title: "Plan de acción en 4 semanas",
                  description:
                    "Definimos campañas, automatizaciones y entregables concretos para el próximo sprint.",
                },
                {
                  title: "Seguimiento y soporte",
                  description:
                    "Te acompañamos con check-ins, dashboards y coordinación con tu equipo interno o partners.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={checkItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-x-4 py-4"
                >
                  <PiCheckCircle className=" rounded-md text-[#3d80d7] text-2xl flex-shrink-0" />
                  <ul>
                    <h3 className="text-lg font-bold text-gray-700">
                      {item.title}
                    </h3>
                    <div className="text-gray-400">{item.description}</div>
                  </ul>
                </motion.div>
              ))}
        </div>

    <div className="md:w-1/2">
      <ScheduleWidget />
      </div>
      </div>
    </div>
  );
};

export default Meeting;
