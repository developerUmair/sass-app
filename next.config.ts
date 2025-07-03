import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {hostname: 'image.clerk.com'}
    ]
  }
};

export default nextConfig;
