export const collaboratorLogoFiles = [
  "2024-07-10.webp",
  "230215 - Logo NK CONNECTED - high.png",
  "Dipart Logotipo 2025.png",
  "DriveAlert_logo carretera_blanco.png",
  "STRONG GEO 1.png",
  "altaudia-imagotipo-004-uni.jpg",
  "download (1).jpg",
  "download (1).png",
  "download (10).png",
  "download (11).png",
  "download (12).png",
  "download (13).png",
  "download (14).png",
  "download (15).png",
  "download (16).png",
  "download (17).png",
  "download (18).png",
  "download (19).png",
  "download (2).jpg",
  "download (2).png",
  "download (20).png",
  "download (21).png",
  "download (22).png",
  "download (23).png",
  "download (24).png",
  "download (25).png",
  "download (26).png",
  "download (27).png",
  "download (28).png",
  "download (29).png",
  "download (3).jpg",
  "download (3).png",
  "download (30).png",
  "download (31).png",
  "download (32).png",
  "download (4).jpg",
  "download (4).png",
  "download (5).jpg",
  "download (5).png",
  "download (6).jpg",
  "download (6).png",
  "download (7).jpg",
  "download (7).png",
  "download (8).jpg",
  "download (8).png",
  "download (9).png",
  "download.jpg",
  "download.png",
  "images.png",
  "logo BLAM_Blanco.png",
] as const;

export type CollaboratorLogoFile = (typeof collaboratorLogoFiles)[number];

export type CollaboratorVideoStory = {
  brand: string;
  title: string;
  description: string;
  metric: string;
  channel: string;
  duration: string;
  logoFile: CollaboratorLogoFile;
  theme: {
    gradient: string;
    accent: string;
  };
};

export const collaboratorVideoStories: CollaboratorVideoStory[] = [
  {
    brand: "DriveAlert",
    title: "Serie \"Kilómetros Sin Miedo\"",
    description:
      "Grabamos roadtrips en Valencia y Lisboa para humanizar la seguridad vial y activar retos orgánicos en TikTok.",
    metric: "+128% alcance orgánico en 45 días",
    channel: "TikTok · Shorts · Reels",
    duration: "3 jornadas de rodaje",
    logoFile: "DriveAlert_logo carretera_blanco.png",
    theme: {
      gradient: "from-slate-900 via-blue-900 to-slate-900",
      accent: "bg-blue-400",
    },
  },
  {
    brand: "Dipart",
    title: "Documental \"Artesanos Digitales\"",
    description:
      "Mini docuseries con steadycam y dron mostrando cómo escalan su producción sostenible para retail europeo.",
    metric: "x3 watch time medio",
    channel: "YouTube + LinkedIn",
    duration: "4 semanas de post",
    logoFile: "Dipart Logotipo 2025.png",
    theme: {
      gradient: "from-purple-900 via-fuchsia-700 to-slate-900",
      accent: "bg-fuchsia-400",
    },
  },
  {
    brand: "NK Connected",
    title: "UGC Premium \"Connected Stories\"",
    description:
      "Creamos guiones basados en insights SEO y grabamos en set modular para nutrir campañas orgánicas always-on.",
    metric: "+76% leads orgánicos",
    channel: "TikTok + Meta",
    duration: "2 semanas",
    logoFile: "230215 - Logo NK CONNECTED - high.png",
    theme: {
      gradient: "from-indigo-900 via-sky-800 to-slate-900",
      accent: "bg-sky-400",
    },
  },
  {
    brand: "Strong Geo",
    title: "Capsulas \"GeoLab\"",
    description:
      "Sesiones in situ con motion graphics para explicar soluciones de geolocalización sin lenguaje técnico.",
    metric: "+210% retención en Reels",
    channel: "Reels · Shorts",
    duration: "5 días",
    logoFile: "STRONG GEO 1.png",
    theme: {
      gradient: "from-emerald-900 via-green-700 to-slate-900",
      accent: "bg-emerald-400",
    },
  },
  {
    brand: "Altaudia",
    title: "Testimoniales \"Historias que suenan\"",
    description:
      "Backstage y entrevistas con clientes reales + subtítulos dinámicos para disparar la distribución orgánica.",
    metric: "62% más clics al perfil",
    channel: "Instagram + YouTube",
    duration: "1 sprint",
    logoFile: "altaudia-imagotipo-004-uni.jpg",
    theme: {
      gradient: "from-rose-900 via-orange-800 to-slate-900",
      accent: "bg-orange-400",
    },
  },
  {
    brand: "BLAM",
    title: "Live shopping \"Night Drops\"",
    description:
      "Producción multicámara y overlays interactivos para lanzar colecciones semanales con drops orgánicos.",
    metric: "+95% tiempo medio en directo",
    channel: "TikTok Live + Twitch",
    duration: "6 sesiones",
    logoFile: "logo BLAM_Blanco.png",
    theme: {
      gradient: "from-amber-900 via-yellow-700 to-slate-900",
      accent: "bg-amber-400",
    },
  },
] as const;
