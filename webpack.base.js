const path = require('node:path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  output: {
    filename: '[name].[contenthash].js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: ['vue-loader'],
    }],
  },
  resolve: {
    extensions: ['.vue', '.js'],
  },
  devServer: {
    port: 3001,
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
}
