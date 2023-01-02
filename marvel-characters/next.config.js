/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const basePathFunc = (function () {
  if (isProd) {
    return '/main';
  }
  return undefined;
})();

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  basePath: basePathFunc,
  output: 'standalone',
};

module.exports = nextConfig;
