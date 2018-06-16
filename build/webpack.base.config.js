const path = require("path");

const config = {
  // Input
  entry: {
    app: path.resolve(__dirname, "../src/main.js")
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
