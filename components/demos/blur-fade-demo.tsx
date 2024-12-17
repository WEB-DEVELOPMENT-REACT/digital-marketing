import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-200",
    imageUrl: "/images/b1.png",
    title: "App Developer",
    link: "https://www.duverxmobiledev.es/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/car.png",
    title: "Renta un Coche",
    link: "https://rentacar-lake.vercel.app/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/iphone.png",
    title: "Iphone design 3D Model",
    link: "https://iphone-psi-two.vercel.app/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/business.webp",
    title: "Rubish Brother Junk Removal",
    link: "https://www.rubbishbrothers.com/",
  },


];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, link }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
            <Link href={link} target="_blank" rel="noreferrer">
              <Image
                height={10000}
                width={10000}
                className="
                h-5/6 w-full object-cover rounded-lg"
        
              
       
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
              <h3 className="text-lg font-semibold p-4">{title}</h3>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
