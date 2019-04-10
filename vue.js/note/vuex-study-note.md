## Vuex

### (1)起步

#### [安装](https://vuex.vuejs.org/zh/installation.html)

#### 介绍

- Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**

- Vuex 采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化 

- 一个 Vuex 应用的核心是**store**（仓库，一个容器），store包含着你的应用中大部分的**状态 (state)** 

- 内部机制

  ![](vuex.png)

- 什么情况下使用：

  - 不适用：小型简单应用

    用 Vuex 是繁琐冗余的，更适合使用简单的 [store 模式](https://cn.vuejs.org/v2/guide/state-management.html#%E7%AE%80%E5%8D%95%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E8%B5%B7%E6%AD%A5%E4%BD%BF%E7%94%A8)。

  - 适用于：**中大型单页应用**

    你可能会考虑**如何把组件的共享状态抽取出来，以一个全局单例模式管理，不管在哪个组件，都能获取状态/触发行为**，解决问题如下：
    ① 多个视图使用于同一状态：
    传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力

    ② 不同视图需要变更同一状态：
    采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝，通常会导致无法维护的代码

- Vuex和单纯的全局对象有何不同：

  - 1.Vuex 的状态存储是**响应式**的
    当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新

  - 2.你不能直接改变 store 中的状态

    改变 store 中的状态的**唯一途径就是显式地提交 (commit) mutation**，方便我们跟踪每一个状态的变化

### (2)State

##### 单一状态树

- Vuex 使用**单一状态树** ，用一个对象就包含了全部的应用层级状态。至此它便作为一个“唯一数据源 ”而存在 
- 每个应用将仅仅包含一个 store 实例 
- 单一状态树让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。 

##### 获取Vuex状态的方法

- 在计算属性中返回某个状态

  ```
  computed: {
      count () {
        return this.$store.state.count
      }
    }
  ```

  每当 `store.state.count` 变化的时候, 都会重新求取计算属性，并且触发更新相关联的 DOM。 

- mapState 辅助函数

  ```
  // 在单独构建的版本中辅助函数为 Vuex.mapState
  import { mapState } from 'vuex'
  
  export default {
    // ...
    computed: mapState({
      // 箭头函数可使代码更简练
      count: state => state.count,
  
      // 传字符串参数 'count' 等同于 `state => state.count`
      countAlias: 'count',
  
      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState (state) {
        return state.count + this.localCount
      }
    })
  }
  ```

  当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 `mapState` 传一个字符串数组。 

  ```
  computed: mapState([
    // 映射 this.count 为 store.state.count
    'count'
  ])
  ```

- 使用对象展开运算符

  ```
  computed: {
    localComputed () { /* ... */ },
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState({
      // ...
    })
  }
  ```

##### 组件仍然保有局部状态

使用 Vuex 并不意味着你需要将**所有的**状态放入 Vuex。虽然将所有的状态放到 Vuex 会使状态变化更显式和易调试，但也会使代码变得冗长和不直观。如果有些状态严格属于单个组件，最好还是作为组件的**局部状态**。你应该根据你的应用开发需要进行权衡和确定。

