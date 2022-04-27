import DotenvWebpackPlugin from "dotenv-webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { WebpackConfiguration } from "webpack-dev-server";

const config: WebpackConfiguration = {
  entry: "./src/index.tsx",
  resolve: {
    modules: ["src", "node_modules"],
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[fullhash].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        type: "asset/resource",
      },
      {
        test: /\.(ttf|woff|woff2|otf)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new DotenvWebpackPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
  },
};

export default config;
