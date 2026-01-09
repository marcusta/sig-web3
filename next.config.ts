import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '', // Default to empty string if not set
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
