import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos', // Replace with your external domain
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;
