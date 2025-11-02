"use client";
import Image from "next/image";
import Link from "next/link";
import SecurityTooltip from "./demos/box-privact";

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
      <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
        <h1 className="text-3xl md:text-5xl font-medium ">
          <Image
            src={"/logo/logo.webp"}
            width={10000}
            height={10000}
            className="w-40"
            alt="image"
          />{" "}
        </h1>
        <p className="text-left  text-xl  text-gray-500">+34 673685542</p>
        <p className="text-left  text-xl  text-gray-500">
        desarrollador@duverxmobiledev.es
        </p>
        <p className="text-left text-lg text-gray-500">
          Ruzafa, Valencia · Clientes en España y Europa
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href="/meeting"
            className="rounded-lg border border-black bg-black px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-600"
          >
            Reservar auditoría IA
          </Link>
          <Link
            href="https://wa.me/673685542"
            target="_blank"
            className="rounded-lg border border-black px-5 py-2 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600"
          >
            WhatsApp inmediato
          </Link>
        </div>
      </div>

      <div className="flex md:justify-center gap-x-4 mt-10">
        © 2024 Bird. All Rights Reserved.
        <SecurityTooltip/>
       
     
      </div>
    </footer>
  );
};

export default Footer;
