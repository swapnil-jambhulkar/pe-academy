/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [
      {
        source: "/cohort",
        destination: "/programme",
        permanent: true,
      },
      {
        source: "/cohort/:path*",
        destination: "/programme",
        permanent: true,
      },
      {
        source: "/pgp",
        destination: "/programme",
        permanent: true,
      },
      {
        source: "/pgp/:path*",
        destination: "/programme",
        permanent: true,
      },
      {
        source: "/starter-kit",
        destination: "/programme",
        permanent: true,
      },
      {
        source: "/starter-kit/:path*",
        destination: "/programme",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;
