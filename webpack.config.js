
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const path = require('path');
const CurrentEnv = require(path.join(__dirname, `env.${process.env.NODE_ENV}.ts`));

module.exports = {
  entry: './src/index',
  output: {
    filename: './dist/bundle.js',
    path: __dirname,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(CurrentEnv),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(svg)$/,
        use: ['raw-loader'],
      },
      {
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
          },
        ],
      },

      // { no need any more
      //   test: /\.json$/,
      //   exclude: /(node_modules)/,
      //   loader: "json-loader"
      // },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [autoprefixer('last 5 versions')];
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [autoprefixer('last 5 versions')];
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
        // loader: "style-loader!css-loader!postcss-loader!sass-loader"
      },

    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', 'json'],
  },
  devServer: {
    clientLogLevel: 'info', // for dev only; remove from production
    host: CurrentEnv.HOST,
    port: CurrentEnv.PORT,
    disableHostCheck: true,
    historyApiFallback: { // https://github.com/ReactTraining/react-router/issues/3409
      disableDotRule: true,
    },

  },
};
