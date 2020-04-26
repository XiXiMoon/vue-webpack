const path = require('path');
const webpack = require("webpack");
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

const preConfig = merge(baseConfig, {
	
	// mode: "production",

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
		}),

		new ParallelUglifyPlugin({
			uglifyJS:{
				output: {
					beautify: false,	//是否输出可读性较强的代码，即会保留空格和制表符，默认为输出，为了达到更好的压缩效果，可以设置为false
					comments: false		//是否保留代码中的注释，默认为保留，为了达到更好的压缩效果，可以设置为false
				},
				compress: {
					warnings: false,	//是否在UglifyJS删除没有用到的代码时输出警告信息，默认为输出，可以设置为false关闭这些作用
					drop_console: true,	//是否删除代码中所有的console语句，默认为不删除，开启后，会删除所有的console语句
					collapse_vars: false,
					reduce_vars: false
				}
			},
			test: /.js$/g,	//使用正则去匹配哪些文件需要被 ParallelUglifyPlugin 压缩
			include: [], //使用正则去包含被 ParallelUglifyPlugin 压缩的文件，默认为 []
			exclude: [],	//使用正则去不包含被 ParallelUglifyPlugin 压缩的文件，默认为 [].
			cacheDir: '',	//缓存压缩后的结果，下次遇到一样的输入时直接从缓存中获取压缩后的结果并返回，cacheDir 用于配置缓存存放的目录路径。默认不会缓存，想开启缓存请设置一个目录路径。
			workerCount: '',	//开启几个子进程去并发的执行压缩。默认是当前运行电脑的 CPU 核数减去1
			sourceMap: false	//是否为压缩后的代码生成对应的Source Map, 默认不生成，开启后耗时会大大增加，一般不会将压缩后的代码的sourceMap发送给网站用户的浏览器。
		}),

		new webpack.EnvironmentPlugin({
			NODE_ENV: 'production',
		})
	],

	optimization: {
		minimizer: [
			//压缩css
			new OptimizeCssAssetsWebpackPlugin()
		],
		
		usedExports: true
	}
})

module.exports = preConfig;