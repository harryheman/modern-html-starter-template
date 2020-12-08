const paths = require('./paths')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    path: paths.build,
    publicPath: './',
    filename: 'js/[name].[contenthash].bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
    runtimeChunk: {
      name: 'runtime'
    }
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
})
