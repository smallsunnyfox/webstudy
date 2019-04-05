import Vue from 'vue'

export default {
    addNum(state, num) {
        state.count += num;
    },
    //不要在这里操作异步数据
    addNumByasync(state, payload) {
        setTimeout(() => {
            state.count += payload.num;
        }, 1000)
    },
    changeStateProp(state,name){
        //手动设置给state中的状态添加属性
        Vue.set(state.myProp,'name',name);
        /*
        Mutations需要遵守Vue的响应规则
        既然Vuex的store中的状态是响应式的，那么当我们变更状态时监视状态的Vue组件也会自动更新
        这也意味着 Vuex 中的 mutation 也需要与使用 Vue 一样遵守一些注意事项
        1.最好提前在你的 store 中初始化好所有所需属性。
        2.当需要在对象上添加新属性时
        你应该使用 Vue.set(obj, 'newProp', 123), 
        或者以新对象替换老对象
        */
    }
}