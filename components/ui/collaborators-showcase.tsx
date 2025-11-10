"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  collaboratorLogoFiles,
  collaboratorVideoStories,
  type CollaboratorVideoStory,
} from "@/data/collaborators";

type VideoSlide = CollaboratorVideoStory & { logo: string };

const collaborators = collaboratorLogoFiles.map((fileName, index) => ({
  name: formatName(fileName, index),
  logo: encodeURI(`/colab/${fileName}`),
}));

const videoSlides: VideoSlide[] = collaboratorVideoStories.map((story) => ({
  ...story,
  logo: encodeURI(`/colab/${story.logoFile}`),
}));

const stats = [
  {
    value: "34 equipos",
    label: "En proyectos activos",
    description: "Retail, turismo, movilidad, salud, educación y administraciones públicas.",
  },
  {
    value: "4,9 ★",
    label: "Índice de satisfacción NPS +68",
    description: "Sprints compartidos, reporting en vivo y cultura de co-creación.",
  },
];

const floatingCard = {
  title: "Mix B2B + B2C",
  description: "Activamos campañas multinacionales, automatizamos funnels y entrenamos asistentes conversacionales para marketing y ventas.",
  metric: "+62% leads cualificados",
};

const videoAngles = [
  "UGC premium y sesiones on-site para captar historias reales.",
  "Scripts basados en insights SEO + social listening.",
  "Optimización en TikTok, Shorts y Reels para crecimiento orgánico.",
];

export default function CollaboratorsShowcase() {
  const [activeStory, setActiveStory] = useState<VideoSlide | null>(null);

  return (
    <section className="mx-6 my-20 md:mx-auto md:w-4/5">
      <div className="relative overflow-hidden rounded-[40px] border border-slate-200/60 bg-gradient-to-br from-white via-blue-50/60 to-white p-6 shadow-[0_35px_60px_-40px_rgba(15,23,42,0.6)] md:p-12">
        <AccentBlur className="right-12 top-4 h-40 w-40 bg-blue-200/50" />
        <AccentBlur className="-left-8 bottom-4 h-48 w-48 bg-indigo-200/60" />

        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1.4fr]">
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-blue-200/70 bg-white/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-500"
            >
              Colaboraciones
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl font-semibold text-slate-900 md:text-4xl"
            >
              Empresas que confían en nuestro equipo híbrido de marketing, data y producto.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-base text-slate-600 md:text-lg"
            >
              Coordinamos squads con tus equipos internos, compartimos playbooks y activamos growth loops con IA para escalar resultados sin perder identidad de marca. Además, producimos videos profesionales de crecimiento orgánico para cada marca con la que colaboramos.
            </motion.p>

            <div className="grid gap-4 md:grid-cols-2">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="rounded-3xl border border-white/80 bg-white/80 p-5 shadow-sm backdrop-blur"
                >
                  <p className="text-2xl font-semibold text-blue-600">{stat.value}</p>
                  <p className="text-sm font-medium text-slate-900">{stat.label}</p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{stat.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
                  className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-500 p-6 text-white shadow-lg"
                >
                  <p className="text-sm uppercase tracking-[0.3em] text-white/80">{floatingCard.title}</p>
                  <p className="mt-3 text-xl font-semibold">{floatingCard.metric}</p>
                  <p className="mt-2 text-sm text-white/90">{floatingCard.description}</p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Videos orgánicos</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">
                  Grabamos y editamos contenido profesional para potenciar el crecimiento orgánico de estas marcas.
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {videoAngles.map((angle) => (
                    <li key={angle} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {angle}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-[32px] border border-white/60 bg-white/80 p-4 shadow-inner shadow-white/40 backdrop-blur-lg"
          >
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
              {collaborators.map((collaborator, index) => (
                <motion.div
                  key={collaborator.name + index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: (index % 10) * 0.03 }}
                  whileHover={{ scale: 1.04, rotate: index % 2 === 0 ? 0.4 : -0.4 }}
                  className="flex h-24 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50/60 p-3 shadow-sm"
                >
                  <Image
                    src={collaborator.logo}
                    alt={`Logo ${collaborator.name}`}
                    width={160}
                    height={80}
                    className="h-14 w-auto object-contain opacity-80 mix-blend-multiply"
                    sizes="(max-width: 768px) 90px, 160px"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-12">
          <VideoStoriesSlider slides={videoSlides} onSelect={setActiveStory} />
        </div>
      </div>

      <VideoLightbox story={activeStory} onClose={() => setActiveStory(null)} />
    </section>
  );
}

function VideoStoriesSlider({
  slides,
  onSelect,
}: {
  slides: VideoSlide[];
  onSelect: (slide: VideoSlide) => void;
}) {
  return (
    <div className="rounded-[36px] border border-slate-200/60 bg-white/90 p-6 shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-500">Video Studio</p>
          <h3 className="text-xl font-semibold text-slate-900">Piezas orgánicas producidas in-house</h3>
          <p className="text-sm text-slate-500">Swipe para descubrir formatos, métricas y canales.</p>
        </div>
        <span className="text-xs uppercase tracking-[0.35em] text-slate-400">Desliza →</span>
      </div>

      <div className="mt-6 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {slides.map((slide, index) => (
          <motion.article
            key={`${slide.brand}-${index}`}
            className="min-w-[280px] snap-center cursor-pointer"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={() => onSelect(slide)}
          >
            <div
              className={`relative flex h-full flex-col justify-between rounded-3xl border border-white/30 bg-gradient-to-br ${slide.theme.gradient} p-6 text-white shadow-[0_15px_40px_rgba(15,23,42,0.4)]`}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-white/40 bg-white/10 p-3">
                  <Image
                    src={slide.logo}
                    alt={slide.brand}
                    width={72}
                    height={72}
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-white/70">{slide.channel}</p>
                  <p className="text-lg font-semibold">{slide.brand}</p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <p className="text-base font-semibold">{slide.title}</p>
                <p className="text-sm text-white/80">{slide.description}</p>
              </div>

              <div className="mt-4 flex items-center justify-between text-sm font-medium">
                <span className="text-white/80">{slide.metric}</span>
                <span className="text-white/70">{slide.duration}</span>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-white/70">
                  <span className={`h-2 w-2 rounded-full ${slide.theme.accent}`} />
                  Ver video
                </div>
                <button className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                  Play →
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

function VideoLightbox({
  story,
  onClose,
}: {
  story: VideoSlide | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {story && (
        <motion.div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
            className="mx-auto mt-24 w-[95%] max-w-3xl rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 text-white shadow-2xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
                  <Image
                    src={story.logo}
                    alt={story.brand}
                    width={90}
                    height={90}
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/70">{story.channel}</p>
                  <h3 className="text-2xl font-semibold">{story.brand}</h3>
                  <p className="text-sm text-white/70">{story.duration}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/90"
              >
                Cerrar
              </button>
            </div>

            <div className="mt-6 space-y-3">
              <p className="text-lg font-semibold">{story.title}</p>
              <p className="text-sm text-white/80">{story.description}</p>
            </div>

            <div className="mt-6 grid gap-3 text-sm text-white/80 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">Impacto</p>
                <p className="mt-1 text-base font-semibold text-white">{story.metric}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">Canales</p>
                <p className="mt-1 text-base font-semibold text-white">{story.channel}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">Duración</p>
                <p className="mt-1 text-base font-semibold text-white">{story.duration}</p>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 text-center">
              <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.4em] text-white/70">
                <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-lime-400" />
                Preview orgánico
              </div>
              <p className="mt-4 text-base text-white/90">
                Capturamos entrevistas, b-roll y motion graphics para entregar masters verticales y horizontales listos
                para redes orgánicas.
              </p>
              <button className="mt-6 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white">
                ▶ Reproducir fragmento
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function formatName(fileName: string, index: number) {
  const base = fileName
    .replace(/\.[^/.]+$/, "")
    .replace(/download/gi, "")
    .replace(/\([^)]*\)/g, "")
    .replace(/[_-]+/g, " ")
    .replace(/\d+/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();

  if (!base) {
    return `Colab ${index + 1}`;
  }

  return base.replace(/\b\w/g, (char) => char.toUpperCase());
}

function AccentBlur({ className }: { className: string }) {
  return <div className={`pointer-events-none absolute blur-3xl ${className}`} aria-hidden />;
}
