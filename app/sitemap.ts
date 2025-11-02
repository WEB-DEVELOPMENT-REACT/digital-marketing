import type { MetadataRoute } from "next";

import { servicesList } from "@/data/services";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://birdmarketing.es";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/showcase",
    "/pricing",
    "/meeting",
    "/services",
    "/videos",
    "/hero",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = servicesList.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
