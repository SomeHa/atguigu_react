import React,{ FC,ReactElement, useCallback, useEffect, useReducer, useState } from 'react'
import TdList from './List'
import TdInput from './Input'
import { ACTION_TYPE, IState, ITodo } from './typings';
import { todoReducer } from './reducer';

// const initialState:IState = {
//     todoList: []
// }

function init(initTodoList:ITodo []):IState{
    return {todoList: initTodoList}
}

const TodoList: FC = ():ReactElement => {

   // const [todoList, setTodoList] = useState<ITodo[]>([]);

    //useReducer
    const [state, dispatch] = useReducer(todoReducer,[],init);

  
    useEffect(() => {
        const todolist = JSON.parse(localStorage.getItem('todolist')|| '[]');
        dispatch(
            {
                type:ACTION_TYPE.INITIAL_TODOLIST,
                payload:todolist
            }
        )
    }, [])
    
    useEffect(() => {
        localStorage.setItem('todolist',JSON.stringify(state.todoList))
    }, [state.todoList])

    const addTodo = useCallback(
        (todo:ITodo) => {
            //setTodoList(todoList=> [...todoList,todo])
            dispatch({
                type:ACTION_TYPE.ADD_TODO,
                payload: todo
            })
        },
        []
    )

    const updateTodo = useCallback(
        (id:number):void => {
            dispatch(
                {
                    type:ACTION_TYPE.UPDATE_TODO,
                    payload:id
                }
            )
        },
        [],
    )

    const removeTodo = useCallback(
        (id:number):void => {
            dispatch(
                {
                    type:ACTION_TYPE.REMOVE_TODO,
                    payload:id
                }
            )
        },
        [],
    )



    return (
        <div className='todo-list'>
            <TdInput addTodo={addTodo} todoList={state.todoList}/>
            <TdList todoList={state.todoList} updateTodo={updateTodo} removeTodo={removeTodo}/>
        </div>
    )
}

export default TodoList;