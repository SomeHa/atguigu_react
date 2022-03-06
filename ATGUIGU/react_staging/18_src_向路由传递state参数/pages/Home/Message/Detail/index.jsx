import React, { Component } from 'react'

export default class Detail extends Component {
  state = {
    mes: [
      { id: '01', content: "我爱你，中国" },
      { id: '02', content: "我爱你" },
      { id: '03', content: "我爱国" },
    ]
  }
  render() {
    console.log(this.props)
    //接收params参数
    // const { id, name } = this.props.match.params
    //接收state参数
    console.log()
    const { id, name } = this.props.location.state || {}
    const mess = this.state.mes.find((obj) => { return obj.id === id }) || {}
    return (
      <div>
        <li>Id: {id}</li>
        <li>Name: {name}</li>
        <li>Content: {mess.content}</li>
      </div>
    )
  }
}
