'use strict';

// const fs = require('fs');
// const path = require('path');
// const withCss = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
// const withSass = require('@zeit/next-sass');
// const withTypescript = require('@zeit/next-typescript');
// const alias = require('./webpack/alias');

// const outputFolder = path.join(__dirname, 'webpa');
// const folderStat = fs.existsSync(outputFolder);
// if (!folderStat) {
//   fs.mkdirSync(outputFolder);
// }

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {};
}

module.exports = withLess({
  cssMoudles: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  webpack: (config) => {
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();

      if (entries['main.js'] && !entries['main.js'].includes('./lib/polyfills.js')) {
        entries['main.js'].unshift('./lib/polyfills.js');
      }

      return entries;
    };

    // alias //! 这种方法不好使
    // config.resolve.alias = Object.assign({}, config.resolve.alias, alias);

    return config;
  },
  webpackDevMiddleware: (config) => {
    return config;
  },
});
// module.exports = {
//   webpack: (config) => {
//     const data = JSON.stringify(config);
//     console.log('>>> writing:', 'webpa.json');
//     fs.writeFileSync(path.join(outputFolder, 'webpa.json'), data);
//     console.log('>>> writed over:', "webpa.json. Let's use it");
//     // console.log(config);
//     return config;
//   },
// };
