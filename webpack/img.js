module.exports = function () {
    return {
        module: {
            rules: [{
                test: /\.(woff2?|ttf|eot|svg|png|jpe?g|otf|gif)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/[name].[ext]'
                }
            }]
        }
    }
};