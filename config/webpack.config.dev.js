const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    entry: {
        app: ['react-hot-loader/patch'],
    },
    devtool: 'inline-source-map',
    mode: 'development',
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader?modules&localIdentName=[local]-[hash:base64:5]", "postcss-loader"]
        }, {
            test: /\.less$/,
            use: ["style-loader", "css-loader?modules&localIdentName=[local]-[hash:base64:5]", "postcss-loader", "less-loader"]
        }]
    }
});