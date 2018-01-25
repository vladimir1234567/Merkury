const path = require('path');
const merge = require('webpack-merge');
const devServer = require('./webpack/devserver');
const html = require('./webpack/html');
const sassDev = require('./webpack/devsass');
const sassProd = require('./webpack/prodsass');
const babel = require('./webpack/babel');
const uglifyJS = require('./webpack/uglify');
const assets = require('./webpack/img');

const PATHS = {
    source: path.resolve(__dirname, 'app/src'),
    build: path.resolve(__dirname, 'app/build'),
};

const common = merge([
    {
        entry : PATHS.source + '/assets',
        output: {
            path: PATHS.build,
            filename: 'bundle.js'
        }
    },
    html(PATHS.source),
    babel(PATHS.source),
    assets()
]);


module.exports = function (env) {
    if (env === 'prod') {
        return merge([
            common,
            sassProd(PATHS.source),
            uglifyJS()
        ]);
    }
    if (env === 'dev') {
        return merge([
            common,
            devServer(),
            sassDev(PATHS.sourc)
        ])
    }
};