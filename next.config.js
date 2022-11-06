/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/rss",
        destination: "https://ananas.tistory.com/rss",
      },
    ];
  },
};

module.exports = nextConfig;
