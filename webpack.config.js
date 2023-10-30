const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DotenvWebpack = require("dotenv-webpack");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new DotenvWebpack(),
  ],
  devServer: {
    port: 3030, // you can change the port
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.module\.scss$/, // Регулярное выражение, которое ищет все файлы .scss
        use: [
          "style-loader", // Создает содержимое стиля из строк
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true, // Включает поддержку CSS-модулей
            },
          },
          "sass-loader", // Компилирует Sass в CSS
        ],
      },
    ],
  },
};
