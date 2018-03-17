const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const resolve = require('./utils').resolve;

module.exports = {
    entry: {
        app: resolve('./src/index.js')
    },
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
            '@' : resolve('./src')
        }
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
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
        }]
    }
};