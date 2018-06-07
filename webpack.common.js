const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        app: ['./src/index.jsx'],
        vendor: [
            'lodash', 'react', 'react-dom', 'react-router', 'prop-types', 'react-router-dom',
            'bootstrap/dist/css/bootstrap.css', 'bootstrap', 'reactstrap', 'jquery', 'babel-polyfill',
            // 'autobind-decorator', 'font-awesome/css/font-awesome.css', 'history',
        ],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'cache-loader',
                        {
                            loader: 'css-loader',
                            query: {
                                modules: true,
                                camelCase: true,
                                localIdentName: '[local]',
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [
                                    autoprefixer({
                                        browsers: ['last 3 versions', 'ie > 8'],
                                    }),
                                ],
                            },
                        },
                    ],
                }),
            },
            {
                test: /\.s[ac]ss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'cache-loader',
                        {
                            loader: 'css-loader',
                            query: {
                                modules: true,
                                camelCase: true,
                                localIdentName: '[folder]__[local]',
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [
                                    autoprefixer({
                                        browsers: ['last 3 versions', 'ie > 8'],
                                    }),
                                ],
                            },
                        },
                        {
                            loader: 'sass-loader',
                            query: {
                                sourceMaps: 'true',
                            },
                        },
                    ],
                }),
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf|wav)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    query: {
                        limit: 10,
                        name: '[name].[ext]',
                    },
                }],
            },
            {
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']), // Cleans dist dir. Removes as using HTML plugin
        new HtmlWebpackPlugin({ // Creates index.html in dist drive
            inject: true,
            // filename: 'src/index.html',
            template: 'src/index.html', // Used to set name of div to attach react base
            title: 'Apollo Task List',
            alwaysWriteToDisk: true, // For history fallback
            // chunks: ['vendor', 'app'],
        }),
        new HtmlWebpackHarddiskPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
        new webpack.optimize.CommonsChunkPlugin({ name: 'manifest' }),
        new ExtractTextPlugin({ filename: getPath => getPath('[name].css') }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.Tether': 'tether',
            'window.Popper': 'popper.js',
            Tether: 'tether',
            Popper: ['popper.js', 'default'],
            _sortBy: ['lodash', 'sortBy'], // Example
        }),
    ],
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
