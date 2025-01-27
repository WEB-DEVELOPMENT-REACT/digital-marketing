"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { navItems } from "@/data";
import { FaBitcoin, FaAddressCard } from "react-icons/fa";

type PricingSwitchProps = {
  onSwitch: (value: string) => void;
};

type PricingCardProps = {
  useisYearly?: boolean;
  title: string;
  monthlyPrice?: number;
  yearlyPrice?: number;
  description: string;
  features: string[];
  actionLabel: string;
  image?: string;
  popular?: boolean;
  exclusive?: boolean;
  link: string;
};

const PricingHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div
    className="
      overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa]
      bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
      bg-[size:14px_24px]"
  >
    <section className="text-center">
      <div className="py-4">
        <FloatingNav navItems={navItems} />
      </div>
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-xl pt-1">{subtitle}</p>
      <br />
    </section>
  </div>
);

const PricingSwitch = ({ onSwitch }: PricingSwitchProps) => (
  <Tabs defaultValue="0" className="w-40 mx-auto " onValueChange={onSwitch}>
    <TabsList className="py-6 flex justify-center gap-4 ">
      <TabsTrigger value="0" className="text-base">
        Basic
      </TabsTrigger>
      <TabsTrigger value="1" className="text-base">
        Pro
      </TabsTrigger>
 
    </TabsList>
  </Tabs>
);

const PricingCard = ({
  useisYearly,
  title,
  monthlyPrice,
  yearlyPrice,
  description,
  features,
  actionLabel,
  popular,
  exclusive,
  image,
  link,
}: PricingCardProps) => {
  const getIcon = () => {
    switch (title) {
      case "Film and Go":
        return <FaBitcoin className="ml-2" />;
      case "Crea una Web":
        return <FaBitcoin className="ml-2" />;
      case "Empresa":
        return <FaAddressCard className="ml-2" />;
      default:
        return null;
    }
  };

  return (
    <Card
      className={cn(
        `w-72 flex flex-col justify-between py-1 ${
          popular ? "border-rose-400" : "border-zinc-700"
        } mx-auto sm:mx-0`,
        {
          "animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors":
            exclusive,
        }
      )}
    >
      <div>
        <CardHeader className="pb-8 pt-4">
          {useisYearly && yearlyPrice && monthlyPrice ? (
            <div className="flex justify-between">
              <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">
                {title}
              </CardTitle>
              <div
                className={cn(
                  "px-2.5 rounded-xl h-fit text-sm py-1 bg-zinc-200 text-black dark:bg-zinc-800 dark:text-white",
                  {
                    "bg-gradient-to-r from-orange-400 to-rose-400 dark:text-black ": popular,
                  }
                )}
              >
                Ahorra €{monthlyPrice * 12 - yearlyPrice}
              </div>
            </div>
          ) : (
            <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">
              {title}
            </CardTitle>
          )}
          <div className="flex gap-0.5">
            <h3 className="text-3xl font-bold">
              {yearlyPrice && useisYearly
                ? "€" + yearlyPrice
                : monthlyPrice
                ? "€" + monthlyPrice
                : "Custom"}
            </h3>
          </div>
          <CardDescription className="pt-1.5 h-12">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {features.map((feature: string) => (
            <CheckItem key={feature} text={feature} />
          ))}
        </CardContent>
      </div>
      <CardFooter className="mt-2">
        <Button
          className="
      
py-3 
px-10
md:px-16
md:text-xl
border-4
border-black
rounded-[6px]
hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
          onClick={() => window.open(link, "_blank")}
        >
        
          <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
          {actionLabel} 
          {getIcon()}
        </Button>
      </CardFooter>
    </Card>
  );
};

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex gap-2">
    <CheckCircle2 size={18} className="my-auto text-green-400" />
    <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">{text}</p>
  </div>
);

export default function Page() {
  const [useisYearly, setIsYearly] = useState(false);

  const togglePricingPeriod = (value: string) => setIsYearly(parseInt(value) === 1);

  const plans = [
    {
      title: "Film and Go",
      monthlyPrice: 150,
      yearlyPrice: 1500,
      description: "Lo esencial para empezar",
      features: ["8 Videos", "Gestión de Redes", "3-5 horas de grabación"],
      actionLabel: "Pagar", 
      image: "/favicon.ico",
      link: "https://s.binance.com/y5LrFs0z",
    },
    {
      title: "Crea una Web",
      monthlyPrice: 300,
      yearlyPrice: 2500,
      description: "Perfecto para pequeños y medianos negocios",
      features: [
        "Web Incluida",
        "SEO Posicionamiento",
        "Manejo de Redes Sociales",
        "Bot de Interacción con Clientes",
        "Marketing por Email",
        "IA Integrada",
      ],
      actionLabel: "Pagar ",
      image: "/favicon.ico",
      popular: true,
      link: "https://s.binance.com/5Tr0W1m8",
    },
    {
      title: "Empresa",
      description: "Dedicado a necesidades empresariales personalizadas.",
      features: [
        "Custom Videos",
        "Web Incluida",
        "SEO Posicionamiento",
        "App para Móviles",
        "Despliegue AppStore/PlayStore",
        "Manejo de Redes Sociales",
        "Bot de Interacción con Clientes",
        "Marketing por Email",
        "IA Integrada",
      ],
      actionLabel: "Contacto",
      exclusive: true,
      image: "/favicon.ico",
      link: "https://wa.me/673685542",
    },
  ];

  return (
    <div
      className="
        overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa]
        bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
        bg-[size:14px_24px] py-8"
    >
      <PricingHeader title="Precio de los Planes" subtitle="Escoge el mejor plan para ti" />
      <PricingSwitch onSwitch={togglePricingPeriod} />
      <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
        {plans.map((plan) => {
          return <PricingCard key={plan.title} {...plan} useisYearly={useisYearly}  />;
         })}
      </section>
    </div>
  );
}
