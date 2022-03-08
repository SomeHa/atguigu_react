



##### 1，JavaScript的typeof返回哪些数据类型？

​        答案：string、Boolean，number，underfined，null，object，function

##### 2，列举三种强制类型转换和两种隐式类型转换？ 

​        答案：强制 ——  number()、parseInt()、parseFloat()；

                   隐式 ——  ===  != ( == )

##### 3， split() 和 join() 的区别？

```
split是按照某种规则将字符串分割成数组；

join是按照某种规则将数组内的所有元素拼接成一个字符串。
```

##### 4，数组方法pop() , push() , shift() , unshift() 都是什么意思？

​        答案：pop()方法是将数组的最后一项元素删除；push()方法是在数组的最后位置添加一个元素；shift()方法是将数组头部第一个元素删除；unshift()方法是在数组的头部第一个位置处添加一个元素。

##### 5，IE和标准浏览器下有哪些兼容的写法？

         var ev = ev || window.event;
         document.documentElement.clientWidth || document.clientWidth;
    
          var target = ev.srcElement || window.event.target;

##### 6，Ajax请求的时候get和post的区别？

​         答案：

    	get的请求体在URL后边按照hash形式，post的请求体放在虚拟载体中；
    	
    	get有大小限制，post理论上没有大小限制；
    
        get请求的内容放在URL后边显示出来，存在安全性问题；
    
        get是请求数组，post是提交数据

##### 7，call和apply的区别？

​        答案：call和apply都可以定义this的指向，区别是他们接受的参数不同：

        call(thisObj,ary1,ary2,ary3) , apply(thisObj,argument)

##### 8，Ajax请求时，如何处理得到的JSON数据？

​        答案：JSON.parse()将JSON数据转化为对象。

##### 9，事件委托是什么？

​        答案：利用冒泡的原理，将底层DOM对象要执行的动作让他的某个父元素代替执行。

##### 10，闭包是什么？

​        答案： 简单来说是函数发生嵌套，内函数使用外函数变量，造成变量无法被垃圾回收机制释放。缺点：内存不回被释放，造成内存溢出。

##### 11，如何阻止事件冒泡？



    IE：ev.cancelBubble = true;
    非IE：ev.stopPropagation();

##### 12，如何阻止默认事件？

    ev.preventDefault();       ev.preventDefault();     或者：return false;

##### 13，节点的操作有哪些？

   

        添加节点：createElement() //创建一个新节点
    
                          createTextNode() //创建一个新文本节点
    
                          appendChild() //添加子元素
    
        删除节点：removeChild() //移除子元素
    
        插入节点：insertChild() 
    
        替换节点：replaceChild()
    
        查找节点：getElementById() //通过节点ID
    
                 getElementByTagName() //通过节点标签名
    
                 getElementByClassName() //通过节点class名

##### 14， 解释jsonp的原理，为什么不是真正的Ajax？



    	JSONP(JSON with Padding)是JSON的一种"使用模式"，可用于解决主流浏览器的跨域数据访问的问题。原理：动态创建script标签，回调函数。
    	(1)、ajax和jsonp这两种技术在调用方式上"看起来"很像，目的也一样，都是请求一个url，然后把服务器返回的数据进行处理，因此jquery和ext等框架都把jsonp作为ajax的一种形式进行了封装；
    
        (2)、但ajax和jsonp其实本质上是不同的东西。ajax的核心是通过XmlHttpRequest获取非本页内容，而jsonp的核心则是动态添加<script>标签来调用服务器提供的js脚本。
    
        (3)、所以说，其实ajax与jsonp的区别不在于是否跨域，ajax通过服务端代理一样可以实现跨域，jsonp本身也不排斥同域的数据的获取。
    
        (4)、还有就是，jsonp是一种方式或者说非强制协议，如同ajax一样，它也不一定非要json格式来传递数据，如果你愿意，字符换也行，只不过这样不利于jsonp提供公开服务

##### 15，document onload 和document ready的区别？

​        document.onload 是在结构和样式,外部js以及图片加载完才执行js
​        document.ready是dom树创建完成就执行的方法，原生种没有这个方法，jquery中有         $().ready(function)

##### 16，“==”和“===”的区别？

​        答案： “==”是进行类型转换后进行对比；“===”是严格相等，不会进行类型转换，值的类型，大小都要严格相等。

##### 17，函数声明和函数表达式的区别？

​        答案：是否有**函数变量提升**，前者有，后者无。

##### 18， JavaScript的事件流程模型有哪些？

        “事件冒泡”：事件开始由具体的元素接受，然后逐层向上传递；
    
        “事件捕捉”：事件由父级元素接受然后逐层向下传递，一直到具体元素；
    
        “DOM事件流”：事件捕捉阶段  目标阶段  事件冒泡阶段；

##### 19，null和underfined的区别？

​        答案：null是表示变量为空，转为数值时为0；underfined表示变量未赋值，转为数值时为NaN

##### 20，new操作符具体干了什么？

(1)创建一个新对象；

(2)把创建的新对象的proto指向构造函数Func的原型对象 prototype，建立了 obj 对象的原型链；

(3)定义this指向，指向这个新对象；

(4)返回这个新对象。

##### 21，js延迟加载的方法有哪些？

​        答案：js按需加载；ES6的async方法；动态创建节点；

##### 22，获取a,b,c,三个数中的最大值和最小值？

​        答案：最大值：Math.max(a,b,c)；最小值：Math.min(a,b,c)

##### 23，form表单可以设置readonly和disable,请问两者有什么区别？

​        答案：readonly不可编辑，但可以选择和复制；值可以传递到后台；disabled不能编辑，不能复制，不能选择；值不可以传递到后台。

##### 24，数据类型有哪些？

​        答案：

        基本数据类型：string，number，Boolean，null，underfined，symbol；
    
        引用数据类型：object（function，Array，RegExp等等）

##### 25， Ajax的原理

```javascript

   1，创建对象
   var xhr = new XMLHttpRequest();
   
   2,打开请求
   xhr.open('GET','url',true);
   
   3,发送请求
   xhr.send();
   
   4,接收响应
   xhr.onreadystatechange =function(){}
   
   (1)当readystate值从一个值变为另一个值时，都会触发readystatechange事件。
   
   (2)当readystate==4时，表示已经接收到全部响应数据。
   
   (3)当status ==200时，表示服务器成功返回页面和数据。
   
   (4)如果(2)和(3)内容同时满足，则可以通过xhr.responseText，获得服务器返回的内容。

```



##### 26， js中的3中弹窗警告？

​        答案：aleat,confirm,prompt

##### 27，浏览器的滚动距离？

#####         答案：可视区域距离页面顶部的距离

        scrollTop = document.documentElement.scrollTop || document.body.scrollTop

##### 28，节点的种类有几种，分别是什么？

        元素节点：nodeType === 1；
    
        文本节点：nodeType === 3；
    
        属性节点：nodeType === 2；

##### 29，冒泡排序算法？

```javascript
    var ary1 = [5,4,3,2,1,6];
​    var temp = 0;
​    for(let i = 0; i < ary1.length; i++){
​        for(let j = 0; j < ary1.length - 1; j++){
​            if(ary1[j] > ary1[j+1]){
​                temp = ary1[j]
​                ary1[j] = ary1[j+1]
​                ary1[j+1] = temp
​            }
​        }
​    }
​    console.log("结果：",ary1)
```



##### 30，js实现一个方法获取URL参数？

​        答案：

    function getUrlSearch(urlData){
        var url = urlData || window.location.href;
        if(url.indexOf("?") < 0){
            return undefined
        }
        var allParamsAry = url.split("?")[1].split("&");
        var result = [];
        if(allParamsAry.length == 0){
            return undefined
        }
        for(let i=0; i<allParamsAry.length; i++){
            let temp = allParamsAry[i].split("=")[1];
            result.push(temp)
        }
        console.log(result)
    }

##### 31，请用js计算1-10000中0出现的次数？

    function getZeroNum(start,end){
        start = start || 1;
        end = end || 2;
        let resultAry = [];
        for(let i=start;i<end+1;i++){
            let temp = i.toString();
            if(temp.indexOf("0") != -1){
                for(let j=0; j<temp.length;j++){
                    if(temp[j] == "0"){
                        resultAry.push(temp[j])
                    }
                }
            }
        }
        let result = resultAry.length;
        console.log(result)
    }

##### 32，判断一个字符串中出现次数最多的字符，统计出现的次数？

    let str = "asdfssaaasasasasaa";
    function findMax(data){
        data = data || ""
        let obj = {};
        if(data.length == 0){
            return undefined
        }else{
            for(let i=0; i<data.length; i++){
                let key = data[i]
                if(obj[key]){
                    obj[key]++
                }else{
                    obj[key] = 1
                }
            }
        }
        let max = 0;
        let result = "";
        for(let item in obj){
            if(max < obj[item]){
                max = obj[item]
                result = item
            }
        }
        console.log("字符串中出现次数最多的字符是"+result+"，次数是"+max)
    }

##### 33，js实现一个函数求出一个字符串的字节长度？

function bystesLength(str){
    var count=0;
     for(var i=0;i<str.length;i++){
        if(str.charCodeAt(i)>255){
             count+=2;
        }else{
            count++;
        }
    }
    return count;
}

##### 34，深拷贝？

​        答案：JavaScript 引用数据类型的浅拷贝和深拷贝_清狂无益的博客-CSDN博客[https://blog.csdn.net/weixin_39166851/article/details/118928481]

##### 35，标签语义化是什么意思？

​        答案：正确的场景用正确的标签。

##### 36，请说出三种减低页面加载时间的方法？

        （1），压缩js,css;
    
        （2），减少http请求；
    
        （3），减少DOM操作；

##### 37，什么是FOUC？如何避免？

​        答案：由于css引入使用了@import 或者存在多个style标签以及css文件在页面底部引入使得css文件加载在html之后导致页面闪烁、花屏
用link加载css文件，放在head标签里面 

##### 38， js的垃圾回收机制有哪些？v8使用哪一种？

​        答案：js有两种垃圾回收机制，标记清除和引用计数；

        v8使用自动垃圾回收算法

##### 39，如何判断页面中多图片加载完全？

​        答案：document onload和jQuery的$.ready(function)方法；

##### 40，跨域是什么？如何解决跨域问题？

​        答案：只要协议、域名、端口有不同，则视为不同的域，请求数据时便是跨域。

        1.跨域资源共享（CORS） 
    
        2.通过jsonp跨域
    
        3.后台开放请求端口为“*” 

##### 41，Map和Set的区别是什么？Map和Object的区别是什么？

        Map和Set都是ES6新提供的数据结构，其中Map类似于对象，是键值对的集合，他打破了以前“键”只能是字符串的限制，任何类型的值都可以作为键；Set类似于数组，但是数据内部的元素都是唯一的。
        Mapy有get/set/has/delete
        Map和Object的区别：Map的“键”可以是任何类型的值，比如是个Object；Object的“键”只能是字符串。

```javascript
//初始化Map需要一个二维数组，或者直接初始化一个空Map。Map具有以下方法：
var m = new Map(); // 空Map
m.set('Adam', 67); // 添加新的key-value
m.set('Bob', 59);
m.has('Adam'); // 是否存在key 'Adam': true
m.get('Adam'); // 67
m.delete('Adam'); // 删除key 'Adam'
m.get('Adam'); // undefined

//由于一个key只能对应一个value，所以，多次对一个key放入value，后面的值会把前面的值冲掉：
var m = new Map();
m.set('Adam', 67);
m.set('Adam', 88);
m.get('Adam'); // 88

//要创建一个Set，需要提供一个Array作为输入，或者直接创建一个空Set：
var s1 = new Set(); // 空Set
var s2 = new Set([1, 2, 3]); // 含1, 2, 3

//通过add(key)方法可以添加元素到Set中，可以重复添加，但不会有效果：
s.add(4);
s; // Set {1, 2, 3, 4}
s.add(4);
s; // 仍然是 Set {1, 2, 3, 4}
//通过delete(key)方法可以删除元素：
var s = new Set([1, 2, 3]);
s; // Set {1, 2, 3}
s.delete(3);
s; // Set {1, 2}
```

Object和Map非常相似，两者都可以完成键-值对的设置、获取value、删除key并且根据key获取对应的value。因此，在过去Object经常被当作Map来使用。但是，Object和Map的不同之处会让Map在特定条件下成为一个更佳的选择。

|           | Map                                                          | Object                                                       |
| --------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 附加的Key | **Map**没有默认的key值                                       | Object具有原型对象，所以它包含默认的key值，并且使用不当时会和自定义的key值产生冲突（在ES5中可以通过`Object.create(null)`来设置去掉默认的key值，但这种解决方法并不常用） |
| Key的种类 | Map的key值可以是任何类型的值，包括函数、Object和任意基础数据类型 | Object的key值只能是String或Symbol                            |
| Key的顺序 | Map中的key值排序简单直接，一个Map对象迭代键值对、Key、Value的顺序和插入时的顺序相同 | 一般对象的键值是有顺序的，但这并不绝对，有时对象的键值排序会变得很复杂，所以最好不要依赖于插入的顺序。 |
| 大小      | Map的大小可以轻松通过size属性来获得                          | Object的大小必须通过自行获取                                 |
| 迭代      | Map是可迭代对象，可以轻松完成迭代                            | Object没有实现迭代协议，所以无法被for...of直接迭代（但可以自行实现迭代协议，或者使用`Object.keys()`或`Object.entries()`来迭代对象的键值和实体，for...in也可以迭代Object的可枚举属性） |
| 性能      | 频繁增减键值对时表现会更好                                   | 频繁增减键值对时表现较差                                     |

##### 42，数组的filter，every，flat的作用？

        filter() : 创建一个新数组，新数组中的元素是由过滤指定数组中符合某条件的元素组成。
    
        every():用于检测目标数组中的所有元素是否满足某项条件，如果都满足则返回true，只要有一个不满足，则返回false；
    
        flat() :  返回一个新数组，新数据中的元素是将目标数组（多层数组）拉低一层，flat可以传参数，表示拉低几层，默认参数为1；

##### 43，es6有哪些新特性？

http://www.alloyteam.com/2016/03/es6-front-end-developers-will-have-to-know-the-top-ten-properties/

        （1）默认参数；var link = function(height = 50){}
    
        （2） 模板对象
    	var name = `Your name is ${first} ${last}. `;
    	var url = `http://localhost:3000/api/messages/${id}`;
    
    	（多行字符串）`sadoj`
        （3）解构赋值；
    var { house, mouse} = $('body').data(); // we'll get house and mouse variables
    var {jsonMiddleware} = require('body-parser');
    var {username, password} = req.body;
    var [col1, col2]  = $('.column'),
    [line1, line2, line3, , line5] = file.split('n');
        （4）class类的概念
    
        （5）各类型数据的扩展
    
        （6）箭头函数！！！！
    
        （7）promise!!!!!
    
        （8）模块的概念
        import {port, getAccounts} from 'module';
    
        （9）let，const，symbol创建变量，块作用域的概念
    
        （10）Map和Set新数据结构

##### 44，说一下对promise的了解？

```
promise是es6提出的一种解决异步编程的方法，相对于原来使用回调函数的方法，它具有更合理，更强大，更简洁等优点。

promise是一个构造函数，自创建开始就会执行。含有且只能含有三种状态：pending执行中，fulfilled执行成功，reject执行失败。状态之间的转化也只能是单向的：pending到fulfilled、pending到reject；

promise有一个方法.then，用于接受promise处理后的结果，含有两个参数，relative和reject，分别接受成功和失败的结果，他们是内置的回调函数，返回一个promise.then方法可以链式调用。
```

##### 45，promise的all和race有什么区别？

        Promise.all()方法用于将多个Promise实例包装成一个新的Promise实例。新的promise对象的状态由内部的多个promise共同决定，只有内部promise都是fulfilled时新的promise实例才是fulfilled，其他情况都是reject状态；
    
        Promise.race()方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。多个promise之中有一个实例率先改变状态，新的promise实例的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给新的promise实例的回调函数。

##### 46，箭头函数和普通函数的区别？



    箭头函数与普通函数相比更简洁，用一个箭头代替了函数function；
    箭头函数没有自己的this；
    箭头函数不能作为构造函数，所以不能用new；

##### 47，let、var和const的区别？如果希望const定义的对象的属性也不能被修改该怎么做？

        var：定义一个全局变量，可以仅仅声明变量不赋值，存在变量提升
    
        let：定义一个局部变量，可以仅仅声明变量不赋值，不存在变量提升
    
        const：定义一个局部常量，定义的时候必须赋值，不存在变量提升。如果const定义的数据类型是基本类型的变量，后期不可以更改值。
    
        用数据劫持，Object.defineProperty和Proxy都可以实现const定义的对象的属性也不能被修改。
        const a = {b:3}
    
    	Object.defineProperty(a,'b',{
    	    writable:false,
    	})
    
    	a.b = 9
    
    	console.log(a) // {b:3}

##### 48，堆和栈的区别？

​        答案：堆和栈都是操作系统的内存，堆是动态分配内存空间，内存大小不一样，也不会自动释放，栈是自动分配内存空间，大小固定，会自动释放；js声明的变量，基本数据类型的分配到栈内存，复杂数据类型在堆内存。

##### 49，instanceof的实现原理？

​        答案：判断右边变量的原型的prototype在左边变量的原型链上。

##### 50，数据类型有哪些？如何判断一个  变量是不是数组？

        基本数据类型：string，number，Boolean，null，underfined，symbol
    
        引用数据类型：object（function，array，正则等等）
    
        如何判断一个变量是不是数组：
    
        （1），ary.constructor == Array
    
        （2），ary instanceof Array
    
        （3），Object.prototype.toString.call(ary) == [object Array]

##### 51，jQuery的链式调用的原理是什么？

​        答案：每个方法都return this。