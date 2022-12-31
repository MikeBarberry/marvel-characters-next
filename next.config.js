/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd
    ? 'https://fnil3t0g5l.execute-api.us-west-2.amazonaws.com/main/'
    : undefined,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  output: 'standalone',
};

module.exports = nextConfig;
