"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className={cn(
          // change rounded-full to rounded-lg
          // remove dark:border-white/[0.2] dark:bg-black bg-white border-transparent
          // change  pr-2 pl-8 py-2 to px-10 py-5
          " flex max-w-[89%] rounded-[6px] md:min-w-[89%] sticky z-50 md:mx-auto lg:min-w-[89%]  xl:w-4/5 2xl:w-[89%] top-5 inset-x-0 mx-auto px-10 py-5 border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-between space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(255,255,255)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
          boxShadow: "0 2px 3px -1px rgba(0,0,0,0.1), 0 1px 0 0 rgba(25,28,33,0.02), 0 0 0 1px rgba(25,28,33,0.08)",
          
        }}
      >
           <Link href={"/"}>
        <Image
          src={"/logo/logo.webp"}
          alt="Logo"
          width={1000}
          height={1000}
          className="w-28"
        />
      </Link>
        <div className="hidden items-center gap-4 md:flex">
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative md:flex sm:flex hidden font-medium text-lg cursor-pointer dark:text-neutral-50 items-center   space-x-1 text-slate-950 dark:hover:text-neutral-300 hover:text-blue-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            {/* add !cursor-pointer */}
            {/* remove hidden sm:block for the mobile responsive */}
            <span className=" text-sm !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
        </div>
        {/* remove this login btn */}
        {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button> */}
          <div className="hidden md:flex items-center gap-x-4">
        <Link
          href={"tel:+34673685542"}
          className="py-3 px-6 text-md hover:bg-[#abcbff] flex rounded-[6px] border-2 border-black text-white bg-[#121212] transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
        >
        📞 Llamar
        </Link>
    </div>
    <button
      type="button"
      onClick={() => setMobileOpen((prev) => !prev)}
      aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
      className="inline-flex items-center justify-center rounded-lg border border-black/10 p-2 text-slate-800 transition hover:border-blue-200 hover:text-blue-600 md:hidden"
    >
      {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </button>
      </motion.div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-[60] rounded-3xl border border-black/10 bg-white/95 p-6 shadow-[0_30px_70px_-40px_rgba(15,23,42,0.45)] backdrop-blur md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl border border-slate-200/60 px-4 py-3 text-base font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-600"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/meeting"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-xl border border-black bg-black px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-600"
              >
                Reservar diagnóstico
              </Link>
              <Link
                href="tel:+34673685542"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600"
              >
                📞 Llamar
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    
    </AnimatePresence>
  );
};
