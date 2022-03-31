/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
   exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
   ) {
      return {
         "/": { page: "/" },
         "/about": { page: "/about" },
         "/contact": { page: "/contact" },
         "/gallery": { page: "/gallery" },
         "/portfolio": { page: "/portfolio" },
      };
   },
};
