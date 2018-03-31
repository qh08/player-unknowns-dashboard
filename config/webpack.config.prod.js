const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader?modules&localIdentName=[local]-[hash:base64:5]", 
                "postcss-loader",
            ]
        },{
            test: /\.less$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader?modules&localIdentName=[local]-[hash:base64:5]",
                "postcss-loader",
                "less-loader", 
            ]
        }]
    }
});