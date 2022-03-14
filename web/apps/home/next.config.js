const withNx = require('@nrwl/next/plugins/with-nx');
const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const withPreact = require('next-plugin-preact');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const { WA_EXPO_URL } = process.env;

async function rewrites() {
  return [
    {
      source: '/:path*',
      destination: `/:path*`
    },
    {
      source: '/expo',
      destination: `${WA_EXPO_URL}`
    },
    {
      source: '/expo/:path*',
      destination: `${WA_EXPO_URL}/:path*`
    }
  ];
}

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  // Prefer loading of ES Modules over CommonJS
  experimental: {
    // concurrentFeatures: true,
    esmExternals: true
  },
  // Support MDX files as pages:
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  // minify output
  swcMinify: true,
  // webpack,
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true
  },
  env: {
    NEXT_DATOCMS_API_TOKEN: process.env.NEXT_DATOCMS_API_TOKEN
  },
  images: {
    domains: [
      'www.datocms-assets.com',
      'localhost' // For Strapi
    ],
    imageSizes: [24, 64, 300]
  },
  rewrites
};

const pwaConfig = {};

const plugins = [[withBundleAnalyzer], [withPreact], [withNx], [withPWA, pwaConfig]];

module.exports = withPlugins([...plugins], nextConfig);
