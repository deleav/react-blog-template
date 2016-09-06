var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');
var path = require('path');

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true },
  setup: function(app) {
    app.engine('dev.html', require('ejs').renderFile);
    app.set('views', './');
    app.set('view engine', 'dev.html');
    app.get('/', function(req, res) {
      res.render('index');
    });
  },
}).listen(8080, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://localhost:8080/');
});
