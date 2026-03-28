'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index',
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'assets/app.js',
    publicPath: '/'
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      actions: path.join(__dirname, 'src/actions/'),
      components: path.join(__dirname, 'src/components/'),
      sources: path.join(__dirname, 'src/sources/'),
      stores: path.join(__dirname, 'src/stores/'),
      styles: path.join(__dirname, 'src/styles/'),
      config: path.join(__dirname, 'src/config/dev'),
      constants: path.join(__dirname, 'src/constants/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'src'),
        use: 'babel-loader'
      },
      {
        test: /\.(ts|tsx)$/,
        include: path.join(__dirname, 'src'),
        use: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|obj|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8192
          }
        }
      },
      {
        test: /\.(mp4|ogg|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.template.html'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    port: 8000,
    hot: true
  }
}
