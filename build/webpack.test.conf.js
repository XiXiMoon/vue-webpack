const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');

const testConfig = merge(baseConfig, {
	mode: "development",

	devtool: "cheap-module-eval-source-map",
		
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
	}
})


module.exports = testConfig;