const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const testConfig = merge(baseConfig, {
    mode: "development",

    devtool: "cheap-module-eval-source-map",
    
    module:{
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					'css-loader'
				]
			},

			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: "css-loader",
						options: {
							sourceMap:true,
							importLoaders: 2	//importLoaders为2表示在js或sass中，对于在这些里面引入的sass文件等必须先进行2个loader，即后面的loader，保证引入的loader也从下面的loader开始执行，否则不执行下面的loader
						}
					},
					{
						loader: "sass-loader",
						options:{
							sourceMap: true
						}
					},
					{
						loader: "postcss-loader"
					}
				],
				exclude: /node_modules/,
                include: path.resolve(__dirname, '../src')
			},

			{
				test: /\.less$/,
				use:  [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: "css-loader",
						options: {
							sourceMap:true,
							importLoaders: 2	//importLoaders为2表示在js或sass中，对于在这些里面引入的sass文件等必须先进行2个loader，即后面的loader，保证引入的loader也从下面的loader开始执行，否则不执行下面的loader
						}
					},
					{
						loader: "less-loader",
						options:{
							sourceMap: true
						}
					},
					{
						loader: "postcss-loader"
					}
				],
				exclude: /node_modules/,
                include: path.resolve(__dirname, '../src')
			},

			{
				test: /\.styl(us)?$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: "css-loader",
						options: {
							sourceMap:true,
							importLoaders: 2	//importLoaders为2表示在js或sass中，对于在这些里面引入的sass文件等必须先进行2个loader，即后面的loader，保证引入的loader也从下面的loader开始执行，否则不执行下面的loader
						}
					},
					'postcss-loader',
					'stylus-loader'
				]
			},

		]
	},
	
	plugins: [
		new MiniCssExtractPlugin({
			filename: './static/css/[name].[contenthash:8].css'
		}),

		new BundleAnalyzerPlugin({
			analyzerMode: 'static'
		})
	]
})

module.exports = testConfig;