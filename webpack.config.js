var path = require('path')
var webpack = require('webpack')

module.exports = {
    // entry point of our application
    entry: './src/main.js',
    // where to place the compiled bundle
    output: {
        filename: 'build.js',
        path: __dirname+'/dist'
    },
    module: {
      loaders: [
        {
          test: /\.vue$/,
          loader: 'vue'
        },
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
        {
          test: /\.less$/,
          loader: "style!css!less"
        },
        {
          test: /\.json$/,
          loader: 'json'
        },
        {
          test: /\.html$/,
          loader: 'vue-html'
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'url',
          query: {
            limit: 10000,
            name: '[name].[ext]?[hash]'
          }
        }
      ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    devServer: {
      historyApiFallback: true,
      noInfo: true
    },
    devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vuejs.github.io/vue-loader/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}