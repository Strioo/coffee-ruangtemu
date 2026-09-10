import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  images: {
    imageSizes: [32, 48, 64, 96, 128, 144, 256, 384],
    qualities: [50, 65, 70, 75],
  },
  poweredByHeader: false,
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
