var path = require('path')
const webpack = require('webpack');
const packagejson = require('./package.json');
module.exports = {
    mode: 'development',
    //入口
    entry:{
        "main1":"./multientry/main1.js",
        "main2":"./multientry/main2.js",
        "vendor":Object.keys(packagejson.dependencies)//获取生产环境依赖的库
    },
    output:{
        path:path.resolve('./multientry/dist'),
        filename:'./[name].js'
    },
    optimization:{
        runtimeChunk:{
            name:"runtime"
        },
        splitChunks:{
            minSize:0,
            cacheGroups:{
                vendor:{
                    test: /[\\/]node_modules[\\/]/,
                    name:"vendor",
                    chunks:"all",
                    minChunks:2
                },
                common: {
                    test: /[\\/]multientry[\\/]/,
                    name: 'common',
                    chunks: 'all',
                    minChunks: 2
                }
            }
        }
    }
}