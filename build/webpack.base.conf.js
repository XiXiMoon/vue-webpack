const ENTRY_PATH = './src/main.js';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require("webpack");
const HappyPack = require('happypack');
const os = require('os'); // node 提供的系统操作模块
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');


 // 根据我的系统的内核数量 指定线程池个数 也可以其他数量
const happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length})


const plugins = [
	new HtmlWebpackPlugin({
		title: "vue-webpack",
		template: path.resolve(__dirname, "../src/index.html"),
		filename: path.resolve(__dirname, "../delop-code/index.html"),
		minify: true,
		inject: true
		//chunks: ['main']
	}),

	new CleanWebpackPlugin({
		cleanOnceBeforeBuildPatterns:[path.resolve(__dirname, "../delop-code")]
	}),

	new VueLoaderPlugin(),

	new webpack.ProvidePlugin({
		$: 'jquery',
		_: 'lodash'
	}),
	
	new HappyPack({ // 基础参数设置
		id: 'babel', // 上面loader?后面指定的id
		loaders: ['babel-loader?cacheDirectory'], // 实际匹配处理的loader
		threadPool: happyThreadPool,
		// cache: true // 已被弃用
		verbose: true
	}),

	new ModuleConcatenationPlugin()
];

const baseConfig = {
	entry: {
		app: ENTRY_PATH
	},
	output: {
		path: path.resolve(__dirname, "../delop-code"),  
		filename: './static/js/[name].[hash].js',
		// publicPath: 'http://cdn.com.cn',    //打包生成的js在生成的html模板中引入的前缀，即html文件交给后端，js发部到cdn上，自动引入
		chunkFilename: './static/js/[name].[chunkhash:5].chunk.js',
	},
	performance: false,
	module: {
		// noParse: /jquery|lodash/,

		rules: [
			{
				test: /\.jsx?$/,
				loader: "happypack/loader?id=babel",
				exclude: /node_modules/,
				include: path.resolve(__dirname, '../src')
			},

			{
				test: /\.(jpe?g|png|gif|webp|ico)$/,
				use:{
					loader: "url-loader",
					options:{
						name: '[name]_[hash:8].[ext]',
						outputPath: 'static/images/',
						esModule: false,
						limit: 10000   
					}
				},
				exclude: /node_modules/,
				include: path.resolve(__dirname, '../src')
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
				],
				exclude: /node_modules/,
				include: path.resolve(__dirname, '../src')
			},
			  
			{
				test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/i,
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
				],
				exclude: /node_modules/,
				include: path.resolve(__dirname, '../src')
			},

			{
				test: /\.vue$/,
				loader:'vue-loader',
				options: {
					compilerOptions: {
					  preserveWhitespace: false
					},
					// hotReload: false //改为false可关闭vue文件的热重载，即关闭HotModuleReplacementPlugin功能
				},
				exclude: /node_modules/,
				include: path.resolve(__dirname, '../src')
			},

			//处理html文件中图片（负责引入img，从而能被url-loader进行处理）
			{
				test: /\.html$/,
                use: [
                    'html-loader'
				],
				exclude: /node_modules/,
				include: path.resolve(__dirname, '../src')
			}			
		]
	},
	plugins,
	optimization: {
		splitChunks: {
			chunks: "all",

			maxInitialRequests: 3,	//splitChunks 在拆分chunk后，页面中需要请求的初始chunk数量不超过指定的值。所谓初始chunk，指的是页面渲染时，一开始就需要下载的js，区别于在页面加载完成后，通过异步加载的js

			maxAsyncRequests: 5,	//表示按需加载文件时，并行请求的最大数目。默认为5。

			minChunks: 1,	//表示一个模块至少应被minChunks个chunk所包含才能分割。默认为1。

			cacheGroups: {
				vendor: { // 将第三方模块提取出来
					test: /node_modules/,
					chunks: 'all',
					name: 'vendor',
					priority: 10, // 优先
					enforce: true
				},
				commons: {
					chunks: 'all',
					minChunks: 2,
					maxInitialRequests: 5,
					minSize: 0
				}
			}
		},
		runtimeChunk: {
			name: "manifest"
		}
	},
	resolve: {
		alias: {
		// 写了这句，我们可以这样写代码 import Vue from 'vue', 并且引入的是vue/dist/vue.runtime.esm.js这个版本，不然默认引入的是vue.js。这个在github的vue官方仓库dist目录下有解释。
		 'vue$': 'vue/dist/vue.esm.js',
		 // 写了这句，我们可以这样写代码 import api from '@/api/api.js'，省去到处找路径定位到src的麻烦
		 "@": path.resolve(__dirname, "../src"),
		 "components": path.resolve(__dirname, "../src/components"),
		 "service":   path.resolve(__dirname, "../src/service"),
		 "utils": path.resolve(__dirname, '../src/utils'),		//../src/utils
		 "static": path.resolve(__dirname, '../src/static'),	//../src/static
		 "antM": path.resolve(__dirname, '../src/antM'),
		 "views": path.resolve(__dirname, '../src/views'),
		 "mixins": path.resolve(__dirname, '../src/mixins'),
		 "filters": path.resolve(__dirname, '../src/filters'),
		 "directives": path.resolve(__dirname, '../src/directives'),
		 "config": path.resolve(__dirname, '../config'),
		 "plugins": path.resolve(__dirname, '../src/plugins')
		},
		
		// 添加一个 resolve.extensions 属性，方便我们引入依赖或者文件的时候可以省略后缀
  		// 我们在引入文件时可以这样写 import api from '@/api/api',将 `.jss、.vue` 添加为一个可解析的扩展名
		extensions: ["*", ".js", ".vue"],

		modules: ['node_modules'],

		mainFields:['jsnext:main','browser','main']
	}
};

module.exports = baseConfig;