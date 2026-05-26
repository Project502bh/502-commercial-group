import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',        // Static HTML export for S3/Amplify hosting
  trailingSlash: true,     // Needed for S3/Amplify routing
  images: {
    unoptimized: true,     // Required for static export (no server-side image optimization)
  },
};

export default nextConfig;
