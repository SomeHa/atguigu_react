import React, { Component } from 'react'
import  Header  from  './Header'
import  Footer  from  './Footer'
import  List  from  './List'

import './App.css'


export default class App extends Component {

    state = {todos:[
        {id:"001",name:"吃饭",done:true},
        {id:"002",name:"睡觉",done:true},
        {id:"003",name:"摸鱼",done:false},
        {id:"004",name:"打游戏",done:false},
    ]
    }

    //addTodo用于增加一个TODO对象
    addTodo  = (todo)=>{
        const {todos} = this.state
        const newTodos = [todo,...todos]
        console.log('App', todo)

        //更新状态
        this.setState({todos:newTodos})
        
    }

    updateTodo = (id,done)=>{
        return ()=>{
            const {todos} = this.state
            todos.map((todo)=>{
                console.log(todos.toString())
                if(todo.id===id) todo={...todo,done}
                else return todo
            })
            
        }
    }

    render() {
        const {todos} = this.state
        return (
            <div>
                 <div className="todo-container">
                    <div className="todo-wrap">
                        <Header  addTodo={this.addTodo}/>
                        <List todos={todos}  updateTodo={this.updateTodo}/>
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}
