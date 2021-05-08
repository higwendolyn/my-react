const { resolve } = require('path');
const HTMLWeboackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    devtool: 'cheap-module-source-map',
    devServer: {
        port: 8000,
    },
    output: {
        publicPath: '/',
        path: resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    babelrc: true,
                    presets: ['@babel/preset-react', '@babel/preset-env'],
                },
            },
        }, {
            test: /\.(jpg|png|gif)$/,
            loader: 'url-loader',
            options: {
                limit: 8 * 1024,
                esModule: false,
                name: '[hash:10].[ext]'
            },
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            exclude: /\.(html|css|js|jsx|img|jpg|png|gif)$/,
            loader: 'file-loader',
        }]
    },
    // 插件
    plugins: [
        new HTMLWeboackPlugin({
            filename: 'index.html',
            template: './public/index.html',
            favicon: './public/favicon.ico',
            inject: true,
            hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        })
    ],
    mode: 'development'
};