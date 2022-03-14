import analyzer from '@next/bundle-analyzer';
import withNx, { WithNxOptions } from '@nrwl/next/plugins/with-nx';
import withPreact from 'next-plugin-preact';
import withPWA from 'next-pwa';
import transpiler from 'next-transpile-modules';

export const withBundleAnalyzer = analyzer({
  enabled: process.env['ANALYZE'] === 'true'
});

export const withTM = transpiler([
  '@adobe/react-spectrum',
  '@react-spectrum/actiongroup',
  '@react-spectrum/breadcrumbs',
  '@react-spectrum/button',
  '@react-spectrum/buttongroup',
  '@react-spectrum/checkbox',
  '@react-spectrum/combobox',
  '@react-spectrum/contextualhelp',
  '@react-spectrum/dialog',
  '@react-spectrum/divider',
  '@react-spectrum/form',
  '@react-spectrum/icon',
  '@react-spectrum/illustratedmessage',
  '@react-spectrum/image',
  '@react-spectrum/label',
  '@react-spectrum/layout',
  '@react-spectrum/link',
  '@react-spectrum/listbox',
  '@react-spectrum/menu',
  '@react-spectrum/meter',
  '@react-spectrum/numberfield',
  '@react-spectrum/overlays',
  '@react-spectrum/picker',
  '@react-spectrum/progress',
  '@react-spectrum/provider',
  '@react-spectrum/radio',
  '@react-spectrum/searchfield',
  '@react-spectrum/slider',
  '@react-spectrum/statuslight',
  '@react-spectrum/switch',
  '@react-spectrum/table',
  '@react-spectrum/tabs',
  '@react-spectrum/text',
  '@react-spectrum/textfield',
  '@react-spectrum/theme-dark',
  '@react-spectrum/theme-default',
  '@react-spectrum/theme-light',
  '@react-spectrum/tooltip',
  '@react-spectrum/view',
  '@react-spectrum/well',
  '@spectrum-icons/ui',
  '@spectrum-icons/workflow'
]);

export const WA_HOME_URL = process.env['WA_HOME_URL'] ?? 'http://localhost:4200';
export const WA_EXPO_URL = process.env['WA_EXPO_URL'] ?? 'http://localhost:4210/expo';
export const WA_CONTACT_URL = process.env['WA_CONTACT_URL'] ?? 'http://localhost:4220/contact';

const pwaConfig = {};

/**
 * @type {WithNxOptions}
 **/
export const defaultConfig: WithNxOptions = {
  // Prefer loading of ES Modules over CommonJS
  experimental: {
    // concurrentFeatures: true,
    esmExternals: true
  },
  // minify output
  swcMinify: true,
  // webpack,
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false
  },
  env: { WA_HOME_URL, WA_EXPO_URL, WA_CONTACT_URL },
  images: {
    domains: [
      'www.datocms-assets.com',
      'localhost' // For Strapi
    ],
    imageSizes: [24, 64, 300]
  }
};

export function withConfig(config: WithNxOptions): WithNxOptions {
  const mergedConfig = {
    ...defaultConfig,
    ...config
  };

  return withTM(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    withPWA(withBundleAnalyzer(withPreact(withNx(mergedConfig))), pwaConfig)
  );
}
