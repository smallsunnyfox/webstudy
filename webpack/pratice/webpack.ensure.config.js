var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packagejson = require('./package.json');
module.exports = {
    mode: 'development',
    //入口
    entry:{
        "main":"./ensure/main.js",
        "util":Object.keys(packagejson.dependencies)//获取生产环境依赖的库
    },
    output:{
        path:path.resolve('./ensure/dist'),
        filename:'./[name].js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            //chunks主要用于多入口文件
            //当你有多个入口文件时它就会编译生成多个打包后的文件
            //chunks就能选择你要使用哪些js文件
            chunks:['common','util','main'],
            template:"./ensure/index.html",
            inject:true
            //inject: true body head
        })
    ],
    optimization:{
        splitChunks:{
            chunks: 'async',
            minSize:0,
            cacheGroups:{
            }
        }
    }
}