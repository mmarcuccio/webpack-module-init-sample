const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    "consumerA": "./src/consumerA.js",
    "consumerB": "./src/consumerB.js",
    "shared": "./src/shared.js",
  },
  output: {
    path: path.resolve(__dirname, "./build/"),
    filename: "[name].js",
  },
  resolve: {
    modules: ["./node_modules/","./src/"],
    extensions: [".js"],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "shared",
      filename: "common.js",
      minChunks: Infinity,
    }),
  ],
};
