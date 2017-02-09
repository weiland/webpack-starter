const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = (webpackEnvParams) => {
  const env = webpackEnvParams || {};
  console.log(env, process.env.NODE_ENV);

  const entry = [
    path.join(process.cwd(), 'app/app.js')
  ];

  const output = {
    filename: '[name].js',
    path: path.resolve(process.cwd(), 'dist')
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
        use: [
          'style-loader',
          { loader: 'css-loader', options: { modules: true, importLoaders: 1 } },
          'sass-loader',
          { loader: 'postcss-loader' }
        ]
      }
    ]
  };

  const plugins = [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: true
    }),
    new webpack.LoaderOptionsPlugin({
      options: { postcss: [autoprefixer] }
    })
  ];

  const devServer = {
    // https: true, // enables http2
    historyApiFallback: true,
    host: '0.0.0.0',
    contentBase: path.join(process.cwd(), 'app/'),
    port: process.env.PORT || 8080,
    inline: true,
    hot: true,
    stats: {
      colors: true
    }
  };

  const performance = {
    hints: false
  };

  const devtool = 'cheap-eval-source-map';

  return {
    entry,
    output,
    module,
    plugins,
    devServer,
    performance,
    devtool
  };
};
