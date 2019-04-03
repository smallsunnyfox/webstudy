//es6 Module的模块导入
import Vue from '../node_modules/vue/dist/vue'
import App from './App.vue'
//import {num1,num2,add} from './App.js'
//import './main.css'
//console.log(num1);
//console.log(num2);
//add(num1,num2);
new Vue({
    el:'#app',
    components:{
        App
    },
    template:'<App></App>'
});