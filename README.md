## vue-webpack
webpack4.0+vue2.0单页后台管理项目搭建

## 技术栈
- `Vue@^2.6.11`：用于构建用户界面的MVVM框架
- `Vue-Router@^3.1.6`：vue配置路由库
- `Vuex@^3.2.0`: 基于 vue 的数据流方案
- `Axios^0.19.2`：vue配套的ajax库
- `vuex-persistedstate@^3.0.1`：vuex对应的数据持久化插件，可用locallStorage、sessionStorage、cookie
- `js-model@^1.6.2`：model层数据插件

## 目录结构
```
action-log          //前端监控埋点目录
build               //webpack配置
config              //项目总配置目录
├── config-dev      //开发环境参数配置
├── config-pre      //预发布环境参数配置         
├── config-prod     //正式环境参数配置
└── config-test     //测试环境参数配置
    index.js        //项目总配置归总出口
mock                //express搭建的mock服务
├── index.js        //express路由配置
├── articleList.js  //mock生成的各个模块的数据
└──  ....           
src
├── antM            // 个人私有基础组件库
├── components      // 业务组件库
├── directives      // 自定义指令(全局用-d、局部用-s)
├── filters         // 过滤器(全局写再-global.js中、局部用.s.js)
├── mixins          // 全局js混入(模块-mixin.js)
├── mock            // 前端mock文件夹
├── model           // 模型层
├── plugins         // 插件相关(api、inject等)
├── router          // 全局路由配置(已支持路由懒加载)
├── service         // 服务层
├── static          // 静态资源目录(iconfont、images、js、styles)
├── store           // vuex状态管理
├── utils           // 工具目录
├── views           // 视图层
├── App.vue         // 项目根组件
├── index.html      // 项目模版页
├── main.js         // 项目入口文件
└── views           // 视图层
unit-test           //单元测试目录
```

## 参考资料
- [CROSS-ENV不同环境配置](https://www.cnblogs.com/wpshan/p/11119597.html)
- [Node.js中环境变量process.env的一些事详解](https://blog.csdn.net/u012971339/article/details/81876165)
- [git仓库：webpack学习](https://gitee.com/XiMoon/web_pack_learning)
- [git仓库：webpack-demo](https://gitee.com/XiMoon/webpack-demo)
- [git仓库：vue-music](https://gitee.com/XiMoon/vue-music)
- [官方文档：webpack v4.43.0](https://www.webpackjs.com/guides/)
- [git仓库：webpack-4](https://github.com/Coobug/webpack)
- [git仓库：vue-webpack-pc](https://github.com/Coobug/vue-webpack-pc)
- [git仓库：auth-vue-ts-2018](https://github.com/Coobug/auth-vue-ts-2018)
- [git仓库：vue-construct](https://github.com/Coobug/vue-construct)
- [git仓库：vue2-manage](https://github.com/Coobug/vue2-manage)
- [git仓库：vue-beauty](https://github.com/Coobug/vue-beauty)
- [git仓库：vue2-elm](https://github.com/Coobug/vue2-elm)
- [git仓库：mobxSpa](https://github.com/Coobug/mobxSpa)
- [git仓库：easyMarketApp](https://github.com/Coobug/easyMarketApp)
- [git仓库：react-webpack-pc](https://github.com/Coobug/react-webpack-pc)
- [git仓库：cloud-music](https://github.com/Coobug/cloud-music)
- [git仓库：react-bilibili](https://github.com/Coobug/react-bilibili)
- [详解webpack中的hash、chunkhash、contenthash区别](https://www.jb51.net/article/132275.htm)
- [webpack 、manifest 、runtime 、缓存与CommonsChunkPlugin](https://www.jianshu.com/p/95752b101582)
- [深入浅出的webpack构建工具---babel之配置文件.babelrc(三)](https://www.cnblogs.com/tugenhua0707/p/9452471.html)
- [在webpack上如何搭建vue项目](https://www.php.cn/js-tutorial-403721.html)
- [解决：webpack4->postcss->autoprefixer配置 警告：Replace Autoprefixer browsers option to Browserslist config. Use browserslis](https://www.cnblogs.com/alpiny/p/12496691.html)
- [webpack 项目构建：（三）开发环境——本地服务器搭建](https://segmentfault.com/a/1190000013586090)
- [webpack4.0打包优化策略(一)](https://juejin.im/post/5abbc2ca5188257ddb0fae9b#heading-0)
- [2020年了,再不会webpack敲得代码就不香了(近万字实战)](https://juejin.im/post/5de87444518825124c50cd36#heading-0)
- [三十分钟掌握Webpack性能优化](https://juejin.im/post/5b652b036fb9a04fa01d616b#heading-0)
- [webpack4.0打包优化策略(三)](https://juejin.im/post/5ac76a8f51882555677ecc06)
- [Webpack 4 Tree Shaking 终极优化指南](https://juejin.im/post/5dcec27d5188254b0147e619#heading-0)
- [浅谈webpack4.0 性能优化](https://juejin.im/post/5bf511eae51d454e243dbe55#heading-0)
- [9102年webpack4搭建vue项目](https://juejin.im/post/5c665da5f265da2dcb676cfc#heading-0)
- [基于Webpack4的Vue移动端开发环境-搭建篇](https://juejin.im/post/5df2eed351882512664b0b54#heading-0)
- [面试官：自己搭建过vue开发环境吗？](https://juejin.im/post/5cc55c336fb9a032086dd701#heading-0)
- [基于 Webpack4 搭建 Vue 开发环境](https://juejin.im/post/5bc30d5fe51d450ea1328877#heading-0)
- [从零开始配置webpack(基于webpack 4 和 babel 7版本)](https://juejin.im/post/5c947c3b6fb9a070f1257f7a#heading-0)
- [Webpack 4 配置最佳实践](https://juejin.im/post/5b304f1f51882574c72f19b0#heading-1)
- [webpack优化总结](https://www.cnblogs.com/mengff/p/9717193.html)
- [webpack 中那些最易混淆的 5 个知识点](https://juejin.im/post/5cede821f265da1bbd4b5630)
- [webpack4.0打包优化策略(二)](https://juejin.im/post/5ac769e7f265da237b225490#heading-0)
- [前端需要知道的 依赖注入(Dependency Injection, DI)](http://test.imweb.io/topic/571b567505637d4c67ae3f64)
- [前端对于页面断网的处理](https://juejin.im/post/5cb6c18df265da034d2a0c37)
- [浅谈使用 Vue 构建前端 10w+ 代码量的单页面应用开发底层](https://juejin.im/post/5b29c3bde51d45588d4d7110)
- [前端API层架构，也许你做得还不够](https://juejin.im/post/5de7169451882512454b18d8)
- [【第1687期】「数据模型」是如何助力前端开发的](https://m.sohu.com/a/330966582_463970)
- [前端框架Vue.js中Directive知识详解](https://m.jb51.net/article/92491.htm)
- [vue directive具体的使用方法](https://www.cnblogs.com/heyinwangchuan/p/7905286.html)
- [Vue封装常用指令Directive](https://blog.csdn.net/weixin_30299709/article/details/94873323)
- [git仓库：vue-develop-template](https://github.com/PerseveranceZ/vue-develop-template)

## 需完善的
- webpack搭建更加配置化，代码更加灵活而非现在这么死板
- 有些模块的文件目录结构及放置位置应该更加标准、清晰
- 自定义指令、过滤器、router文件夹可以像service中那样更加灵活，更加解耦，注册到vue的实例上时，分层也可以更加模块化，可不混到main.js入口文件中
- directives、filter、components、css、命名要更加规范化，要有一整套规则
- model层的使用目前采用的是js-model，但此插件距离想象的model层架构有差距,model层应该更加解耦，主要是从后端拿到数据然后做效验，填充，解决写防御性代码的问题，以及数据的处理，返回到view层，出口要求的是view层拿到数据就绑，更加分离
- store对于超大型项目，可采用更加细致化的分解工作
- service层的api插件的使用理解，httpCb中的响应超时处理及其它预留功能完善，弄清楚const文件夹中的作用
- views层的分部，按vue的目前适用范围来说，一般用于web端前台项目(兼容到IE10、且着重于vue的动画，而轻于组件库)、web端后台管理类项目(很少考虑兼容性、轻于动画，而重于基础组件功能、数据的处理)、移动端H5项目(不考虑兼容性、动画较少、可用rem的插件等)。针对这三类项目，可做相应的改变
- 丰富常见工具库到到utils中、针对于web端和H5端的项目，分别整理对应的base.less、mixin.less、reset.less、
- 收集常见的iconfont字体文件、常见的filters、常见的directives
- 像其它UI组件库一样丰富基础组件库(裁剪、断点上传等)

## 未完成的
- 前端监控方案(action-log目录)
- 单元测试(unit-test目录)
- 前端发布(npm命令集成发布及了解相关所有发布的知识)

## 需要整理的
- webpack搭建过程整理
- webpack面试题整理
- 性能优化方案及面试题整理
- 整理base.less(H5和web)、mixin.less(H5和web)、reset.less(H5和web)
- 收集常见的utils、directive、filter
- 制定directives、filter、components、css、命名规则
- 整理less、stylus、scss的使用及引用方法等
- vue的用法总结
- vue的面试题整理

- css + webpack + vue + 性能优化 面试题整理