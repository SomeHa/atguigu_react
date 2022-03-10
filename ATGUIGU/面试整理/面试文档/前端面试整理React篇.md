前端面试整理React篇

#### 1、setState是同步的还是异步的

在react中，原生js监听事件中的setState是同步的，如addEventListener、setTimeout等
而在react控制的事件处理函数中，setState是异步的，如onClick等

##### setState有两种设置方式，

1. setState传入对象，直接修改state中的数据
2. setState中传入两个函数，第一个函数有两个参数，第一个参数是当前的state，第二个参数是当前的props，返回的是要修改的state对象，类似于第一种设置方式；第二个函数是更新后的回调函数。

##### react是如何控制同步还是异步？

react中是根据isBatchingUpdates来设置同步or异步。而isBatchingUpdates默认为false，即默认同步更新。其中有batchedUpdates函数，用来设置isBatchingUpdates

##### 多次连续设置会合并处理

```js
state:{foo : 10}
let foo1 = this.state.foo
this.setState({foo: foo1 + 1})
this.setState({foo: foo1 + 1})
this.setState({foo: foo1 + 1})
// 在最后foo依然为11 因为所有都合并到一次更新，state中的foo只改变了一次
```

##### 函数传参解决合并问题

```js
state:{foo : 10}
function increment(state, prop){
   return {
      foo: state.foo + 1
   }
}
this.setState(increment)
this.setState(increment)
this.setState{increment)
// foo为13
```



#### 2、fiber的实现原理



#### 3、fiber的时间调度是通过哪两个原生api实现的



#### 4、React合成事件是如何实现的



#### 5、使用Redux需要注意的点

**一**、在reducer中，**返回的state必须是全新的对象**，否则，redux不会执行listening方法，因为redux会认为state没有更新过，没必要重新渲染view。

出现问题的例子：

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
const user=(state={name='',age=0},action)=>{
     switch(action.type){
            case 'CHANGE_NAME':  
                state.name='zhangsan';//在原object中修改name
                return state;  
            default:
             return state;  
    }      
}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

是的，就是这个例子，就算旧state的name值修改了，但是redux不会认为state作出改变的，我没有去看源代码（菜鸟，要研究比较久），但猜测是，redux给每个state附加key值了，所以，是通过判断key来决定要不要重新渲染view的。



**二**、redux的combineReducers方法，假设有reducer1（signUp）和reducer2（signIn），两个reducer都有action type（'CHANGE_USERNAME'）,你会发现在其中一个view中修改username，另外一个username也会跟着改变，

也就是说，**就算在不同的reducer里，最好也不要有相同的action type，否则会有脏数据产生。**！！亲身经历

#### 6、如果Redux没有返回新的数据会怎么样

检查是返回的state是否是全新的对象，导致未触发 渲染

#### 7、Redux是如何派发数据的？connect原理？？



#### 8、什么场景会触发重新渲染



#### 9、setState返回一样的引用，render会执行吗？



#### 10、useEffect的使用方法？useEffect的return会在什么时候执行 ？useEffect的原理是什么？



#### 11、useEffect、useMemo、useCallback是如何做依赖收集的





#### 12、React Hooks有什么优势和劣势

react规定我们必须把hooks写在函数的最外层，不能写在ifelse等条件语句当中，来确保hooks的执行顺序一致

优势，hooks可以 反复多次使用，并且相互独立。

useEffect相当于多个生命周期函数钩子的集合体(componentDidMount,componentDidUpdate,componentWillUnmount)

因为hooks可以反复多次使用，我们可以给副作用一个单独的useEffect钩子，这样这些副作用不用一股脑堆在生命周期钩子里，代码逻辑更清晰。

useEffect解绑的模式与componentWillUnmount不一样，componentWillUnmount只会在组件被销毁前执行一次而已，而useEffect的函数，每次组件渲染后都会执行一遍，包括副作用函数返回的这个清理函数也会重新执行一遍。

每次重新渲染都执行一遍这些副作用函数，显然是不经济的，为了跳过一些不必要的计算，我们只需要给useEffect传第二个参数即可。用第二个参数来告诉react只有当这个参数的值发生改变时，才执行我们传的副作用函数。当 我们第二个参数传入一个空数组[]，其实就相当于只在首次渲染的时候执行。

#### 13、context的实现原理是什么？如何做依赖收集的？



#### 14、React的生命周期



#### 15、PureComponent和Component的区别



#### 16、如果在map循环中没有设置key值，那么从ABCD四个节点变成BCD三个节点，会以什么方式变化？



#### 17、React dom绑定事件和原生实际有什么区别



#### 18、Hooks的实现原理







#### 提高应用性能

我们可以通过多种方式提高应用性能，以下这些比较重要：

- 适当地使用`shouldComponentUpdate`生命周期方法。 它避免了子组件的不必要的渲染。 如果树中有100个组件，则不重新渲染整个组件树来提高应用程序性能。
- 使用`create-react-app`来构建项目，这会创建整个项目结构，并进行大量优化。
- 不可变性是提高性能的关键。不要对数据进行修改，而是始终在现有集合的基础上创建新的集合，以保持尽可能少的复制，从而提高性能。
- 在显示列表或表格时始终使用 `Keys`，这会让 React 的更新速度更快
- 代码分离是将代码插入到单独的文件中，只加载模块或部分所需的文件的技术

