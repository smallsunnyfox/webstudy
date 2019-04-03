import Vue from 'vue'
console.log(Vue);

document.getElementById('aBtn').onclick = function(){
    //异步的加载A.js
    require.ensure([],function(){//第一个参数用于放A依赖的模块比如'./B.js'
        var A = require('./A.js');
        alert(A.data);
    })
}

document.getElementById('bBtn').onclick = function(){
    //异步的加载B.js
    require.ensure([],function(){
        var B = require('./B.js');
        alert(B.data);
    })
}