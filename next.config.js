/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
  assetPrefix: "https://cityvibe.vercel.app"
};

module.exports = nextConfig;
