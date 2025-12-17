import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kj36h7e7wv1p9gx0.public.blob.vercel-storage.com",
        pathname: "/images/**",
      },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    qualities: [100, 75],
    formats: ["image/webp"],
  },
};

export default nextConfig;
