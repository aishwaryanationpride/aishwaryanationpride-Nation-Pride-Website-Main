/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
