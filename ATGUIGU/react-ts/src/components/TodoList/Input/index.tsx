import React, { FC, ReactElement, useRef } from 'react';
import { ITodo } from '../typings';

interface IProps{
    addTodo:(todo:ITodo)=>void,
    todoList:ITodo[]
}

const TdInput:FC<IProps> = (
{
    addTodo,
    todoList
}
):ReactElement=>{

    const inputRef = useRef<HTMLInputElement>(null);

    

    const addItem = ():void =>{
        const val = inputRef.current!.value.trim();
        if(val.length){
            const isExsit =  todoList.find( todo =>todo.content === val);
            if(isExsit){
                alert("已存在");
                return
            }
            addTodo({
                id: new Date().getTime(),
                content: val,
                completed:false
            })

            inputRef.current!.value=""
        }
    }


    return (
        <div className="todo-input">
            <input placeholder="请输入待办事项" ref={inputRef}></input>
            <button onClick={addItem} >增加</button>
        </div>
    )
}
/**
 * {
 *  id: new Date().getTime(),
 *  content: 
 *  completed: boolean
 * }
 */

export default TdInput;