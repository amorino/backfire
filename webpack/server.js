/*eslint-disable */
var config = require('./webpack.dev.babel');
var express = require('express');
var webpack = require('webpack');
var path = require('path');

var app = express();
var compiler = webpack(config);
var server = 7777;

app.use(require('connect-history-api-fallback')({
  verbose: false
}));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.listen(server, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.warn('Listening at http://localhost:' + server);
});
