'use client'
import { cn } from "@/lib/utils";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import { FcGoogle } from "react-icons/fc";

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
          <div className="
          md:flex
          flex-col-reverse
          md:flex-row
          justify-between
          gap-x-6">
          ⭐{" "}   ⭐{" "}   ⭐{" "}   ⭐{" "}   ⭐
          <div className=" lg:flex  items-center space-x-2 py-2 md:py-0">
            <a href="https://www.google.com/search?q=bird+marketing&rlz=1C5CHFA_enES1101ES1101&oq=bird&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTISCAEQLhhDGK8BGMcBGIAEGIoFMg4IAhBFGCcYOxiABBiKBTIGCAMQRRg7MgoIBBAuGLEDGIAEMgYIBRBFGD0yBggGEEUYPTIGCAcQRRg90gEINDE4MGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8" className="lg:flex">
          <FcGoogle className="h-6 w-6  md:py-0 items-center lg:flex " />
            <span className="text-gray-600 hover:underline cursor-pointer ">
            <button className="hidden px-4 py-2 rounded-md lg:flex items-center gap-x-3">
          
              4.9 stars 200+ google reviews
            </button>
            </span>
          </a>
          </div>
          </div>
        </AnimatedShinyText>
      </div>
    </div>
  );
}
