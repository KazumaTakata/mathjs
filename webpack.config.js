var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './test/Interpolation/linearInter.js',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules']
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'My App',
    //   template: 'test/linearSolver/index.html'
    // })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              [
                'transform-react-jsx',
                {
                  pragma: 'this.createElement'
                }
              ]
            ]
          }
        }
      }
    ]
  },
  devtool: 'eval-source-map'
}
