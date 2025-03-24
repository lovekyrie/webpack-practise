const path = require('node:path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const Merge = require('webpack-merge')
const base = require('./webpack.base')

module.exports = Merge.merge(base, {
  mode: 'production',
  entry: {
    client: path.join(__dirname, './src/entry-client.js'),
  },
  output: {
    publicPath: '/',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    // 这里使用 webpack-manifest-plugin 记录产物分布情况
    // 方面后续在 `server.js` 中使用
    new WebpackManifestPlugin({ fileName: 'manifest-client.json' }),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
})
