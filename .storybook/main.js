
const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx'],
  addons: [
    '@storybook/addon-actions', 
    '@storybook/addon-links', 
    '@storybook/addon-docs',
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, '../tsconfig.json'),
        },
        tsDocgenLoaderOptions: {
          tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
        },
        forkTsCheckerWebpackPluginOptions: {
          colors: false, // disables built-in colors in logger messages
        },
        include: [path.resolve(__dirname, '../src')],
      },
    },
  ],
};
