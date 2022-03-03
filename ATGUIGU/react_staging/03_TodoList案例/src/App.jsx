import React, { Component } from 'react'
import  Header  from  './Header'
import  Footer  from  './Footer'
import  List  from  './List'
// import PropTypes from 'prop-types'

import './App.css'


export default class App extends Component {

    //对接收的props进行：类型、必要性的限制
    // static propTypes = {
    //     todos:PropTypes.array.isRequired,
    //     updateTodo:PropTypes.func.isRequired,
    // } 

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

    //updateTodo用于更新一个todo对象
    updateTodo = (id,done)=>{
            const {todos} = this.state
            //处理数据
            const newTodos = todos.map((todo)=>{             
                if(todo.id===id) return {...todo,done}
                else return todo
            })
            this.setState({todos:newTodos})
        
    }

    //deleteTodo用于删除一个todo对象
    deleteTodo = (id) => {
        const {todos} = this.state
        //处理数据
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id !== id
        }
        )
        //更新状态
        this.setState({todos: newTodos})
    }

    //checkAllTodo用于处理全选和全不选得情况
    checkAllTodo = (done) => {
        const {todos} = this.state
        const newTodos = todos.map((todoObj)=> {return {...todoObj,done:done}})
        this.setState({todos: newTodos})
    }

    //清除已完成的todo
    clearDoneTodo = () => {
        const {todos} = this.state
        //处理数据
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.done === false
        }
        )
        //更新状态
        this.setState({todos: newTodos})
    }

    render() {
        const {todos} = this.state
        return (
            <div>
                 <div className="todo-container">
                    <div className="todo-wrap">
                        <Header  addTodo={this.addTodo}/>
                        <List todos={todos}  updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                        <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearDoneTodo={this.clearDoneTodo}/>
                    </div>
                </div>
            </div>
        )
    }
}
