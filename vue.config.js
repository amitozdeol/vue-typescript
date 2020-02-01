const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  configureWebpack: config => {
    let innerConfig = {};
    if (process.env.NODE_ENV === "development") {
      innerConfig.plugins = [new BundleAnalyzerPlugin()];
    }
    return innerConfig;
  }
};
