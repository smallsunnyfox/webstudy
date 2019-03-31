## Vue-router

#### (1)实现原理

##### 传统开发方式

- url改变后，立刻发生请求响应整个页面
- 缺点：有可能资源过多，传统开发会让页面出现白屏

##### SPA开发方式

- 锚点值改变后不会立刻发送请求，而是在某个合适的时机发起ajax请求页面局部渲染
- 优点：页面不立刻跳转 用户体验好
- ex: Vue Angular React

##### EX

```javascript
var oDiv = document.getElementById('app');
window.onhashchange = function(){
	console.log(location.hash);
	switch (location.hash) {
		case '#/login':
			oDiv.innerHTML = '<h2>我是登录页面</h2>'
			break;
		case '#/register':
			oDiv.innerHTML = '<h2>我是注册页面</h2>'
			break;
		default:
			break;
	}
};
```

#### (2)基本使用

##### 使用步骤

- 引入包
- 创建实例化VueRouter对象
- 配置路由对象和路由匹配的规则
- 将VueRouter对象交给Vue实例化对象管理

##### 两个全局组件

- router-link：对应a标签 to属性对应href属性
- router-view：路由匹配组件的出口

##### 两个对象

- this.$router：即VueRouter对象
- this.$route：配置路由信息的对象

#### (3)命名路由

```
//给路由匹配规则添加name属性之后即可使用
<router-link :to="{name:'路由的名字'}">XXX</router-link>
```

#### (4)路由参数

##### 动态路由参数

- 声名：`path:"/user/:id"`
- 使用：`<router-link :to="{name:'userP',params:{id:1}}">用户1</router-link>` 
- 获取：`console.log(this.$route.params.id);` 

##### 查询路由参数

- 声名：`path:"/user"` 
- 使用：`<router-link :to="{name:'userQ',query:{userId:2}}">用户2</router-link>` 
- 获取：`console.log(this.$route.query.userId);`

#### (5)嵌套路由

##### 地址栏上的路由范式

- 1.xxxx.html#/user/1 params动态路由参数
- 2.xxxx.html#/user?userId=1 query 

##### 嵌套路由的使用

- 嵌套路由其实是一个router-view中嵌套另外一个router-view
- 应用于子路由是不同的页面结构的情况下
- 例如：/home/music ===>/home/movie