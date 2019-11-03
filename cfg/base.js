'use strict'
let path = require('path')
let defaultSettings = require('./defaults')

module.exports = {
  port: defaultSettings.port,
  debug: true,
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: process.env.REACT_WEBPACK_ENV === 'dist' ? 'app[hash].js' : 'app.js',
    publicPath: `.${defaultSettings.publicPath}`
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: defaultSettings.port,
    publicPath: defaultSettings.publicPath,
    noInfo: false
  },
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.js', '.jsx'],
    alias: {
      actions: `${defaultSettings.srcPath}/actions/`,
      components: `${defaultSettings.srcPath}/components/`,
      sources: `${defaultSettings.srcPath}/sources/`,
      stores: `${defaultSettings.srcPath}/stores/`,
      styles: `${defaultSettings.srcPath}/styles/`,
      config: `${defaultSettings.srcPath}/config/` + process.env.REACT_WEBPACK_ENV
    }
  },
  module: {},
  postcss: function () {
    return [
      require('precss'),
      require('autoprefixer')
    ]
  }
}
