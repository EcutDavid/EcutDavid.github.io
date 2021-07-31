'use strict'
const path = require('path')
const srcPath = path.join(__dirname, '/../src')
let HtmlWebpackPlugin = require('html-webpack-plugin')
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
  publicPath: "/assets/",
  port: process.env.PORT || 8000,
  getDefaultModules: getDefaultModules,
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: "../index.html",
      template: "src/index.template.html"
    })
  ]
};
