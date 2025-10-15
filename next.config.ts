import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kj36h7e7wv1p9gx0.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
