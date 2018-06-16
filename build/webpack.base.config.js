const path = require("path");

const config = {
  // Input
  entry: {
    app: path.resolve(__dirname, "../src/main.js")
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /(\.js$)/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  // Output
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    filename: "assets/js/[name].js"
  }
};

module.exports = config;
