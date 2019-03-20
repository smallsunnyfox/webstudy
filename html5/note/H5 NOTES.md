# H5 Notes

### 一、H5浏览器支持

#### HTML5浏览器支持

现代浏览器都支持HTML5

所有浏览器，包括旧的和最新的，对无法识别的元素会作为内联元素自动处理 

所以可以 **"教会"** 浏览器处理 **"未知"** 的 HTML 元素。 

ex：HTML5 定了 8 个新的 HTML **语义（semantic）**  元素。所有这些元素都是**块级** 元素。

为了能让旧版本的浏览器正确显示这些元素，你可以设置 CSS 的 **display** 属性值为 **block**

```
header, section, footer, aside, nav, main, article, figure {
   display: block; 
}
```

#### 为HTML添加新元素

```
css:
  myHero {
    display: block;
    background-color: #ddd;
    padding: 50px;
    font-size: 30px;
  } 
html:
  <myHero>我的第一个新元素</myHero>
```

#### 为IE浏览器添加新元素

可以使用 Sjoerd Visscher 创建的 "HTML5 Enabling JavaScript", " **shiv**"  来为 IE 浏览器添加 HTML5 元素 ，针对IE浏览器html5shiv 是比较好的解决方案。html5shiv主要解决HTML5提出的新的元素不被IE6-8识别，这些新元素不能作为父节点包裹子元素，并且不能应用CSS样式。html5shiv.js 引用代码必须放在<head>元素中，因为 IE 浏览器在解析 HTML5 新元素时需要先加载该文件 

```
//谷歌静态资源库
<!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
//百度静态资源库
<!--[if lt IE 9]>
  <script src="http://apps.bdimg.com/libs/html5shiv/3.7/html5shiv.min.js"></script>
<![endif]-->
```

### 二、H5 新元素

#### 绘图元素

<canvas> 标签定义图形，比如图表和其他图像。该标签基于 JavaScript 的绘图 API 

#### 新多媒体元素

<audio> 定义音频内容

<video> 定义视频

<source> 定义多媒体资源

<embed> 定义嵌入的内容

<track> 为诸如<video>和<audio>之类的媒介规定外本文本轨道

#### 新表单元素

<datalist> 定义选项列表。请与 input 元素配合使用该元素，来定义 input 可能的值。 

<keygen>  规定用于表单的密钥对生成器字段。 

<output> 定义不同类型的输出，比如脚本的输出。 

#### 新的语义和结构元素

<article> 定义页面独立的内容区域。 

<aside> 定义页面的侧边栏内容。 

<bdi> 允许您设置一段文本，使其脱离其父元素的文本方向设置。 

<command>  定义命令按钮，比如单选按钮、复选框或按钮 

<details> 用于描述文档或文档某个部分的细节 

<dialog> 定义对话框，比如提示框 

<summary> 标签包含 details 元素的标题 

<figure> 规定独立的流内容（图像、图表、照片、代码等等）。 

<figcaption> 定义 <figure> 元素的标题 

<footer> 定义 section 或 document 的页脚。 

<header> 定义了文档的头部区域 

<mark> 定义带有记号的文本。 

<meter> 定义度量衡。仅用于已知最大和最小值的度量。 

<nav> 定义导航链接的部分。 

<progress>  定义任何类型的任务的进度。 

<ruby> 定义 ruby 注释（中文注音或字符）。 

<rt>  定义字符（中文注音或字符）的解释或发音。 

<rp> 在 ruby 注释中使用，定义不支持 ruby 元素的浏览器所显示的内容。 

<section> 定义文档中的节（section、区段）。 

<time>  定义日期或时间。 

<wbr> 规定在文本中的何处适合添加换行符。 

### 三、H5 Canvas

Canvas是图形容器，可以通过脚本来绘制图形

#### 创建画布

```
<canvas id="myCanvas" width="200" height="100"></canvas>
```

#### 绘制图像

ex:绘制矩形

```
<script> 
var c=document.getElementById("myCanvas"); //找到Canvas对象
var ctx=c.getContext("2d"); //创建context对象
ctx.fillStyle="#FF0000"; //绘制图形为红色
ctx.fillRect(0,0,150,75); //绘制图案为矩形
</script> 
```

##### 1.Canvas坐标

canvas 是一个二维网格。

canvas 的左上角坐标为 (0,0)

##### 2.Canvas路径

moveTo(*x,y*) 定义线条开始坐标

lineTo(*x,y*) 定义线条结束坐标

ex1:绘制线条

```
var c=document.getElementById("myCanvas"); 
var ctx=c.getContext("2d"); 
ctx.moveTo(0,0); 
ctx.lineTo(200,100); 
ctx.stroke();
```

ex2:绘制圆形

```
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #d3d3d3;">
您的浏览器不支持 HTML5 canvas 标签。</canvas>

<script>
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
</script> 
```

##### 3.Canvas文本

- font - 定义字体

- fillText(*text,x,y*) - 在 canvas 上绘制实心的文本

  x,y为Canvas坐标

  ex：使用 "Arial" 字体在画布上绘制一个高 30px 的文字（实心） 

  ```
  var c=document.getElementById("myCanvas");
  var ctx=c.getContext("2d");
  ctx.font="30px Arial";
  ctx.fillText("Hello World",20,50)
  ```

- strokeText(*text,x,y*) - 在 canvas 上绘制空心的文本

  ex：使用 "Arial" 字体在画布上绘制一个高 30px 的文字（空心）： 

  ```
  var c=document.getElementById("myCanvas");
  var ctx=c.getContext("2d");
  ctx.font="30px Arial";
  ctx.strokeText("Hello World",10,50);
  ```

##### 4.Canvas渐变

渐变可以填充在矩形, 圆形, 线条, 文本等等 

各种形状可以自己定义不同的颜色 

以下有两种不同的方式来设置Canvas渐变：

- createLinearGradient(*x,y,x1,y1*) - 创建线性渐变
  - x：渐变开始点的 x 坐标 
  - y：渐变开始点的 y 坐标 
  - x1：渐变结束点的 x 坐标 
  - y1：渐变结束点的 y 坐标 
- createRadialGradient(*x,y,r,x1,y1,r1*) - 创建一个圆渐变
  - x：表示渐变的开始圆的 x 坐标
  -  y：表示渐变的开始圆的 y 坐标
  -  r：表示开始圆的半径
  -  x1：表示渐变的结束圆的 x 坐标
  -  y1：表示渐变的结束圆的 y 坐标
  -  r1：表示结束圆的半径

当我们使用渐变对象，必须使用两种或两种以上的停止颜色

addColorStop()方法指定颜色停止，参数使用坐标来描述，可以是0至1  

使用渐变，设置fillStyle或strokeStyle的值为渐变，然后绘制形状，如矩形，文本，或一条线 

ex1:线性渐变填充矩形

```
var c=document.getElementById("myCanvas"); 
var ctx=c.getContext("2d"); 

// Create gradient 
var grd=ctx.createLinearGradient(0,0,200,0); 
grd.addColorStop(0,"red"); 
grd.addColorStop(1,"white"); 

// Fill with gradient 
ctx.fillStyle=grd; 
ctx.fillRect(10,10,150,80);
```

ex2:圆渐变填充矩形

```
var c=document.getElementById("myCanvas"); 
var ctx=c.getContext("2d"); 

// Create gradient 
var grd=ctx.createRadialGradient(75,50,5,90,60,100); 
grd.addColorStop(0,"red"); 
grd.addColorStop(1,"white"); 

// Fill with gradient 
ctx.fillStyle=grd; 
ctx.fillRect(10,10,150,80);
```

##### 5.Canvas图像

把一幅图像放置到画布上, 使用以下方法:

- drawImage(*image,x,y*)

```
<img id="scream" src="/attachments/image/20160224/1456314599613373.jpg" alt="The Scream" ><p>Canvas:</p>
<canvas id="myCanvas" width="250" height="300" style="border:1px solid #d3d3d3;">
您的浏览器不支持 HTML5 canvas 标签。</canvas>

<script>
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var img=document.getElementById("scream");

img.onload = function() {
	ctx.drawImage(img,10,10);
} 
</script>
```
### 四、H5 内联 SVG

#### SVG 介绍

- SVG 指可伸缩矢量图形 (Scalable Vector Graphics)
- SVG 用于描述二维矢量图形的一种图形格式
- SVG 使用 XML 格式定义图形
- SVG 图像在放大或改变尺寸的情况下其图形质量不会有损失
- SVG 是万维网联盟的标准
- SVG 与 DOM 和 XSL 之类的 W3C 标准是一个整体

#### SVG 好处

- SVG 图像可通过文本编辑器来创建和修改
- SVG 图像可被搜索、索引、脚本化或压缩
- SVG 是可伸缩的
- SVG 图像可在任何的分辨率下被高质量地打印
- SVG 可在图像质量不下降的情况下被放大

#### SVG 用法

```
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
  <polygon points="100,10 40,180 190,60 10,60 160,180"
  style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;">
</svg>
```

#### SVG 和 Canvas 的区别

- SVG是使用XML描述2D图形的**语言**

  这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形

- Canvas是通过JS绘制2D图形的**图形容器**

  Canvas 是逐像素进行渲染的。在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。 

#### SVG 和 Canvas 的比较

| Canvas                                             | SVG                                                     |
| :------------------------------------------------- | ------------------------------------------------------- |
| 依赖分辨率                                         | 不依赖分辨率                                            |
| 不支持事件处理器                                   | 支持事件处理器                                          |
| 弱的文本渲染能力                                   | 最适合带有大型渲染区域的应用程序(比如谷歌地图)          |
| 能够以 .png 或 .jpg 格式保存结果图像               | 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快） |
| 最适合图像密集型的游戏，其中的许多对象会被频繁重绘 | 不适合游戏应用                                          |

### 五、H5 MathML

MathML与 HTML相似度很高，但是比较繁琐。它继承了角括号和双标签（<标签>内容</标签>）的用法。

HTML5 可以在文档中使用 MathML 元素，对应的标签是 <math>...</math> 。

MathML 是数学标记语言，是一种基于XML（标准通用标记语言的子集）的标准，用来在互联网上书写数学符号和公式的置标语言。

### 六、H5拖放

- 拖放的目的是可以让你将某个对象放置到你想要放置的位置。  

- 拖放（Drag 和 drop）是 HTML5 标准的组成部分。 任何元素都能够拖放。 

- 拖放是一种常见的特性，即抓取对象以后拖到另一个位置。 

  - 为了使元素可拖动，把 draggable 属性设置为 true 

    ```
    <!--首先设置draggable="true"使元素可拖动-->
    <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
    	<img id="drag1" draggable="true" ondragstart="drag(event)" ></div>
    <div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
    ```

  - ondragstart 和 setData()

    ondragstart 属性调用了一个函数，drag(event)，它规定了被拖动的数据。

    dataTransfer.setData() 方法设置被拖数据的数据类型和值

  - ondragover

    ondragover 事件规定在何处放置被拖动的数据

    默认地，无法将数据/元素放置到其他元素中。如果需要设置允许放置，我们必须阻止对元素的默认处理方式。

    这要通过调用 ondragover 事件的 event.preventDefault() 方法

  - ondrop

    当放置被拖数据时，会发生 drop 事件 

  ```
  <script type="text/javascript">
  	function allowDrop(ev) {// ondragover 调用
  		ev.preventDefault();
  	}    
  	function drag(ev) {// ondragstart 调用
  		ev.dataTransfer.setData("Text", ev.target.id);
  	}
  	function drop(ev) {// ondrop 调用
  		ev.preventDefault();
  		var data = ev.dataTransfer.getData("Text");
  		ev.target.appendChild(document.getElementById(data));
  	}
  </script>
  ```

### 七、H5物理定位

- HTML5 Geolocation（地理定位）用于定位用户的位置。

  Geolocation 通过请求一个位置信息，用户同意后，浏览器会返回一个包含经度和维度的位置信息！

- HTML5 Geolocation API 用于获得用户的地理位置。

  鉴于该特性可能侵犯用户的隐私，除非用户同意，否则用户位置信息是不可用的。

- #### getCurrentPosition() 
  - navigator.geolocation. getCurrentPosition() 方法来获得用户的位置

  - navigator.geolocation 表示浏览器是否支持获取地理位置

  - getCurrentPosition() 方法的第二个参数用于处理错误 

    - PERMISSION_DENIED - 用户不允许地理定位

    - POSITION_UNAVAILABLE - 无法获取当前位置

    - TIMEOUT - 操作超时

    - UNKNOWN_ERROR - 未知错误

      ```
      function showError(error)
        {
        switch(error.code) 
          {
          case error.PERMISSION_DENIED:
            x.innerHTML="用户拒绝对获取地理位置的请求。"
            break;
          case error.POSITION_UNAVAILABLE:
            x.innerHTML="位置信息是不可用的。"
            break;
          case error.TIMEOUT:
            x.innerHTML="请求用户地理位置超时。"
            break;
          case error.UNKNOWN_ERROR:
            x.innerHTML="未知错误。"
            break;
          }
        }
      ```

  - 如果getCurrentPosition()运行成功，则向参数showPosition中规定的函数返回一个coordinates对象，这个对象始终会返回 latitude、longitude 以及 accuracy 属性。如果可用，则会返回其他下面的属性。 

    | 属性                    | 描述                   |
    | ----------------------- | ---------------------- |
    | coords.latitude         | 十进制数的纬度         |
    | coords.longitude        | 十进制数的经度         |
    | coords.accuracy         | 位置精度               |
    | coords.altitude         | 海拔，海平面以上以米计 |
    | coords.altitudeAccuracy | 位置的海拔精度         |
    | coords.heading          | 方向，从正北开始以度计 |
    | coords.speed            | 速度，以米/每秒计      |
    | timestamp               | 响应的日期/时间        |

- #### watchPosition() 

  -  navigator.geolocation.watchPosition() 返回用户的当前位置，并继续返回用户移动时的更新位置（就像汽车上的 GPS）
  -  clearWatch() - 停止 watchPosition() 方法 