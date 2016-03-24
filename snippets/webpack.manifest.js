const webpackAssets = require('./assets/webpack-assets');
const manifest = process.env.NODE_ENV == 'production' ? webpackAssets.main : {};

module.exports = {
  js: manifest.js ? '/assets/' + manifest.js : '/assets/application.js',
  css: manifest.css ? '/assets/' + manifest.css : '/assets/application.css'
};
