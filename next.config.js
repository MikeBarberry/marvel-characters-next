/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  assetPrefix: isProd
    ? 'https://ekkow2ojlk.execute-api.us-west-2.amazonaws.com/main'
    : undefined,
  output: 'standalone',
};

module.exports = nextConfig;
