const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public', 'dist'),
    },
    devtool: 'inline-source-map',
    devServer: {
      static: './dist/bundle.js',
    },
    module: {
        rules: [
          // First Rule
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
    
          // Second Rule
          {
            test: /\.(s(a|c)ss)$/,
            use: ['style-loader','css-loader', 'sass-loader']
         },
         {
          test: /\.(css)$/,
          use: ['style-loader','css-loader']
       }
        ]
      },
      devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true
      }
};