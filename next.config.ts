import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  reactStrictMode: false,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "*" }],
  },
  experimental: {
    // @ts-expect-error - outputFileTracingIncludes not in types but works
    outputFileTracingIncludes: {
      '/api/template/[id]': ['./vibecode-starters/**/*'],
    },
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