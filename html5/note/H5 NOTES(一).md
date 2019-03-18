# H5 NOTES(一)

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



