var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: '/dist',
        }),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template',
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
      template: './src/index.ejs',
    }),
    new ExtractTextPlugin({
      filename: 'app.css',
      disabled: false,
      allChunks: true,
    }),
  ],
};
