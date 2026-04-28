import type { NextConfig } from "next";
import path from "path";

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

const nextConfig: NextConfig = {
  /* config options here */
  // Silence workspace root warning and ensure correct root detection
  outputFileTracingRoot: path.join(__dirname),
};

export default withPWA(nextConfig);
