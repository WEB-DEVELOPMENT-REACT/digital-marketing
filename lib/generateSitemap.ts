const fs = require('fs');
const path = require('path');

function generateSitemap() {
  const urls = [
    { loc: 'https://birdmarketing.es/', priority: 1.0, changefreq: 'weekly' },
    { loc: 'https://birdmarketing.es/servicios', priority: 0.8, changefreq: 'monthly' },
    // Agrega otras URLs de tu app
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

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemapContent);
}

module.exports = generateSitemap;
