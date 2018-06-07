const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    plugins: [
        new UglifyJSPlugin(),
    ],
    modules: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['cache-loader',
                    {
                        loader: 'babel-loader', query: { cacheDirectory: true },
                    },
                ],
            },
        ],
    },
});
