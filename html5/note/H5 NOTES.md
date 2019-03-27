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

### 八、H5 Video

HTML5 规定了一种通过 video 元素来包含视频的标准方法。

#### video标签的属性

| 属性     | 值                   | 描述                                                         |
| -------- | -------------------- | ------------------------------------------------------------ |
| autoplay | autoplay             | 如果出现该属性，则视频在就绪后马上播放。                     |
| controls | controls             | 如果出现该属性，则向用户显示控件，比如播放按钮。             |
| height   | pixels               | 设置视频播放器的高度。                                       |
| loop     | loop                 | 如果出现该属性，则当媒介文件完成播放后再次开始播放。         |
| muted    | muted                | 如果出现该属性，视频的音频输出为静音。                       |
| poster   | URL                  | 规定视频正在下载时显示的图像，直到用户点击播放按钮。         |
| preload  | auto  metadata  none | 如果出现该属性，则视频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。 |
| src      | URL                  | 要播放的视频的 URL。                                         |
| width    | pixels               | 设置视频播放器的宽度。                                       |

#### [HTML DOM Video 对象](https://www.w3cschool.cn/jsref/dom-obj-video.html)

### 九、H5 Audio

HTML5 提供了播放音频文件的标准。

通过使用HTML5中的audio功能，你可以实现与flash相同的功能，即回放、跳转、缓冲等

#### audio标签的属性

| 属性     | 值                   | 描述                                                        |
| -------- | -------------------- | ----------------------------------------------------------- |
| autoplay | autoplay             | 如果出现该属性，则音频在就绪后马上播放。                    |
| controls | controls             | 如果出现该属性，则向用户显示音频控件（比如播放/暂停按钮）。 |
| loop     | loop                 | 如果出现该属性，则每当音频结束时重新开始播放。              |
| muted    | muted                | 如果出现该属性，则音频输出为静音。                          |
| preload  | auto  metadata  none | 规定当网页加载时，音频是否默认被加载以及如何被加载。        |
| src      | URL                  | 规定音频文件的 URL。                                        |

#### [HTML DOM Audio 对象](https://www.w3cschool.cn/jsref/dom-obj-audio.html)

### 十、H5 Input 类型

| 类型名         | 作用                                                         | example                                                      |
| :------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| color          | 选取颜色                                                     | <input type="color" name="favcolor">                         |
| date           | 选择一个日期                                                 | 生日: <input type="date" name="bday">                        |
| datetime       | 选择一个日期（UTC 时间）                                     | 生日 (日期和时间): <input type="datetime" name="bdaytime">   |
| datetime-local | 选择一个日期和时间 (无时区)                                  | 生日 (日期和时间): <input type="datetime-local" name="bdaytime"> |
| email          | 用于应该包含 e-mail 地址的输入域                             | E-mail: <input type="email" name="email">                    |
| month          | 选择一个月份                                                 | 生日 (月和年): <input type="month" name="bdaymonth">         |
| number         | 用于应该包含数值的输入域                                     | 数量 ( 1 到 5 之间 ): <input type="number" name="quantity" min="1" max="5" value="3" step="1"> |
| range          | 用于应该包含一定范围内数字值的输入域,显示为滑动条            | <input type="range" name="points" min="1" max="10" step="1" value="3"> |
| search         | 用于搜索域                                                   | Search Google: <input type="search" name="googlesearch">     |
| tel            | 定义输入电话号码字段                                         | 电话号码: <input type="tel" name="usrtel">                   |
| time           | 允许你选择一个时间                                           | 选择时间: <input type="time" name="usr_time">                |
| url            | 用于应该包含 URL 地址的输入域。  在提交表单时，会自动验证 url 域的值。 | 添加您的主页: <input type="url" name="homepage">             |
| week           | 选择周和年                                                   | 选择周: <input type="week" name="week_year">                 |

### 十一、H5表单

#### (1) H5表单元素

H5新的表单元素：<datalist>	<keygen>	<output>

##### datalist元素

<datalist> 元素规定输入域的选项列表。

<datalist> 属性规定 form 或 input 域应该拥有自动完成功能。当用户在自动完成域中开始输入时，浏览器应该在该域中显示填写的选项：

使用 <input> 元素的列表属性与 <datalist> 元素绑定.

##### keygen元素

<keygen> 元素的作用是提供一种验证用户的可靠方法。

<keygen>标签规定用于表单的密钥对生成器字段。

当提交表单时，会生成两个键，一个是私钥，一个公钥。

私钥（private key）存储于客户端，公钥（public key）则被发送到服务器。公钥可用于之后验证用户的客户端证书（client certificate）。

##### output元素

<output> 元素用于不同类型的输出，比如计算或脚本输出 

#### (2) H5表单属性

<form>新属性：

- autocomplete 自动完成功能 

  适用于 text, search, url, telephone, email, password, datepickers, range 以及 color

- novalidate 规定在提交表单时不应该验证 form 或 input 域 

<input>新属性：

- autocomplete 自动完成功能 

  适用于 text, search, url, telephone, email, password, datepickers, range 以及 color

- autofocus 规定在页面加载时，域自动地获得焦点。 

- form 规定输入域所属的一个或多个表单 

- formaction 用于描述表单提交的URL地址  会覆盖<form> 元素中的action属性 

  适用于 type="submit" 和 type="image" 

- formenctype 描述了表单提交到服务器的数据编码 覆盖 form 元素的 enctype 属性 

  适用于 type="submit" 和 type="image" 

- formmethod 定义了表单提交的方式  覆盖了 <form> 元素的的method 属性 

  适用于 type="submit" 和 type="image"

- formnovalidate 描述了 <input> 元素在表单提交时无需被验证 会覆盖 <form> 元素的novalidate属性 

  适用于 type="submit"一起使用 

- formtarget 指定一个名称或一个关键字来指明表单提交数据接收后的展示  会覆盖 <form>元素的target属性 

  适用于 type="submit" 和 type="image"配合使用 

- height and width 规定用于 image 类型的 <input> 标签的图像高度和宽度  

  只适用于 image 类型的<input> 

- list 规定输入域的 datalist。datalist 是输入域的选项列表 

- min and max：min、max 和 step 属性用于为包含数字或日期的 input 类型规定限定（约束）

  适用于 date pickers、number 以及 range  

- multiple 规定<input> 元素中可选择多个值 

  适用于 email 和 file 

- pattern (regexp) 描述了一个正则表达式用于验证<input> 元素的值 

  适用于 text, search, url, tel, email, 和 password. 

- placeholder 描述输入域所期待的值  

  适用于 text, search, url, tel, email, 和 password 

- required  规定必须在提交之前填写输入域  

  适用于 text, search, url, telephone, email, password, date pickers, number, checkbox, radio 以及 file 

- step 为输入域规定合法的数字间隔 

  适用于 number, range, date, datetime, datetime-local, month, time 和 week 

### 十二、H5语义元素

#### (1)什么是语义元素

- 语义= 意义
- 语义元素 = 元素的意义
- 一个语义元素能够清楚的描述其意义给浏览器和开发者 

#### (2)H5中新的语义元素

- <header> 描述了文档的头部区域 ，注意用于定义内容的介绍展示区域 

- <nav> 定义导航链接的部分 

- <section> 定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分 

- <article> 定义独立的内容 

- <aside> 定义页面主区域内容之外的内容（比如侧边栏），内容应与主区域的内容相关

- <figcaption> 定义 <figure> 元素的标题 ，应该被置于 "figure" 元素的第一个或最后一个子元素的位置 

- <figure> 规定独立的流内容（图像、图表、照片、代码等等） 

- <footer> 描述了文档的底部区域 ，应该包含它的包含元素 

  一个页脚通常包含文档的作者，著作权信息，链接的使用条款，联系信息等 

#### (3)H5语义元素的使用

为了让这些块及元素在所有版本的浏览器中生效，需要在样式表文件中设置一下属性 

```css
 header, section, footer, aside, nav, article, figure
 { 
 display: block; 
 } 
```

可以使用HTML5 Shiv Javascript脚本来解决IE8 及更早IE版本的兼容问题 

在浏览器小于IE9版本时引入html5shiv.js文件 