//es6 Module的模块导入
import Vue from '../node_modules/vue/dist/vue'
import App from './App'
import {num1,num2,add} from './App'
import './main.css'
console.log(num1);
console.log(num2);
add(num1,num2);
new Vue({
    el:'#app',
    components:{
        App
    },
    template:'<App></App>'
});