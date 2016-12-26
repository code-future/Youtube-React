var express = require('express');
var compression = require('compression');
var bodyParser = require('body-parser');
var logger = require('morgan');
var path = require('path');

//Creating the app
var app = express();

const webpack              = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config               = require('../webpack.config');
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));


app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/public'), { maxAge: 31557600000 }));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/views/index.html'))
})

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/views/404.html'))
})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})