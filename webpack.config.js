const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
        './client/index',
  ],
      // 'dist/sw.js':
        // './client/sw.js',

  // },
  output: {
    path: path.join(__dirname, 'dist', 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },

  // postcss: [
  //   autoprefixer({
  //     browsers: ['last 2 versions'],
  //   }),
  // ],
  resolve: {
    extensions: ['', '.scss', '.css', '.js', '.json'],
    root: [path.join(__dirname, './client')],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ],
  },
  module: {
    loaders: [
    // js
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
      }
    ],
  },
  postcss: [autoprefixer],
  sassLoader: {
    data: '@import "theme/_config.scss";',
    includePaths: [path.resolve(__dirname, './client')]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css', {
      allChunks: true,
    }),
  ],
};
