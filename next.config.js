/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.larvalabs.com',
        port: '',
        pathname: '/cryptopunks/*',
      },
    ],
  },
};

module.exports = nextConfig;
