/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["jsonplaceholder.typicode.com", "via.placeholder.com"],
  },
  optimizeFonts: false,
};

module.exports = nextConfig;
