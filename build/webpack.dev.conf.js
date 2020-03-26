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
			},

			{
				test: /\.scss$/,
				use: [
					{
						loader: "style-loader"
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
						loader: "style-loader"
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
				use: ['vue-style-loader', 'css-loader', 'stylus-loader', 'postcss-loader']
			},

			{
				test: /\.(jpe?g|png|gif|webp|svg|ico)$/,
				use:{
					loader: "url-loader",
					options:{
						name: '[name]_[hash:8].[ext]',
						outputPath: 'static/images/',
						esModule: false,
						limit: 10000   
					}
				}
			},

			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				use: [
				  {
					loader: 'url-loader',
					options: {
					  limit: 5120,
					  esModule: false,
					  fallback: 'file-loader',
					  name: 'static/media/[name].[hash:4].[ext]'
					}
				  }
				]
			  },
			  
			  
			
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