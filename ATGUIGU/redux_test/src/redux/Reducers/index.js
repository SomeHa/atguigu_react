//引入为Count组件服务的reducer
import count from './count'
import person from './person'
import {combineReducers} from 'redux'

export default combineReducers({
	count,
	person
})