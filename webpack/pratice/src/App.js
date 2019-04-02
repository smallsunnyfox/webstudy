import imgSrc from '../dist/assert/iu1.png'

var App = {
    data() {
        return {
            imgSrc:imgSrc
        }
    },
    template:'\
    <div>我老婆\
        <br>\
        <img height="700px" width="600px" :src="imgSrc" alt="老婆"/>\
    </div>\
    '
};

export default App;

//声名并导出
export var num1 = 2;//作为一整个对象导出

//声名再导出
var num2 = 6;
export {num2};

//导出整个函数
export function add(x,y) {
    return console.log(x+y);
}