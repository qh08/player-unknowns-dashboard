const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const resolve = require('./utils').resolve;

module.exports = {
    entry: [
        'babel-polyfill',
        resolve('./src/index.js'),
    ],
    output: {
        filename: 'bundle.js',
        path: resolve('./dist'),
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: resolve('./src/index.html')
        }),
    ],
    resolve: {
        alias: {
            '@': resolve('./src')
        }
    },
    module: {
        rules: [{
            test: /\.(png|svg|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    limit: 8192
                }
            }],
        }, {
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: resolve('./src')
        }, {
            test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/', // where the fonts will go
                    publicPath: '../' // override the default path
                }
            }]
        }]
    }
};