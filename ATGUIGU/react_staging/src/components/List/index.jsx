import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'


export default class List extends Component {

  //初始化状态,users为数组
  state = {
    users: [],
    isFirst: true,//第一次登录页面？
    isLoading: false,//加载中
    err: '' //错误信息
  }

  componentDidMount() {
    PubSub.subscribe('atguigu', (msg, stateObj) => {
      this.setState(stateObj)
    })
  }

  render() {
    const { users, isFirst, isLoading, err } = this.state
    return (
      <div className="row">
        {

          isFirst ? <h2>欢迎使用，请输入搜索内容进行查询</h2> :
            isLoading ? <h2>正在搜索ing，请稍候----</h2> :
              err ? { err } :
                users.map((user) => {
                  return (
                    <div key={user.id} className="card">
                      <a href={user.html_url} rel="noreferrer" target="_blank">
                        <img src={user.avatar_url} style={{ width: '100px' }} />
                      </a>
                      <p className="card-text">{user.login}</p>
                    </div>
                  )
                })
        }
      </div>
    )
  }
}
