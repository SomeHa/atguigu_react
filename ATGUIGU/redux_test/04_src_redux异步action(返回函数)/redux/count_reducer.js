/*
    1、该文件时用于创建一个为Count组件服务的reducer,reducer的本质就是一个函数；
    2、reducer函数会接到两个参数，分别为： preState-- 之前的状态, action--动作对象
*/
import {INCREMENT, DECREMENT} from './constant'

//初始化状态
const initValue = 0
export default function countReducer(preState=initValue, action){
    const {type, data} = action
    switch (type) {
        case INCREMENT:
            return preState + data*1
        case DECREMENT:
            return preState - data*1
        default:
            return preState
    }
}