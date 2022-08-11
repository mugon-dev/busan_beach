/** @type {import('next').NextConfig} */
const { NEXT_PUBLIC_ENV } = process.env;
const isLocal = NEXT_PUBLIC_ENV === 'local';
const CONFIG = require(`./config/${NEXT_PUBLIC_ENV}`);
const LOCAL_ORIGIN = 'http://127.0.0.1:3000';
const publicRuntimeConfig = {
  NEXT_PUBLIC_ENV,
  ...CONFIG,
};
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const nextConfig = {
  reactStrictMode: true,
  env: publicRuntimeConfig,
  publicRuntimeConfig,
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  },
  compiler: {
    emotion: {
      sourceMap: isLocal,
    },
  },
  ...(isLocal && {
    async rewrites() {
      return [
        {
          basePath: false,
          source: '/assets/:path*',
          destination: `${LOCAL_ORIGIN}/:publicfiles`,
        },
      ];
    },
  }),
};

module.exports = nextConfig;
