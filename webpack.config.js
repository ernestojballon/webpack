const path = require('path');
const merge = require('webpack-merge'); // Help me to merge configs for webpack
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

// process.env.BABEL_ENV = TARGET

// common config for both targets
const common = {
  entry: {
    app: PATHS.app,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: { 'react-dom': '@hot-loader/react-dom' },
  },
  output: {
    path: PATHS.build,
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[hash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        include: PATHS.app,
      },
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'), // look babel config presets and plugins
        options: {
          // This is a feature of `babel-loader` for Webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
          plugins: ['react-hot-loader/babel'],
        },
        include: PATHS.app,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'node_modules/html-webpack-template/index.ejs',
      title: 'Kanban App',
      appMountId: 'app',
      inject: true,
    }),
  ],

};
// Default configuration
if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map', // This adds sourceMaps for better debugging in the browser
    devServer: {
      // contentBase: PATHS.build, // Server the files in this folder
      host: process.env.HOST, // Serve the files in this host
      port: process.env.PORT || 3000, // Serve the files in this port
      historyApiFallback: true,
       // The index.html page will likely have to be served in place of any 404 responses
      hot: true, // Enable webpack's Hot Module Replacement feature:
      inline: true, // Insert a script on your bundle to help the hot reload
      progress: true, // Output running progress to console
      stats: 'errors-only', // This option lets you precisely control what bundle information gets displayed.
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(), // We need this for hot reloading to work
    ],
  });
}
if (TARGET === 'build') {
  module.exports = merge(common, {
    // entry:{
    //   vendor: Object.keys(pkg.dependencies).filter(v=>{
    //     return v!=='alt-utils';
    //   })
    // },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"',
      }),
      // new webpack.optimize.CommonsChunkPlugin({
      //   names:['vendor','manifest']
      // })
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/](react|react-dom|alt|alt-container|uuid)[\\/]/,
            // test: /[\\/]node_modules[\\/]/, // split in vendor all dependecies
            name: 'vendor',
            chunks: 'all',
          },
        },
      },
      minimize: true,
      minimizer: [new TerserPlugin({
        minify: (file, sourceMap) => {
          // https://github.com/mishoo/UglifyJS2#minify-options
          const uglifyJsOptions = {
            /* your `uglify-js` package options */
          };
          if (sourceMap) {
            uglifyJsOptions.sourceMap = {
              content: sourceMap,
            };
          }
          return require('uglify-js').minify(file, uglifyJsOptions);
        },
      })],
    },
  });
}
if (TARGET === 'build2') {
  module.exports = merge(common, {});
}
