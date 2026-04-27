import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/platform", destination: "/product", permanent: true },
      { source: "/fleet-gps", destination: "/gps-tracking", permanent: true },
      { source: "/ai-communications", destination: "/ai-employee", permanent: true },
      { source: "/ai-voice", destination: "/phones", permanent: true },
    ];
  },
};

export default nextConfig;
