import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/projects/ai-agents-healthcare", destination: "/work/clinic-agents", permanent: true },
      { source: "/projects/rabbithole", destination: "/work/rabbithole", permanent: true },
      { source: "/projects/:slug*", destination: "/work", permanent: true },
      { source: "/projects", destination: "/work", permanent: true },
    ];
  },
};

export default nextConfig;
