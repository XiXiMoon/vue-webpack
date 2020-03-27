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
							sourceMap:true
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
							sourceMap:true
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
				test: /\.styl(us)$/,
				use: ['vue-style-loader', 'css-loader',  'postcss-loader', 'stylus-loader']
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