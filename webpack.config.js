const PATH = require('path');
const WEBPACK = require('webpack');

module.exports = {
  entry: {
    // This is our Express server for Dynamic universal
    server: './server.ts',
    // This is an example of Static prerendering (generative)
    prerender: './prerender.ts'
  },
  target: 'node',
  resolve: { extensions: ['.ts', '.js'] },
  // Make sure we include all node_modules etc
  externals: [/(node_modules|main\..*\.js)/],
  output: {
    // Puts the output at the root of the dist folder
    path: PATH.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new WEBPACK.ContextReplacementPlugin(
      // fixes WARNING Critical dependency: the request of a dependency is an expression
      /(.+)?angular(\\|\/)core(.+)?/,
      PATH.join(__dirname, 'src'), // location of your src
      {} // a map of your routes
    ),
    new WEBPACK.ContextReplacementPlugin(
      // fixes WARNING Critical dependency: the request of a dependency is an expression
      /(.+)?express(\\|\/)(.+)?/,
      PATH.join(__dirname, 'src'),
      {}
    )
  ]
};
