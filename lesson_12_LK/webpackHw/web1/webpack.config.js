var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',

    entry:  __dirname + "/app/main.js",
    output: {
      path: __dirname + "/public",
      filename: "bundle.js"
    },

    module: {
      loaders: [
        {
          test: /\.json$/,
          loader: "json"
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel'
        },
        {
          test: /\.css$/,
          loader: 'style!css?modules!postcss'
        }
      ]
    },

    postcss: [
      require('autoprefixer')
    ],

    plugins: [
      new webpack.BannerPlugin("Copyright Flying Unicorns Inc.")
    ],

    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        inline: true
    }
}
