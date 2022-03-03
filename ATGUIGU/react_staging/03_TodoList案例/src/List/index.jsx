import React, { Component } from 'react'

import Item from '../Item'

import  './index.css'


export default class List extends Component {
    
    render() {
        const {todos,deleteTodo} = this.props
        return (
                <ul className="todo-main">
                    {todos.map( item =>{
                        //return <Item key={item.id} id={item.id} value={item.name} done={item.done}/>
                        return <Item key={item.id} {...item}  updateTodo={this.props.updateTodo} deleteTodo={deleteTodo}/>
                    })}
                </ul>
        )
    }
}
