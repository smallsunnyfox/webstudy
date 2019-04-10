import Vue from 'vue'
//1.导入Vuex
import Vuex from 'vuex'
//2.注入到Vue中
import moduleA from './store/moduleA/index'
Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    a:moduleA
  }
})

/*
export default new Vuex.Store({
  modules:{
    a:moduleA
  },
  //Vuex的五大将
  state: {
    count:1,
    mymsg:'学习vuex',
    lists:[
      {id:1,msg:"我的生活"},
      {id:2,msg:"抽烟"},
      {id:3,msg:"喝酒"},
      {id:4,msg:"烫头"}
    ]
  },
  getters:{
    lists(state){
      return state.lists;
    },
    item:(state)=>(i)=>{
      return state.lists[i] 
    }
  },
  mutations: {
    addNum(state,num){
      state.count +=num;
    },
    //不要在这里操作异步数据
    addNumByasync(state,payload){
      setTimeout(()=>{
        state.count += payload.num;
      },1000)
    }
  },
  actions: {
    addNumByasync({commit},payload){
      setTimeout(()=>{
        commit('addNum',payload.num);
      },1000)
    }
  }
})
*/