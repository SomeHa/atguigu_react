import React, { Component } from 'react'
import store from '../../redux/store'
import {createDecrementAction,createIncrementAction} from '../../redux/count_action'

export default class Count extends Component {
    state = {}

    // componentDidMount() {
    //     //检测redux状态变化，只要变化，就调用render
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }

    addNumber = ()=>{
        const {value} = this.selectNumber
        store.dispatch(createIncrementAction(value))
    }

    delNumber =()=>{
        const {value} = this.selectNumber
        store.dispatch(createDecrementAction(value))
    }

    addNumberIfOdd = () => {
        const {value} = this.selectNumber
        const count = store.getState()
        if(count %2 !== 0)
        store.dispatch(createIncrementAction(value))
    }

    addNumberAsync = () => {
        const {value} = this.selectNumber
        setTimeout(()=>{
            store.dispatch(createIncrementAction(value))
        },500)
            
    }

  render() {
    return (
      <div>
          <h2>当前求和为：{store.getState()}</h2>
          <hr/>
          <select ref={c => this.selectNumber = c}>
            <option value="1">1</option>  
            <option value="2">2</option>  
            <option value="3">3</option>  
          </select>
          <button onClick={this.addNumber}>+</button>
          <button onClick={this.delNumber}>-</button>
          <button onClick={this.addNumberIfOdd}>当前求和为奇数再加</button>
          <button onClick={this.addNumberAsync}>异步加</button>
      </div>
    )
  }
}
