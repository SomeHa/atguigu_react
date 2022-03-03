import React, { Component } from 'react'

import './index.css'
import '../App.css'
export default class Footer extends Component {


    //全部勾选和全部不勾选处理
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }

    clearDoneTodos = ()=>{
        this.props.clearDoneTodo()
    }

    render() {
        //解构赋值获取todos
        const {todos} = this.props

        const doneCount = todos.reduce((pre, todo)=> pre + (todo.done ? 1 : 0),0)

        const totalCount = todos.length

        return (
                <div className="todo-footer">
                        <label>
                        <input type="checkbox" onChange={this.handleCheckAll} checked={totalCount===doneCount && totalCount!==0 ? true : false}/>
                        </label>
                        <span>
                        <span>已完成{doneCount}</span> / 全部{totalCount}
                        </span>
                        <button onClick={this.clearDoneTodos} className="btn btn-danger">清除已完成任务</button>
                </div>
        )
    }
}
