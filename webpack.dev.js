// const merge = require('webpack-merge'); // Was overwriting common...
const common = require('./webpack.common.js');
const webpack = require('webpack');

common.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
);

common.module.rules.unshift({
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['react-hot-loader/webpack', 'cache-loader',
        {
            loader: 'babel-loader', query: { cacheDirectory: true },
        },
    ],
});

common.entry.app.unshift('react-hot-loader/patch');
common.entry.app.push('webpack/hot/dev-server');
common.entry.app.push('webpack-hot-middleware/client');

common.devtool = 'source-map';
common.output.publicPath = '/';

module.exports = common;
