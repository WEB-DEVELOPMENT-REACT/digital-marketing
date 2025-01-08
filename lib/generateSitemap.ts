import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // Generar el contenido del sitemap directamente en la respuesta
  const generateSitemap = () => {
    const urls = [
      { loc: 'https://birdmarketing.es/', priority: 1.0, changefreq: 'weekly' },
      { loc: 'https://birdmarketing.es/servicios', priority: 0.8, changefreq: 'monthly' },
      // Agrega más URLs relevantes
    ];

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          ({ loc, priority, changefreq }) => `
        <url>
          <loc>${loc}</loc>
          <priority>${priority}</priority>
          <changefreq>${changefreq}</changefreq>
        </url>`
        )
        .join('')}
    </urlset>`;

    return sitemapContent;
  };

  const sitemap = generateSitemap(); // Aquí se genera el sitemap

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(sitemap); // Enviar el sitemap como respuesta XML
};

export default handler;
