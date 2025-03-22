const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, {
        loader: 'css-loader',
        options: {
          importLoaders: 1
        }
      }, 'postcss-loader']
    }, {
      test: /\.less$/,
      use: [process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
    }, {
      test: /\.vue$/,
      use: ['vue-loader']
    }]
  },
  devServer: {
    port: 3001
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
}
