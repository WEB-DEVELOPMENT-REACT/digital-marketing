// "use client"
// import Link from "next/link";
// import { Link as ScrollLink, Element } from "react-scroll";
// import Image from "next/image";

// const Navbar = () => {
//     return (
// <Element
// name="top"
// className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 
// xl:w-4/5 2xl:w-[68%] bg-white flex items-center 
// justify-between py-6 px-4 md:px-8 mx-6"
// >
// <Link href={"/"}>
//   <Image
//     src={"/logo/logo.webp"}
//     alt="Logo"
//     width={1000}
//     height={1000}
//     className="w-28"
//   />
// </Link>

// <div className="absolute right-1/2 translate-x-1/2 transform">
//   <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
//     <Link href={"/showcase"} className="hover:text-blue-500">
//       Proyectos
//     </Link>

//     <ScrollLink
//       to="services"
//       smooth={true}
//       className="hover:text-blue-500"
//     >
//       Servicios
//     </ScrollLink>

//     <ScrollLink
//       to="process"
//       smooth={true}
//       className="hover:text-blue-500"
//     >
//       Proceso
//     </ScrollLink>
    
//     <Link
//               href={"pricing"}
//               className="hover:text-blue-500"
//             >
//               Precios
//             </Link>

//     <ScrollLink
//       to="guarentees"
//       smooth={true}
//       className="hover:text-blue-500"
//     >
//       Garantias
//     </ScrollLink>
//   </div>
// </div>

// <div className="flex items-center gap-x-4">
  

//   <Link
//     href={"/meeting"}
//     className="
// py-3 
// px-6
// text-lg 
// hover:bg-[#abcbff]
// rounded-[6px]
// border-2
// border-black
// text-white
// bg-[#121212]
// transition
// duration-200
// hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
//   >
//     Agendar Cita
//   </Link>
// </div>
// </Element>

// );
// };

// export default Navbar;

"use client";

import { useState } from "react";
import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Element
      name="top"
      className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 xl:w-4/5 2xl:w-[68%] bg-white flex items-center justify-between py-6 px-4 md:px-8 mx-6"
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

      <div className="absolute right-1/2 translate-x-1/2 transform">
        <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
          <Link href={"/showcase"} className="hover:text-blue-500">
            Proyectos
          </Link>

          <ScrollLink
            to="services"
            smooth={true}
            className="hover:text-blue-500"
          >
            Servicios
          </ScrollLink>

          <ScrollLink
            to="process"
            smooth={true}
            className="hover:text-blue-500"
          >
            Proceso
          </ScrollLink>

          <Link href={"pricing"} className="hover:text-blue-500">
            Precios
          </Link>

          <ScrollLink
            to="guarentees"
            smooth={true}
            className="hover:text-blue-500"
          >
            Garantias
          </ScrollLink>
        </div>
      </div>

      <div className="md:hidden flex items-center gap-x-4">
        <button
          className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {menuOpen && (
          <div
            className="absolute top-16 right-4 w-48 bg-white shadow-lg rounded-md flex flex-col items-start py-4 z-50"
          >
            <Link
              href="/showcase"
              className="px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100 hover:text-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              Proyectos
            </Link>
            <ScrollLink
              to="services"
              smooth={true}
              className="px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100 hover:text-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              Servicios
            </ScrollLink>
            <ScrollLink
              to="process"
              smooth={true}
              className="px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100 hover:text-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              Proceso
            </ScrollLink>
            <Link
              href="/pricing"
              className="px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100 hover:text-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              Precios
            </Link>
            <ScrollLink
              to="guarentees"
              smooth={true}
              className="px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100 hover:text-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              Garantias
            </ScrollLink>
          </div>
        )}
      </div>

      <div className="hidden md:flex items-center gap-x-4">
        <Link
          href={"/meeting"}
          className="py-3 px-6 text-lg hover:bg-[#abcbff] rounded-[6px] border-2 border-black text-white bg-[#121212] transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
        >
          Agendar Cita
        </Link>
      </div>
    </Element>
  );
};

export default Navbar;
