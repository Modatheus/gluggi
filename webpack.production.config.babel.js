import path from 'path'
import webpack from 'webpack'

export default {
  entry: {
    app: ['./app']
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/static/',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.resolve('./')
  },

  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loaders: [
          'react-hot',
          'babel?presets[]=react,presets[]=es2015&presets[]=stage-0'
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        loader: 'babel?presets[]=es2015,presets[]=react!svg-react'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
}
