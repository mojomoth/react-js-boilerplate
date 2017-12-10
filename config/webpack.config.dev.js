const paths = require('./paths');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const OUTPUT_FILENAME = 'bundle.js';
const SERVER_PORT = 7000;

module.exports = {
    entry: paths.entryJS,
    output: {
        path: paths.output,
        filename: OUTPUT_FILENAME,
    },
    devServer: {
        inline: true,
        hot: true,
        port: SERVER_PORT,
        contentBase: paths.output,
    },
    module: {
        loaders: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: paths.modules,
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: paths.modules,
                query: {
                    cacheDirectory: true,
                    presets: ['react', ['env', { module: false }]],
                },
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new UglifyJSPlugin({
            uglifyOptions: {
                warnings: false,
            },
        }),
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            template: paths.templateHTML,
        }),
    ],
};
