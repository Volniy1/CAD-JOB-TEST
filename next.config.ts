import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  env: {
    MONGODB_URL: process.env.MONGODB_URL,
  },
};

export default nextConfig;
