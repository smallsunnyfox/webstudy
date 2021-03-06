const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode: 'development',
    //入口
    entry: {
        //可以有一个入口
        //也可以有一个，如果有一个就默认从这一个入口开始解析
        "main":"./src/main.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),//相对转绝对
        filename: './build.js'
    },
    //声名模块：包含各个loader
    module:{
        rules:[
            //style-loader css-loader
            //遇到后缀为.css的文件，webpack会先使用css-loader去加载这个文件
            //最后计算完的css,将会使用style-loader生成一个内容为最终解析完的css代码的style标签，放到head标签里
            //webpack在打包过程中，遇到后缀为css的文件，就会使用style-loader和css-loader去加载这个文件
            {
                test:/\.css$/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'}
                ]
            },
            {
                test:/\.(jpg|png|jpeg|gif|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:260000,//表示低于200000字节的图片会以 base64编码
                            //对于比较小的图片，使用base64编码，可以减少一次图片的网络请求
                            //对于比较大的图片，使用base64就不合适了，编码会和html混在一起，一方面可读性差，另一方面加大html页面的大小，反而加大了下载页面的大小
                            //因此设置一个合理的limit是非常有必要的
                            outputPath:"./dist/assert",
                            publicPath:"./dist/assert"
                        }
                    }
                ]
            },
            {
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
            },
            {
                test:/\.vue$/,
                use:[
                    {
                        loader:'vue-loader'
                    }
                ]
            }
        ]
    },
    plugins:[
        //插件
        new HtmlWebpackPlugin({
            template:'./src/index.html'//参照物
        }),
        new VueLoaderPlugin({
            
        })
    ],
    watch:true,//文件监视改动 自动产出build.js
  };