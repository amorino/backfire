/*eslint-disable */
var config = require('./webpack.dev.babel');
var express = require('express');
var webpack = require('webpack');
var path = require('path');

var app = express();
var compiler = webpack(config);
var server = 5000;

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, '..', 'build/index.html'));
});

app.listen(server, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:' + server);
});
