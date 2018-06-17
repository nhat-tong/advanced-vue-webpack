const base = require("./webpack.base.config");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = Object.assign({}, base, {
  plugins: base.plugins || []
});

// Only apply CSS extraction for production so that we get CSS hot reload during development
if(process.env.NODE_ENV === 'production')
{
  config.module.rules
  .filter(x => { return x.loader == 'vue-loader' })
  .forEach(x => x.options.extractCSS = true);

  config.plugins.push(
    new ExtractTextPlugin('assets/styles.css')
  );
}

module.exports = config;
