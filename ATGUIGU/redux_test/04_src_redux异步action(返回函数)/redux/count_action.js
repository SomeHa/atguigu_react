/*
    此文件用于返回action对象
*/
import {INCREMENT, DECREMENT} from './constant' 


//同步Action,就是指action的值为Object类型的一般对象
export const createIncrementAction = (data) => {
    return {type:INCREMENT, data}
}
export const createDecrementAction = (data) => {
    return {type:DECREMENT, data}
}


//异步Action,就是指action的值为函数
export const createIncrementAsyncAction = (data, time) =>{
    return (dispatch) => {
        setTimeout(()=>{
            dispatch(createIncrementAction(data))
        },time)
    }
}