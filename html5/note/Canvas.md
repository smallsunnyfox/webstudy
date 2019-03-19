## Canvas参考手册

### 颜色、样式和阴影

| 属性                                                         | 描述                                       |
| ------------------------------------------------------------ | ------------------------------------------ |
| [fillStyle](https://www.w3cschool.cn/edit/htmltags/canvas-fillstyle.html) | 设置或返回用于填充绘画的颜色、渐变或模式。 |
| [strokeStyle](https://www.w3cschool.cn/edit/htmltags/canvas-strokestyle.html) | 设置或返回用于笔触的颜色、渐变或模式。     |
| [shadowColor](https://www.w3cschool.cn/edit/htmltags/canvas-shadowcolor.html) | 设置或返回用于阴影的颜色。                 |
| [shadowBlur](https://www.w3cschool.cn/edit/htmltags/canvas-shadowblur.html) | 设置或返回用于阴影的模糊级别。             |
| [shadowOffsetX](https://www.w3cschool.cn/edit/htmltags/canvas-shadowoffsetx.html) | 设置或返回阴影与形状的水平距离。           |
| [shadowOffsetY](https://www.w3cschool.cn/edit/htmltags/canvas-shadowoffsety.html) | 设置或返回阴影与形状的垂直距离。           |

| 方法                                                         | 描述                                      |
| ------------------------------------------------------------ | ----------------------------------------- |
| [createLinearGradient()](https://www.w3cschool.cn/edit/htmltags/canvas-createlineargradient.html) | 创建线性渐变（用在画布内容上）。          |
| [createPattern()](https://www.w3cschool.cn/edit/htmltags/canvas-createpattern.html) | 在指定的方向上重复指定的元素。            |
| [createRadialGradient()](https://www.w3cschool.cn/edit/htmltags/canvas-createradialgradient.html) | 创建放射状/环形的渐变（用在画布内容上）。 |
| [addColorStop()](https://www.w3cschool.cn/edit/htmltags/canvas-addcolorstop.html) | 规定渐变对象中的颜色和停止位置。          |

### 线条样式

| 属性                                                         | 描述                                       |
| ------------------------------------------------------------ | ------------------------------------------ |
| [lineCap](https://www.w3cschool.cn/edit/htmltags/canvas-linecap.html) | 设置或返回线条的结束端点样式。             |
| [lineJoin](https://www.w3cschool.cn/edit/htmltags/canvas-linejoin.html) | 设置或返回两条线相交时，所创建的拐角类型。 |
| [lineWidth](https://www.w3cschool.cn/edit/htmltags/canvas-linewidth.html) | 设置或返回当前的线条宽度。                 |
| [miterLimit](https://www.w3cschool.cn/edit/htmltags/canvas-miterlimit.html) | 设置或返回最大斜接长度。                   |

### 矩形

| 方法                                                         | 描述                           |
| ------------------------------------------------------------ | ------------------------------ |
| [rect()](https://www.w3cschool.cn/edit/htmltags/canvas-rect.html) | 创建矩形。                     |
| [fillRect()](https://www.w3cschool.cn/edit/htmltags/canvas-fillrect.html) | 绘制"被填充"的矩形。           |
| [strokeRect()](https://www.w3cschool.cn/edit/htmltags/canvas-strokerect.html) | 绘制矩形（无填充）。           |
| [clearRect()](https://www.w3cschool.cn/edit/htmltags/canvas-clearrect.html) | 在给定的矩形内清除指定的像素。 |

### 路径

| 方法                                                         | 描述                                                      |
| ------------------------------------------------------------ | --------------------------------------------------------- |
| [fill()](https://www.w3cschool.cn/edit/htmltags/canvas-fill.html) | 填充当前绘图（路径）。                                    |
| [stroke()](https://www.w3cschool.cn/edit/htmltags/canvas-stroke.html) | 绘制已定义的路径。                                        |
| [beginPath()](https://www.w3cschool.cn/edit/htmltags/canvas-beginpath.html) | 起始一条路径，或重置当前路径。                            |
| [moveTo()](https://www.w3cschool.cn/edit/htmltags/canvas-moveto.html) | 把路径移动到画布中的指定点，不创建线条。                  |
| [closePath()](https://www.w3cschool.cn/edit/htmltags/canvas-closepath.html) | 创建从当前点回到起始点的路径。                            |
| [lineTo()](https://www.w3cschool.cn/edit/htmltags/canvas-lineto.html) | 添加一个新点，然后在画布中创建从该点到最后指定点的线条。  |
| [clip()](https://www.w3cschool.cn/edit/htmltags/canvas-clip.html) | 从原始画布剪切任意形状和尺寸的区域。                      |
| [quadraticCurveTo()](https://www.w3cschool.cn/edit/htmltags/canvas-quadraticcurveto.html) | 创建二次贝塞尔曲线。                                      |
| [bezierCurveTo()](https://www.w3cschool.cn/edit/htmltags/canvas-beziercurveto.html) | 创建三次贝塞尔曲线。                                      |
| [arc()](https://www.w3cschool.cn/edit/htmltags/canvas-arc.html) | 创建弧/曲线（用于创建圆形或部分圆）。                     |
| [arcTo()](https://www.w3cschool.cn/edit/htmltags/canvas-arcto.html) | 创建两切线之间的弧/曲线。                                 |
| [isPointInPath()](https://www.w3cschool.cn/edit/htmltags/canvas-ispointinpath.html) | 如果指定的点位于当前路径中，则返回 true，否则返回 false。 |

### 转换

| 方法                                                         | 描述                                             |
| ------------------------------------------------------------ | ------------------------------------------------ |
| [scale()](https://www.w3cschool.cn/edit/htmltags/canvas-scale.html) | 缩放当前绘图至更大或更小。                       |
| [rotate()](https://www.w3cschool.cn/edit/htmltags/canvas-rotate.html) | 旋转当前绘图。                                   |
| [translate()](https://www.w3cschool.cn/edit/htmltags/canvas-translate.html) | 重新映射画布上的 (0,0) 位置。                    |
| [transform()](https://www.w3cschool.cn/edit/htmltags/canvas-transform.html) | 替换绘图的当前转换矩阵。                         |
| [setTransform()](https://www.w3cschool.cn/edit/htmltags/canvas-settransform.html) | 将当前转换重置为单位矩阵。然后运行 transform()。 |

### 文本

| 属性                                                         | 描述                                       |
| ------------------------------------------------------------ | ------------------------------------------ |
| [font](https://www.w3cschool.cn/edit/htmltags/canvas-font.html) | 设置或返回文本内容的当前字体属性。         |
| [textAlign](https://www.w3cschool.cn/edit/htmltags/canvas-textalign.html) | 设置或返回文本内容的当前对齐方式。         |
| [textBaseline](https://www.w3cschool.cn/edit/htmltags/canvas-textbaseline.html) | 设置或返回在绘制文本时使用的当前文本基线。 |

| 方法                                                         | 描述                         |
| ------------------------------------------------------------ | ---------------------------- |
| [fillText()](https://www.w3cschool.cn/edit/htmltags/canvas-filltext.html) | 在画布上绘制"被填充的"文本。 |
| [strokeText()](https://www.w3cschool.cn/edit/htmltags/canvas-stroketext.html) | 在画布上绘制文本（无填充）。 |
| [measureText()](https://www.w3cschool.cn/edit/htmltags/canvas-measuretext.html) | 返回包含指定文本宽度的对象。 |

### 图像绘制

| 方法                                                         | 描述                           |
| ------------------------------------------------------------ | ------------------------------ |
| [drawImage()](https://www.w3cschool.cn/edit/htmltags/canvas-drawimage.html) | 向画布上绘制图像、画布或视频。 |

### 像素操作

| 属性                                                         | 描述                                                  |
| ------------------------------------------------------------ | ----------------------------------------------------- |
| [width](https://www.w3cschool.cn/edit/htmltags/canvas-imagedata-width.html) | 返回 ImageData 对象的宽度。                           |
| [height](https://www.w3cschool.cn/edit/htmltags/canvas-imagedata-height.html) | 返回 ImageData 对象的高度。                           |
| [data](https://www.w3cschool.cn/edit/htmltags/canvas-imagedata-data.html) | 返回一个对象，其包含指定的 ImageData 对象的图像数据。 |

| 方法                                                         | 描述                                                        |
| ------------------------------------------------------------ | ----------------------------------------------------------- |
| [createImageData()](https://www.w3cschool.cn/edit/htmltags/canvas-createimagedata.html) | 创建新的、空白的 ImageData 对象。                           |
| [getImageData()](https://www.w3cschool.cn/edit/htmltags/canvas-getimagedata.html) | 返回 ImageData 对象，该对象为画布上指定的矩形复制像素数据。 |
| [putImageData()](https://www.w3cschool.cn/edit/htmltags/canvas-putimagedata.html) | 把图像数据（从指定的 ImageData 对象）放回画布上。           |

### 合成

| 属性                                                         | 描述                                     |
| ------------------------------------------------------------ | ---------------------------------------- |
| [globalAlpha](https://www.w3cschool.cn/edit/htmltags/canvas-globalalpha.html) | 设置或返回绘图的当前 alpha 或透明值。    |
| [globalCompositeOperation](https://www.w3cschool.cn/edit/htmltags/canvas-globalcompositeoperation.html) | 设置或返回新图像如何绘制到已有的图像上。 |

### 其他

| 方法          | 描述                             |
| ------------- | -------------------------------- |
| save()        | 保存当前环境的状态。             |
| restore()     | 返回之前保存过的路径状态和属性。 |
| createEvent() | 创建新的 Event 对象              |
| getContext()  | 获得用于在画布上绘图的对象       |
| toDataURL()   | 导出在 canvas 元素上绘制的图像   |