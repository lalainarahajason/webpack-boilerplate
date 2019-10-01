const webpack = require("webpack");
const path = require("path");
// Extract text
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
// Uglify
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
// Minify CSS
const OptimizeCSSAssets = require("optimize-css-assets-webpack-plugin");
// Webpack dashboard
const DashboardPlugin = require("webpack-dashboard/plugin");


let config = {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "./public"),
      filename: "./bundle.js"
	},
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.scss$/,
        use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader', 'postcss-loader'],
        }))
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin("styles.css"),
    new DashboardPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./public"),
    historyApiFallback: true,
    inline: false,
    open: true,
    hot: true
  },
  devtool: "eval-source-map"
}
  
module.exports = config;

// Minifitier les fichiers js dans un environnement de production
if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    //new OptimizeCSSAssets()
  );
}