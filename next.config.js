/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.gifthub.kr',
      },
    ],
  },
};

module.exports = nextConfig;
