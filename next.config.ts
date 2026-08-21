import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  basePath:
    process.env.NODE_ENV === "production"
      ? "/tedx-stchristophers"
      : "",

  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "/tedx-stchristophers/"
      : "",
};

export default nextConfig;