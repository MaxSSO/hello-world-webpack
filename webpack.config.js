const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {

  entry: path.resolve(__dirname, './src/app.js'),

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin()
  ],

  mode: "production"

}

module.exports = config