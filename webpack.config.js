const path = require('path');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('./build'),
        filename: 'index.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            defaultSizes: 'gzip'
        })
    ]
};
