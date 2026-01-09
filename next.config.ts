import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Disable static export to allow running as a Node server
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '', // Default to empty string if not set
  images: {
    unoptimized: true, // Keep unoptimized for easier deployment without sharp dependency
  },
};

export default nextConfig;
