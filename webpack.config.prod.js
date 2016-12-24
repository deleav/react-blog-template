var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    // 'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/dev-server', // "only-dev-server" 可以避免在語法錯誤時重新載入
    './src/index.jsx',
    './src/assets/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss']
  },
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [
    // bundle出實體CSS檔案
    new ExtractTextPlugin("[name].css"),

    new webpack.HotModuleReplacementPlugin()
  ]
}
