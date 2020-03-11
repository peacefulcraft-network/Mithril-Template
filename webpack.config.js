/* eslint-disable */
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "./bin/app.js",
    publicPath: "/"
  },
  devtool: "source-map",
  target: "web",
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
}
