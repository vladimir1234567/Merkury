const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (path) {
    return {
        module: {
            rules: [{
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    publicPath: '../',
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                }),
                include: path
            }]
        },
        plugins: [
            new ExtractTextPlugin({filename: 'bundle.css', allChunks: true}),
        ]
    }
};