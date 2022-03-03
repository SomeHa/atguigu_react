import React, { Component } from 'react'
import List from './components/List'
import Search from './components/Search'

export default class App extends Component {

    //初始化状态,users为数组
    state = {
        users: [],
        isFirst: true,//第一次登录页面？
        isLoading: false,//加载中
        err: '' //错误信息
    }

    saveUsers = (users) => {
        this.setState({users})
    }

    //更新状态
    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }

  render() {

    return ( 
        <div className="container">
            <Search updateAppState={this.updateAppState}/>
            <List  {...this.state}/>
        </div>
    )
  }
}
