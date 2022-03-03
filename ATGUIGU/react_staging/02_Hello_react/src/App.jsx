//创建外壳组件App
//Component和React是分别暴露的方式
import React, {Component} from 'react'
import Hello from './Hello/Hello'

//创建并暴露App组件
export default class App extends Component{
    render() {
        return (
            <div>
                <Hello />
            </div>
        )
    }
}

