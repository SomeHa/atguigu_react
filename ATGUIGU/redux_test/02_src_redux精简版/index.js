import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'


ReactDOM.render(<App/>, document.getElementById("root"))



//检测redux状态变化，只要变化，就调用render
store.subscribe(()=>{
    ReactDOM.render(<App/>, document.getElementById("root"))//不用担心大面积重绘，react的Diff算法兜底！！
})

