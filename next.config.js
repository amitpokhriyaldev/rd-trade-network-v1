/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "localhost"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
