/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd ? 'https://marvel-characters.link/main' : undefined,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  output: 'standalone',
};

module.exports = nextConfig;
