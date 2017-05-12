const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: path.resolve(__dirname, 'app', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    port: 8080,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'app', 'index.html')
    })
  ]
};
