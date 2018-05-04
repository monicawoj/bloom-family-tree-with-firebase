//Konfiguracja Webpack
const path = require("path");

module.exports = {
    mode: 'development',
    entry: "./src/js/index.jsx",
    output: {
        path: `${__dirname}/dist/js`,
        filename: 'out.js'
    },
    devServer: {
        inline: true,
        contentBase: './',
        port: 3001
    },
    watch: true,
    devtool: "cheap-module-eval-source-map",
    module: {
        rules : [{
            test: /\.jsx$/,  exclude: /node_modules/,
            loader: 'babel-loader',
            query: { presets: ['es2015', 'stage-2', 'react'] }
        }]
    }
};