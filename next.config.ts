import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  reactStrictMode: false,
  outputFileTracingIncludes: {
    '/api/template/[id]': ['./vibecode-starters/**/*'],
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "*" }],
  },
  async headers() {
    return [
      {
        source: "/playground/:path*",
        headers: [
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
        ],
      },
    ];
  },
};

export default nextConfig;