const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = merge(baseConfig, {
	mode: "development",
	entry: {
		main: './src/main.js'
	},
	output: {
		path: path.resolve(__dirname, "../delop-code", "dev"),  
		filename: './static/js/[name].[hash].js'
		// publicPath: './static'  
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
			  
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
				use: [
				  {
					loader: 'url-loader',
					options: {
					  limit: 5120,
					  esModule: false,
					  fallback: 'file-loader',
					  name: 'static/fonts/[name].[hash:4].[ext]'
					}
				  }
				]
			},

			{
				test: /\.vue$/,
				loader:'vue-loader',
				options: {
					compilerOptions: {
					  preserveWhitespace: false
					}
				}
			}
		]
	},
	resolve: {
		alias: {
		// 写了这句，我们可以这样写代码 import Vue from 'vue', 并且引入的是vue/dist/vue.runtime.esm.js这个版本，不然默认引入的是vue.js。这个在github的vue官方仓库dist目录下有解释。
		 'vue$': 'vue/dist/vue.esm.js',
		 // 写了这句，我们可以这样写代码 import api from '@/api/api.js'，省去到处找路径定位到src的麻烦
		 "@": path.resolve(__dirname, "../src") 
		},
		// 添加一个 resolve.extensions 属性，方便我们引入依赖或者文件的时候可以省略后缀
  		// 我们在引入文件时可以这样写 import api from '@/api/api',将 `.jss、.vue` 添加为一个可解析的扩展名
		extensions: ["*", ".js", ".vue"]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "vue-webpack",
			template: path.resolve(__dirname, "../src/index.html"),
			filename: path.resolve(__dirname, "../delop-code/dev/index.html"),
			minify: true
			//chunks: ['main']
		}),

		new VueLoaderPlugin()
	],

	devServer:{
		contentBase:path.resolve(__dirname, '../delop-code/dev'),
		port: "8080",
		host: "localhost",
		hot: true,
		open: true
		// proxy: {},
		// publicPath: "/static/",
		// after:{},
		// before: function(){}
	},
})