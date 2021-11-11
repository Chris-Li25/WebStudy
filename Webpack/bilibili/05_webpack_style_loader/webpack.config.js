const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/, // 一般就是一个正则表达式，用于匹配我们需要处理的文件类型
      //   use: [
      //     {
      //       loader: "css-loader",
      //       // options: {}, // 配置信息
      //     },
      //   ],
      // },
      // 简写方式
      // {
      //   test: /\.css/,
      //   loader: "css-loader",
      // },
      // 简写方式
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
