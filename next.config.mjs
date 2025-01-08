/** @type {import('next').NextConfig} */
const nextConfig = {
      // Otras configuraciones de Next.js
  async rewrites() {
    generateSitemap();
    return [];
  },
};

export default nextConfig;
