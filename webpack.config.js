const PATH = require('path');
const WEBPACK = require('webpack');

module.exports = {
  entry: {
    server: './server.ts',
    prerender: './prerender.ts'
  },
  target: 'node',
  resolve: { extensions: ['.ts', '.js'] },
  externals: [/node_modules/],
  output: {
    path: PATH.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new WEBPACK.ContextReplacementPlugin(/(.+)?angular(\\|\/)core(.+)?/, PATH.join(__dirname, 'src'), {}),
    new WEBPACK.ContextReplacementPlugin(/(.+)?express(\\|\/)(.+)?/, PATH.join(__dirname, 'src'), {})
  ]
};
