const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');

module.exports = merge(baseConfig, {
	mode: "development",
	entry: {
		main: './src/main.js'
	},
	output: {
		path: path.resolve(__dirname, "../delop-code", "dev"),  
		filename: './static/js/[name].[hash].js',  
		publicPath: './static'  
	},

	module:{
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},

			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	resolve: {
		alias: {
		 'vue$': 'vue/dist/vue.esm.js' 
		}
	   
	},
	plugins: [
	],
})