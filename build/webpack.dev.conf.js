const path = require('path');
const webpack = require("webpack");
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');

const devConfig = merge(baseConfig, {
	mode: "development",
	devtool: 'cheap-module-eval-source-map',
	module:{
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},

			{
				test: /\.scss$/,
				use: [
					{
						loader: "vue-style-loader"
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
						loader: "vue-style-loader"
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
					'vue-style-loader',
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
		new webpack.HotModuleReplacementPlugin()
	],

	//整个页面会刷新，和热更新不同
	devServer:{
		contentBase:path.resolve(__dirname, '../delop-code'),
		port: "8080",
		host: "localhost",
		hot: true,
		open: true,
		//hotOnly:true        //即使HMR不生效，浏览器也不自动刷新功能
		// proxy: {},
		// publicPath: "/static/",
		// after:{},
		// before: function(){}
	}
})

module.exports = devConfig;