const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    "consumerA": "./src/consumerA.js",
    "consumerB": "./src/consumerB.js"
  },
  output: {
    path: path.resolve(__dirname, "./build/"),
    filename: "[name].js",
  },
  resolve: {
    modules: ["./node_modules/","./src/"],
    extensions: [".js"],
  },
  optimization: {
    splitChunks: {
      minSize: 1,
      cacheGroups: {
        common: {
          name: "common",
          chunks: "initial",
          minChunks: 2,
        },
      },
    },
  },
};
