import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
    
      },
      {
        protocol: 'https',
        hostname:"www.xuhyqo.in"
      }
    ],
  },
};

export default nextConfig;
