import React, { FC, ReactElement } from 'react';
import { ITodo } from '../typings';
import TdItem from './item';

interface IProps{
    todoList:ITodo[],
    updateTodo:(id:number)=>void,
    removeTodo:(id:number)=>void,
}

const TdList:FC<IProps> = (
    {
        todoList,
        updateTodo,
        removeTodo
    }
):ReactElement =>{
    return (
        <div className="td-list">
            {todoList&&todoList.map((todo:ITodo)=>{
                return <TdItem key={todo.id} todo={todo} updateTodo={updateTodo}  removeTodo={removeTodo}/>
            })}

        </div>
    )
}

export default TdList;