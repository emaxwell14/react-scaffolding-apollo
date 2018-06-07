// Server for development with hot reloading

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const proxy = require('http-proxy-middleware');
const fallback = require('express-history-api-fallback');
const helmet = require('helmet');
const path = require('path');
const config = require('./webpack.dev.js');

const PORT = 3000;
const app = express();

app.use(helmet());
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

// Deploy i18n files
app.use('/locales', express.static(path.join(__dirname, 'locales')));

// Use reverse proxy for /app
app.use('*', proxy('/app', {
    target: 'http://localhost/',
    ws: true,
    pathRewrite: {
        '^/app': '/',
    },
}));

// Fallback on refresh. Using file on harddrive
app.use(express.static(__dirname));
app.use(fallback('dist/index.html', { root: __dirname }));

// Serve the files on port 80.
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!\n`);
});
