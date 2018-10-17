

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1539670207827_696';

  // add your config here
  config.middleware = [];

  config.nextView = {};

  return config;
};
