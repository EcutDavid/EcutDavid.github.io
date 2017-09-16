'use strict'
const path = require('path')
const srcPath = path.join(__dirname, '/../src')
const dfltPort = process.env.PORT || 8000
function getDefaultModules() {
  return {
    preLoaders: [{
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'eslint-loader'
      }],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }, {
        test: /\.scss/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded'
      }, {
        test: /\.(png|jpg|gif|woff|woff2|obj|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=8192'
      }, {
        test: /\.(mp4|ogg|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      }, {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        include: path.join(__dirname, '/../src')
      }
    ]
  }
}
module.exports = {
  srcPath: srcPath,
  publicPath: '/assets/',
  port: dfltPort,
  getDefaultModules: getDefaultModules
}
