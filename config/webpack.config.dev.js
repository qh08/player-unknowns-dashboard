const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    mode:'development',
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});