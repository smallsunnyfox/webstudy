var App = {
    template:'\
    <div>我是一个入口组件</div>\
    '
};

export default App;

//声名并导出
export var num1 = 2;//作为一整个对象导出

//声名再导出
var num2 = 4;
export {num2};

//导出整个函数
export function add(x,y) {
    return console.log(x+y);
}