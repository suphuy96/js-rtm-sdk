const path = require('path');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');

module.exports = {
    entry: './src/index.ts',
    // devtool: 'inline-source-map',
    devtool: 'cheap-module-source-map',
    // mode: 'development',
    mode: "production",
    // fixes : Module not found : 'fs' in winston.
    target: 'node',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
    },
    output: {
        filename: 'dash.min.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
};
