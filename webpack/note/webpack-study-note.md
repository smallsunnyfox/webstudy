## webpack

手动实现一个vue-cli脚手架工具同时也学习webpack的使用

#### (1)介绍

webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)

#### (2)模块实现

1.下载webpack和webpack-cli

```
npm install webpack -g //安装一个全局的webpack；
npm install --save-dev webpack //在当前项目里面也安装一个webpack
npm install webpack-cli -g //安装全局的webpack-cli
npm install webpack-cli -D //在开发环境中局部安装webpack-cli
webpack -v//安装完成后使用该命令检验
```

2.打包

```
npx webpack a.js --output-filename b.js --output-path . --mode development
```

在package.json里配置如下

```
"scripts": {
"build":"npx webpack ./main.js --output-filename ./build.js --output-path . --mode development"
}
//可以使用npm run build运行build里的命令
```

#### (3)webpack.config.js文件配置

```
module.exports = {
    mode: 'development',
    //入口
    entry: {
        //可以有一个入口
        //也可以有一个，如果有一个就默认从这一个入口开始解析
        "main":"./main.js"
    },
    output: {
      filename: './build.js'
    },
    watch:true,//文件监视改动 自动产出build.js
  };
```

#### (4)css文件处理

导入css文件后编译出错需要使用loader解决直接在 JavaScript 模块中 `import` CSS文件的问题

##### [loader](https://www.webpackjs.com/concepts/loaders/#configuration)

##### [如何编写一个loader](https://www.webpackjs.com/contribute/writing-a-loader/)

loader 用于对模块的源代码进行转换。loader 可以使你在 `import` 或"加载"模块时预处理文件。因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的强大方法。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript，或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 `import` CSS文件！

##### 下载并配置

[对css文件的处理](https://blog.csdn.net/hjh15827475896/article/details/86249370)

`npm i css-loader style-loader -D`

```
module:{
	rules:[
	//style-loader css-loader
	//遇到后缀为.css的文件，webpack会先使用css-loader去加载这个文件
	//最后计算完的css,将会使用style-loader生成一个内容为最终解析完的css代码的style标签，放到head标签里
	//webpack在打包过程中，遇到后缀为css的文件，就会使用style-loader和css-loader去加载这个文件
        {
            test:/\.css$/,
            use:[
                'style-loader',
                'css-loader'
            ]
        }
	]
}
```

[对图片文件的处理](https://blog.csdn.net/hjh15827475896/article/details/86249370)

`npm i url-loader file-loader img-loader -D`

```
	test:/\.(jpg|png|jpeg|gif|svg)$/,
	use:[
		{
			loader:'url-loader',
			options:{
                limit:200000,
                publicPath:"./dist"
			}
		}
	]
```

#### (5)html-webpack-plugin插件的使用

##### 下载

`npm i html-webpack-plugin -D`

##### 配置

引用

`const HtmlWebpackPlugin = require('html-webpack-plugin');` 

配置插件

```js
plugins:[
        //插件
        new HtmlWebpackPlugin({
            template:'./src/index.html'//参照物
        })
]
```

#### (6)webpack-dev-server

##### 下载

`npm install webpack-dev-server --save-dev`

##### 配置

常用配置参数

--open 自动打开浏览器

--hot 热更新，不在舒心的情况下替换css样式

--inline 自动刷新

--port 9999 制定端口

--process 显示编译进度

在package.json中配置之后即可使用

#### (7)es6的解析

##### 模块介绍

- babel-core

  javascript babel-core 的作用是把js代码分析成ast(抽象语法树)，方便各个插件分析语法进行相应的处理。有些新语法在低版本js中是不存在的，如箭头函数，rest函数，函数默认值，这种语言层面的不兼容只能通过将代码转为ast，分析器语法后再转为低版本js

  babel转译器本身，提供了babel的转译API，如babel.transform等，用于对代码进行转译。像webpack的babel-loader就是调用这些API来完成转译过程的。

- babel-loader

  将es6的代码通过transform进行转译

- babel-preset-env

  babel官方做了一些预设的插件集，称之为preset

  以JS标准为例，babel提供了如下的一些preset：

  - es2015
  - es2016
  - es2017
  - env

  es20xx的preset只转译该年份批准的标准，而env则指代最新的标准，包含了latest和es20xx各年份

- babel-plugin-transform-runtime

  babel默认只转换新的Javascript语法，而不转换新的API。例如：Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转译。如果想使用这些新的对象和方法，必须使用babel-polyfill，为当前环境提供一个垫片。

  [babel的polyfill和runtime的区别](https://segmentfault.com/q/1010000005596587?from=singlemessage%isappinstalled=1 )

##### 模块下载

```
npm install babel-core babel-loader babel-preset-env 
babel-plugin-transform-runtime -D
```

##### 模块配置

在webpack-dev-config.js中配置loader

```
//处理es6 7 8
test:/\.js$/,
exclude:/node_modules/,
use:[
	{
		loader:'babel-loader',
		options:{
			presets:['env'],//处理关键字
			plugins:['transform-runtime'],//处理函数    
		}
	}
]
```

#### (8)单文件引入

##### 下载

```
npm install -D vue-loader vue-template-compiler
```

##### 配置

```
// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  module: {
    rules: [
      // ... 其它规则
      {
        test: /\.vue$/,
        use:[
        	{loader:'vue-loader'}
        ]
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ]
}
```

**这个插件是必须的！** 它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。

#### (9)[CommonsChunkPlugin](https://www.webpackjs.com/plugins/commons-chunk-plugin/)的使用

##### 介绍

CommonsChunkPlugin主要用来提取第三方库和公共模块，避免首屏加载的bundle文件或者按需加载的bundle文件体积过大，从而导致加载时间过长，着实是优化的一把利器

##### chunk的分类

- webpack当中配置的入口文件（entry）是chunk，

  可以理解为**entry chunk**

- 入口文件以及它的依赖文件通过code splite(代码分割)出来的也是chunk，

  可以理解为**children chunk**

- 通过CommonsChunkPlugin创建出来的文件也是chunk，

  可以理解为**commons chunk**

##### CommonsChunkPlugin可配置的属性

- name

  可以是已经存在的chunk（一般指入口文件）对应的name，那么就会把公共模块代码合并到这个chunk上；否则，会创建名字为name的commons chunk进行合并

- filename

  指定commons chunk的文件名

- chunks

  指定source chunk，即指定从哪些chunk当中去找公共模块，省略该选项的时候，默认就是entry chunks

- minChunks

  既可以是数字，也可以是函数，还可以是Infinity

##### 验证三种情况

- 不分离出第三方库和自定义公共模块
- 分离出第三方库、自定义公共模块、webpack运行文件，但它们在同一个文件夹
- 单独分离第三方库、自定义公共模块、webpack运行文件，各自在不同文件

#### (10)webpack异步加载的原理

##### webpack.ensure的介绍

有人称它为异步加载，也有人说做代码切割，其实它就是把js模块给独立导出一个.js文件的，然后使用这个模块的时候，webpack会构造script dom元素，由浏览器发起异步请求这个js文件。

##### webpack.ensure的原理

它就是把一些js模块给独立出一个个js文件，然后需要用到的时候，再创建一个script对象，加入到document.head对象中即可，浏览器会自动帮我们发起请求，去请求这个js文件，再写个回调去定义得到这个js文件后需要做什么业务逻辑操作

##### 实例

main.js

- A.js封装了aBtn按钮点击后执行的业务逻辑
- B.js封装了bBtn按钮点击后执行的业务逻辑
- vue.js封装了main.js需要利用的包

针对上面的需求优化方案如下

假设三个文件都是非常大的文件因为A B 都不是main.js必须有的，即未来可能发生的操作，那么把它们利用异步加载，当发生的时候再去加载就行了

vue.js是main.js立即马上依赖的工具箱，但是它又非常的大，所以将其配置打包成一个公共模块，利用浏览器的并发加载，加快下载速度，即可完成优化。