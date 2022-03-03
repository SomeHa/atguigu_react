import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'

import './index.css'
export default class Header extends Component {

    //对接收的props进行：类型、必要性的限制
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    } 

    //键盘事件的回调
    handleKeyUp = (event) =>  {
        //解构赋值keyCode, target
        const  {keyCode, target}  = event
        //判断输入的是否是Enter
        if(keyCode  !== 13) return
        //非空判断
        if(target.value.trim() === ""){
            alert("输入不能为空")
            return
        }
        console.log(target.value,keyCode)
        this.props.addTodo({id:nanoid(),name: target.value,done: false})
        //添加完成后清空target
        target.value = ""
    }
    render() {
        return (
            <div className="todo-header">
                <input   onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
