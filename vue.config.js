const path = require('path');
let publicPath = process.env.NODE_ENV !== 'production' ? '/' :
  process.env.VUE_APP_THEME === 'light' ? 'light-blue-vue/white/' : 'light-blue-vue/dark/';

module.exports = {
  publicPath,
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      const terserWebpackPlugin = config.optimization.minimizer[0];
      const terserOptions = terserWebpackPlugin.options.terserOptions;
      terserOptions.mangle = {
        reserved: ['$super']
      };
    }
    config.resolve.alias["jquery"] = path.join(__dirname, "./jqueryStub.js");
  },
  css: {
    loaderOptions: {
      sass: {
        data: `$app-theme: ${process.env.VUE_APP_THEME};`
      }
    }
  }
};