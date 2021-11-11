const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { DefinePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // watch: true,
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    static: "./dist",
  },
  entry: "./src/index.ts",
  output: {
    filename: "js/main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      { test: /\.ts$/, use: ["babel-loader"] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "ts-loader",
      template: "./public/index.html",
    }),
    new DefinePlugin({
      BASE_URL: '"./"',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
  ],
};
