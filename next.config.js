const isProd = process.env.NODE_ENV === "production";
const base = isProd ? "/cityvibe" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? "https://cityvibe.vercel.app" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: base
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/cityvibe/:slug*",
        destination: "/:slug*",
      },
    ];
  }
};

module.exports = nextConfig;
