import React, { Component } from 'react'
import './index.css'
import '../App.css'
export default class Item extends Component {

    //标识鼠标移入、移出
    state = {mouse: false}

    //鼠标移入、移除的回调
    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }

    //勾选、取消勾选某一个todo 的回调
    handleChecked =  (id)=>{
        return  (event)=>{
            this.props.updateTodo(id, event.target.checked)
        }
    }

    //通过id删除一个todo
    handleDelete = (id) =>{
        this.props.deleteTodo(id)
    }

    render() {
        const {id, name, done} = this.props
        const {mouse} = this.state
        return (
                <li style={{backgroundColor: mouse ? "#ddd":"white"}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                    <label>
                        <input type="checkbox" checked={done} onChange={this.handleChecked(id)}/>
                        <span>{name}</span>
                    </label>
                    <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{display:mouse? "block" : "none"}}>删除</button>
                </li>
        )
    }
}
                                                                                  