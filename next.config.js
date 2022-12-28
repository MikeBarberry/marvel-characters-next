/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

console.log(isProd);

const nextConfig = {
  assetPrefix: isProd ? 'main/' : undefined,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  output: 'standalone',
};

module.exports = nextConfig;
