import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

    search = () => {
        //获取用户的输入(连续的解构赋值+重命名)
        const {keyWordElement:{value: keyWord}} = this
        //发送请求前通知App更新状态  
        this.props.updateAppState({isFirst: false, isLoading: true});
        axios.get(`/api1/search/users?q=${keyWord}`).then(
            response => (
              //搜索成功后，返回成功的state对象
              this.props.updateAppState({isLoading: false, users: response.data.items})
            ),
            error => (
              this.props.updateAppState({isLoading: false, err:error.message})
            )
        )
    }

  render() {
    return (
        <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
            <input  ref={c => this.keyWordElement = c} type="text"
             placeholder="enter the name you search"/>&nbsp;
             <button onClick={this.search}>Search</button>
        </div>
        </section>
    )
  }
}
