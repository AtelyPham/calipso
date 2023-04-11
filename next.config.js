/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['randomuser.me'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
