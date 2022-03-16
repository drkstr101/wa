const { withConfig, WA_EXPO_URL } = require('@watheia/next.utils');

// async function rewrites() {
//   return [
//     {
//       source: '/:path*',
//       destination: `/:path*`
//     },
//     {
//       source: '/expo',
//       destination: `${WA_EXPO_URL}`
//     },
//     {
//       source: '/expo/:path*',
//       destination: `${WA_EXPO_URL}/:path*`
//     }
//   ];
// }

const nextConfig = {};
module.exports = withConfig(nextConfig);
