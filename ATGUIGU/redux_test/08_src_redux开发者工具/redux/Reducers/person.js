import {ADDPERSON} from '../constant'

const initPerson = [{id:'001',name:'tom', age:29}];


export default function personReducer(preState=initPerson, action){
    const {type,data} = action
    switch(type){
        case ADDPERSON:
            return [data, ...preState];
        default:
            return preState
    }
}