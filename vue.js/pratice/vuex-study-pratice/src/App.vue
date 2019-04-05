<template>
  <div id="app">
    <h2>count:{{count}}</h2>
    <button @click="addCount">同步计算</button>
    <button @click="addCountByasync">异步mutations计算</button>
    <button @click="addCountByasync2">异步actions计算</button>
    <h2>countAlisa:{{count}}</h2>
    <h2>countLocalState:{{count}}</h2>
    <HelloWorld />    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {mapState} from 'vuex'
export default {
  name: 'app',
  data() {
    return {
      num:10
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    addCount(){
      //修改状态的唯一方法是提交mutations
      this.$store.commit('addNum',1);
    },
    addCountByasync(){
      //普通提交，第一个参数是事件的名字，第二个参数是传递的参数表
      //this.$store.commit('addNumByasync',5);
      //以对象的方式提交
      this.$store.commit({
        type:"addNumByasync",
        num:5
      });
    },
    addCountByasync2(){
      this.$store.dispatch('addNumByasync',{num:5});
    }
  },
  /* 1.普通获取store中的状态
  computed:{
    count(){
      return this.$store.state.count
    }
  }
  */
  /* 2.使用mapState函数
  computed:mapState({
    //1.箭头函数
    count:state=>state.count,
    //2.传字符串参数'count'等同于state=>state.count
    countAlisa:'count',
    countLocalState(state){
      return state.count + this.num
    }
  })
 */
  // 3.使用对象的展开运算符
  computed:{
    ...mapState({
      count:state=>state.a.count,
      countAlisa:'count',
      countLocalState(state){
        return state.a.count + this.num
      }
    })
  }
  /*
  computed: {
    //当前组件的计算属性的方法跟store中state的key是一样的可以使用此种简便方式
    ...mapState([
      'count',
      
    ])
  },
  */
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
