module.exports = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
  async headers() { return [{ source: "/(.*)", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }] }]; }
};