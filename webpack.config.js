const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MODULES_PATH = '/node_modules';
const SOURCE_PATH = path.join(__dirname, 'src');

const SOURCE = {
    ENTRY: path.join(SOURCE_PATH, 'index.js'),
    TEMPLATE: path.join(SOURCE_PATH, 'index.html'),
};

const OUTPUT = {
    PATH: path.join(__dirname, 'dist'),
    FILENAME: 'bundle.js',
};

const DEV_SERVER_PORT = 7000;

module.exports = {
    entry: SOURCE.ENTRY,
    output: {
        path: OUTPUT.PATH,
        filename: OUTPUT.FILENAME,
    },
    devServer: {
        inline: true,
        hot: true,
        port: DEV_SERVER_PORT,
        contentBase: OUTPUT.PATH,
    },
    module: {
        loaders: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: MODULES_PATH,
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: MODULES_PATH,
                query: {
                    cacheDirectory: true,
                    presets: ['react', ['env', { module: false }]],
                },
            },
            {
                test: /\.css$/,
                // loader: ['style-loader', 'css-loader'],
                loader: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                })),
            },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },
        }),
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            template: SOURCE.TEMPLATE,
        }),
    ],
};
