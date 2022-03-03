import React, { Component } from 'react'
import './index.css'
import '../App.css'
export default class Item extends Component {
    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }

    state = {mouse: false}
    handleChecked =  (id)=>{
        return  (event)=>{
            this.props.updateTodo(id, event.target.done)
        }
    }

    render() {
        const {id, name, done} = this.props
        const {mouse} = this.state
        return (
                <li style={{backgroundColor: mouse ? "#ddd":"white"}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                    <label>
                        <input type="checkbox" defaultChecked={done} onChange={this.handleChecked(id)}/>
                        <span>{name}</span>
                    </label>
                    <button className="btn btn-danger" style={{display:mouse? "block" : "none"}}>删除</button>
                </li>
        )
    }
}
                                                                                  