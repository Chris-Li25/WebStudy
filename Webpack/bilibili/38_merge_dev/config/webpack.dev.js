const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    static: "./dist",
    historyApiFallback: true,
    port: 5000,
    open: true,
    hot: "only",
    compress: true,
    proxy: {
      "/api": {
        target: "https://api.github.com",
        pathRewrite: { "^/api": "" },
        changeOrigin: true,
      },
    },
  },
  plugins: [new ReactRefreshWebpackPlugin()],
};
