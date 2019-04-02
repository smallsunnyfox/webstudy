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

##### [loader](https://www.webpackjs.com/concepts/loaders/#configuration):

[如何编写一个loader](https://www.webpackjs.com/contribute/writing-a-loader/)

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

