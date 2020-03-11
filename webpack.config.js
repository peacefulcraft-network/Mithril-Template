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
  }
}
