const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtarctPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dirname,'src'),
    mode: 'development',
    entry: {
        main: './index.ts',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,'dist'),
    },
    devServer:{
        open: true,
        hot: true,
        port: 4200,
        contentBase: path.join(__dirname,'public')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns:[
                {
                    from: path.resolve(__dirname,'src/assets/card-front.png'),
                    to: path.resolve(__dirname,'dist/assets')
                },
                {
                    from: path.resolve(__dirname,'src/assets/gallery_3.png'),
                    to: path.resolve(__dirname,'dist/assets')
                },
                {
                    from: path.resolve(__dirname,'src/assets/gallery_4.png'),
                    to: path.resolve(__dirname,'dist/assets')
                }
            ]
        }),
        new MiniCssExtarctPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [MiniCssExtarctPlugin.loader,'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtarctPlugin.loader,'css-loader','sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|jp2|webp)$/,
                loader: 'file-loader',
                options: {
                  name: 'assets/[name].[ext]'
                }
            },
            {
                test: /\.[tj]s$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            }
        ]
    }
}