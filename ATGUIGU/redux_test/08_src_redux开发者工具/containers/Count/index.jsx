import React, { Component } from 'react'
//引入action
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/Actions/count'
//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

class Count extends Component {
	state = {carName:'奔驰c63'}
	//加法
	increment = ()=>{
		const {value} = this.selectNumber
		this.props.jia(value-0)
	}
	//减法
	decrement = ()=>{
		const {value} = this.selectNumber
		this.props.jian(value-0)
	}
	//奇数再加
	incrementIfOdd = ()=>{
		const {value} = this.selectNumber
		if(this.props.count %2 !==0){
			this.props.jia(value-0)
		}
	}
	//异步加
	incrementAsync = ()=>{
		const {value} = this.selectNumber
		this.props.asyncJia(value-0,1000)
	}

	render() {
		return (
			<div>
				<h2>Count组件</h2>
				<h4>当前求和为：{this.props.count},Person有{this.props.size}个</h4>
				<select ref={c => this.selectNumber = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
				<button onClick={this.incrementAsync}>异步加</button>&nbsp;
			</div>
		)
	}
}


//使用connect()()创建并暴露一个Count的容器组件
export default connect(
	state =>({count: state.he,size:state.rens.length}),
	//mapDispatchToProps一般写法，返回一个function
	// dispatch => ({
	// 	jia:(number) => dispatch(createIncrementAction(number)),
	// 	jian:(number) => dispatch(createDecrementAction(number)),
	// 	asyncJia:(number,time) => dispatch(createIncrementAsyncAction(number,time)),
	// })

	//mapDispatchToProps优化版，返回一个对象
	{
		jia:createIncrementAction,
		jian:createDecrementAction,
		asyncJia:createIncrementAsyncAction,
	}
)(Count)

