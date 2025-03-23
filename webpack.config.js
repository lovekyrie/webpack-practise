const process = require('node:process')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
        },
      }, 'postcss-loader'],
    }, {
      test: /\.less$/,
      use: [process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
    }, {
      test: /\.vue$/,
      use: ['vue-loader'],
    }, {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/],
      },
      exclude: /node_modules/,
    }],
  },
  devServer: {
    port: 3001,
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
}
