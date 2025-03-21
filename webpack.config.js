const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [process.env.NODE_ENV === 'development'? 'style-loader': MiniCssExtractPlugin.loader, 'css-loader']
    }]
  },
  devServer: {
    port: 3001
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin()
  ]
}
