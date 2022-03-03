import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const {users, isFirst, isLoading, err} = this.props
    return (           
      <div className="row">
        {

          isFirst ? <h2>欢迎使用，请输入搜索内容进行查询</h2> : 
          isLoading ? <h2>正在搜索ing，请稍候----</h2>  : 
          err ? {err} :
        users.map((user) => {
          return (
          <div key={user.id} className="card">
          <a href={user.html_url}  rel="noreferrer" target="_blank">
          <img src={user.avatar_url} style={{width: '100px'}}/>
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
