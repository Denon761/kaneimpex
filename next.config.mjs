/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The site uses plain <img>, so remote CDN images work with no config.
  // This block only matters if you later switch to next/image — it allows
  // images from any https CDN. Tighten the hostname to your CDN in production.
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default nextConfig;
