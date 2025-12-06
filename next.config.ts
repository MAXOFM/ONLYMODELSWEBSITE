import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Explicitly set the workspace root to silence the warning
  // Using process.cwd() which is more reliable across different environments
  outputFileTracingRoot: path.resolve(process.cwd()),
  async headers() {
    return [
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
