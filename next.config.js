const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // added for deployment
  output: 'standalone',

  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      Components: path.resolve(__dirname, 'src/components'),
      Configs: path.resolve(__dirname, 'src/configs'),
      Constants: path.resolve(__dirname, 'src/constants'),
      Contexts: path.resolve(__dirname, 'src/contexts'),
      Elements: path.resolve(__dirname, 'src/components/elements'),
      Hooks: path.resolve(__dirname, 'src/hooks'),
      Layout: path.resolve(__dirname, 'src/modules/Layout'),
      Modules: path.resolve(__dirname, 'src/modules'),
      Services: path.resolve(__dirname, 'src/services'),
      Styles: path.resolve(__dirname, 'src/styles'),
      Utils: path.resolve(__dirname, 'src/utils'),
      Assets: path.resolve(__dirname, 'public/assets'),
    };

    return config;
  },
  env: {
    SITE_URL: process.env.SITE_URL,
    URL_PT_joshweb_APP: process.env.URL_PT_joshweb_APP,
  },
};

module.exports = nextConfig;
