/* eslint-disable no-var */
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.dev.babel');

var app = express();
var compiler = webpack(config);
var server = 4000;

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.listen(server, 'localhost', function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:' + server);
});
