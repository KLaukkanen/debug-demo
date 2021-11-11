const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path');
module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }}
                ]
            }
        ]
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
      },
    plugins: [new HtmlWebpackPlugin({template: 'src/index.html'})],
    devtool: 'source-map'

}