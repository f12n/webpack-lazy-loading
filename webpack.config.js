const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// npx webpack --config webpack.config.js
module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: {
        index: './src/index.js' // ,
            // another: './src/another.js'
    },
    output: {
        filename: '[name].bundle.js',

        // determines the name of non-entry chunk files, For more information:
        // https://webpack.js.org/configuration/output/#output-chunkfilename
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Code Splitting'
        })
    ],
    /* optimization: {
        splitChunks: {
            chunks: 'all'
        }
    } */
};