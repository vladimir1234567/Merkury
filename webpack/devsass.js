const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (path) {
    return {
        devtool: 'source-map',
        module: {
            rules: [{
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    publicPath: '../',
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader', options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'sass-loader', options: {
                            sourceMap: true
                        }
                    }]
                }),
                include: path
            }]
        },
        plugins: [
            new ExtractTextPlugin({filename: 'bundle.css', allChunks: true}),
        ]
    }
};