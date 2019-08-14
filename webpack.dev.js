const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const globImporter = require("node-sass-glob-importer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  externals: {
    jquery: "jQuery"
  },
  entry: {
    main: "./src/js/index.js"
  },
  optimization: {
    minimize: false
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
            options: {
              sourceMap: false
            }
          },
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: false
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: false
            }
          },
          {
            loader: "sass-loader",
            options: {
              importer: globImporter(),
              sourceMap: false
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "images/[name].[ext]"
          }
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "fonts/",
            publicPath: url => `../fonts/${url}`
          }
        }
      }
    ]
  },
  devServer: {
    port: 8080,
    contentBase: "dist",
    overlay: true
  },
  plugins: [
    new CleanWebpackPlugin("dist", {}),
    new MiniCssExtractPlugin({
      filename: "css/styles.css"
    }),
    new HtmlWebpackPlugin({
      template: "./src/distWines.html",
      inject: false,
      hash: false,
      filename: "distWines.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/distSpirits.html",
      inject: false,
      hash: false,
      filename: "distSpirits.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/home.html",
      inject: false,
      hash: false,
      filename: "home.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: false,
      hash: false,
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/distProd.html",
      inject: false,
      hash: false,
      filename: "distProd.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/distWines.html",
      inject: false,
      hash: false,
      filename: "distWines.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/elgobernador.html",
      inject: false,
      hash: false,
      filename: "elgobernador.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/magdala.html",
      inject: false,
      hash: false,
      filename: "magdala.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/marimar.html",
      inject: false,
      hash: false,
      filename: "marimar.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/rocado.html",
      inject: false,
      hash: false,
      filename: "rocado.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/sangreDeToro.html",
      inject: false,
      hash: false,
      filename: "sangreDeToro.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/torresBrandy.html",
      inject: false,
      hash: false,
      filename: "torresBrandy.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/torresChile.html",
      inject: false,
      hash: false,
      filename: "torresChile.html"
    }),    
    new HtmlWebpackPlugin({
      template: "./src/vinaEsmeralda.html",
      inject: false,
      hash: false,
      filename: "vinaEsmeralda.html"
    })
  ]
};
