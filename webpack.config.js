var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/Integration/trapezoidalRule.js',
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
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  devtool: 'eval-source-map'
}
