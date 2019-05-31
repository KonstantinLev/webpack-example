const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const miniCssPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production', // development
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 4200
    },
    plugins: [
        new htmlPlugin({
            filename: "index.html",
            template: './src/index.html'
        }),
        new miniCssPlugin({
            filename: "style.css",
        }),
    ],
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [miniCssPlugin.loader,'css-loader'],
            },
            {
                test: /\.less$/,
                use: [miniCssPlugin.loader,'css-loader', 'less-loader'],
            },
            {
                test: /\.scss$/,
                use: [miniCssPlugin.loader,'css-loader', 'sass-loader'],
            },
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCssAssetsPlugin({})],
    }
}
