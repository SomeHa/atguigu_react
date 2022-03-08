前端面试整理CSS篇

#### 1、css和js实现div右移1000px动画

```css
    <style>
        div {
            height: 100px;
            width: 100px;
            background-color: aqua;
            transition: 3s;
        }
        div:hover {
            transform: translateX(1000px);
            background-color: brown;
        }
    </style>
```

```html
    <style>
        div {
            height: 100px;
            width: 100px;
            background-color: aqua;
            position: absolute; /*必须加定位才能使用element.style.left*/
        }
    </style>
<body>
    <div id="root"></div>
    <script>
        //动画原理
        //1. 获得盒子当前位置   element.offsetLeft 
        //2、让盒子在当前位置上加1个移动距离  element.style.left = element.offsetLeft + 1 + 'px'
        //3、利用定时器不断重复这个动作
        //4、加一个结束定时器的条件
        //5、注意此元素需要添加定位，才能使用 element.style.left!!!!
        var div = document.getElementById('root')
        div.style.left =  div.offsetLeft  +10 +'px';
        var timer = setInterval(()=>{
            if( div.offsetLeft >= 500){
                clearInterval(timer)
            }
            div.style.left =  div.offsetLeft  +5 +'px'
        },30)
        timer();
    </script>
</body>
```

#### 2、比较display\opacity\visibility

| **比较**           | **display:none** | **opacity:0** | **visibility:hidden** |
| ------------------ | ---------------- | ------------- | --------------------- |
| **占据空间**       | **否**           | **是**        | **是**                |
| **回流与渲染**     | **是**           | **否**        | **否**                |
| **子代继承性**     | **不继承**       | **继承**      | **继承**              |
| **子代反继承**     | **否**           | **否**        | **能**                |
| **transition效果** | **无效**         | **有效**      | **有效**              |
| **绑定的事件**     | **不响应**       | **能响应**    | **不响应**            |

**相同点：visibility:hidden,display:none,opacity:0 都能隐藏dom元素**

**不同点：**

1. **visibility跟opacity是不会改变dom页面，也就说保存在原有位置只是看不见而已。display会改变dom页面，不存在真实的位置**
2. **事件操作：visibility、display不会触发任何事件，opacity可以触发事件如点击事件**

**![img](https://img2020.cnblogs.com/blog/1983300/202006/1983300-20200622161140909-1907547808.jpg)**

#### 3、单行截断

单行文本截断 text-overflow

文本溢出经常用到的应该就是 `text-overflow:ellipsis` 了，只需轻松几行代码就可以实现单行文本截断

https://www.ruanyifeng.com/blog/2015/07/flex-examples.html

#### 4、flex布局

Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为 Flex 布局。行内元素也可以使用 Flex 布局。

#### 5、flex：1

```css
flex: 1等于

flex-grow：1

flex-shrink：1

flex-basis：0%。
```

###### flex属性

`flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。

> ```css
> .item {
>   flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
> }
> ```

该属性有两个快捷值：`auto` (`1 1 auto`) 和 none (`0 0 auto`)。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

###### flex-grow属性

`flex-grow`属性定义项目的放大比例，默认为`0`，即如果存在剩余空间，也不放大。

> ```css
> .item {
>   flex-grow: <number>; /* default 0 */
> }
> ```

![img](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071014.png)

如果所有项目的`flex-grow`属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的`flex-grow`属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

###### flex-shrink属性

`flex-shrink`属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

> ```css
> .item {
>   flex-shrink: <number>; /* default 1 */
> }
> ```

![img](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071015.jpg)

如果所有项目的`flex-shrink`属性都为1，当空间不足时，都将等比例缩小。如果一个项目的`flex-shrink`属性为0，其他项目都为1，则空间不足时，前者不缩小。

负值对该属性无效。

###### flex-basis属性

`flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。

> ```css
> .item {
>   flex-basis: <length> | auto; /* default auto */
> }
> ```

它可以设为跟`width`或`height`属性一样的值（比如350px），则项目将占据固定空间。

#### 6、transition、transform、translate的区别

```css
translate:移动，transform的一个方法

              通过 translate() 方法，元素从其当前位置移动，根据给定的 left（x 坐标） 和 top（y 坐标） 位置参数：
          用法transform: translate(50px, 100px);
              -ms-transform: translate(50px,100px);
              -webkit-transform: translate(50px,100px);
              -o-transform: translate(50px,100px);
              -moz-transform: translate(50px,100px);
 
transform:变形。改变
                 CSS3中主要包括 旋转：rotate() 顺时针旋转给定的角度，允许负值 rotate(30deg)
                   扭曲：skew() 元素翻转给定的角度,根据给定的水平线（X 轴）和垂直线（Y 轴）参数：skew(30deg,20deg)
                   缩放：scale() 放大或缩小，根据给定的宽度（X 轴）和高度（Y 轴）参数： scale(2,4)
                   移动：translate() 平移，传进 x,y值，代表沿x轴和y轴平移的距离
                   所有的2D转换方法组合在一起： matrix()  旋转、缩放、移动以及倾斜元素
                   matrix(scale.x ,, , scale.y , translate.x, translate.y)      
   改变起点位置 transform-origin: bottom left;
   
   综合起来使用：transform: 30deg 1.5 30deg 20deg 100px 200px;
 
transition: 允许CSS属性值在一定的时间区间内平滑的过渡，
            需要事件的触发，例如单击、获取焦点、失去焦点等
            transition:property duration timing-function delay;
                   property:CSS的属性，例如：width height 为none时停止所有的运动，可以为transform
           
                   duration:持续时间
                   timing-function:ease等
                   delay:延迟
                   注意：当property为all的时候所有动画
```



#### 7、如何画一条0.5px的边框

https://www.bbsmax.com/A/1O5EkPAnz7/

#### 8、说一下BFC



#### 9、parent元素宽高不定，实现scale固定宽高比始终4:3

先参考一下，再找找https://blog.csdn.net/yangyaning123/article/details/117400422

#### 10、CSS垂直居中



#### 11、伪元素和伪类的区别



#### 12、position的几个属性和含义



#### 13、说一下盒模型



#### 14、响应式布局方案



#### 15、三栏式布局方案



#### 16、如何提高动画的渲染性能



##### 优化技巧

###### 减少动画元素

减少动画元素，是动画性能优化中首先需要完成的。通过审查页面动画 DOM 元素结构，去除不必要的动画元素，减少元素的数量，相应地会减少布页面局和绘制的时间。

 

###### 尽量使用 fixed、absolute 定位

对于动画元素，尽量使用用 fixed、absolute 定位方式，避免影响到其他节点重排。

 

###### 尽量只改变transform和opacity

能用 transform、opacity 优先使用，其属性的改变不会发生重排和重绘。如位移操作的，可以使用translate 来实现，渐隐渐现效果可以使用 opacity 属性来实现。

 

###### 恰当开启硬件加速效果

对动画元素应用transform: translate3d(0, 0, 0)、will-change: transform 等来开启硬件加速。通常开启硬件加速可以让动画变得更加流畅。但这里需注意，在不需要的时候需去掉避免过多的内存消耗。

```css
transform: translate3d(0, 0, 0);
transform: translateZ(0);
will-change: transform
```