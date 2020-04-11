const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const preConfig = merge(baseConfig, {
	mode: "production",

    devtool: "cheap-module-source-map",
    
    module:{
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: "css-loader",
						options: {
							sourceMap:true
						}
					}
				],
				exclude: /node_modules/,
				include: path.resolve(__dirname, '../src')
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
				],
				exclude: /node_modules/,
				include: path.resolve(__dirname, '../src')
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
	],

	optimization: {
		minimizer: [
			//压缩css
			new OptimizeCssAssetsWebpackPlugin(),
			
			//压缩js
			new UglifyWebpackPlugin({
                parallel: 4	//使用多进程并行运行可提高构建速度。并发运行的默认数量：os.cpus().length - 1。
			})
        ]
	}
})

module.exports = preConfig;