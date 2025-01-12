const { override, addBabelPlugins, addBabelPresets } = require('customize-cra');

module.exports = override(
  addBabelPresets([
    '@babel/preset-react',
    { runtime: 'automatic', importSource: '@emotion/react' },
  ]),
  addBabelPlugins(['@emotion/babel-plugin'])
);
