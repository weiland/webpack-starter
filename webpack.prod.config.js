const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer')
const ExtractText = require('extract-text-webpack-plugin');

module.exports = (webpackEnvParams) => {
  const env = webpackEnvParams || {};
  console.log(env, process.env.NODE_ENV);

  const entry = [
    path.join(process.cwd(), 'app/app.js')
  ];

  const output = {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/'
  };

  const module = {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          presets: [
            ['env', {
              modules: false,
              targets: {
                browsers: ['last 2 versions']
              }
            }]
          ]
        }
      },
      {
        test: /\.scss$/,
        loaders: ExtractText.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      }
    ]
  };

  const plugins = [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [autoprefixer] }
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),
    new ExtractText('styles.css')
  ];

  const performance = {
    maxAssetSize: 100000,
    maxEntrypointSize: 300000,
    hints: 'warning'
  };

  const devtool = 'source-map';

  return {
    entry,
    output,
    module,
    plugins,
    performance,
    devtool
  };
};
