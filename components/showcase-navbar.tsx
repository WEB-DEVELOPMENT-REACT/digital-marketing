// import Image from "next/image";
// import Link from "next/link";

// const ShowcaseNavbar = () => {
//   return (
//     <div
//       className="
//       overflow-hidden
//       p-10
      

//     rounded-[6px]
//     top-5
//     sticky
//     md:mx-auto

//     transform 
//     z-50
// xl:w-4/5 
// 2xl:w-[68%]

   
//     bg-white 
//     flex 
//     items-center
//     justify-between py-6
//     px-4
//     md:px-8
//     mx-6
    
//     "
//     >
//       <Link href="/">
//       <Image
//         src="/logo/logo.webp"
//         alt="Bird Logo"
//         width={1000}
//         height={1000}
//         className="w-28"
//       />
//       </Link>

//       <div className="absolute right-1/2 translate-x-1/2 transform">
//         <div className="hidden md:flex gap-x-10 2xl:gap-x-10 items-center text-gray-700 font-medium text-lg ">
//           <Link
//             href="/showcase"
//             className="
//           hover:text-blue-500
//           "
//           >
//             Proyectos
//           </Link>
          
//              <Link href="/" className="hover:text-blue-500">
//             Servicios
//           </Link>

//           <Link href="/" className="hover:text-blue-500">
//         Proceso
//           </Link>
       
//           <Link
//               href={"pricing"}
//               className="hover:text-blue-500"
//             >
//               Precios
//             </Link>

//           <Link href="/" className="hover:text-blue-500">
//             Garantias
//           </Link>
  
//         </div>
//       </div>


//       <div className="flex items-center gap-x-4">
   


//       <Link
//       href={"/meeting"}
//         className="py-3 px-6
//       text-lg
//       hover:bg-[#abcbff] 
//       rounded-[6px]
//       border-2 
//       border-black 
//       dark:border-white 
//            bg-[#121212] 
//        text-white 
//        transition 
//        duration-200 
//        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
//       >
//         Agendar Cita
//       </Link>
//       </div>
//     </div>
//   );
// };

// export default ShowcaseNavbar;

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ShowcaseNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="
        overflow-hidden
        p-10
        rounded-[6px]
        top-5
        sticky
        md:mx-auto
        transform 
        z-50
        xl:w-4/5 
        2xl:w-[68%]
        bg-white 
        flex 
        items-center
        justify-between py-6
        px-4
        md:px-8
        mx-6
      "
    >
      <Link href="/">
        <Image
          src="/logo/logo.webp"
          alt="Bird Logo"
          width={1000}
          height={1000}
          className="w-28"
        />
      </Link>

      {/* Desktop Links */}
      <div className="absolute right-1/2 translate-x-1/2 transform">
        <div className="hidden md:flex gap-x-10 2xl:gap-x-10 items-center text-gray-700 font-medium text-lg">
          <Link href="/showcase" className="hover:text-blue-500">
            Proyectos
          </Link>
          <Link href="/" className="hover:text-blue-500">
            Servicios
          </Link>
          <Link href="/" className="hover:text-blue-500">
            Proceso
          </Link>
          <Link href="/pricing" className="hover:text-blue-500">
            Precios
          </Link>
          <Link href="/" className="hover:text-blue-500">
            Garantías
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
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
            <Link
              href="/"
              className="px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100 hover:text-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="/"
              className="px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100 hover:text-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              Proceso
            </Link>
            <Link
              href="/pricing"
              className="px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100 hover:text-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              Precios
            </Link>
            <Link
              href="/"
              className="px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100 hover:text-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              Garantías
            </Link>
          </div>
        )}
      </div>

      {/* Agendar Cita Button (Desktop Only) */}
      <div className="hidden md:flex items-center gap-x-4">
        <Link
          href="/meeting"
          className="py-3 px-6 text-lg hover:bg-[#abcbff] rounded-[6px] border-2 border-black dark:border-white bg-[#121212] text-white transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
        >
          Agendar Cita
        </Link>
      </div>
    </div>
  );
};

export default ShowcaseNavbar;
