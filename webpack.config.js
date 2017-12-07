const ENTRY_PATH = './src/index.js';
const MODULES_PATH = '/node_modules';
const OUTPUT = {
    PATH: __dirname + '/public/',
    FILENAME: 'bundle.js'
};
const DEV_SERVER_PORT = 7000;

module.exports = {
    entry: ENTRY_PATH,
    output: {
        path: OUTPUT.PATH,
        filename: OUTPUT.FILENAME
    },
    devServer: {
        inline: true,
        port: DEV_SERVER_PORT,
        contentBase: OUTPUT.PATH
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: MODULES_PATH,
                query: {
                    cacheDirectory: true, 
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
