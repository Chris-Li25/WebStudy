const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "build.js",
    publicPath: "./dist/",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              esModule: false,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
      },
      /**
       * url-;oader base64 加载到文件当中，可减少请求次数
       * file-loader 将资源拷贝至指定的目录，分开请求
       * url-loader 内部也可以调用 file-loader
       * limit
       */
      {
        test: /\.(png|svg|gif|jpe?g)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "img/[name].[hash:6].[ext]",
              limit: 25 * 1024,
            },
          },
        ],
      },
    ],
  },
};
