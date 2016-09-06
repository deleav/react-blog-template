var path = require('path');
var webpack = require('webpack');

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
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      }, {
        test: /\.css$/,
        loaders: ['style', 'css?sourceMap']
      }, {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'eval',
  watch: true
}
