const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require('path');
const resolve = require('./utils').resolve;

const config = require('./webpack.config.dev.js');
const options = {
    contentBase: resolve('./dist'),
    hot: true,
    host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
    console.log('dev server listening on port 5000');
});