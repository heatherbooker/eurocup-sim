module.exports = {
  entry: "./public/index.jsx",
  output: {
    path: './public/build',
    filename: "index.js"
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
};
